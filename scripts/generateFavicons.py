"""
Script to generate production-ready favicons from the existing favicon.svg geometry.
Ensures exact match with existing SVG design:
- Background: #2563eb (rgb: 37, 99, 235), rounded rectangle with rx=22%
- Letter 'A': #ffffff (rgb: 255, 255, 255)
- Hole: #2563eb (rgb: 37, 99, 235)
Generates:
- public/favicon.ico (multi-size: 16x16, 32x32, 48x48)
- public/favicon-48x48.png (48x48 - Google Search favicon requirement)
- public/favicon-96x96.png (96x96)
- public/favicon.png (512x512)
- public/icon-192.png (192x192)
- public/icon-512.png (512x512)
- public/apple-touch-icon.png (180x180)
"""

import os
from PIL import Image, ImageDraw

PUBLIC_DIR = os.path.join(os.path.dirname(__file__), '..', 'public')

def render_icon(size: int) -> Image.Image:
    # Render at 4x scale for super-sampled anti-aliasing
    scale = 4
    w = size * scale
    img = Image.new('RGBA', (w, w), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # 100x100 SVG coordinate space scaled to w x w
    s = w / 100.0
    
    # Rounded rect with rx=22
    radius = 22.0 * s
    draw.rounded_rectangle([0, 0, w, w], radius=radius, fill=(37, 99, 235, 255))
    
    # Letter 'A' outer polygon:
    # M50 22L76 78H62.5L56.5 64H43.5L37.5 78H24L50 22Z
    outer_poly = [
        (50.0 * s, 22.0 * s),
        (76.0 * s, 78.0 * s),
        (62.5 * s, 78.0 * s),
        (56.5 * s, 64.0 * s),
        (43.5 * s, 64.0 * s),
        (37.5 * s, 78.0 * s),
        (24.0 * s, 78.0 * s),
    ]
    draw.polygon(outer_poly, fill=(255, 255, 255, 255))
    
    # Letter 'A' inner hole:
    # M50 38.5L46.5 54H53.5L50 38.5Z
    inner_poly = [
        (50.0 * s, 38.5 * s),
        (46.5 * s, 54.0 * s),
        (53.5 * s, 54.0 * s),
    ]
    draw.polygon(inner_poly, fill=(37, 99, 235, 255))
    
    return img.resize((size, size), Image.Resampling.LANCZOS)

def main():
    os.makedirs(PUBLIC_DIR, exist_ok=True)
    
    sizes = {
        'favicon-48x48.png': 48,
        'favicon-96x96.png': 96,
        'favicon.png': 512,
        'icon-192.png': 192,
        'icon-512.png': 512,
        'apple-touch-icon.png': 180,
    }
    
    rendered_images = {}
    for filename, size in sizes.items():
        img = render_icon(size)
        path = os.path.join(PUBLIC_DIR, filename)
        img.save(path, format='PNG', optimize=True)
        rendered_images[size] = img
        print(f"Generated {filename} ({size}x{size})")
    
    # Generate multi-resolution .ico containing 16x16, 32x32, 48x48
    ico_img_16 = render_icon(16)
    ico_img_32 = render_icon(32)
    ico_img_48 = rendered_images[48]
    
    ico_path = os.path.join(PUBLIC_DIR, 'favicon.ico')
    ico_img_48.save(
        ico_path,
        format='ICO',
        sizes=[(16, 16), (32, 32), (48, 48)]
    )
    print("Generated favicon.ico (containing 16x16, 32x32, 48x48)")

if __name__ == '__main__':
    main()

