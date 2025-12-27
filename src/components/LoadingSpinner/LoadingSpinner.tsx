/**
 * Loading spinner component for async operations
 */
export function LoadingSpinner() {
  return (
    <div
      className='flex flex-col items-center justify-center py-16'
      role='status'
      aria-label='Loading books'
    >
      <div className='relative'>
        {/* Outer ring */}
        <div className='h-12 w-12 rounded-full border-4 border-zinc-200 dark:border-zinc-700' />
        {/* Spinning segment */}
        <div className='absolute inset-0 h-12 w-12 animate-spin rounded-full border-4 border-transparent border-t-blue-500' />
      </div>
      <p className='mt-4 text-sm text-zinc-500 dark:text-zinc-400'>
        Loading books...
      </p>
    </div>
  );
}
