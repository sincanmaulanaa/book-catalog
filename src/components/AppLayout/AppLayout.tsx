'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { Sidebar } from '@/components';

interface AppLayoutProps {
  children: React.ReactNode;
  selectedCategory?: string | null;
  onCategoryChange?: (category: string | null) => void;
  showCategoryFilter?: boolean;
}

export function AppLayout({
  children,
  selectedCategory = null,
  onCategoryChange,
  showCategoryFilter = false,
}: AppLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleCategoryChange = useCallback(
    (category: string | null) => {
      onCategoryChange?.(category);
    },
    [onCategoryChange]
  );

  const openSidebar = useCallback(() => {
    setIsSidebarOpen(true);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  return (
    <div className='flex min-h-screen bg-white dark:bg-slate-900'>
      <Sidebar
        selectedCategory={showCategoryFilter ? selectedCategory : null}
        onCategoryChange={handleCategoryChange}
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />

      {/* Main Content */}
      <div className='flex-1'>
        {/* Mobile Header with Hamburger */}
        <header className='sticky top-0 z-30 flex items-center gap-4 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur-sm lg:hidden dark:border-slate-800 dark:bg-slate-900/95'>
          <button
            onClick={openSidebar}
            className='rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
            aria-label='Buka menu kategori'
          >
            <svg
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
          <div className='flex items-center gap-2'>
            <Image
              src='/logo-with-name.png'
              alt='Bookworm'
              width={120}
              height={32}
              className='h-8 w-auto dark:brightness-0 dark:invert'
            />
          </div>
        </header>

        {children}
      </div>
    </div>
  );
}
