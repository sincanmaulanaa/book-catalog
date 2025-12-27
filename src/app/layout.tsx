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
  title: 'Bookworm | Temukan Bacaan Favoritmu',
  description:
    'Eksplorasi ribuan koleksi buku terbaik. Temukan kisah yang menginspirasi dan pengetahuan baru setiap hari.',
  keywords: ['bookworm', 'katalog', 'buku', 'bacaan', 'literasi', 'toko buku'],
  authors: [{ name: 'Bookworm Team' }],
  creator: 'Bookworm',
  publisher: 'Bookworm',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Bookworm',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'Bookworm',
    title: 'Bookworm | Temukan Bacaan Favoritmu',
    description:
      'Eksplorasi ribuan koleksi buku terbaik. Temukan kisah yang menginspirasi dan pengetahuan baru setiap hari.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bookworm | Temukan Bacaan Favoritmu',
    description:
      'Eksplorasi ribuan koleksi buku terbaik. Temukan kisah yang menginspirasi dan pengetahuan baru setiap hari.',
  },
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
