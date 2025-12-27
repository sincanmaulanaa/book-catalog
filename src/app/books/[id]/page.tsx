import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchBookById } from '@/lib/api';
import { RatingStars } from '@/components/RatingStars';
import { AvailabilityBadge } from '@/components/AvailabilityBadge';

interface BookDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: BookDetailPageProps) {
  const { id } = await params;
  try {
    const book = await fetchBookById(Number(id));
    return {
      title: `${book.title} | Katalog Buku`,
      description: book.description,
    };
  } catch {
    return {
      title: 'Buku Tidak Ditemukan | Katalog Buku',
    };
  }
}

export default async function BookDetailPage({ params }: BookDetailPageProps) {
  const { id } = await params;

  let book;
  try {
    book = await fetchBookById(Number(id));
  } catch {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <main className='min-h-screen bg-linear-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950'>
      {/* Navigation */}
      <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
        <Link
          href='/'
          className='inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400'
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
              d='M15 19l-7-7 7-7'
            />
          </svg>
          Kembali ke Katalog
        </Link>
      </div>

      {/* Main Content */}
      <div className='mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8'>
        <div className='grid gap-8 lg:grid-cols-2 lg:gap-12'>
          {/* Left Column - Images */}
          <div className='space-y-4'>
            {/* Main Image */}
            <div className='relative aspect-square overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-800'>
              <Image
                src={book.images?.[0] || book.thumbnail}
                alt={`Sampul ${book.title}`}
                fill
                sizes='(max-width: 1024px) 100vw, 50vw'
                className='object-cover'
                priority
              />
              {/* Discount Badge */}
              {book.discountPercentage && book.discountPercentage > 0 && (
                <div className='absolute right-4 top-4 rounded-full bg-rose-500 px-3 py-1.5 text-sm font-bold text-white shadow-lg'>
                  -{Math.round(book.discountPercentage)}%
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {book.images && book.images.length > 1 && (
              <div className='flex gap-3 overflow-x-auto pb-2'>
                {book.images.map((image, index) => (
                  <div
                    key={index}
                    className='relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 border-slate-200 transition-all hover:border-indigo-500 dark:border-slate-700 dark:hover:border-indigo-400'
                  >
                    <Image
                      src={image}
                      alt={`${book.title} - Gambar ${index + 1}`}
                      fill
                      sizes='80px'
                      className='object-cover'
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Details */}
          <div className='space-y-6'>
            {/* Category & Tags */}
            <div className='flex flex-wrap items-center gap-2'>
              <span className='rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-semibold capitalize text-white'>
                {book.category}
              </span>
              {book.tags?.map((tag) => (
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
              {book.title}
            </h1>

            {/* Brand/Publisher */}
            {book.brand && (
              <p className='text-lg text-slate-600 dark:text-slate-400'>
                oleh{' '}
                <span className='font-semibold text-slate-800 dark:text-slate-200'>
                  {book.brand}
                </span>
              </p>
            )}

            {/* Rating */}
            <div className='flex items-center gap-3'>
              <RatingStars rating={book.rating} showValue />
              {book.reviews && book.reviews.length > 0 && (
                <span className='text-sm text-slate-500 dark:text-slate-400'>
                  ({book.reviews.length} ulasan)
                </span>
              )}
            </div>

            {/* Price */}
            <div className='rounded-2xl bg-linear-to-r from-indigo-50 to-purple-50 p-6 dark:from-indigo-950/50 dark:to-purple-950/50'>
              <div className='flex items-end gap-3'>
                <span className='text-4xl font-bold text-indigo-600 dark:text-indigo-400'>
                  Rp {(book.price * 15000).toLocaleString('id-ID')}
                </span>
                {book.discountPercentage && book.discountPercentage > 0 && (
                  <span className='text-lg text-slate-400 line-through'>
                    Rp{' '}
                    {(
                      book.price *
                      15000 *
                      (1 + book.discountPercentage / 100)
                    ).toLocaleString('id-ID')}
                  </span>
                )}
              </div>
              <div className='mt-3'>
                <AvailabilityBadge
                  status={book.availabilityStatus}
                  stock={book.stock}
                />
              </div>
            </div>

            {/* Description */}
            <div className='space-y-2'>
              <h2 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
                Deskripsi
              </h2>
              <p className='leading-relaxed text-slate-600 dark:text-slate-400'>
                {book.description}
              </p>
            </div>

            {/* CTA Button */}
            <button
              type='button'
              className='w-full rounded-2xl bg-linear-to-r from-indigo-600 to-purple-600 py-4 text-lg font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl hover:shadow-indigo-500/40 active:scale-[0.98]'
            >
              Tambah ke Keranjang
            </button>
          </div>
        </div>

        {/* Specifications Section */}
        <section className='mt-16'>
          <h2 className='mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100'>
            Spesifikasi Produk
          </h2>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {/* SKU */}
            {book.sku && (
              <div className='rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800'>
                <dt className='text-sm font-medium text-slate-500 dark:text-slate-400'>
                  SKU
                </dt>
                <dd className='mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100'>
                  {book.sku}
                </dd>
              </div>
            )}

            {/* Weight */}
            {book.weight && (
              <div className='rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800'>
                <dt className='text-sm font-medium text-slate-500 dark:text-slate-400'>
                  Berat
                </dt>
                <dd className='mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100'>
                  {book.weight} gram
                </dd>
              </div>
            )}

            {/* Dimensions */}
            {book.dimensions && (
              <div className='rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800'>
                <dt className='text-sm font-medium text-slate-500 dark:text-slate-400'>
                  Dimensi (P × L × T)
                </dt>
                <dd className='mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100'>
                  {book.dimensions.width} × {book.dimensions.height} ×{' '}
                  {book.dimensions.depth} cm
                </dd>
              </div>
            )}

            {/* Minimum Order */}
            {book.minimumOrderQuantity && (
              <div className='rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800'>
                <dt className='text-sm font-medium text-slate-500 dark:text-slate-400'>
                  Minimum Pemesanan
                </dt>
                <dd className='mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100'>
                  {book.minimumOrderQuantity} unit
                </dd>
              </div>
            )}

            {/* Warranty */}
            {book.warrantyInformation && (
              <div className='rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800'>
                <dt className='text-sm font-medium text-slate-500 dark:text-slate-400'>
                  Garansi
                </dt>
                <dd className='mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100'>
                  {book.warrantyInformation}
                </dd>
              </div>
            )}

            {/* Shipping */}
            {book.shippingInformation && (
              <div className='rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800'>
                <dt className='text-sm font-medium text-slate-500 dark:text-slate-400'>
                  Pengiriman
                </dt>
                <dd className='mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100'>
                  {book.shippingInformation}
                </dd>
              </div>
            )}

            {/* Return Policy */}
            {book.returnPolicy && (
              <div className='rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800'>
                <dt className='text-sm font-medium text-slate-500 dark:text-slate-400'>
                  Kebijakan Pengembalian
                </dt>
                <dd className='mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100'>
                  {book.returnPolicy}
                </dd>
              </div>
            )}
          </div>
        </section>

        {/* Reviews Section */}
        {book.reviews && book.reviews.length > 0 && (
          <section className='mt-16'>
            <h2 className='mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100'>
              Ulasan Pembeli ({book.reviews.length})
            </h2>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {book.reviews.map((review, index) => (
                <article
                  key={index}
                  className='rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800'
                >
                  <div className='mb-3 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-purple-500 text-sm font-bold text-white'>
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
        )}

        {/* Meta Information */}
        {book.meta && (
          <section className='mt-16 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800'>
            <h2 className='mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100'>
              Informasi Tambahan
            </h2>
            <dl className='grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-3'>
              {book.meta.barcode && (
                <div>
                  <dt className='font-medium text-slate-500 dark:text-slate-400'>
                    Barcode
                  </dt>
                  <dd className='mt-1 font-mono text-slate-900 dark:text-slate-100'>
                    {book.meta.barcode}
                  </dd>
                </div>
              )}
              {book.meta.qrCode && (
                <div>
                  <dt className='font-medium text-slate-500 dark:text-slate-400'>
                    QR Code
                  </dt>
                  <dd className='mt-1'>
                    <Image
                      src={book.meta.qrCode}
                      alt='QR Code'
                      width={80}
                      height={80}
                      className='rounded-lg border border-slate-200 dark:border-slate-600'
                    />
                  </dd>
                </div>
              )}
              {book.meta.createdAt && (
                <div>
                  <dt className='font-medium text-slate-500 dark:text-slate-400'>
                    Ditambahkan
                  </dt>
                  <dd className='mt-1 text-slate-900 dark:text-slate-100'>
                    {formatDate(book.meta.createdAt)}
                  </dd>
                </div>
              )}
              {book.meta.updatedAt && (
                <div>
                  <dt className='font-medium text-slate-500 dark:text-slate-400'>
                    Terakhir Diperbarui
                  </dt>
                  <dd className='mt-1 text-slate-900 dark:text-slate-100'>
                    {formatDate(book.meta.updatedAt)}
                  </dd>
                </div>
              )}
            </dl>
          </section>
        )}
      </div>
    </main>
  );
}
