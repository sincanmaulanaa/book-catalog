import type { SearchableBook } from '@/types/book';
import { BookCard } from '@/components/BookCard';

interface BookGridProps {
  books: SearchableBook[];
}

/**
 * Responsive grid layout for book cards
 * Adapts from 1 column (mobile) to 4 columns (desktop)
 */
export function BookGrid({ books }: BookGridProps) {
  return (
    <div
      className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
      role='list'
      aria-label='Katalog buku'
    >
      {books.map((book) => (
        <div key={book.id} role='listitem'>
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
}
