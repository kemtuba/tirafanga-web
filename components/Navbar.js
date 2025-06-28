// FILE: components/Navbar.js
"use client"

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const Navbar = () => {
  return (
    <header className="bg-brand-green text-white sticky top-0 z-50 shadow-lg">
      {/* The py-2 class controls the vertical padding, making the bar slimmer */}
      <nav className="container mx-auto px-6 py-2 flex justify-between items-center">
        <Link href="/">
          
          {/* --- CHANGE: Logo dimensions are significantly smaller --- */}
          <Image 
            src="/tirafanga-logo.png" 
            alt="Tirafanga Sustainability Alliance Logo" 
            width={130} 
            height={36} 
          />
          
        </Link>

        <div className="flex items-center space-x-8 text-lg font-body">
          <Link href="/about" className="hover:text-brand-gold transition-colors">About</Link>
          <Link href="/programs" className="hover:text-brand-gold transition-colors">Programs</Link>
          <Link href="#get-involved" className="hover:text-brand-gold transition-colors">Get Involved</Link>
        </div>

        <div>
            <Button className="bg-brand-gold text-brand-green font-bold font-body hover:bg-yellow-400" asChild>
              <Link href="https://buy.stripe.com/your_link_here" target="_blank">Donate Today</Link>
            </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
