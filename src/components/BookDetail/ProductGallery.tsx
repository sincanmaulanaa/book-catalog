'use client';

import Image from 'next/image';
import { useState, useCallback } from 'react';

interface ProductGalleryProps {
  images?: string[];
  thumbnail: string;
  title: string;
  discountPercentage?: number;
}

export function ProductGallery({
  images,
  thumbnail,
  title,
  discountPercentage,
}: ProductGalleryProps) {
  const allImages = images && images.length > 0 ? images : [thumbnail];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  }, [allImages.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  }, [allImages.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return (
    <div className='space-y-4'>
      {/* Main Image with Navigation */}
      <div className='group relative aspect-square overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800'>
        <Image
          src={allImages[currentIndex]}
          alt={`Sampul ${title} - Gambar ${currentIndex + 1}`}
          fill
          sizes='(max-width: 1024px) 100vw, 50vw'
          className='object-cover transition-opacity duration-300'
          priority
        />

        {/* Discount Badge */}
        {discountPercentage && discountPercentage > 0 && (
          <div className='absolute right-4 top-4 rounded-full bg-rose-500 px-3 py-1.5 text-sm font-bold text-white shadow-lg'>
            -{Math.round(discountPercentage)}%
          </div>
        )}

        {/* Navigation Arrows */}
        {allImages.length > 1 && (
          <>
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className='absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 opacity-0 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:text-emerald-600 group-hover:opacity-100 dark:bg-slate-800/90 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-emerald-400'
              aria-label='Gambar sebelumnya'
            >
              <svg
                className='h-5 w-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className='absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 opacity-0 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:text-emerald-600 group-hover:opacity-100 dark:bg-slate-800/90 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-emerald-400'
              aria-label='Gambar selanjutnya'
            >
              <svg
                className='h-5 w-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>

            {/* Slide Counter */}
            <div className='absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm'>
              {currentIndex + 1} / {allImages.length}
            </div>
          </>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {allImages.length > 1 && (
        <div className='flex gap-3 overflow-x-auto pb-2'>
          {allImages.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                currentIndex === index
                  ? 'border-emerald-500 ring-2 ring-emerald-500/30 dark:border-emerald-400 dark:ring-emerald-400/30'
                  : 'border-slate-200 hover:border-emerald-400 dark:border-slate-700 dark:hover:border-emerald-500'
              }`}
              aria-label={`Lihat gambar ${index + 1}`}
              aria-current={currentIndex === index ? 'true' : 'false'}
            >
              <Image
                src={image}
                alt={`${title} - Gambar ${index + 1}`}
                fill
                sizes='80px'
                className='object-cover'
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
