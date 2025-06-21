import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-red text-white">
            {/* CHANGE: Reduced padding for mobile (px-4, py-8) */}
            <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    {/* CHANGE: Reduced font size for mobile */}
                    <h3 className="text-xl md:text-2xl font-serif font-bold">Tirafanga</h3>
                    {/* CHANGE: Made tagline smaller */}
                    <p className="mt-2 text-sm text-red-100">A familiar way forward.</p>
                </div>
                <div>
                    {/* CHANGE: Reduced margin-bottom */}
                    <h4 className="font-bold mb-3 uppercase tracking-wider text-red-200">Quick Links</h4>
                    {/* CHANGE: Made all link text smaller */}
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/about" className="hover:underline text-red-100">About Us</Link></li>
                        <li><Link href="/programs" className="hover:underline text-red-100">Our Programs</Link></li>
                        <li><Link href="/gallery" className="hover:underline text-red-100">Our Impact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-3 uppercase tracking-wider text-red-200">Get Involved</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="https://buy.stripe.com/your_link_here" target="_blank" className="hover:underline text-red-100">Donate</Link></li>
                        <li><Link href="/#get-involved" className="hover:underline text-red-100">Volunteer</Link></li>
                        <li><Link href="/#get-involved" className="hover:underline text-red-100">Partner</Link></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-bold mb-3 uppercase tracking-wider text-red-200">Contact</h4>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2 text-red-100"><Mail size={16} /> info@tirafanga.org</li>
                        <li className="flex items-center gap-2 text-red-100"><Phone size={16} /> +1 (123) 456-7890</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-red-600/50">
                {/* CHANGE: Stack items on mobile and reduce padding */}
                <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-red-200">
                    <p className="mb-2 sm:mb-0">&copy; {new Date().getFullYear()} Tirafanga. All Rights Reserved.</p>
                    <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;