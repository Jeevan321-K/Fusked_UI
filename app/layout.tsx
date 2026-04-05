import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TeddyStore | Hugs That Speak Louder",
  description: "Premium soft toys for every emotion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-white overflow-x-hidden antialiased">
        <Navbar />
        {/* Removed pt-20 md:pt-28 because Hero and ShopPage need to flow beneath the translucent navbar */}
        <main className="flex-grow w-full flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}