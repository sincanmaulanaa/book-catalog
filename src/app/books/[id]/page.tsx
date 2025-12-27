import { notFound } from 'next/navigation';
import { fetchBookById } from '@/lib/api';
import {
  BackButton,
  ProductGallery,
  ProductInfo,
  ProductSpecs,
  ProductReviews,
  ProductMeta,
} from '@/components/BookDetail';

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

  return (
    <main className='min-h-screen bg-white dark:bg-slate-900'>
      <BackButton />

      <div className='mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8'>
        <div className='grid gap-8 lg:grid-cols-2 lg:gap-12'>
          {/* Left Column - Images */}
          <ProductGallery
            images={book.images}
            thumbnail={book.thumbnail}
            title={book.title}
            discountPercentage={book.discountPercentage}
          />

          {/* Right Column - Details */}
          <ProductInfo
            title={book.title}
            category={book.category}
            tags={book.tags}
            brand={book.brand}
            rating={book.rating}
            reviewCount={book.reviews?.length}
            price={book.price}
            discountPercentage={book.discountPercentage}
            availabilityStatus={book.availabilityStatus}
            stock={book.stock}
            description={book.description}
          />
        </div>

        <ProductSpecs
          sku={book.sku}
          weight={book.weight}
          dimensions={book.dimensions}
          minimumOrderQuantity={book.minimumOrderQuantity}
          warrantyInformation={book.warrantyInformation}
          shippingInformation={book.shippingInformation}
          returnPolicy={book.returnPolicy}
        />

        <ProductReviews reviews={book.reviews} />

        <ProductMeta meta={book.meta} />
      </div>
    </main>
  );
}
