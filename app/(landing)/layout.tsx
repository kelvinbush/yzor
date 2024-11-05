import React from "react";
import Navbar from "@/app/(landing)/_components/navbar";
import Footer from "@/app/(landing)/_components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
