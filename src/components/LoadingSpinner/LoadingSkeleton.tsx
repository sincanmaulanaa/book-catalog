/**
 * Skeleton card component that mimics BookCard layout
 */
function SkeletonCard() {
  return (
    <div className='flex flex-col overflow-hidden rounded-2xl bg-slate-50 p-4 dark:bg-slate-950/30'>
      {/* Book Cover Skeleton */}
      <div className='relative mx-auto mb-4 aspect-3/4 w-full max-w-40 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-900/50'>
        <div className='absolute inset-0 animate-shimmer bg-linear-to-r from-transparent via-white/40 to-transparent dark:via-white/10' />
      </div>

      {/* Title Skeleton */}
      <div className='mx-auto mb-2 h-4 w-3/4 rounded-md bg-slate-100 dark:bg-slate-900/50'>
        <div className='h-full w-full animate-shimmer bg-linear-to-r from-transparent via-white/40 to-transparent dark:via-white/10' />
      </div>

      {/* Author Skeleton */}
      <div className='mx-auto mb-3 h-3 w-1/2 rounded-md bg-slate-100 dark:bg-slate-900/50'>
        <div className='h-full w-full animate-shimmer bg-linear-to-r from-transparent via-white/40 to-transparent dark:via-white/10' />
      </div>

      {/* Price Skeleton */}
      <div className='mx-auto h-4 w-1/3 rounded-md bg-slate-200 dark:bg-slate-800/50'>
        <div className='h-full w-full animate-shimmer bg-linear-to-r from-transparent via-white/40 to-transparent dark:via-white/10' />
      </div>
    </div>
  );
}

/**
 * Skeleton loading grid component for async operations
 */
export function LoadingSkeleton() {
  return (
    <div role='status' aria-label='Memuat buku'>
      {/* Skeleton Grid - matches BookGrid layout */}
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
      <span className='sr-only'>Memuat buku...</span>
    </div>
  );
}
