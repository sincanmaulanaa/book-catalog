'use client';

import { useState } from 'react';
import { useCart } from '@/contexts';

interface AddToCartButtonProps {
  book: {
    id: number;
    title: string;
    thumbnail: string;
    price: number;
    discountPercentage: number;
    brand?: string;
  };
  stock: number;
}

export function AddToCartButton({ book, stock }: AddToCartButtonProps) {
  const { addToCart, isInCart, getItemQuantity } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const inCart = isInCart(book.id);
  const cartQuantity = getItemQuantity(book.id);
  const isOutOfStock = stock <= 0;

  const handleAddToCart = () => {
    addToCart(book, quantity);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
    setQuantity(1);
  };

  const incrementQuantity = () => {
    if (quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  if (isOutOfStock) {
    return (
      <button
        disabled
        className='w-full cursor-not-allowed rounded-xl bg-slate-300 py-4 text-lg font-bold text-slate-500 dark:bg-slate-700 dark:text-slate-400'
      >
        Stok Habis
      </button>
    );
  }

  return (
    <div className='space-y-3'>
      {/* Quantity Selector */}
      <div className='flex items-center gap-4'>
        <span className='text-sm font-medium text-slate-600 dark:text-slate-400'>
          Jumlah:
        </span>
        <div className='flex items-center rounded-lg border border-slate-200 dark:border-slate-700'>
          <button
            onClick={decrementQuantity}
            disabled={quantity <= 1}
            className='px-3 py-2 text-slate-600 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-400 dark:hover:bg-slate-800'
            aria-label='Kurangi jumlah'
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
                d='M20 12H4'
              />
            </svg>
          </button>
          <span className='w-12 text-center font-medium text-slate-900 dark:text-white'>
            {quantity}
          </span>
          <button
            onClick={incrementQuantity}
            disabled={quantity >= stock}
            className='px-3 py-2 text-slate-600 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-400 dark:hover:bg-slate-800'
            aria-label='Tambah jumlah'
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
                d='M12 4v16m8-8H4'
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className='flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-600 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-emerald-700 hover:shadow-xl active:scale-[0.98]'
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
        Tambah ke Keranjang
      </button>

      {/* Success Message */}
      {showSuccess && (
        <div className='flex items-center gap-2 rounded-lg bg-emerald-50 px-4 py-3 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'>
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
              d='M5 13l4 4L19 7'
            />
          </svg>
          <span className='text-sm font-medium'>
            Berhasil ditambahkan ke keranjang!
          </span>
        </div>
      )}

      {/* Already in Cart Notice */}
      {inCart && !showSuccess && (
        <div className='flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-3 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'>
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
              d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <span className='text-sm font-medium'>
            {cartQuantity} item sudah ada di keranjang
          </span>
        </div>
      )}
    </div>
  );
}
