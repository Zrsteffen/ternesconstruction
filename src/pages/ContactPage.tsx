import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import testimonialHero from '../images/testimonial_hero.jpg';

const ContactPage: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbzjrdPcsGOal5hrGQ0k7cwB4_GXSrbK61lVf3jcVKZTBG8PVDPg2qG85dpPU2lAE6En/exec',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      alert('Message sent successfully!');
      form.reset();
    } else {
      alert('There was an issue sending your message. Please try again.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Ternes Construction</title>
        <meta
          name="description"
          content="Contact Ternes Construction to discuss your dream build. We’re ready to help you plan, budget, and build with confidence."
        />
        <meta property="og:title" content="Contact Us | Ternes Construction" />
        <meta
          property="og:description"
          content="Get in touch with Ternes Construction. We'd love to hear about your project and discuss how we can help bring your vision to life."
        />
        <meta
          property="og:image"
          content="https://www.ternesconstruction.com/images/testimonial_hero.jpg"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact Ternes Construction
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Let’s talk about your project. We’re ready to help you plan, budget, and build with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <SectionTitle
          title="Get in Touch"
          subtitle="Let’s Build Something Together"
          description="Fill out the form and we’ll follow up promptly. We look forward to connecting."
        />

        <div className="max-w-3xl mx-auto mt-12">
          <form className="space-y-6" onSubmit={handleSubmit}>
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
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <p className="mt-2 text-gray-600">info@ternesconstruction.com</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900">Phone</h3>
              <p className="mt-2 text-gray-600">
                Jamie: (316) 644-2410<br />
                Jordan: (316) 644-2481
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900">Location</h3>
              <p className="mt-2 text-gray-600">
                Wichita, Kansas<br />
                Serving Wichita and surrounding areas
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
