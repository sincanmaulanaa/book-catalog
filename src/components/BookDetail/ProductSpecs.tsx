interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface ProductSpecsProps {
  sku?: string;
  weight?: number;
  dimensions?: Dimensions;
  minimumOrderQuantity?: number;
  warrantyInformation?: string;
  shippingInformation?: string;
  returnPolicy?: string;
}

function SpecCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className='rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800'>
      <dt className='text-sm font-medium text-slate-500 dark:text-slate-400'>
        {label}
      </dt>
      <dd className='mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100'>
        {value}
      </dd>
    </div>
  );
}

export function ProductSpecs({
  sku,
  weight,
  dimensions,
  minimumOrderQuantity,
  warrantyInformation,
  shippingInformation,
  returnPolicy,
}: ProductSpecsProps) {
  const hasSpecs =
    sku ||
    weight ||
    dimensions ||
    minimumOrderQuantity ||
    warrantyInformation ||
    shippingInformation ||
    returnPolicy;

  if (!hasSpecs) return null;

  return (
    <section className='mt-16'>
      <h2 className='mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100'>
        Spesifikasi Buku
      </h2>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {sku && <SpecCard label='SKU' value={sku} />}
        {weight && <SpecCard label='Berat' value={`${weight} gram`} />}
        {dimensions && (
          <SpecCard
            label='Dimensi (P × L × T)'
            value={`${dimensions.width} × ${dimensions.height} × ${dimensions.depth} cm`}
          />
        )}
        {minimumOrderQuantity && (
          <SpecCard
            label='Minimum Pemesanan'
            value={`${minimumOrderQuantity} unit`}
          />
        )}
        {warrantyInformation && (
          <SpecCard label='Garansi' value={warrantyInformation} />
        )}
        {shippingInformation && (
          <SpecCard label='Pengiriman' value={shippingInformation} />
        )}
        {returnPolicy && (
          <SpecCard label='Kebijakan Pengembalian' value={returnPolicy} />
        )}
      </div>
    </section>
  );
}
