import Image from 'next/image';
import Link from 'next/link';
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
      className='group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600 dark:hover:shadow-indigo-500/5'
      aria-labelledby={`book-title-${id}`}
    >
      {/* Book Cover */}
      <div className='relative aspect-4/3 overflow-hidden bg-slate-100 dark:bg-slate-700'>
        <Image
          src={thumbnail}
          alt={`Sampul ${title}`}
          fill
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          className='object-cover transition-transform duration-500 group-hover:scale-110'
          priority={false}
        />
        {/* Genre Badge */}
        <span className='absolute left-3 top-3 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold capitalize text-white shadow-lg'>
          {category}
        </span>
      </div>

      {/* Card Content */}
      <div className='flex flex-1 flex-col p-5'>
        {/* Title */}
        <h2
          id={`book-title-${id}`}
          className='mb-1 line-clamp-2 text-lg font-bold leading-tight text-slate-900 dark:text-slate-100'
        >
          {truncateText(title, 50)}
        </h2>

        {/* Publisher */}
        {brand && (
          <p className='mb-2 text-sm text-slate-500 dark:text-slate-400'>
            oleh <span className='font-medium'>{brand}</span>
          </p>
        )}

        {/* Description */}
        <p className='mb-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400'>
          {truncateText(description, 100)}
        </p>

        {/* Rating */}
        <div className='mb-4'>
          <RatingStars rating={rating} />
        </div>

        {/* Footer: Price & Availability */}
        <div className='flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-700'>
          <div className='flex flex-col'>
            <span className='text-xs text-slate-500 dark:text-slate-400'>
              Harga
            </span>
            <span className='text-xl font-bold text-indigo-600 dark:text-indigo-400'>
              Rp {(price * 15000).toLocaleString('id-ID')}
            </span>
          </div>
          <AvailabilityBadge status={availabilityStatus} stock={stock} />
        </div>
      </div>

      {/* Interactive overlay for screen readers */}
      <Link
        href={`/books/${id}`}
        className='absolute inset-0 z-10'
        aria-label={`Lihat detail ${title}`}
      >
        <span className='sr-only'>Lihat detail buku</span>
      </Link>
    </article>
  );
}
