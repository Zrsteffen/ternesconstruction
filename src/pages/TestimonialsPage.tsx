// src/components/home/Testimonials.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const reviews = [
  {
    name: 'Lakyn Cleaver',
    role: 'Custom Home Client',
    text: `Jamie and Jordan have been THE BEST to work with on the preliminary details of preparing to break ground. Every small detail is absolutely perfect and what we love. My hubby and I can’t wait to see what the final project looks like once our dream home is complete!`,
  },
  {
    name: 'Alex Cleaver',
    role: 'Custom Home Client',
    text: `Jamie and Jordan have been fantastic to work with! Very detailed and transparent with everything leading up to building our home. No surprises or unknown costs!`,
  },
  {
    name: 'Bocote Showroom',
    role: 'Vendor Partner',
    text: `As a vendor, I’ve seen firsthand how much they care about customers and quality. Their attention to detail, innovative designs, and commitment to craftsmanship set them apart. Professional, seamless communication.`,
  },
  {
    name: 'Val Garcia',
    role: 'Custom Home Client',
    text: `Ternes Construction has made our first time custom home building a breeze! Knowledgeable, friendly and do everything with integrity.`,
  },
  {
    name: 'Josh Cook',
    role: 'Custom Home Client',
    text: `Jamie and Jordan are great to work with. They take pride in the homes they build and keep a clean jobsite for client visits.`,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-primary-700 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">What Our Clients Say</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white text-neutral-800 rounded-lg shadow-lg p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="text-yellow-400 text-xl mb-2">★★★★★</div>
                  <p className="text-sm italic">{review.text}</p>
                </div>
                <div className="mt-6">
                  <p className="font-bold">{review.name}</p>
                  <p className="text-xs text-neutral-500">{review.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
