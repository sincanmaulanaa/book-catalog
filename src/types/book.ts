/**
 * Type definitions for the Book Catalog
 * Maps DummyJSON product fields to book-related concepts
 */

export interface Book {
  id: number;
  title: string;
  description: string;
  category: string; // genre
  price: number;
  rating: number;
  stock: number;
  availabilityStatus: string;
  thumbnail: string; // cover image
  brand: string; // publisher
}

export interface BooksApiResponse {
  products: Book[];
  total: number;
  skip: number;
  limit: number;
}

export type AvailabilityStatus = 'In Stock' | 'Low Stock' | 'Out of Stock';

export interface SearchableBook extends Book {
  searchableText: string; // Pre-computed lowercase searchable string
}
