'use client';

import { useCallback, type ChangeEvent } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

/**
 * Search input component with real-time filtering
 * Includes search icon and clear button
 */
export function SearchBar({
  value,
  onChange,
  placeholder = 'Search by title, genre, or publisher...',
}: SearchBarProps) {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      // Basic input sanitization
      const sanitizedValue = e.target.value.replace(/[<>]/g, '');
      onChange(sanitizedValue);
    },
    [onChange]
  );

  const handleClear = useCallback(() => {
    onChange('');
  }, [onChange]);

  return (
    <div className='relative w-full max-w-xl'>
      {/* Search Icon */}
      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4'>
        <SearchIcon />
      </div>

      {/* Input */}
      <input
        type='search'
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className='w-full rounded-full border border-zinc-300 bg-white py-3 pl-12 pr-12 text-base text-zinc-900 placeholder-zinc-500 shadow-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-400 dark:focus:border-blue-400'
        aria-label='Search books'
        autoComplete='off'
        spellCheck={false}
      />

      {/* Clear Button */}
      {value && (
        <button
          type='button'
          onClick={handleClear}
          className='absolute inset-y-0 right-0 flex items-center pr-4 text-zinc-400 transition-colors hover:text-zinc-600 dark:hover:text-zinc-300'
          aria-label='Clear search'
        >
          <ClearIcon />
        </button>
      )}
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      className='h-5 w-5 text-zinc-400'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
      />
    </svg>
  );
}

function ClearIcon() {
  return (
    <svg
      className='h-5 w-5'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  );
}
