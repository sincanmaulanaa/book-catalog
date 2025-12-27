'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import type { SearchableBook } from '@/types/book';
import { fetchBooks, ApiError } from '@/lib/api';
import { createSearchableBook, filterBooks } from '@/utils/search';
import { useDebounce } from './useDebounce';

interface UseBooksOptions {
  category?: string | null;
}

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
export function useBooks(options: UseBooksOptions = {}): UseBooksResult {
  const { category } = options;
  const [books, setBooks] = useState<SearchableBook[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Debounce search query for performance
  const debouncedQuery = useDebounce(searchQuery, 300);

  const loadBooks = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setBooks([]); // Clear books immediately to prevent stale data showing with loading

    try {
      // Fetch 12 books for "Semua Buku", fetch all (100) for specific category
      const limit = category ? 100 : 12;
      const response = await fetchBooks(limit);
      const searchableBooks = response.products.map(createSearchableBook);
      setBooks(searchableBooks);
    } catch (err) {
      const message =
        err instanceof ApiError ? err.message : 'An unexpected error occurred';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, [category]);

  useEffect(() => {
    loadBooks();
  }, [loadBooks, category]);

  // Memoize filtered books to avoid recalculation on every render
  const filteredBooks = useMemo(() => {
    let result = books;

    // Filter by category first
    if (category) {
      result = result.filter((book) => book.category === category);
    }

    // Then filter by search query
    return filterBooks(result, debouncedQuery);
  }, [books, debouncedQuery, category]);

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
