import { RatingStars } from '@/components/RatingStars';
import { AvailabilityBadge } from '@/components/AvailabilityBadge';
import { AddToCartButton } from '@/components/AddToCartButton';

interface ProductInfoProps {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
  tags?: string[];
  brand?: string;
  rating: number;
  reviewCount?: number;
  price: number;
  discountPercentage?: number;
  availabilityStatus: string;
  stock: number;
  description: string;
}

export function ProductInfo({
  id,
  title,
  thumbnail,
  category,
  tags,
  brand,
  rating,
  reviewCount,
  price,
  discountPercentage,
  availabilityStatus,
  stock,
  description,
}: ProductInfoProps) {
  return (
    <div className='space-y-6'>
      {/* Category & Tags */}
      <div className='flex flex-wrap items-center gap-2'>
        <span className='rounded-full bg-emerald-600 px-4 py-1.5 text-sm font-semibold capitalize text-white'>
          {category}
        </span>
        {tags?.map((tag) => (
          <span
            key={tag}
            className='rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300'
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1 className='text-3xl font-bold leading-tight text-slate-900 dark:text-slate-100 sm:text-4xl'>
        {title}
      </h1>

      {/* Brand/Publisher */}
      {brand && (
        <p className='text-lg text-slate-600 dark:text-slate-400'>
          oleh{' '}
          <span className='font-semibold text-slate-800 dark:text-slate-200'>
            {brand}
          </span>
        </p>
      )}

      {/* Rating */}
      <div className='flex items-center gap-3'>
        <RatingStars rating={rating} showValue />
        {reviewCount && reviewCount > 0 && (
          <span className='text-sm text-slate-500 dark:text-slate-400'>
            ({reviewCount} ulasan)
          </span>
        )}
      </div>

      {/* Price */}
      <div className='rounded-2xl bg-emerald-50 p-6 dark:bg-emerald-950/30'>
        <div className='flex items-end gap-3'>
          <span className='text-4xl font-bold text-emerald-600 dark:text-emerald-400'>
            Rp {(price * 15000).toLocaleString('id-ID')}
          </span>
          {discountPercentage && discountPercentage > 0 && (
            <span className='text-lg text-slate-400 line-through'>
              Rp{' '}
              {(price * 15000 * (1 + discountPercentage / 100)).toLocaleString(
                'id-ID'
              )}
            </span>
          )}
        </div>
        <div className='mt-3'>
          <AvailabilityBadge status={availabilityStatus} stock={stock} />
        </div>
      </div>

      {/* Description */}
      <div className='space-y-2'>
        <h2 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
          Deskripsi
        </h2>
        <p className='leading-relaxed text-slate-600 dark:text-slate-400'>
          {description}
        </p>
      </div>

      {/* CTA Button */}
      <AddToCartButton
        book={{
          id,
          title,
          thumbnail,
          price,
          discountPercentage: discountPercentage || 0,
          brand,
        }}
        stock={stock}
      />
    </div>
  );
}
