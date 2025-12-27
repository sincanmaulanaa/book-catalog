import Image from 'next/image';

interface Meta {
  createdAt?: string;
  updatedAt?: string;
  barcode?: string;
  qrCode?: string;
}

interface ProductMetaProps {
  meta?: Meta;
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function ProductMeta({ meta }: ProductMetaProps) {
  if (!meta) return null;

  const hasContent =
    meta.barcode || meta.qrCode || meta.createdAt || meta.updatedAt;

  if (!hasContent) return null;

  return (
    <section className='mt-16 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800'>
      <h2 className='mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100'>
        Informasi Tambahan
      </h2>
      <dl className='grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-3'>
        {meta.barcode && (
          <div>
            <dt className='font-medium text-slate-500 dark:text-slate-400'>
              Barcode
            </dt>
            <dd className='mt-1 font-mono text-slate-900 dark:text-slate-100'>
              {meta.barcode}
            </dd>
          </div>
        )}
        {meta.qrCode && (
          <div>
            <dt className='font-medium text-slate-500 dark:text-slate-400'>
              QR Code
            </dt>
            <dd className='mt-1'>
              <Image
                src={meta.qrCode}
                alt='QR Code'
                width={80}
                height={80}
                className='rounded-lg border border-slate-200 dark:border-slate-600'
              />
            </dd>
          </div>
        )}
        {meta.createdAt && (
          <div>
            <dt className='font-medium text-slate-500 dark:text-slate-400'>
              Ditambahkan
            </dt>
            <dd className='mt-1 text-slate-900 dark:text-slate-100'>
              {formatDate(meta.createdAt)}
            </dd>
          </div>
        )}
        {meta.updatedAt && (
          <div>
            <dt className='font-medium text-slate-500 dark:text-slate-400'>
              Terakhir Diperbarui
            </dt>
            <dd className='mt-1 text-slate-900 dark:text-slate-100'>
              {formatDate(meta.updatedAt)}
            </dd>
          </div>
        )}
      </dl>
    </section>
  );
}
