import type { Metadata } from 'next';
import { DM_Sans, DM_Mono } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Katalog Buku Modern | Temukan Bacaan Favoritmu',
  description:
    'Jelajahi koleksi buku pilihan kami. Cari berdasarkan judul, genre, atau penerbit untuk menemukan bacaan favoritmu.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='id'>
      <body className={`${dmSans.variable} ${dmMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
