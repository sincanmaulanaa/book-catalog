/**
 * Search utility functions for filtering books
 */

import type { Book, SearchableBook } from '@/types/book';

/**
 * Pre-computes searchable text for a book to avoid repeated string operations
 */
export function createSearchableBook(book: Book): SearchableBook {
  const searchableText = [book.title, book.category, book.brand || '']
    .join(' ')
    .toLowerCase();

  return {
    ...book,
    searchableText,
  };
}

/**
 * Filters books based on search query
 * Matches against title, category (genre), and brand (publisher)
 */
export function filterBooks(
  books: SearchableBook[],
  query: string
): SearchableBook[] {
  if (!query.trim()) {
    return books;
  }

  const normalizedQuery = query.toLowerCase().trim();

  return books.filter((book) => book.searchableText.includes(normalizedQuery));
}

/**
 * Truncates text with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.slice(0, maxLength).trim()}...`;
}
