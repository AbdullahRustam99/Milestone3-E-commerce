import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CartProvider from "@/app/cartContext/createContext";
const geistSans = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Milestone-3 E-commerce",
  description: "Milestone-3 E-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider> {children}</CartProvider>
      </body>
    </html>
  );
}
