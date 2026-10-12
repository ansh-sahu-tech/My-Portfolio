import React, { useEffect, useState } from 'react';

/**
 * ScrollProgress
 * A thin, subtle progress bar fixed at the top of the viewport
 * showing overall page scroll progress using requestAnimationFrame
 * and hardware-accelerated transforms.
 */
export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrameId: number | null = null;

    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollableDistance = documentHeight - windowHeight;

      if (scrollableDistance > 0) {
        const progress = Math.min(1, Math.max(0, scrollTop / scrollableDistance));
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    const handleScroll = () => {
      if (animationFrameId !== null) return;
      animationFrameId = window.requestAnimationFrame(() => {
        calculateScrollProgress();
        animationFrameId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    calculateScrollProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-transparent"
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(scrollProgress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-gradient-to-r from-[#CCD5AE] via-[#D4A373] to-[#BD8C5C] origin-left transition-transform duration-75 ease-out shadow-[0_1px_3px_rgba(212,163,115,0.35)]"
        style={{
          transform: `scaleX(${scrollProgress})`,
          willChange: 'transform',
        }}
      />
    </div>
  );
};

export default ScrollProgress;
