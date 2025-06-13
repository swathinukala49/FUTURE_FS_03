import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'AJIO - Fashion Forward, Future Ready',
  description: 'Discover the latest in fashion with AJIO\'s curated collection of premium brands, sustainable fashion, and cutting-edge style.',
  keywords: 'AJIO, fashion, clothing, brands, online shopping, sustainable fashion, premium wear',
  authors: [{ name: 'AJIO Fashion' }],
  openGraph: {
    title: 'AJIO - Fashion Forward, Future Ready',
    description: 'Discover the latest in fashion with AJIO\'s curated collection of premium brands.',
    url: 'https://ajio.com',
    siteName: 'AJIO',
    images: [
      {
        url: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg',
        width: 1200,
        height: 630,
        alt: 'AJIO Fashion Collection',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AJIO - Fashion Forward, Future Ready',
    description: 'Discover the latest in fashion with AJIO\'s curated collection of premium brands.',
    images: ['https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable} antialiased`}>{children}</body>
    </html>
  );
}