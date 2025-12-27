/**
 * Type definitions for the Book Catalog
 * Maps DummyJSON product fields to book-related concepts
 */

export interface BookDimensions {
  width: number;
  height: number;
  depth: number;
}

export interface BookReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface BookMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface Book {
  id: number;
  title: string;
  description: string;
  category: string; // genre
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string; // publisher
  sku: string;
  weight: number;
  dimensions: BookDimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: BookReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: BookMeta;
  images: string[];
  thumbnail: string; // cover image
}

export interface BooksApiResponse {
  products: Book[];
  total: number;
  skip: number;
  limit: number;
}

export type AvailabilityStatus = 'Tersedia' | 'Stok Terbatas' | 'Habis';

export interface SearchableBook extends Book {
  searchableText: string; // Pre-computed lowercase searchable string
}
