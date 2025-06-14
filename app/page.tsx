import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ContactForm } from '@/components/ContactForm';
import { Briefcase, Droplets, Leaf } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-red text-white">
        <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">A Familiar Way Forward</h1>
            <p className="mt-4 text-xl text-red-100">Sustainable Agriculture and Education in Ghana.</p>
            <div className="mt-8">
              <Button size="lg" variant="outlineWhite" asChild>
                <Link href="/about">Discover Our Story</Link>
              </Button>
            </div>
          </div>
          <div className="bg-red-400/50 h-80 rounded-lg flex items-center justify-center">
             {/* Replace with a real image */}
             <Image src="/placeholder.svg" width={500} height={320} alt="Ghanaian community members" className="rounded-lg object-cover"/>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-serif font-bold">Our Mission</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-brand-gray">For over 10 years, Tirafanga has been working in Ghana to create sustainable change through co-designed programs that uplift local communities. What started with education has grown into a holistic approach to community development.</p>
        </div>
      </section>
      
      {/* Our Impact Section */}
      <section className="py-20">
          <div className="container mx-auto px-6">
              <h2 className="text-4xl font-serif font-bold text-center">Our Impact</h2>
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
                  <div>
                      <p className="text-5xl font-bold text-brand-red">10+</p>
                      <p className="mt-2 text-brand-gray">Years in Ghana</p>
                  </div>
                   <div>
                      <p className="text-5xl font-bold text-brand-red">2000+</p>
                      <p className="mt-2 text-brand-gray">Students Educated</p>
                  </div>
                   <div>
                      <p className="text-5xl font-bold text-brand-red">5+</p>
                      <p className="mt-2 text-brand-gray">Community Projects</p>
                  </div>
                   <div>
                      <p className="text-5xl font-bold text-brand-red">10,000+</p>
                      <p className="mt-2 text-brand-gray">Lives Improved</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Our Programs Section */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-center">Our Programs</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-brand-gray text-center">We follow a holistic approach to community empowerment through these key focus areas.</p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {/* Program Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col">
              <Briefcase className="w-12 h-12 text-brand-red" />
              <h3 className="text-2xl font-serif font-bold mt-4">Global Star Leadership Academy</h3>
              <p className="mt-2 text-brand-gray flex-grow">Our K-8 school provides quality education to children in rural Ghana, focusing on critical thinking and leadership skills.</p>
              <Button variant="outline" className="mt-6 self-start" asChild><Link href="/programs">Learn More</Link></Button>
            </div>
            {/* Program Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col">
              <Droplets className="w-12 h-12 text-brand-red" />
              <h3 className="text-2xl font-serif font-bold mt-4">Mikobah Clean Water Distribution</h3>
              <p className="mt-2 text-brand-gray flex-grow">We build and maintain clean water access points, ensuring communities have reliable access to safe drinking water.</p>
              <Button variant="outline" className="mt-6 self-start" asChild><Link href="/programs">Learn More</Link></Button>
            </div>
            {/* Program Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col">
              <Leaf className="w-12 h-12 text-brand-red" />
              <h3 className="text-2xl font-serif font-bold mt-4">Good Cashew Farmer Economics</h3>
              <p className="mt-2 text-brand-gray flex-grow">We help local entrepreneurs and smallholder farmers develop sustainable businesses and access fair markets.</p>
              <Button variant="outline" className="mt-6 self-start" asChild><Link href="/programs">Learn More</Link></Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Get Involved Section */}
      <section id="get-involved" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold">Get Involved</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-brand-gray">Join us in our mission to create sustainable change in Ghana. There are many ways to contribute.</p>
          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-brand-cream p-8 rounded-lg shadow-md text-left">
              <h3 className="text-2xl font-serif font-bold text-brand-red">Donate</h3>
              <p className="mt-2 text-brand-gray">Your contribution funds critical projects in education, water, and sustainable agriculture.</p>
              <Button className="mt-6" asChild>
                <Link href="https://buy.stripe.com/your_link_here" target="_blank">Give Today</Link>
              </Button>
            </div>
            <div className="bg-brand-cream p-8 rounded-lg shadow-md text-left">
              <h3 className="text-2xl font-serif font-bold text-brand-red">Volunteer</h3>
              <p className="mt-2 text-brand-gray">Lend your skills and time, either remotely or in Ghana, to make a direct impact.</p>
               <Button className="mt-6" asChild>
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
            <div className="bg-brand-cream p-8 rounded-lg shadow-md text-left">
              <h3 className="text-2xl font-serif font-bold text-brand-red">Partner</h3>
              <p className="mt-2 text-brand-gray">We collaborate with organizations and businesses that share our vision for a self-sufficient future.</p>
               <Button className="mt-6" asChild>
                <Link href="#contact">Inquire Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-brand-cream">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center">Contact Us</h2>
            <div className="mt-8 max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <ContactForm />
            </div>
        </div>
      </section>
    </>
  );
}