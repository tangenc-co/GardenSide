import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Garden Side | Furniture catalog",
    template: "%s | Garden Side",
  },
  description: "Furniture and interiors — product catalog. Online shopping coming later.",
  metadataBase: new URL('https://gardenside.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gardenside.com',
    siteName: 'Garden Side',
    title: 'Garden Side | Furniture catalog',
    description: 'Furniture and interiors — product catalog. Online shopping coming later.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Garden Side Furniture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garden Side | Furniture catalog',
    description: 'Furniture and interiors — product catalog. Online shopping coming later.',
    images: ['/og-image.jpg'],
    creator: '@gardenside',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="h-full min-h-0 bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">

        {children}
      </body>
    </html>
  );
}
