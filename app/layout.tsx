import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Font configuration
const inter = Inter({ subsets: ["latin"], display: 'swap', variable: '--font-inter' });
const lora = Lora({ subsets: ["latin"], display: 'swap', variable: '--font-lora' });

export const metadata: Metadata = {
  title: "Tirafanga | Partnership and Progress in Ghana",
  description: "Uplifting local communities through co-designed programs in education, business development, and food sovereignty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable} font-sans bg-white text-brand-dark`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}