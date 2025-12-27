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
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${styles}`}
    >
      {normalizedStatus}
    </span>
  );
}

function normalizeStatus(status: string, stock: number): AvailabilityStatus {
  const lowerStatus = status.toLowerCase();

  if (stock === 0 || lowerStatus.includes('out')) {
    return 'Out of Stock';
  }

  if (stock <= 5 || lowerStatus.includes('low')) {
    return 'Low Stock';
  }

  return 'In Stock';
}

function getStatusStyles(status: AvailabilityStatus): string {
  switch (status) {
    case 'In Stock':
      return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
    case 'Low Stock':
      return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400';
    case 'Out of Stock':
      return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
    default:
      return 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300';
  }
}
