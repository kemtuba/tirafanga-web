"use client"

// IMPORTANT: Add useState to your React import
import { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/Button';
// IMPORTANT: Import the Menu and X icons
import { Menu, X } from 'lucide-react';

const Header = () => {
  // 1. State to manage whether the mobile menu is open or not
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-serif font-bold text-brand-red">
          Tirafanga
        </Link>
        
        {/* Desktop Navigation (Hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm text-brand-dark">
          <Link href="/about" className="hover:text-brand-red transition-colors">About</Link>
          <Link href="/programs" className="hover:text-brand-red transition-colors">Programs</Link>
          <Link href="/gallery" className="hover:text-brand-red transition-colors">Gallery</Link>
          <Link href="/#get-involved" className="hover:text-brand-red transition-colors">Get Involved</Link>
        </div>
        
        {/* Donate Button (conditionally hidden on smaller screens for layout) */}
        <div className="hidden sm:block">
            <Button asChild size="sm">
              <Link href="https://buy.stripe.com/your_link_here" target="_blank">
                Donate
              </Link>
            </Button>
        </div>

        {/* 2. Mobile Menu Button (Hamburger Icon) - Only visible on mobile */}
        <div className="md:hidden">
          <Button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle state on click
            size="icon" 
            variant="ghost"
          >
            {/* Shows X icon if menu is open, otherwise shows Menu icon */}
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* 3. Mobile Menu Panel - Renders only if isMenuOpen is true */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/about" className="hover:text-brand-red transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/programs" className="hover:text-brand-red transition-colors" onClick={() => setIsMenuOpen(false)}>Programs</Link>
            <Link href="/gallery" className="hover:text-brand-red transition-colors" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
            <Link href="/#get-involved" className="hover:text-brand-red transition-colors" onClick={() => setIsMenuOpen(false)}>Get Involved</Link>
            
            {/* Optional: Show Donate button in mobile menu if it was hidden */}
            <div className="sm:hidden pt-4 border-t border-gray-200">
                <Button asChild className="w-full">
                  <Link href="https://buy.stripe.com/your_link_here" target="_blank" onClick={() => setIsMenuOpen(false)}>
                    Donate
                  </Link>
                </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;