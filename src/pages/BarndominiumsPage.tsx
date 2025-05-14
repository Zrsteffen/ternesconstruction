import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../components/ui/SectionTitle';
import ContactCta from '../components/home/ContactCta';
import barnFront from '../images/barn__metal_front.jpg';
import IMG7012 from '../images/IMG_7012.jpg';
import IMG6090 from '../images/IMG_6090.jpg';

const BarndominiumsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Barndominiums | Ternes Construction</title>
        <meta
          name="description"
          content="Explore our custom barndominium builds — combining open-concept living, high-performance materials, and personalized craftsmanship for Kansas families."
        />
        <meta property="og:title" content="Barndominiums | Ternes Construction" />
        <meta
          property="og:description"
          content="Explore our custom barndominium builds — designed for functional living with unmatched attention to detail."
        />
        <meta
          property="og:image"
          content="https://www.ternesconstruction.com/images/barn__metal_front.jpg"
        />
        <meta property="og:url" content="https://www.ternesconstruction.com/projects/barndominiums" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Barndominiums | Ternes Construction" />
        <meta
          name="twitter:description"
          content="Browse our most popular barndominium projects — open layouts, modern finishes, and energy-efficient design built for rural living."
        />
        <meta
          name="twitter:image"
          content="https://www.ternesconstruction.com/images/barn__metal_front.jpg"
        />
        <link rel="canonical" href="https://www.ternesconstruction.com/projects/barndominiums" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[75vh] md:h-[90vh] bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={barnFront}
            alt="Custom Barndominium Build in Kansas"
            className="w-full h-full object-cover object-center brightness-[0.9]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30 z-10" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-20 flex flex-col justify-center h-full pt-24 md:pt-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Barndominiums Built for Life
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            High-functioning. Beautifully designed. See how our barndominiums combine rural freedom with modern comforts.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title="Featured Barndo Projects"
            subtitle="Open Concept • Rural Ready • Custom Finish"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[IMG7012, IMG6090, barnFront].map((img, i) => (
              <div
                key={i}
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={img}
                  alt={`Barndominium Project ${i + 1}`}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-16 text-center text-lg text-neutral-700 leading-relaxed">
            <p className="mb-6">
              Ternes Construction specializes in barndominium-style homes that offer spacious floorplans, energy efficiency, and full customization. Whether you're building a forever home or a functional rural retreat, we bring hands-on craftsmanship and builder-direct communication to every step.
            </p>
            <p>
              Our clients across Sedgwick, Butler, and surrounding counties choose us because we build relationships — not just homes.
            </p>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
};

export default BarndominiumsPage;
