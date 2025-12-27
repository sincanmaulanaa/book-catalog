'use client';

import { useBooks } from '@/hooks';
import {
  SearchBar,
  BookGrid,
  EmptyState,
  LoadingSpinner,
  ErrorState,
} from '@/components';

interface BookCatalogProps {
  category?: string | null;
}

/**
 * Main Book Catalog component
 * Orchestrates data fetching, search, and rendering
 */
export function BookCatalog({ category }: BookCatalogProps) {
  const {
    filteredBooks,
    isLoading,
    error,
    searchQuery,
    setSearchQuery,
    retry,
  } = useBooks({ category });

  // Derive state for conditional rendering
  const hasBooks = filteredBooks.length > 0;
  const showEmptyState = !isLoading && !error && !hasBooks;

  return (
    <div className='flex flex-col gap-8'>
      {/* Header with Search */}
      <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <div>
          <div className='mb-1 flex items-center gap-2'>
            <button className='text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'>
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
            <h1 className='text-xl font-bold text-slate-900 dark:text-white'>
              Produk{' '}
              <span className='font-normal text-slate-500'>
                ({filteredBooks.length})
              </span>
            </h1>
          </div>
        </div>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      {/* Content States */}
      {isLoading && <LoadingSpinner />}

      {error && <ErrorState message={error} onRetry={retry} />}

      {showEmptyState && <EmptyState query={searchQuery} />}

      {hasBooks && <BookGrid books={filteredBooks} />}
    </div>
  );
}
