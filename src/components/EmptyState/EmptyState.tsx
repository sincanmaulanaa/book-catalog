import Image from 'next/image';

interface EmptyStateProps {
  query?: string;
}

/**
 * Empty state component for when no books match the search
 * Provides visual feedback and helpful suggestions
 */
export function EmptyState({ query }: EmptyStateProps) {
  return (
    <div className='flex flex-col items-center justify-center px-4 py-16 text-center'>
      {/* Decorative Background */}
      <div className='relative'>
        {/* Floating decorative elements */}
        <div className='absolute -left-8 -top-4 h-16 w-16 animate-pulse rounded-full bg-emerald-200/50 blur-xl dark:bg-emerald-800/30' />
        <div className='absolute -right-6 top-8 h-12 w-12 animate-pulse rounded-full bg-emerald-300/40 blur-lg delay-75 dark:bg-emerald-700/30' />
        <div className='absolute -bottom-4 left-4 h-10 w-10 animate-pulse rounded-full bg-emerald-100/60 blur-md delay-150 dark:bg-emerald-900/40' />

        {/* Main Illustration */}
        <div className='relative mb-8'>
          <Image
            src='/illustrations/empty-state.svg'
            alt='Tidak ada hasil'
            width={200}
            height={200}
            className='drop-shadow-lg'
            priority
          />
        </div>
      </div>

      {/* Message */}
      <div className='mb-8 max-w-md'>
        <h3 className='mb-3 text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl'>
          {query ? 'Oops! Tidak Ada Hasil' : 'Belum Ada Buku'}
        </h3>

        <p className='text-base leading-relaxed text-slate-600 dark:text-slate-400'>
          {query ? (
            <>
              Pencarian untuk{' '}
              <span className='inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-0.5 font-semibold text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400'>
                <SearchIcon />
                {query}
              </span>{' '}
              tidak menghasilkan apapun
            </>
          ) : (
            'Tidak ada buku untuk ditampilkan saat ini. Coba lagi nanti!'
          )}
        </p>
      </div>

      {/* Suggestions Card */}
      <div className='w-full max-w-md'>
        <div className='overflow-hidden rounded-2xl border border-slate-200/80 bg-linear-to-br from-white to-slate-50  dark:border-slate-700/80 dark:from-slate-800 dark:to-slate-800/50'>
          {/* Card Header */}
          <div className='border-b border-slate-100 bg-emerald-50/50 px-6 py-4 dark:border-slate-700 dark:bg-emerald-900/20'>
            <div className='flex items-center gap-2'>
              <div className='flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50'>
                <LightbulbIcon />
              </div>
              <p className='font-semibold text-slate-800 dark:text-slate-200'>
                Tips Pencarian
              </p>
            </div>
          </div>

          {/* Card Body */}
          <div className='p-6'>
            <ul className='space-y-4 text-left text-sm'>
              <li className='flex items-start gap-3'>
                <div className='mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm'>
                  <span className='text-xs font-bold'>1</span>
                </div>
                <span className='text-slate-600 dark:text-slate-400'>
                  Periksa ejaan kata kunci pencarianmu
                </span>
              </li>
              <li className='flex items-start gap-3'>
                <div className='mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm'>
                  <span className='text-xs font-bold'>2</span>
                </div>
                <span className='text-slate-600 dark:text-slate-400'>
                  Gunakan kata kunci yang lebih umum atau singkat
                </span>
              </li>
              <li className='flex items-start gap-3'>
                <div className='mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm'>
                  <span className='text-xs font-bold'>3</span>
                </div>
                <span className='text-slate-600 dark:text-slate-400'>
                  Coba pilih kategori yang berbeda di sidebar
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      className='h-3.5 w-3.5'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
      />
    </svg>
  );
}

function LightbulbIcon() {
  return (
    <svg
      className='h-4 w-4 text-emerald-600 dark:text-emerald-400'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
      />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg
      className='h-4 w-4'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
      />
    </svg>
  );
}
