interface EmptyStateProps {
  query?: string;
}

/**
 * Empty state component for when no books match the search
 * Provides visual feedback and helpful suggestions
 */
export function EmptyState({ query }: EmptyStateProps) {
  return (
    <div className='flex flex-col items-center justify-center py-16 px-4 text-center'>
      {/* Illustration */}
      <div className='mb-6 rounded-full bg-zinc-100 p-6 dark:bg-zinc-800'>
        <BookSearchIcon />
      </div>

      {/* Message */}
      <h3 className='mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100'>
        No books found
      </h3>

      <p className='mb-6 max-w-md text-base text-zinc-600 dark:text-zinc-400'>
        {query ? (
          <>
            We couldn&apos;t find any books matching{' '}
            <span className='font-medium text-zinc-900 dark:text-zinc-200'>
              &quot;{query}&quot;
            </span>
          </>
        ) : (
          'There are no books to display at the moment.'
        )}
      </p>

      {/* Suggestions */}
      <div className='rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-800/50'>
        <p className='mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300'>
          Try these suggestions:
        </p>
        <ul className='space-y-1 text-sm text-zinc-600 dark:text-zinc-400'>
          <li className='flex items-center gap-2'>
            <CheckIcon />
            Check for typos in your search
          </li>
          <li className='flex items-center gap-2'>
            <CheckIcon />
            Use more general keywords
          </li>
          <li className='flex items-center gap-2'>
            <CheckIcon />
            Try searching by genre or publisher
          </li>
        </ul>
      </div>
    </div>
  );
}

function BookSearchIcon() {
  return (
    <svg
      className='h-12 w-12 text-zinc-400 dark:text-zinc-500'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
      />
      <circle cx='18' cy='6' r='3' strokeWidth={1.5} />
      <path strokeLinecap='round' strokeWidth={1.5} d='M20 8l2 2' />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className='h-4 w-4 flex-shrink-0 text-zinc-400'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M9 12l2 2 4-4'
      />
    </svg>
  );
}
