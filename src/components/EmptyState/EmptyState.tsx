interface EmptyStateProps {
  query?: string;
}

/**
 * Empty state component for when no books match the search
 * Provides visual feedback and helpful suggestions
 */
export function EmptyState({ query }: EmptyStateProps) {
  return (
    <div className='flex flex-col items-center justify-center py-20 px-4 text-center'>
      {/* Illustration */}
      <div className='mb-8 rounded-3xl bg-emerald-100 p-8 dark:bg-emerald-900/30'>
        <BookSearchIcon />
      </div>

      {/* Message */}
      <h3 className='mb-3 text-2xl font-bold text-slate-900 dark:text-slate-100'>
        Buku Tidak Ditemukan
      </h3>

      <p className='mb-8 max-w-md text-base leading-relaxed text-slate-600 dark:text-slate-400'>
        {query ? (
          <>
            Kami tidak menemukan buku yang cocok dengan{' '}
            <span className='font-semibold text-emerald-600 dark:text-emerald-400'>
              &quot;{query}&quot;
            </span>
          </>
        ) : (
          'Tidak ada buku untuk ditampilkan saat ini.'
        )}
      </p>

      {/* Suggestions */}
      <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800/50'>
        <p className='mb-4 text-sm font-semibold text-slate-700 dark:text-slate-300'>
          Coba saran berikut:
        </p>
        <ul className='space-y-3 text-sm text-slate-600 dark:text-slate-400'>
          <li className='flex items-center gap-3'>
            <div className='flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50'>
              <CheckIcon />
            </div>
            Periksa kembali ejaan pencarianmu
          </li>
          <li className='flex items-center gap-3'>
            <div className='flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50'>
              <CheckIcon />
            </div>
            Gunakan kata kunci yang lebih umum
          </li>
          <li className='flex items-center gap-3'>
            <div className='flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50'>
              <CheckIcon />
            </div>
            Coba cari berdasarkan genre atau penerbit
          </li>
        </ul>
      </div>
    </div>
  );
}

function BookSearchIcon() {
  return (
    <svg
      className='h-16 w-16 text-emerald-500 dark:text-emerald-400'
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
      className='h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2.5}
        d='M5 13l4 4L19 7'
      />
    </svg>
  );
}
