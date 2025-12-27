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
    <div className='flex flex-col gap-8'>
      {/* Search Section */}
      <div className='flex justify-center'>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      {/* Results Count */}
      {!isLoading && !error && (
        <p className='text-center text-sm text-zinc-500 dark:text-zinc-400'>
          {hasBooks
            ? `Showing ${filteredBooks.length} book${
                filteredBooks.length !== 1 ? 's' : ''
              }`
            : null}
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
