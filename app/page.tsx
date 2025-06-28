"use client"

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ContactForm } from '@/components/ContactForm';
import { Briefcase, Droplets, Leaf, Quote } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-green text-white">
        <div className="container mx-auto px-6 pt-20 pb-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              A Familiar Way Forward
            </h1>
            <p className="mt-4 text-xl text-gray-200 font-body">
              Sustainable Agriculture and Education in Ghana.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-brand-gold text-brand-green font-bold hover:bg-yellow-400" asChild>
                <Link href="/about">Discover Our Story</Link>
              </Button>
            </div>
          </div>
          <div className="h-96 w-full relative rounded-lg">
             <Image 
               src="/heroimage.png" // Replace with a high-quality, relevant image
               layout="fill"
               objectFit="cover"
               alt="Happy members of the Ghanaian community served by Tirafanga" 
               className="rounded-lg"
             />
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-6 text-center">
            <h2 className="font-heading text-4xl font-bold text-brand-green">Our Mission</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-text-dark font-body">
              For over 10 years, Tirafanga has been working in Ghana to create sustainable change through co-designed programs that uplift local communities. What started with education has grown into a holistic approach to community development.
            </p>
        </div>
      </section>
      
      {/* Our Impact Section */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
              <h2 className="font-heading text-4xl font-bold text-center text-brand-green">Our Impact</h2>
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 text-center max-w-4xl mx-auto">
                <div className="text-center">
                    <p className="font-heading text-5xl font-bold text-brand-gold">10+</p>
                    <p className="mt-2 text-text-dark font-body">Years in Ghana</p>
                </div>
                <div className="text-center">
                    <p className="font-heading text-5xl font-bold text-brand-gold">2000+</p>
                    <p className="mt-2 text-text-dark font-body">Students Educated</p>
                </div>
                <div className="text-center">
                    <p className="font-heading text-5xl font-bold text-brand-gold">5+</p>
                    <p className="mt-2 text-text-dark font-body">Community Projects</p>
                </div>
                <div className="text-center">
                    <p className="font-heading text-5xl font-bold text-brand-gold">10,000+</p>
                    <p className="mt-2 text-text-dark font-body">Lives Improved</p>
                </div>
              </div>
          </div>
      </section>
      
      {/* --- NEW: Testimonial Section --- */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-6 text-center max-w-4xl">
            <Quote className="mx-auto w-12 h-12 text-brand-gold" />
            <blockquote className="mt-6">
                <p className="font-heading text-3xl text-brand-green leading-snug">
  &ldquo;Tirafanga did not just give us resources; they partnered with us. Our children now have a future we could only dream of.&rdquo;
</p>
            </blockquote>
            <cite className="mt-6 block font-body text-lg text-text-dark not-italic">
              — Ama Serwaa, Community Elder
            </cite>
        </div>
      </section>

      {/* Our Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-4xl font-bold text-center text-brand-green">Our Programs</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-text-dark text-center font-body">We follow a holistic approach to community empowerment through these key focus areas.</p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {/* Program Cards updated with new styles */}
            <div className="bg-brand-cream p-8 rounded-lg shadow-sm flex flex-col">
              <Briefcase className="w-12 h-12 text-brand-green" />
              <h3 className="font-heading text-2xl font-bold mt-4 text-brand-green">Rising Star Leaderhsip Academy</h3>
              <p className="mt-2 text-text-dark font-body flex-grow">Our K-8 school provides quality education, focusing on critical thinking and leadership skills.</p>
              <Button variant="outline" className="mt-6 self-start border-brand-green text-brand-green hover:bg-brand-green hover:text-white" asChild><Link href="/programs">Learn More</Link></Button>
            </div>
            <div className="bg-brand-cream p-8 rounded-lg shadow-sm flex flex-col">
              <Droplets className="w-12 h-12 text-brand-green" />
              <h3 className="font-heading text-2xl font-bold mt-4 text-brand-green">Mikobah</h3>
              <p className="mt-2 text-text-dark font-body flex-grow">We build and maintain clean water access points, ensuring communities have reliable access to safe water.</p>
              <Button variant="outline" className="mt-6 self-start border-brand-green text-brand-green hover:bg-brand-green hover:text-white" asChild><Link href="/programs">Learn More</Link></Button>
            </div>
            <div className="bg-brand-cream p-8 rounded-lg shadow-sm flex flex-col">
              <Leaf className="w-12 h-12 text-brand-green" />
              <h3 className="font-heading text-2xl font-bold mt-4 text-brand-green"> Good Cashew</h3>
              <p className="mt-2 text-text-dark font-body flex-grow">We help smallholder farmers develop sustainable businesses and access fair markets.</p>
              <Button variant="outline" className="mt-6 self-start border-brand-green text-brand-green hover:bg-brand-green hover:text-white" asChild><Link href="/programs">Learn More</Link></Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Get Involved Section */}
      <section id="get-involved" className="py-20 bg-brand-cream">
        <div className="container mx-auto px-6 text-center">
          {/* Main heading updated with brand font and color */}
          <h2 className="font-heading text-4xl font-bold text-brand-green">Get Involved</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-text-dark">
            Join us in our mission to create sustainable change in Ghana. There are many ways to contribute.
          </p>
          
          {/* Cards updated for new branding */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
            
            {/* Card 1: Donate */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col">
              <h3 className="font-heading text-2xl font-bold text-brand-green">Donate</h3>
              <p className="mt-2 text-text-dark flex-grow">
                Your contribution funds critical projects in education, water, and sustainable agriculture.
              </p>
              {/* Button updated to primary brand color */}
              <Button className="mt-6 bg-brand-green text-white hover:bg-green-800 self-start" asChild>
                <Link href="https://buy.stripe.com/your_link_here" target="_blank">Give Today</Link>
              </Button>
            </div>
            
            {/* Card 2: Volunteer */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col">
              <h3 className="font-heading text-2xl font-bold text-brand-green">Volunteer</h3>
              <p className="mt-2 text-text-dark flex-grow">
                Lend your skills and time, either remotely or in Ghana, to make a direct impact.
              </p>
              <Button className="mt-6 bg-brand-green text-white hover:bg-green-800 self-start" asChild>
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
            
            {/* Card 3: Partner */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col">
              <h3 className="font-heading text-2xl font-bold text-brand-green">Partner</h3>
              <p className="mt-2 text-text-dark flex-grow">
                We collaborate with organizations that share our vision for a self-sufficient future.
              </p>
              <Button className="mt-6 bg-brand-green text-white hover:bg-green-800 self-start" asChild>
                <Link href="#contact">Inquire Now</Link>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-brand-cream">
        <div className="container mx-auto px-6">
            <h2 className="font-heading text-4xl font-bold text-center text-brand-green">Contact Us</h2>
            <div className="mt-8 max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <ContactForm />
            </div>
        </div>
      </section>
    </>
  );
}

