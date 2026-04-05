import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar"; // Ensure this path matches your structure

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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[var(--text-main)]">
        {/* The Navbar stays at the top of every page */}
        <Navbar />
        
        {/* The 'flex-grow' ensures this area takes up available space */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer will go here later */}
      </body>
    </html>
  );
}