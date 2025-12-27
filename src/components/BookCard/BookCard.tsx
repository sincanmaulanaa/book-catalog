import Image from 'next/image';
import Link from 'next/link';
import type { SearchableBook } from '@/types/book';
import { truncateText } from '@/utils/search';

interface BookCardProps {
  book: SearchableBook;
}

/**
 * Individual book card component
 * Clean, minimal design with light green background
 */
export function BookCard({ book }: BookCardProps) {
  const { id, title, thumbnail, brand, price } = book;

  return (
    <article
      className='group relative flex flex-col overflow-hidden rounded-2xl bg-emerald-50 p-4 transition-all duration-300 hover:bg-emerald-100 dark:bg-emerald-950/30 dark:hover:bg-emerald-900/40'
      aria-labelledby={`book-title-${id}`}
    >
      {/* Book Cover */}
      <div className='relative mx-auto mb-4 aspect-3/4 w-full max-w-40 overflow-hidden rounded-lg'>
        <Image
          src={thumbnail}
          alt={`Sampul ${title}`}
          fill
          sizes='160px'
          className='object-cover transition-transform duration-300 group-hover:scale-105'
          priority={false}
        />
      </div>

      {/* Card Content */}
      <div className='flex flex-1 flex-col text-center'>
        {/* Title */}
        <h2
          id={`book-title-${id}`}
          className='mb-1 line-clamp-2 text-sm font-semibold leading-tight text-slate-900 dark:text-slate-100'
        >
          {truncateText(title, 40)}
        </h2>

        {/* Author/Brand */}
        {brand && (
          <p className='text-xs text-slate-500 dark:text-slate-400'>{brand}</p>
        )}

        {/* Price */}
        <p className='mt-2 text-sm font-bold text-emerald-600 dark:text-emerald-400'>
          {new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(price * 16000)}
        </p>
      </div>

      {/* Hover Overlay - Read Button */}
      <div className='pointer-events-none absolute inset-0 flex items-end justify-center pb-24 opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100'>
        <span className='rounded-lg bg-emerald-600 px-6 py-2 text-sm font-semibold text-white shadow-lg'>
          Selengkapnya
        </span>
      </div>

      {/* Interactive overlay */}
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
