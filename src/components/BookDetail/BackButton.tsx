import Link from 'next/link';

export function BackButton() {
  return (
    <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
      <Link
        href='/'
        className='inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400'
      >
        <svg
          className='h-5 w-5'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 19l-7-7 7-7'
          />
        </svg>
        Kembali ke Katalog
      </Link>
    </div>
  );
}
