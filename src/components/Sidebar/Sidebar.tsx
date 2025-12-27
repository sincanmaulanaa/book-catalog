'use client';

import { useCallback } from 'react';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface SidebarProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

const categories: Category[] = [
  {
    id: 'beauty',
    name: 'Beauty',
    icon: (
      <svg
        className='h-5 w-5'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z'
        />
      </svg>
    ),
  },
  {
    id: 'fragrances',
    name: 'Fragrances',
    icon: (
      <svg
        className='h-5 w-5'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 007.92 12.446A9 9 0 1112 2.992z'
        />
      </svg>
    ),
  },
  {
    id: 'furniture',
    name: 'Furniture',
    icon: (
      <svg
        className='h-5 w-5'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
        />
      </svg>
    ),
  },
  {
    id: 'groceries',
    name: 'Groceries',
    icon: (
      <svg
        className='h-5 w-5'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
        />
      </svg>
    ),
  },
];

export function Sidebar({
  selectedCategory,
  onCategoryChange,
  isOpen = false,
  onClose,
}: SidebarProps) {
  const handleCategoryClick = useCallback(
    (categoryId: string) => {
      // Toggle: if already selected, deselect (show all)
      if (selectedCategory === categoryId) {
        onCategoryChange(null);
      } else {
        onCategoryChange(categoryId);
      }
      // Close mobile sidebar after selection
      onClose?.();
    },
    [selectedCategory, onCategoryChange, onClose]
  );

  const handleAllProductsClick = useCallback(() => {
    onCategoryChange(null);
    onClose?.();
  }, [onCategoryChange, onClose]);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className='fixed inset-0 z-40 bg-black/50 lg:hidden'
          onClick={onClose}
          aria-hidden='true'
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 shrink-0 transform border-r border-slate-200 bg-white p-6 transition-transform duration-300 ease-in-out dark:border-slate-800 dark:bg-slate-900 lg:relative lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className='absolute right-4 top-4 rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 lg:hidden dark:hover:bg-slate-800 dark:hover:text-slate-300'
          aria-label='Tutup menu'
        >
          <svg
            className='h-5 w-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>

        {/* Logo */}
        <div className='mb-8 flex items-center gap-3'>
          <div className='flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white'>
            <span className='text-lg font-bold'>B</span>
          </div>
          <span className='text-lg font-bold text-slate-900 dark:text-white'>
            Bookworm
          </span>
        </div>

        {/* Category Label */}
        <p className='mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500'>
          Kategori
        </p>

        {/* Category Navigation */}
        <nav className='space-y-1'>
          {/* All Products */}
          <button
            onClick={handleAllProductsClick}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
              selectedCategory === null
                ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
            }`}
          >
            <svg
              className='h-5 w-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1.5}
                d='M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z'
              />
            </svg>
            Semua Produk
          </button>

          {/* Category Items */}
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
