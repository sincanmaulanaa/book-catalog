import type { SearchableBook } from '@/types/book';
import { BookCard } from '@/components/BookCard';

interface BookGridProps {
  books: SearchableBook[];
}

/**
 * Responsive grid layout for book cards
 * Adapts from 2 columns (mobile) to 4 columns (desktop)
 */
export function BookGrid({ books }: BookGridProps) {
  return (
    <div
      className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4'
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
