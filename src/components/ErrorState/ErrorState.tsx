interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
}

/**
 * Error state component with retry functionality
 * Displays user-friendly error message with action button
 */
export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div
      className='flex flex-col items-center justify-center py-20 px-4 text-center'
      role='alert'
    >
      {/* Error Icon */}
      <div className='mb-8 rounded-3xl bg-red-100 p-8 dark:bg-red-900/20'>
        <ErrorIcon />
      </div>

      {/* Message */}
      <h3 className='mb-3 text-2xl font-bold text-slate-900 dark:text-slate-100'>
        Terjadi Kesalahan
      </h3>

      <p className='mb-8 max-w-md text-base leading-relaxed text-slate-600 dark:text-slate-400'>
        {message}
      </p>

      {/* Retry Button */}
      {onRetry && (
        <button
          type='button'
          onClick={onRetry}
          className='inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900'
        >
          <RetryIcon />
          Coba Lagi
        </button>
      )}
    </div>
  );
}

function ErrorIcon() {
  return (
    <svg
      className='h-12 w-12 text-red-500 dark:text-red-400'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
      />
    </svg>
  );
}

function RetryIcon() {
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
