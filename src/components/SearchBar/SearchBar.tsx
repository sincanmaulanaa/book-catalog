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
  placeholder = 'Cari buku berdasarkan judul, genre, atau penerbit...',
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
    <div className='relative w-full max-w-2xl'>
      {/* Search Icon */}
      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5'>
        <SearchIcon />
      </div>

      {/* Input */}
      <input
        type='search'
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className='w-full rounded-2xl border-2 border-slate-200 bg-white py-4 pl-14 pr-14 text-base text-slate-900 placeholder-slate-400 shadow-lg shadow-slate-200/50 transition-all duration-300 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-500 dark:shadow-slate-900/50 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/20'
        aria-label='Cari buku'
        autoComplete='off'
        spellCheck={false}
      />

      {/* Clear Button */}
      {value && (
        <button
          type='button'
          onClick={handleClear}
          className='absolute inset-y-0 right-0 flex items-center pr-5 text-slate-400 transition-colors hover:text-slate-600 dark:hover:text-slate-300'
          aria-label='Hapus pencarian'
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
      className='h-5 w-5 text-slate-400'
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
