import React from 'react';

interface OptimizedImageProps {
  srcName: string; // The base name of the image without extension or suffix
  alt: string;
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ srcName, alt, className }) => {
  return (
    <picture>
      {/* Mobile version: 600px width */}
      <source
        media="(max-width: 600px)"
        srcSet={`/optimized/${srcName}-mobile.webp`}
        type="image/webp"
      />
      {/* Desktop version: 1920px width (default) */}
      <source
        srcSet={`/optimized/${srcName}-desktop.webp`}
        type="image/webp"
      />
      {/* Fallback image - using the desktop version as fallback */}
      <img
        src={`/optimized/${srcName}-desktop.webp`}
        alt={alt}
        className={className}
        loading="lazy"
      />
    </picture>
  );
};

export default OptimizedImage;
