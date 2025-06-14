import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-red text-white">
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-2xl font-serif font-bold">Tirafanga</h3>
                    <p className="mt-2 text-red-100">A familiar way forward.</p>
                    {/* Add social media links here if you want */}
                </div>
                <div>
                    <h4 className="font-bold mb-4 uppercase tracking-wider text-red-200">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><Link href="/about" className="hover:underline text-red-100">About Us</Link></li>
                        <li><Link href="/programs" className="hover:underline text-red-100">Our Programs</Link></li>
                        <li><Link href="/gallery" className="hover:underline text-red-100">Our Impact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4 uppercase tracking-wider text-red-200">Get Involved</h4>
                    <ul className="space-y-2">
                        <li><Link href="https://buy.stripe.com/your_link_here" target="_blank" className="hover:underline text-red-100">Donate</Link></li>
                        <li><Link href="/#get-involved" className="hover:underline text-red-100">Volunteer</Link></li>
                        <li><Link href="/#get-involved" className="hover:underline text-red-100">Partner</Link></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-bold mb-4 uppercase tracking-wider text-red-200">Contact</h4>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-red-100"><Mail size={16} /> info@tirafanga.org</li>
                        <li className="flex items-center gap-2 text-red-100"><Phone size={16} /> +1 (123) 456-7890</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-red-600/50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center text-sm text-red-200">
                    <p>&copy; {new Date().getFullYear()} Tirafanga. All Rights Reserved.</p>
                    <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
