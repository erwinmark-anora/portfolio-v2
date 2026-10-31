import type { Metadata } from "next";
import { Nunito, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CursorBackground  from "@/components/layouts/CursorBackground ";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Wallpaper from "@/components/layouts/Wallpaper";
import BackToTop from "@/components/layouts/BackToTop";
import { site } from "@/content/portfolio";

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

const siteTitle = site.title;
const siteDescription = site.description;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: '/',
    siteName: site.name,
    type: 'website',
  },
  // The preview image comes from app/opengraph-image.tsx; X falls back to og:image.
  // The favicon comes from app/favicon.ico.
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
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
        className={`${nunito.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground selection:bg-accent selection:text-accent-foreground`}
      >
        <Wallpaper />
        <CursorBackground />
        <Navbar />
        <main className="mx-auto w-full max-w-content px-gutter">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
