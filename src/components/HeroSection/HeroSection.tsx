'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import type { SearchableBook } from '@/types/book';
import { fetchBooks } from '@/lib/api';
import { createSearchableBook } from '@/utils/search';

export function HeroSection() {
  const [books, setBooks] = useState<SearchableBook[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch books for hero section
  useEffect(() => {
    const loadBooks = async () => {
      try {
        const response = await fetchBooks(30);
        const searchableBooks = response.products.map(createSearchableBook);
        setBooks(searchableBooks);
      } catch (error) {
        console.error('Failed to load hero books:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadBooks();
  }, []);

  // Get top 5 books with highest discount
  const featuredBooks = useMemo(() => {
    return [...books]
      .sort((a, b) => b.discountPercentage - a.discountPercentage)
      .slice(0, 5);
  }, [books]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (featuredBooks.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredBooks.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredBooks.length]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price * 16000);
  };

  const calculateDiscountedPrice = (price: number, discount: number) => {
    return price * (1 - discount / 100);
  };

  if (isLoading) {
    return (
      <div className='mb-8 h-80 animate-pulse rounded-3xl bg-emerald-100 dark:bg-emerald-900/30' />
    );
  }

  if (featuredBooks.length === 0) return null;

  const currentBook = featuredBooks[currentSlide];

  return (
    <section className='relative mb-8 overflow-hidden rounded-3xl bg-linear-to-br from-emerald-600 via-emerald-500 to-teal-500 dark:from-emerald-800 dark:via-emerald-700 dark:to-teal-700'>
      {/* Decorative Elements */}
      <div className='absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl' />
      <div className='absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl' />

      <div className='relative flex flex-col items-center gap-8 p-6 md:flex-row md:p-10'>
        {/* Left Content */}
        <div className='flex-1 text-center md:text-left'>
          {/* Badge */}
          <div className='mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm'>
            Diskon Terbesar Minggu Ini
          </div>

          {/* Title */}
          <h1 className='mb-3 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl'>
            {currentBook.title}
          </h1>

          {/* Brand */}
          <p className='mb-4 text-lg text-white/80'>
            oleh {currentBook.brand || 'Penulis Terkenal'}
          </p>

          {/* Price Section */}
          <div className='mb-6 flex flex-wrap items-center justify-center gap-3 md:justify-start'>
            <span className='text-3xl font-bold text-white'>
              {formatPrice(
                calculateDiscountedPrice(
                  currentBook.price,
                  currentBook.discountPercentage
                )
              )}
            </span>
            <span className='text-lg text-white/60 line-through'>
              {formatPrice(currentBook.price)}
            </span>
            <span className='rounded-full bg-rose-500 px-3 py-1 text-sm font-bold text-white'>
              -{Math.round(currentBook.discountPercentage)}%
            </span>
          </div>

          {/* Rating */}
          <div className='mb-6 flex items-center justify-center gap-2 md:justify-start'>
            <div className='flex'>
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`h-5 w-5 ${
                    star <= Math.round(currentBook.rating)
                      ? 'text-yellow-400'
                      : 'text-white/30'
                  }`}
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
              ))}
            </div>
            <span className='text-sm text-white/80'>
              {currentBook.rating.toFixed(1)} Rating
            </span>
          </div>

          {/* CTA Button */}
          <Link
            href={`/books/${currentBook.id}`}
            className='inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-lg font-bold text-emerald-600 shadow-lg transition-all hover:scale-105 hover:shadow-xl'
          >
            Lihat Detail
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
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </Link>
        </div>

        {/* Right - Book Cover */}
        <div className='relative shrink-0'>
          {/* Glow Effect */}
          <div className='absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-black/30 blur-3xl' />

          <div className='relative h-72 w-48 overflow-hidden rounded-2xl transition-transform duration-500 hover:scale-105 md:h-96 md:w-96'>
            <Image
              src={currentBook.thumbnail}
              alt={currentBook.title}
              fill
              sizes='224px'
              className='object-cover'
              priority
            />
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className='absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2'>
        {featuredBooks.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'w-8 bg-white'
                : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          setCurrentSlide((prev) =>
            prev === 0 ? featuredBooks.length - 1 : prev - 1
          )
        }
        className='absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30 md:block'
        aria-label='Previous slide'
      >
        <svg
          className='h-6 w-6'
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
      <button
        onClick={() =>
          setCurrentSlide((prev) =>
            prev === featuredBooks.length - 1 ? 0 : prev + 1
          )
        }
        className='absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30 md:block'
        aria-label='Next slide'
      >
        <svg
          className='h-6 w-6'
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
    </section>
  );
}
