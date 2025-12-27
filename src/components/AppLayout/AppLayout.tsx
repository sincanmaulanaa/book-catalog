'use client';

import { useState, useCallback } from 'react';
import { Sidebar, Header } from '@/components';

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
    <div className='flex min-h-screen flex-col bg-white dark:bg-slate-900'>
      {/* Header */}
      <Header onMenuClick={openSidebar} />

      <div className='flex flex-1'>
        <Sidebar
          selectedCategory={showCategoryFilter ? selectedCategory : null}
          onCategoryChange={handleCategoryChange}
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
        />

        {/* Main Content */}
        <div className='flex-1'>{children}</div>
      </div>
    </div>
  );
}
