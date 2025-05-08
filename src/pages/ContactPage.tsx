import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../components/ui/SectionTitle';
import heroImage from '../images/testimonial_hero.jpg';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // ✅ Added phone
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    try {
      const response = await fetch('https://zrsteffen.app.n8n.cloud/webhook/contact-form-webhook',

        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams(formData).toString()
        }
      );

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Ternes Construction</title>
        <meta name="description" content="Get in touch with Ternes Construction. We'd love to hear about your project and discuss how we can help bring your vision to life." />
        <meta property="og:title" content="Contact Us | Ternes Construction" />
        <meta property="og:description" content="Get in touch with Ternes Construction. We'd love to hear about your project and discuss how we can help bring your vision to life." />
        <meta property="og:image" content="/images/testimonial_hero.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ternesconstruction.com/contact" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-28 md:pt-32 h-[75vh] md:h-[90vh] bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Contact Us Hero" className="w-full h-full object-cover object-center brightness-[0.95]" />
          <div className="absolute inset-0 bg-black/30 z-10" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-20 flex flex-col justify-center h-full">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              We’d love to learn more about your project. Reach out to discuss how we can help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <SectionTitle
          title="Get in Touch"
          subtitle="Let's Build Something Together"
          description="Have a question or want to work together? We'd love to hear from you."
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
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  required
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
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  required
                />
              </div>
            </div>

            {/* ✅ New Phone Number Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
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
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Send Message
              </button>
              {status === 'success' && (
                <p className="text-green-600 text-center mt-4">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-center mt-4">Something went wrong. Please try again later.</p>
              )}
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
