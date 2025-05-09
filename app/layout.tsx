import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";
import Navbar from "./nav-bar";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Folio Stack",
  description: "This is a portfolio website generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className={`${inter.className} antialiased`}>
        <header className="bg-white fixed top-0 w-full z-10">
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
