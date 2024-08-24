import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Favicon from "@/../public/logo.svg";
import AppHeader from "@/components/AppHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invoice Generator",
  description:
    "Invoice Generator application for generating invoices with a user-friendly interface. This app allows users to create invoices with real-time data updates.",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative max-w-[1440px] min-h-[1327px] mx-auto">
          <AppHeader />
          {children}
        </main>
      </body>
    </html>
  );
}
