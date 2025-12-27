'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import type { SearchableBook } from '@/types/book';
import { fetchBooks, ApiError } from '@/lib/api';
import { createSearchableBook, filterBooks } from '@/utils/search';
import { useDebounce } from './useDebounce';

interface UseBooksResult {
  books: SearchableBook[];
  filteredBooks: SearchableBook[];
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  retry: () => void;
}

/**
 * Custom hook for fetching and filtering books
 * Handles loading states, errors, and debounced search
 */
export function useBooks(): UseBooksResult {
  const [books, setBooks] = useState<SearchableBook[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Debounce search query for performance
  const debouncedQuery = useDebounce(searchQuery, 300);

  const loadBooks = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetchBooks(12);
      const searchableBooks = response.products.map(createSearchableBook);
      setBooks(searchableBooks);
    } catch (err) {
      const message =
        err instanceof ApiError ? err.message : 'An unexpected error occurred';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadBooks();
  }, [loadBooks]);

  // Memoize filtered books to avoid recalculation on every render
  const filteredBooks = useMemo(
    () => filterBooks(books, debouncedQuery),
    [books, debouncedQuery]
  );

  // Stable callback for search input
  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  return {
    books,
    filteredBooks,
    isLoading,
    error,
    searchQuery,
    setSearchQuery: handleSearchChange,
    retry: loadBooks,
  };
}
