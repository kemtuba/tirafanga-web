// FILE: app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Cinzel } from "next/font/google"; // Correct fonts imported
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-playfair-display', // CSS variable for headings
});

const cinzel = Cinzel({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-cinzel', // CSS variable for body
});

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
    <html lang="en" className={`${playfairDisplay.variable} ${cinzel.variable}`}>
      <body className={`font-body bg-brand-cream text-text-dark`}> {/* Default styles applied */}
        <Header /> {/* Assumes your Navbar is inside Header */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

