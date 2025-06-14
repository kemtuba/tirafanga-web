'use client';

import { useState } from 'react';
import { Button } from './ui/Button';

export const ContactForm = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus('Sending...');
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('Message sent successfully! Thank you.');
                (event.target as HTMLFormElement).reset();
            } else {
                setStatus('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error(error);
            setStatus('An error occurred. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-gray">Name</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red"/>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-gray">Email</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red"/>
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-gray">Message</label>
                <textarea id="message" name="message" rows={5} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red"></textarea>
            </div>
            <div>
                <Button type="submit" size="lg" className="w-full">Send Message</Button>
            </div>
            {status && <p className="text-center mt-4 text-brand-gray">{status}</p>}
        </form>
    );
}
