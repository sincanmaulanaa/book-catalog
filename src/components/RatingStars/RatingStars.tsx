interface RatingStarsProps {
  rating: number;
  maxRating?: number;
}

/**
 * Visual star rating component
 * Displays filled, half-filled, and empty stars based on rating
 */
export function RatingStars({ rating, maxRating = 5 }: RatingStarsProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div
      className='flex items-center gap-0.5'
      role='img'
      aria-label={`Rating: ${rating.toFixed(1)} out of ${maxRating} stars`}
    >
      {/* Full stars */}
      {Array.from({ length: fullStars }, (_, i) => (
        <StarIcon key={`full-${i}`} filled />
      ))}

      {/* Half star */}
      {hasHalfStar && <StarIcon half />}

      {/* Empty stars */}
      {Array.from({ length: emptyStars }, (_, i) => (
        <StarIcon key={`empty-${i}`} />
      ))}

      <span className='ml-1.5 text-sm text-zinc-600 dark:text-zinc-400'>
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

interface StarIconProps {
  filled?: boolean;
  half?: boolean;
}

function StarIcon({ filled = false, half = false }: StarIconProps) {
  if (half) {
    return (
      <svg
        className='h-4 w-4'
        viewBox='0 0 20 20'
        fill='none'
        aria-hidden='true'
      >
        <defs>
          <linearGradient id='halfGradient'>
            <stop offset='50%' stopColor='#FBBF24' />
            <stop offset='50%' stopColor='#D1D5DB' />
          </linearGradient>
        </defs>
        <path
          d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
          fill='url(#halfGradient)'
        />
      </svg>
    );
  }

  return (
    <svg
      className={`h-4 w-4 ${
        filled ? 'text-amber-400' : 'text-zinc-300 dark:text-zinc-600'
      }`}
      viewBox='0 0 20 20'
      fill='currentColor'
      aria-hidden='true'
    >
      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
    </svg>
  );
}
