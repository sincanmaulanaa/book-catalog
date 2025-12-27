import Image from 'next/image';

interface ProductGalleryProps {
  images?: string[];
  thumbnail: string;
  title: string;
  discountPercentage?: number;
}

export function ProductGallery({
  images,
  thumbnail,
  title,
  discountPercentage,
}: ProductGalleryProps) {
  const mainImage = images?.[0] || thumbnail;

  return (
    <div className='space-y-4'>
      {/* Main Image */}
      <div className='relative aspect-square overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-800'>
        <Image
          src={mainImage}
          alt={`Sampul ${title}`}
          fill
          sizes='(max-width: 1024px) 100vw, 50vw'
          className='object-cover'
          priority
        />
        {/* Discount Badge */}
        {discountPercentage && discountPercentage > 0 && (
          <div className='absolute right-4 top-4 rounded-full bg-rose-500 px-3 py-1.5 text-sm font-bold text-white shadow-lg'>
            -{Math.round(discountPercentage)}%
          </div>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {images && images.length > 1 && (
        <div className='flex gap-3 overflow-x-auto pb-2'>
          {images.map((image, index) => (
            <div
              key={index}
              className='relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 border-slate-200 transition-all hover:border-emerald-500 dark:border-slate-700 dark:hover:border-emerald-400'
            >
              <Image
                src={image}
                alt={`${title} - Gambar ${index + 1}`}
                fill
                sizes='80px'
                className='object-cover'
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
