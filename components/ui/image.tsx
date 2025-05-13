"use client";

import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { useState } from 'react';

interface ImageProps extends NextImageProps {
  fallback?: string;
}

export function Image({ fallback = '/assets/images/placeholder.jpg', ...props }: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${isLoading ? 'animate-pulse bg-gray-200' : ''}`}>
      <NextImage
        {...props}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
        src={error ? fallback : props.src}
        loading={props.priority ? 'eager' : 'lazy'}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}