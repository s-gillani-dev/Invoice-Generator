import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Favicon from "@/../public/logo.svg"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invoice Generator",
  description: "Invoice Generator application for generating invoices with a user-friendly interface. This app allows users to create invoices with real-time data updates.",
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
