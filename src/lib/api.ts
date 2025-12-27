/**
 * API utilities for fetching book data
 */

import type { Book, BooksApiResponse } from '@/types/book';

const API_BASE_URL = 'https://dummyjson.com';

export class ApiError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = 'ApiError';
  }
}

/**
 * Fetches books from the DummyJSON API
 * @param limit - Number of books to fetch (default: 12)
 */
export async function fetchBooks(limit = 12): Promise<BooksApiResponse> {
  const url = `${API_BASE_URL}/products?limit=${limit}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new ApiError(
        `Failed to fetch books: ${response.statusText}`,
        response.status
      );
    }

    const data: BooksApiResponse = await response.json();
    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError('Network error: Unable to connect to the server');
  }
}

/**
 * Fetches a single book by ID
 * @param id - Book ID
 */
export async function fetchBookById(id: number): Promise<Book> {
  const url = `${API_BASE_URL}/products/${id}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        throw new ApiError('Buku tidak ditemukan', 404);
      }
      throw new ApiError(
        `Gagal memuat buku: ${response.statusText}`,
        response.status
      );
    }

    const data: Book = await response.json();
    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError('Kesalahan jaringan: Tidak dapat terhubung ke server');
  }
}
