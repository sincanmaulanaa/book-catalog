'use client';

import { AppLayout } from '@/components';

interface BookDetailClientProps {
  children: React.ReactNode;
}

export function BookDetailClient({ children }: BookDetailClientProps) {
  return <AppLayout>{children}</AppLayout>;
}
