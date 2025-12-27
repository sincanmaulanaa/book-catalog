'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CartButton } from '@/components/CartButton';

interface HeaderProps {
  onMenuClick?: () => void;
  showMenuButton?: boolean;
}

export function Header({ onMenuClick, showMenuButton = true }: HeaderProps) {
  return (
    <header className='sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/95'>
      <div className='flex h-16 items-center justify-between px-4 lg:px-6'>
        {/* Left Section */}
        <div className='flex items-center gap-4'>
          {/* Hamburger Menu - Mobile Only */}
          {showMenuButton && (
            <button
              onClick={onMenuClick}
              className='rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden dark:text-slate-400 dark:hover:bg-slate-800'
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
          )}

          {/* Logo */}
          <Link href='/' className='flex items-center'>
            <Image
              src='/logo-with-name.png'
              alt='Bookworm'
              width={140}
              height={40}
              className='h-12 w-auto dark:brightness-0 dark:invert'
              priority
            />
          </Link>
        </div>

        {/* Right Section */}
        <div className='flex items-center gap-3'>
          {/* Cart Button */}
          <CartButton />
        </div>
      </div>
    </header>
  );
}
