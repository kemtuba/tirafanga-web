// FILE: app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Cinzel } from "next/font/google";
import "./globals.css";
// --- CHANGE #1 ---
import { Navbar } from "@/components/Navbar"; // Import Navbar instead of Header
import Footer from "@/components/Footer";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-playfair-display',
});

const cinzel = Cinzel({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-cinzel',
});

export const metadata: Metadata = {
  title: "Tirafanga | Partnership and Progress in Ghana",
  description: "Uplifting local communities through co-designed programs in education, business development, and food sovereignty.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${cinzel.variable}`}>
      <body className={`font-body bg-brand-cream text-text-dark`}>
        {/* --- CHANGE #2 --- */}
        <Navbar /> {/* Use the Navbar component */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
