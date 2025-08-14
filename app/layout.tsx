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

export const metadata: Metadata = {
  title: 'Erwin Mark Añora | Full Stack Developer Portfolio',
  description: 'Full Stack Developer Erwin Mark Añora showcases projects and skills in Laravel, Vue, React, and TailwindCSS.',
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
