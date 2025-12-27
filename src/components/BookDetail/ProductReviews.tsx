import { RatingStars } from '@/components/RatingStars';

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface ProductReviewsProps {
  reviews?: Review[];
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function ProductReviews({ reviews }: ProductReviewsProps) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <section className='mt-16'>
      <h2 className='mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100'>
        Ulasan Pembeli ({reviews.length})
      </h2>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {reviews.map((review, index) => (
          <article
            key={index}
            className='rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800'
          >
            <div className='mb-3 flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white'>
                  {review.reviewerName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className='font-semibold text-slate-900 dark:text-slate-100'>
                    {review.reviewerName}
                  </p>
                  <p className='text-xs text-slate-500 dark:text-slate-400'>
                    {formatDate(review.date)}
                  </p>
                </div>
              </div>
            </div>
            <div className='mb-3'>
              <RatingStars rating={review.rating} />
            </div>
            <p className='text-sm leading-relaxed text-slate-600 dark:text-slate-400'>
              {review.comment}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
