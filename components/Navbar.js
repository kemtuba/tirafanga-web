// FILE: components/Navbar.js
"use client"

import Image from 'next/image'; // This import will now be correctly used
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const Navbar = () => {
  return (
    <header className="bg-brand-green text-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-6 py-2 flex justify-between items-center">
        <Link href="/">
          
          {/* --- THE FIX --- */}
          {/* We are now restoring the proper Next.js Image component */}
          {/* The temporary <img> tag has been removed */}
          <Image 
            src="/tirafanga-logo.png" 
            alt="Tirafanga Sustainability Alliance Logo" 
            width={180} 
            height={50} 
          />
          
        </Link>

        {/* Navigation Links - making them always visible for now */}
        <div className="flex items-center space-x-8 text-lg font-body">
          <Link href="/about" className="hover:text-brand-gold transition-colors">About</Link>
          <Link href="/programs" className="hover:text-brand-gold transition-colors">Programs</Link>
          <Link href="#get-involved" className="hover:text-brand-gold transition-colors">Get Involved</Link>
        </div>

        {/* Donate Button - making it always visible for now */}
        <div>
            <Button className="bg-brand-gold text-brand-green font-bold font-body hover:bg-yellow-400" asChild>
              <Link href="https://buy.stripe.com/your_link_here" target="_blank">Donate Today</Link>
            </Button>
        </div>
      </nav>
    </header>
  );
};

// Note: I also removed the `hidden md:flex` and `hidden md:block` classes 
// to make the navigation links and button always visible, addressing that earlier point.
// You can add them back if you prefer to hide these on mobile.