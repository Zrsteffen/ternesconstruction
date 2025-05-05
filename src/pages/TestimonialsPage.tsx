import React from 'react';
import { Helmet } from 'react-helmet-async';
import testimonialHero from '../images/testimonial_hero.jpg';

const TestimonialsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Client Testimonials | Ternes Construction</title>
        <meta
          name="description"
          content="Hear from real clients about their experience working with Ternes Construction, Wichita’s trusted family-owned builder."
        />
        <meta property="og:title" content="Client Testimonials | Ternes Construction" />
        <meta
          property="og:description"
          content="Hear from real clients about their experience working with Ternes Construction, Wichita’s trusted family-owned builder."
        />
        <meta property="og:image" content="/images/testimonial_hero.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ternesconstruction.com/testimonials" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Client Testimonials | Ternes Construction" />
        <meta
          name="twitter:description"
          content="Hear from real clients about their experience working with Ternes Construction, Wichita’s trusted family-owned builder."
        />
        <meta name="twitter:image" content="/images/testimonial_hero.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={testimonialHero}
            alt="Happy clients in front of a Ternes custom home"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            What Our Clients Say
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Trusted by families across Kansas to build their dream homes.
          </p>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Testimonials Coming Soon</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We're gathering stories from clients who trusted us to bring their dream homes to life.
            Check back soon to see their experiences.
          </p>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;
