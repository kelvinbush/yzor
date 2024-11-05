import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import React from "react";
import { Open_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "YZOR",
  description: "Your Wealth Management App",
};

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "auto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("", openSans.className)}>{children}</body>
    </html>
  );
}
