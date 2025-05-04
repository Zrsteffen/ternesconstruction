import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Lakyn Cleaver',
      role: 'Custom Home Client',
      quote: "Jamie and Jordan have been THE BEST to work with on the preliminary details of preparing to break ground. They have made sure that every small detail is absolutely perfect and what we love. My hubby and I can't wait to see what the final project looks like once our dream home is complete!",
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    {
      id: 2,
      name: 'Alex Cleaver',
      role: 'Custom Home Client',
      quote: "Jamie and Jordan have been fantastic to work with! Very detailed and transparent with everything leading up to building our home. No surprises or unknown costs!",
      rating: 5,
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg'
    },
    {
      id: 3,
      name: 'Bocote Showroom',
      role: 'Vendor Partner',
      quote: "Working with Ternes Construction has been an absolute pleasure. As a vendor, I've had the opportunity to see firsthand how much they care about their customers and the quality of their work. Their attention to detail, innovative designs, and commitment to craftsmanship truly set them apart.",
      rating: 5,
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg'
    },
    {
      id: 4,
      name: 'Val Garcia',
      role: 'Custom Home Owner',
      quote: "Ternes Construction has made our first time custom home building a breeze! Knowledgeable, friendly and do everything with integrity.",
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
    },
    {
      id: 5,
      name: 'Josh Cook',
      role: 'Custom Home Client',
      quote: "Jamie and Jordan are great people to work with. They are on top of things and take pride in the homes they build. They also keep a clean jobsite so when you want to stop by and check out progress you are not tripping over stuff.",
      rating: 5,
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    }
  ];

  return (
    <section className="py-20 bg-primary-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-grain-pattern"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionTitle 
          title="What Our Clients Say" 
          subtitle="Testimonials"
          center
          light
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonial-swiper py-8"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white text-neutral-800 p-8 rounded-lg shadow-lg h-full flex flex-col">
                  <Quote size={36} className="text-primary-300 mb-4" />
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <Star key={index} size={18} fill="#FBBF24" stroke="none" />
                    ))}
                  </div>
                  
                  <p className="italic text-neutral-700 mb-6 flex-grow">{testimonial.quote}</p>
                  
                  <div className="flex items-center mt-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-neutral-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;