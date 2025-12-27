import type { AvailabilityStatus } from '@/types/book';

interface AvailabilityBadgeProps {
  status: string;
  stock: number;
}

/**
 * Displays availability status with appropriate styling
 * Normalizes various status strings to consistent display
 */
export function AvailabilityBadge({ status, stock }: AvailabilityBadgeProps) {
  const normalizedStatus = normalizeStatus(status, stock);
  const styles = getStatusStyles(normalizedStatus);

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${styles}`}
    >
      <span className='h-1.5 w-1.5 rounded-full bg-current opacity-70' />
      {normalizedStatus}
    </span>
  );
}

function normalizeStatus(status: string, stock: number): AvailabilityStatus {
  const lowerStatus = status.toLowerCase();

  if (stock === 0 || lowerStatus.includes('out')) {
    return 'Habis';
  }

  if (stock <= 5 || lowerStatus.includes('low')) {
    return 'Stok Terbatas';
  }

  return 'Tersedia';
}

function getStatusStyles(status: AvailabilityStatus): string {
  switch (status) {
    case 'Tersedia':
      return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400';
    case 'Stok Terbatas':
      return 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400';
    case 'Habis':
      return 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400';
    default:
      return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300';
  }
}
