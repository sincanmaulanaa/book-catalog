import { BookCatalog } from '@/components';

export default function Home() {
  return (
    <div className='min-h-screen bg-zinc-50 dark:bg-zinc-950'>
      {/* Header */}
      <header className='border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900'>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <div className='flex flex-col items-center gap-2 text-center sm:items-start sm:text-left'>
            <h1 className='text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100'>
              Book Catalog
            </h1>
            <p className='text-base text-zinc-600 dark:text-zinc-400'>
              Discover your next favorite read from our curated collection
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <BookCatalog />
      </main>

      {/* Footer */}
      <footer className='border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900'>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <p className='text-center text-sm text-zinc-500 dark:text-zinc-400'>
            © {new Date().getFullYear()} Book Catalog. Built with Next.js &
            Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
