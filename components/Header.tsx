import Link from 'next/link';
import { Button } from './ui/Button';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-brand-red">
          Tirafanga
        </Link>
        <div className="hidden md:flex items-center space-x-8 text-brand-dark">
          <Link href="/about" className="hover:text-brand-red transition-colors">About</Link>
          <Link href="/programs" className="hover:text-brand-red transition-colors">Programs</Link>
          <Link href="/gallery" className="hover:text-brand-red transition-colors">Gallery</Link>
          <Link href="/#get-involved" className="hover:text-brand-red transition-colors">Get Involved</Link>
        </div>
        <Button asChild>
          {/* IMPORTANT: Replace with your actual Stripe Payment Link */}
          <Link href="https://buy.stripe.com/your_link_here" target="_blank">
            Donate
          </Link>
        </Button>
      </nav>
    </header>
  );
};

export default Header;