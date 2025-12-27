'use client';

import { useState, useCallback } from 'react';
import { BookCatalog, Sidebar, HeroSection, Header } from '@/components';

export function HomeClient() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleCategoryChange = useCallback((category: string | null) => {
    setSelectedCategory(category);
  }, []);

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
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
        />

        {/* Main Content */}
        <div className='flex-1'>
          <main className='p-4 lg:p-8'>
            {/* Hero Section - only show when no category filter */}
            {selectedCategory === null && <HeroSection />}

            <BookCatalog category={selectedCategory} />
          </main>
        </div>
      </div>
    </div>
  );
}
