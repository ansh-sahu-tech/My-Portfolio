const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'dist', 'index.html');
const content = fs.readFileSync(htmlPath, 'utf8');

console.log('--- SEO & METADATA AUDIT ---');

// 1. Check title and description
const titleMatch = content.match(/<title>(.*?)<\/title>/);
console.log('Title:', titleMatch ? titleMatch[1] : 'MISSING');

const descMatch = content.match(/<meta name="description" content="(.*?)"/);
console.log('Description:', descMatch ? descMatch[1] : 'MISSING');

const canonicalMatch = content.match(/<link rel="canonical" href="(.*?)"/);
console.log('Canonical:', canonicalMatch ? canonicalMatch[1] : 'MISSING');

const gscMatch = content.match(/<meta name="google-site-verification" content="(.*?)"/);
console.log('Google Verification Tag:', gscMatch ? gscMatch[1] : 'MISSING');

// 2. Check Favicon declarations
const iconMatches = [...content.matchAll(/<link rel="(icon|apple-touch-icon|manifest)"[^>]*href="(.*?)"[^>]*>/g)];
console.log('\nFavicon & Icon Link Tags Found (' + iconMatches.length + '):');
iconMatches.forEach((m) => console.log(' - ' + m[0]));

// 3. Check JSON-LD
const jsonLdMatch = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (jsonLdMatch) {
  try {
    const jsonLd = JSON.parse(jsonLdMatch[1]);
    console.log('\nJSON-LD Validation: VALID JSON!');
    console.log('Context:', jsonLd['@context']);
    const graph = jsonLd['@graph'] || [];
    console.log(`Graph entities (${graph.length}):`);
    graph.forEach((e) => {
      console.log(` - Type: ${e['@type']}, Name: ${e.name}, URL: ${e.url}`);
      if (e.sameAs) console.log(`   sameAs (${e.sameAs.length}):`, e.sameAs.join(', '));
      if (e.jobTitle) console.log(`   jobTitle:`, e.jobTitle.join(', '));
    });
  } catch (err) {
    console.error('JSON-LD Validation: FAILED JSON PARSING!', err);
    process.exit(1);
  }
} else {
  console.error('JSON-LD Validation: NOT FOUND IN HTML!');
  process.exit(1);
}

// 4. Check static files in dist
const distFiles = ['favicon.ico', 'favicon-48x48.png', 'favicon.svg', 'robots.txt', 'sitemap.xml', 'site.webmanifest'];
console.log('\nStatic SEO Files in dist:');
distFiles.forEach((file) => {
  const filePath = path.join(__dirname, '..', 'dist', file);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    console.log(` - ${file}: EXISTS (${stats.size} bytes)`);
  } else {
    console.error(` - ${file}: MISSING!`);
    process.exit(1);
  }
});

console.log('\n--- AUDIT COMPLETE: ALL CHECKS PASSED ---');

