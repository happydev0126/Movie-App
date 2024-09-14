import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactQueryClientProvider } from '@/components/ReactQueryClientProvider'

import Header from "@/components/Header";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import SearchBox from '@/components/SearchBox';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Movie Sansaar",
  description: "Your own movie world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
        <Header/>
        <Navbar/>
        <SearchBox />
        {children}
        </Providers>
      </body>
    </html>
    </ReactQueryClientProvider>
  );
}
