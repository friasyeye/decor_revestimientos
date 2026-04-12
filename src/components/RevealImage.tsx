import React, { useEffect, useRef } from 'react';
import { useRevealElement } from '../hooks/useReveal';

interface RevealImageProps {
  src: string;
  srcMobile?: string;
  srcDesktop?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  /**
   * Set true when the image is in the first viewport on page load.
   * Uses a mount-based delay instead of IntersectionObserver
   * (which fires instantly for already-visible elements).
   */
  onMount?: boolean;
}

const RevealImage = ({
  src,
  srcMobile,
  srcDesktop,
  alt,
  className = '',
  imgClassName = 'w-full h-full object-cover',
  loading = 'lazy',
  fetchPriority,
  onMount = false,
}: RevealImageProps) => {
  // For above-the-fold images: animate on mount with a small delay
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!onMount) return;
    const el = mountRef.current;
    if (!el) return;
    const id = setTimeout(() => el.classList.add('in-view'), 80);
    return () => clearTimeout(id);
  }, [onMount]);

  // For below-the-fold images: use IntersectionObserver
  const observerRef = useRevealElement();

  const ref = onMount ? mountRef : (observerRef as React.RefObject<HTMLDivElement>);

  return (
    <div
      ref={ref}
      className={`img-reveal overflow-hidden ${className}`}
    >
      <picture>
        {srcMobile && (
          <source media="(max-width: 600px)" srcSet={srcMobile} type="image/webp" />
        )}
        {srcDesktop && <source srcSet={srcDesktop} type="image/webp" />}
        <img
          src={src}
          alt={alt}
          className={imgClassName}
          loading={loading}
          {...(fetchPriority ? { fetchPriority } : {})}
        />
      </picture>
    </div>
  );
};

export default RevealImage;
