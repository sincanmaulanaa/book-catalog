import { BookCatalog } from '@/components';

export default function Home() {
  return (
    <div className='min-h-screen bg-linear-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900'>
      {/* Hero Header */}
      <header className='relative overflow-hidden bg-linear-to-br from-indigo-600 via-indigo-700 to-purple-800 dark:from-indigo-900 dark:via-indigo-800 dark:to-purple-900'>
        {/* Background Pattern */}
        <div className='absolute inset-0 opacity-10'>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className='relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20'>
          <div className='flex flex-col items-center gap-4 text-center'>
            {/* Icon */}
            <div className='mb-2 rounded-2xl bg-white/10 p-3 backdrop-blur-sm'>
              <svg
                className='h-8 w-8 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
                />
              </svg>
            </div>

            {/* Title */}
            <h1 className='text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl'>
              Katalog Buku Modern
            </h1>

            {/* Subtitle */}
            <p className='max-w-2xl text-lg font-medium text-indigo-100 sm:text-xl'>
              Temukan buku favoritmu dengan mudah, cepat, dan nyaman.
            </p>

            {/* Description */}
            <p className='max-w-xl text-base text-indigo-200/80'>
              Jelajahi berbagai koleksi buku dari beragam genre. Gunakan
              pencarian untuk menemukan bacaan yang sesuai dengan minatmu.
            </p>
          </div>
        </div>

        {/* Wave Decoration */}
        <div className='absolute bottom-0 left-0 right-0'>
          <svg
            viewBox='0 0 1440 120'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='w-full'
            preserveAspectRatio='none'
          >
            <path
              d='M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z'
              className='fill-slate-50 dark:fill-slate-950'
            />
          </svg>
        </div>
      </header>

      {/* Main Content */}
      <main className='mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
        <BookCatalog />
      </main>

      {/* Footer */}
      <footer className='border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'>
        <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
          <div className='flex flex-col items-center gap-4'>
            <div className='flex items-center gap-2 text-indigo-600 dark:text-indigo-400'>
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
                />
              </svg>
              <span className='font-semibold'>Katalog Buku Modern</span>
            </div>
            <p className='text-center text-sm text-slate-500 dark:text-slate-400'>
              © {new Date().getFullYear()} Katalog Buku Modern. Dibuat dengan
              Next.js & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
