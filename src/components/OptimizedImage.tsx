import React from 'react';

interface OptimizedImageProps {
  srcName: string;
  alt: string;
  className?: string;
  fetchPriority?: 'high' | 'low' | 'auto';
  loading?: 'lazy' | 'eager';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  srcName,
  alt,
  className,
  fetchPriority,
  loading = 'lazy',
}) => {
  return (
    <picture>
      <source
        media="(max-width: 600px)"
        srcSet={`/optimized/${srcName}-mobile.webp`}
        type="image/webp"
      />
      <source
        srcSet={`/optimized/${srcName}-desktop.webp`}
        type="image/webp"
      />
      <img
        src={`/optimized/${srcName}-desktop.webp`}
        alt={alt}
        className={className}
        loading={loading}
        fetchPriority={fetchPriority}
      />
    </picture>
  );
};

export default OptimizedImage;
