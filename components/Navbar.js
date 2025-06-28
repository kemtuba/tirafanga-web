// FILE: components/Navbar.js
"use client"

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const Navbar = () => {
  return (
    // --- CHANGE 1: HEADER STYLE ---
    // Changed from green to a semi-transparent white with a bottom border and blur effect.
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
      <nav className="container mx-auto px-6 py-2 flex justify-between items-center">
        <Link href="/">
          
          {/* --- CHANGE 2: LOGO SIZE --- */}
          {/* Further reduced the logo size for a more compact look. */}
          <Image 
            src="/tirafangalogodesign.png" 
            alt="Tirafanga Sustainability Alliance Logo" 
            width={108} 
            height={30} 
          />
          
        </Link>

        {/* --- CHANGE 3: LINK TEXT COLOR --- */}
        {/* Text color is now dark green to be visible on the light background. */}
        <div className="flex items-center space-x-8 text-lg font-body text-brand-green">
          <Link href="/about" className="hover:text-brand-gold transition-colors">About</Link>
          <Link href="/programs" className="hover:text-brand-gold transition-colors">Programs</Link>
          <Link href="#get-involved" className="hover:text-brand-gold transition-colors">Get Involved</Link>
        </div>

        <div>
            {/* No change needed for the button, it already looks great on a light background. */}
            <Button className="bg-brand-gold text-brand-green font-bold font-body hover:bg-yellow-400" asChild>
              <Link href="https://buy.stripe.com/your_link_here" target="_blank">Donate Today</Link>
            </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;