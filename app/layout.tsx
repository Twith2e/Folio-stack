import type { Metadata } from "next";
import "./globals.css";
import { quicksand } from "./fonts";
import Navbar from "./ui/nav-bar";
import Head from "next/head";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <body className={`${quicksand.className} antialiased`}>
          <header className="bg-white fixed top-0 w-full z-10">
            <Navbar />
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
