import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorBackground  from "@/components/layouts/CursorBackground ";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = 'Erwin Mark Añora | Full-Stack Developer, Laravel First';
const siteDescription = 'Full-stack developer with 10+ years building web apps from database to deployment. Laravel and Livewire, Vue, React, Next.js and Python/Django.';

export const metadata: Metadata = {
  metadataBase: new URL('https://erwinmarkanora.vercel.app'),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: '/',
    siteName: 'Erwin Mark Añora',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: siteTitle,
    description: siteDescription,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${geistMono.variable} font-sans antialiased bg-primary text-white selection:bg-accent selection:text-primary`}
      >
        <CursorBackground />
        <Navbar />
        <main className="container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
