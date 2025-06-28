// FILE: components/Footer.js
import Link from 'next/link';
import Image from 'next/image'; // <-- ADDED: Import the Image component
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-green text-white font-body">
            <div className="container mx-auto px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                {/* --- FIX: Using the Image component for the logo --- */}
                <div>
                  <Link href="/">
                    <Image 
                      src="/tirafanga-logo.png" 
                      alt="Tirafanga Logo" 
                      width={180} 
                      height={50} 
                    />
                  </Link>
                  <p className="mt-2 text-sm text-gray-300">A familiar way forward.</p>
                </div>

                <div>
                    <h4 className="font-bold mb-3 uppercase tracking-wider text-brand-gold">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/about" className="hover:underline text-gray-300">About Us</Link></li>
                        <li><Link href="/programs" className="hover:underline text-gray-300">Our Programs</Link></li>
                        <li><Link href="/gallery" className="hover:underline text-gray-300">Our Impact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-3 uppercase tracking-wider text-brand-gold">Get Involved</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="https://buy.stripe.com/your_link_here" target="_blank" className="hover:underline text-gray-300">Donate</Link></li>
                        <li><Link href="/#get-involved" className="hover:underline text-gray-300">Volunteer</Link></li>
                        <li><Link href="/#get-involved" className="hover:underline text-gray-300">Partner</Link></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-bold mb-3 uppercase tracking-wider text-brand-gold">Contact</h4>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2 text-gray-300"><Mail size={16} /> info@tirafanga.org</li>
                        <li className="flex items-center gap-2 text-gray-300"><Phone size={16} /> +1 (123) 456-7890</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-white/20">
                <div className="container mx-auto px-4 md:px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
                    <p className="mb-2 sm:mb-0">&copy; {new Date().getFullYear()} Tirafanga. All Rights Reserved.</p>
                    <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

