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
      className='flex flex-col items-center justify-center py-16 px-4 text-center'
      role='alert'
    >
      {/* Error Icon */}
      <div className='mb-6 rounded-full bg-red-100 p-6 dark:bg-red-900/20'>
        <ErrorIcon />
      </div>

      {/* Message */}
      <h3 className='mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100'>
        Something went wrong
      </h3>

      <p className='mb-6 max-w-md text-base text-zinc-600 dark:text-zinc-400'>
        {message}
      </p>

      {/* Retry Button */}
      {onRetry && (
        <button
          type='button'
          onClick={onRetry}
          className='inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900'
        >
          <RetryIcon />
          Try Again
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
