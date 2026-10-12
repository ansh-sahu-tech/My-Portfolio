import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * ScrollReveal Component
 * Smoothly reveals content using Intersection Observer with subtle fade-up
 * and translateY transitions when entering the viewport.
 * Fully respects prefers-reduced-motion.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 20,
  duration = 0.55,
  threshold = 0.1,
  rootMargin = '0px 0px -40px 0px',
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return true;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;
    if (!('IntersectionObserver' in window)) return true;
    return false;
  });
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) return;

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isVisible, once, threshold, rootMargin]);

  const getTransform = () => {
    if (isVisible) return 'none';
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'left':
        return `translate3d(-${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(${distance}px, 0, 0)`;
      case 'none':
        return 'none';
      default:
        return `translate3d(0, ${distance}px, 0)`;
    }
  };

  const safeDelay = Math.min(delay, 0.45);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}s`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${safeDelay}s`,
        willChange: isVisible ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};

// ========================================================
// STAGGERED ANIMATION SYSTEM FOR CARDS & SKILL ITEMS
// ========================================================

interface StaggerContextValue {
  isIntersecting: boolean;
  baseDelay: number;
}

const StaggerContext = createContext<StaggerContextValue>({
  isIntersecting: false,
  baseDelay: 0.06,
});

export interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * StaggerContainer Component
 * Triggers sequential entrance of child items via Intersection Observer
 * when the container enters the viewport.
 */
export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = '',
  staggerDelay = 0.06,
  threshold = 0.1,
  rootMargin = '0px 0px -40px 0px',
  once = true,
}) => {
  const [isIntersecting, setIsIntersecting] = useState(() => {
    if (typeof window === 'undefined') return true;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;
    if (!('IntersectionObserver' in window)) return true;
    return false;
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isIntersecting) return;

    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsIntersecting(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isIntersecting, once, threshold, rootMargin]);

  return (
    <StaggerContext.Provider value={{ isIntersecting, baseDelay: staggerDelay }}>
      <div ref={containerRef} className={className}>
        {children}
      </div>
    </StaggerContext.Provider>
  );
};

export interface StaggerItemProps {
  children: React.ReactNode;
  index: number;
  className?: string;
  distance?: number;
  duration?: number;
}

/**
 * StaggerItem Component
 * Animates sequentially with a short delay based on its index
 * inside a StaggerContainer when it enters the viewport.
 */
export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  index,
  className = '',
  distance = 20,
  duration = 0.5,
}) => {
  const { isIntersecting, baseDelay } = useContext(StaggerContext);
  const delay = Math.min(index * baseDelay, 0.4);

  return (
    <div
      className={className}
      style={{
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting ? 'translate3d(0, 0, 0)' : `translate3d(0, ${distance}px, 0)`,
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}s`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}s`,
        willChange: isIntersecting ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
