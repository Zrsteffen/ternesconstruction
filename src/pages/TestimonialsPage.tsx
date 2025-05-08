import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import testimonialHero from '../images/testimonial_hero.jpg';

const testimonials = [
  {
    name: 'Lakyn Cleaver',
    role: 'Custom Home Client',
    review:
      'Jamie and Jordan have been THE BEST to work with on the preliminary details of preparing to break ground. Every small detail is absolutely perfect and what we love. My hubby and I can’t wait to see what the final project looks like once our dream home is complete!',
  },
  {
    name: 'Alex Cleaver',
    role: 'Custom Home Client',
    review:
      'Jamie and Jordan have been fantastic to work with! Very detailed and transparent with everything leading up to building our home. No surprises or unknown costs!',
  },
  {
    name: 'Bocote Showroom',
    role: 'Vendor Partner',
    review:
      'As a vendor, I’ve seen firsthand how much they care about customers and quality. Their attention to detail, innovative designs, and commitment to craftsmanship set them apart. Professional, seamless communication.',
  },
  {
    name: 'Val Garcia',
    role: 'Custom Home Client',
    review:
      'Ternes Construction has made our first time custom home building a breeze! Knowledgeable, friendly and do everything with integrity.',
  },
  {
    name: 'Josh Cook',
    role: 'Custom Home Client',
    review:
      'Jamie and Jordan are great people to work with. They are on top of things and take pride in the homes they build. They also keep a clean jobsite so when you want to stop by and check out progress you are not tripping over stuff.',
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

      {/* Hero */}
      <section className="relative pt-28 md:pt-32 h-[75vh] overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={testimonialHero}
            alt="Clients in front of custom home"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">What Our Clients Say</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Trusted by families across Kansas to build their dream homes.
          </p>
        </div>
      </section>

      {/* Swiper Testimonial Carousel */}
      <section className="py-20 bg-primary-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Client Testimonials</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 6000 }}
            loop={true}
            navigation
            pagination={{ clickable: true }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white text-neutral-800 rounded-lg shadow-md p-6 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-yellow-500 text-lg mb-3">★★★★★</p>
                    <p className="italic text-sm">{testimonial.review}</p>
                  </div>
                  <div className="mt-6">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;
