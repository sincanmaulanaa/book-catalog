'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/contexts';

export function CartButton() {
  const { items, totalItems, totalPrice, removeFromCart, updateQuantity } =
    useCart();
  const [isOpen, setIsOpen] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price * 16000);
  };

  return (
    <div className='relative'>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='relative rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
        aria-label='Keranjang belanja'
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
            d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
          />
        </svg>

        {/* Badge */}
        {totalItems > 0 && (
          <span className='absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white'>
            {totalItems > 99 ? '99+' : totalItems}
          </span>
        )}
      </button>

      {/* Cart Dropdown */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className='fixed inset-0 z-40'
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className='absolute right-0 top-full z-50 mt-2 w-80 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-700 dark:bg-slate-800 sm:w-96'>
            <div className='mb-4 flex items-center justify-between'>
              <h3 className='text-lg font-bold text-slate-900 dark:text-white'>
                Keranjang ({totalItems})
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className='rounded-lg p-1 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
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
            </div>

            {items.length === 0 ? (
              <div className='py-8 text-center'>
                <svg
                  className='mx-auto mb-3 h-12 w-12 text-slate-300 dark:text-slate-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.5}
                    d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
                <p className='text-sm text-slate-500 dark:text-slate-400'>
                  Keranjang masih kosong
                </p>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className='max-h-64 space-y-3 overflow-y-auto'>
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className='flex gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-700/50'
                    >
                      <div className='relative h-16 w-12 shrink-0 overflow-hidden rounded-lg'>
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          sizes='48px'
                          className='object-cover'
                        />
                      </div>
                      <div className='flex-1 min-w-0'>
                        <Link
                          href={`/books/${item.id}`}
                          onClick={() => setIsOpen(false)}
                          className='line-clamp-1 text-sm font-medium text-slate-900 hover:text-emerald-600 dark:text-white dark:hover:text-emerald-400'
                        >
                          {item.title}
                        </Link>
                        <p className='text-xs text-emerald-600 dark:text-emerald-400'>
                          {formatPrice(
                            item.price * (1 - item.discountPercentage / 100)
                          )}
                        </p>
                        <div className='mt-1 flex items-center gap-2'>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className='rounded bg-slate-200 px-1.5 py-0.5 text-xs hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-500'
                          >
                            -
                          </button>
                          <span className='text-xs font-medium text-slate-700 dark:text-slate-300'>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className='rounded bg-slate-200 px-1.5 py-0.5 text-xs hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-500'
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className='self-start rounded p-1 text-slate-400 hover:bg-slate-200 hover:text-rose-500 dark:hover:bg-slate-600'
                        aria-label='Hapus item'
                      >
                        <svg
                          className='h-4 w-4'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className='mt-4 border-t border-slate-200 pt-4 dark:border-slate-600'>
                  <div className='flex items-center justify-between'>
                    <span className='font-medium text-slate-600 dark:text-slate-400'>
                      Total
                    </span>
                    <span className='text-lg font-bold text-emerald-600 dark:text-emerald-400'>
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                  <button className='mt-3 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition-colors hover:bg-emerald-700'>
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
