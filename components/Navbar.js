// FILE: components/Navbar.js
"use client"

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const Navbar = () => {
  return (
    <header className="bg-brand-green text-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-6 py-2 flex justify-between items-center">
       <Link href="/">
  {/* <Image src="/tirafanga-logo.png" alt="Tirafanga Sustainability Alliance Logo" width={180} height={50} /> */}
  <img src="/tirafanga-logo.png" alt="Tirafanga Logo" style={{ width: '180px', height: '50px' }} />
</Link>

        <div className="hidden md:flex items-center space-x-8 text-lg font-body"> {/* font-body added */}
          <Link href="/about" className="hover:text-brand-gold transition-colors">About</Link>
          <Link href="/programs" className="hover:text-brand-gold transition-colors">Programs</Link>
          <Link href="#get-involved" className="hover:text-brand-gold transition-colors">Get Involved</Link>
        </div>

        <div>
            <Button className="bg-brand-gold text-brand-green font-bold font-body hover:bg-yellow-400" asChild> {/* font-body added */}
              <Link href="https://buy.stripe.com/your_link_here" target="_blank">Donate Today</Link>
            </Button>
        </div>
      </nav>
    </header>
  );
};
