import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../components/ui/SectionTitle';
import testimonialHero from '../images/testimonial_hero.jpg';

const ContactPage: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzjrdPcsGOal5hrGQ0k7cwB4_GXSrbK61lVf3jcVKZTBG8PVDPg2qG85dpPU2lAE6En/exec', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      setStatus('error');
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Ternes Construction</title>
        <meta name="description" content="Get in touch with Ternes Construction. We'd love to hear about your project and discuss how we can help bring your vision to life." />
        <meta property="og:title" content="Contact Us | Ternes Construction" />
        <meta property="og:description" content="Get in touch with our builder-direct team to start planning your custom home, barndominium, or rural build." />
        <meta property="og:image" content="https://www.ternesconstruction.com/images/testimonial_hero.jpg" />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[75vh] md:h-[90vh] bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={testimonialHero}
            alt="Contact Ternes Construction"
            className="w-full h-full object-cover object-center brightness-[0.95]"
          />
          <div className="absolute inset-0 bg-black/20 z-10" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-20 flex flex-col justify-center h-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Let’s talk about your project. We’ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <SectionTitle
          title="Get in Touch"
          subtitle="Tell us about your goals"
          description="We’d love to hear from you. Please fill out the form below and we’ll respond shortly."
        />

        <div className="max-w-3xl mx-auto mt-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                {status === 'sending'
                  ? 'Sending...'
                  : status === 'success'
                  ? 'Message Sent!'
                  : status === 'error'
                  ? 'Something went wrong. Try again.'
                  : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
