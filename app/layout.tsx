import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CursorEffect from "@/components/CursorEffect";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "saksham gupta | Modern Portfolio",
  description: "A modern, interactive portfolio showcasing creative development and design work.",
  keywords: ["portfolio", "developer", "designer", "frontend", "react", "nextjs"],
  authors: [{ name: "saksham gupta" }],
  openGraph: {
    type: "website",
    title: "saksham gupta | Modern Portfolio",
    description: "A modern, interactive portfolio showcasing creative development and design work.",
    siteName: "saksham gupta Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <CursorEffect />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
