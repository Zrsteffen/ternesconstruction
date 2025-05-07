import React from 'react';
import { Helmet } from 'react-helmet-async';
import testimonialHero from '../images/testimonial_hero.jpg';

const testimonials = [
  {
    name: 'Lakyn Cleaver',
    role: 'Custom Home Client',
    quote: `Jamie and Jordan have been THE BEST to work with on the preliminary details of preparing to break ground. They have made sure that every small detail is absolutely perfect and what we love. My hubby and I can't wait to see what the final project looks like once our dream home is complete!`,
    stars: 5,
    avatar: '/images/lakyn.jpg', // Add this if available
  },
  {
    name: 'Alex Cleaver',
    role: 'Custom Home Client',
    quote: `Jamie and Jordan have been fantastic to work with! Very detailed and transparent with everything leading up to building our home. No surprises or unknown costs!`,
    stars: 5,
    avatar: '/images/alex.jpg', // Add this if available
  },
  {
    name: 'Bocote Showroom',
    role: 'Vendor Partner',
    quote: `Working with Ternes Construction has been an absolute pleasure. As a vendor, I've had the opportunity to see firsthand how much they care about their customers and the quality of their work. Their attention to detail, innovative designs, and commitment to craftsmanship truly set them apart.`,
    stars: 5,
    avatar: '/images/bocote.jpg', // Add this if available
  },
];

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
        <meta property="og:image" content={testimonialHero} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ternesconstruction.com/testimonials" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Client Testimonials | Ternes Construction" />
        <meta
          name="twitter:description"
          content="Hear from real clients about their experience working with Ternes Construction, Wichita’s trusted family-owned builder."
        />
        <meta name="twitter:image" content={testimonialHero} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={testimonialHero}
            alt="Happy clients in front of a Ternes custom home"
            className="w-full h-full object-cover brightness-75"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40" />
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

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-neutral-50 p-6 rounded-xl shadow hover:shadow-md transition-all"
              >
                <div className="mb-4 text-primary-600 text-3xl">“</div>
                <p className="text-gray-700 italic mb-4">{testimonial.quote}</p>
                <div className="flex items-center mt-6">
                  {testimonial.avatar && (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                  )}
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;
