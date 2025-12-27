import Image from 'next/image';
import type { SearchableBook } from '@/types/book';
import { RatingStars } from '@/components/RatingStars';
import { AvailabilityBadge } from '@/components/AvailabilityBadge';
import { truncateText } from '@/utils/search';

interface BookCardProps {
  book: SearchableBook;
}

/**
 * Individual book card component
 * Displays book cover, title, description, genre, rating, price, and availability
 */
export function BookCard({ book }: BookCardProps) {
  const {
    id,
    title,
    description,
    category,
    price,
    rating,
    stock,
    availabilityStatus,
    thumbnail,
    brand,
  } = book;

  return (
    <article
      className='group relative flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-zinc-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700'
      aria-labelledby={`book-title-${id}`}
    >
      {/* Book Cover */}
      <div className='relative aspect-4/3 overflow-hidden bg-zinc-100 dark:bg-zinc-800'>
        <Image
          src={thumbnail}
          alt={`Cover of ${title}`}
          fill
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          className='object-cover transition-transform duration-300 group-hover:scale-105'
          priority={false}
        />
        {/* Genre Badge */}
        <span className='absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-xs font-medium capitalize text-white backdrop-blur-sm'>
          {category}
        </span>
      </div>

      {/* Card Content */}
      <div className='flex flex-1 flex-col p-4'>
        {/* Title */}
        <h2
          id={`book-title-${id}`}
          className='mb-1 text-lg font-semibold leading-tight text-zinc-900 dark:text-zinc-100'
        >
          {truncateText(title, 50)}
        </h2>

        {/* Publisher */}
        {brand && (
          <p className='mb-2 text-sm text-zinc-500 dark:text-zinc-400'>
            by {brand}
          </p>
        )}

        {/* Description */}
        <p className='mb-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400'>
          {truncateText(description, 100)}
        </p>

        {/* Rating */}
        <div className='mb-3'>
          <RatingStars rating={rating} />
        </div>

        {/* Footer: Price & Availability */}
        <div className='flex items-center justify-between border-t border-zinc-100 pt-3 dark:border-zinc-800'>
          <span className='text-xl font-bold text-zinc-900 dark:text-zinc-100'>
            ${price.toFixed(2)}
          </span>
          <AvailabilityBadge status={availabilityStatus} stock={stock} />
        </div>
      </div>

      {/* Interactive overlay for screen readers */}
      <a
        href={`#book-${id}`}
        className='absolute inset-0 z-10'
        aria-label={`View details for ${title}`}
        tabIndex={0}
      >
        <span className='sr-only'>View book details</span>
      </a>
    </article>
  );
}
