import Link from 'next/link';

export default function BookNotFound() {
  return (
    <main className='flex min-h-screen items-center justify-center bg-white px-4 dark:bg-slate-900'>
      <div className='text-center'>
        {/* Illustration */}
        <div className='mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50'>
          <svg
            className='h-16 w-16 text-emerald-500 dark:text-emerald-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={1.5}
              d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
            />
          </svg>
        </div>

        {/* Text */}
        <h1 className='mb-4 text-4xl font-bold text-slate-900 dark:text-slate-100'>
          Buku Tidak Ditemukan
        </h1>
        <p className='mb-8 text-lg text-slate-600 dark:text-slate-400'>
          Maaf, buku yang Anda cari tidak tersedia atau telah dihapus.
        </p>

        {/* Action */}
        <Link
          href='/'
          className='inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-emerald-700'
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
    </main>
  );
}
