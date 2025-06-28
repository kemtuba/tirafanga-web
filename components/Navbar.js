// FILE: components/Navbar.js
"use client"

import { useState } from 'react'; // Import useState for menu toggle
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react'; // Import icons for the hamburger menu

export const Navbar = () => {
  // State to manage whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="py-2 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            {/* --- CHANGE: Final logo size reduction --- */}
            <Image 
              src="/tirafangalogodesign.png" 
              alt="Tirafanga Sustainability Alliance Logo" 
              width={72} 
              height={18} 
            />
          </Link>

          {/* Desktop Navigation (hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-8 font-body text-brand-green">
            <Link href="/about" className="text-lg hover:text-brand-gold transition-colors">About</Link>
            <Link href="/programs" className="text-lg hover:text-brand-gold transition-colors">Programs</Link>
            <Link href="#get-involved" className="text-lg hover:text-brand-gold transition-colors">Get Involved</Link>
          </div>
          <div className="hidden md:block">
            <Button className="bg-brand-gold text-brand-green font-bold font-body hover:bg-yellow-400" asChild>
              <Link href="https://buy.stripe.com/your_link_here" target="_blank">Donate Today</Link>
            </Button>
          </div>

          {/* Hamburger Menu Button (visible only on mobile) */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X size={28} className="text-brand-green" /> : <Menu size={28} className="text-brand-green" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay (conditionally rendered) */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 w-full bg-white shadow-lg pb-4">
            <nav className="flex flex-col items-center space-y-4 font-body text-brand-green text-xl pt-4">
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link href="/programs" onClick={() => setIsMenuOpen(false)}>Programs</Link>
              <Link href="#get-involved" onClick={() => setIsMenuOpen(false)}>Get Involved</Link>
              <Button className="bg-brand-gold text-brand-green font-bold" asChild>
                <Link href="https://buy.stripe.com/your_link_here" target="_blank">Donate Today</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

