/**
 * Loading spinner component for async operations
 */
export function LoadingSpinner() {
  return (
    <div
      className='flex flex-col items-center justify-center py-20'
      role='status'
      aria-label='Memuat buku'
    >
      <div className='relative'>
        {/* Outer ring */}
        <div className='h-14 w-14 rounded-full border-4 border-slate-200 dark:border-slate-700' />
        {/* Spinning segment */}
        <div className='absolute inset-0 h-14 w-14 animate-spin rounded-full border-4 border-transparent border-t-indigo-600 dark:border-t-indigo-400' />
      </div>
      <p className='mt-5 text-sm font-medium text-slate-500 dark:text-slate-400'>
        Memuat buku...
      </p>
    </div>
  );
}
