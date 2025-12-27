export default function BookDetailLoading() {
  return (
    <main className='min-h-screen bg-white dark:bg-slate-900'>
      {/* Navigation Skeleton */}
      <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
        <div className='h-5 w-40 animate-pulse rounded bg-slate-200 dark:bg-slate-700' />
      </div>

      {/* Main Content */}
      <div className='mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8'>
        <div className='grid gap-8 lg:grid-cols-2 lg:gap-12'>
          {/* Left Column - Image Skeleton */}
          <div className='space-y-4'>
            <div className='aspect-square animate-pulse rounded-3xl bg-slate-200 dark:bg-slate-700' />
            <div className='flex gap-3'>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className='h-20 w-20 shrink-0 animate-pulse rounded-xl bg-slate-200 dark:bg-slate-700'
                />
              ))}
            </div>
          </div>

          {/* Right Column - Details Skeleton */}
          <div className='space-y-6'>
            {/* Tags */}
            <div className='flex gap-2'>
              <div className='h-8 w-24 animate-pulse rounded-full bg-slate-200 dark:bg-slate-700' />
              <div className='h-8 w-20 animate-pulse rounded-full bg-slate-200 dark:bg-slate-700' />
              <div className='h-8 w-16 animate-pulse rounded-full bg-slate-200 dark:bg-slate-700' />
            </div>

            {/* Title */}
            <div className='space-y-2'>
              <div className='h-10 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-700' />
              <div className='h-10 w-3/4 animate-pulse rounded bg-slate-200 dark:bg-slate-700' />
            </div>

            {/* Brand */}
            <div className='h-6 w-48 animate-pulse rounded bg-slate-200 dark:bg-slate-700' />

            {/* Rating */}
            <div className='flex gap-1'>
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className='h-5 w-5 animate-pulse rounded bg-slate-200 dark:bg-slate-700'
                />
              ))}
            </div>

            {/* Price Box */}
            <div className='h-32 animate-pulse rounded-2xl bg-slate-200 dark:bg-slate-700' />

            {/* Description */}
            <div className='space-y-2'>
              <div className='h-6 w-24 animate-pulse rounded bg-slate-200 dark:bg-slate-700' />
              <div className='h-4 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-700' />
              <div className='h-4 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-700' />
              <div className='h-4 w-2/3 animate-pulse rounded bg-slate-200 dark:bg-slate-700' />
            </div>

            {/* Button */}
            <div className='h-14 animate-pulse rounded-2xl bg-slate-200 dark:bg-slate-700' />
          </div>
        </div>

        {/* Specifications Skeleton */}
        <section className='mt-16'>
          <div className='mb-6 h-8 w-48 animate-pulse rounded bg-slate-200 dark:bg-slate-700' />
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className='h-24 animate-pulse rounded-2xl bg-slate-200 dark:bg-slate-700'
              />
            ))}
          </div>
        </section>

        {/* Reviews Skeleton */}
        <section className='mt-16'>
          <div className='mb-6 h-8 w-40 animate-pulse rounded bg-slate-200 dark:bg-slate-700' />
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className='h-40 animate-pulse rounded-2xl bg-slate-200 dark:bg-slate-700'
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
