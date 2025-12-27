'use client';

import { useBooks } from '@/hooks';
import {
  SearchBar,
  BookGrid,
  EmptyState,
  LoadingSpinner,
  ErrorState,
} from '@/components';

/**
 * Main Book Catalog component
 * Orchestrates data fetching, search, and rendering
 */
export function BookCatalog() {
  const {
    filteredBooks,
    isLoading,
    error,
    searchQuery,
    setSearchQuery,
    retry,
  } = useBooks();

  // Derive state for conditional rendering
  const hasBooks = filteredBooks.length > 0;
  const showEmptyState = !isLoading && !error && !hasBooks;

  return (
    <div className='flex flex-col gap-10'>
      {/* Search Section */}
      <div className='flex justify-center'>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      {/* Results Count */}
      {!isLoading && !error && (
        <p className='text-center text-sm font-medium text-slate-500 dark:text-slate-400'>
          {hasBooks ? `Menampilkan ${filteredBooks.length} buku` : null}
        </p>
      )}

      {/* Content States */}
      {isLoading && <LoadingSpinner />}

      {error && <ErrorState message={error} onRetry={retry} />}

      {showEmptyState && <EmptyState query={searchQuery} />}

      {hasBooks && <BookGrid books={filteredBooks} />}
    </div>
  );
}
