import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Lakyn Cleaver',
    title: 'Custom Home Client',
    review: `Jamie and Jordan have been THE BEST to work with on the preliminary details of preparing to break ground. Every small detail is absolutely perfect and what we love. My hubby and I can’t wait to see what the final project looks like once our dream home is complete!`,
  },
  {
    name: 'Alex Cleaver',
    title: 'Custom Home Client',
    review: `Jamie and Jordan have been fantastic to work with! Very detailed and transparent with everything leading up to building our home. No surprises or unknown costs!`,
  },
  {
    name: 'Bocote Showroom',
    title: 'Vendor Partner',
    review: `Working with Ternes Construction has been an absolute pleasure. As a vendor, I’ve had the opportunity to see firsthand how much they care about their customers and the quality of their work. Their attention to detail, innovative designs, and commitment to craftsmanship truly set them apart.

What stands out most is how well they treat both their clients and partners—communication is seamless, and their professionalism makes every project run smoothly. If you’re looking for a home builder that delivers exceptional results with integrity and care, Ternes Construction is the way to go!`,
  },
  {
    name: 'Val Garcia',
    title: 'Custom Home Owner',
    review: `Ternes Construction has made our first time custom home building a breeze! Knowledgeable, friendly and do everything with integrity.`,
  },
  {
    name: 'Josh Cook',
    title: 'Custom Home Client',
    review: `Jamie and Jordan are great people to work with. They are on top of things and take pride in the homes they build. They also keep a clean jobsite so when you want to stop by and check out progress you are not tripping over stuff.`,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-primary-700 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">What Our Clients Say</h2>
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white text-neutral-800 p-6 rounded-lg shadow-md h-full flex flex-col">
                <div className="text-blue-500 text-3xl mb-2">“</div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-700 mb-6 italic">"{testimonial.review}"</p>
                <div className="mt-auto">
                  <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                  <p className="text-sm text-neutral-600">{testimonial.title}</p>
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
