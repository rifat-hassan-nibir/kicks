import BottomBar from "@/components/common/footer/BottomBar";
import Footer from "@/components/common/footer/Footer";
import NewsLetter from "@/components/common/footer/NewsLetter";
import Navbar from "@/components/common/navbar/Navbar";
import type { Metadata } from "next";
import { Open_Sans, Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kicks",
  description: "Do it right",
};

import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${openSans.variable} antialiased font-rubik`}>
        <CartProvider>
          <div className="mt-8 px-4 lg:px-0">
            <Navbar />
          </div>
          {children}
          <div className="px-4 lg:px-0">
            <NewsLetter />
            <Footer />
            <BottomBar />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
