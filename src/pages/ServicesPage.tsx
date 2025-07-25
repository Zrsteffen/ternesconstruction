import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServicesOverview from '../components/home/ServicesOverview';
import servicesHero from '../images/services_hero.jpg';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Custom Home Builder</title>
        <meta
          name="description"
          content="Explore our comprehensive construction services including custom homes, barndominiums, rural builds, and home additions."
        />
        <meta property="og:title" content="Our Services | Custom Home Builder" />
        <meta property="og:description" content="Explore our comprehensive construction services including custom homes, barndominiums, rural builds, and home additions." />
        <meta property="og:image" content="https://www.ternesconstruction.com/images/services_hero.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ternesconstruction.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | Custom Home Builder" />
        <meta name="twitter:description" content="Explore our comprehensive construction services including custom homes, barndominiums, rural builds, and home additions." />
        <meta name="twitter:image" content="https://www.ternesconstruction.com/images/services_hero.jpg" />
        <link rel="canonical" href="https://www.ternesconstruction.com/services" />
      </Helmet>

      <main className="min-h-screen">
        {/* Responsive Hero Section */}
        <section className="relative scroll-mt-[100px] min-h-[60vh] md:min-h-[75vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={servicesHero}
              alt="Custom home under construction"
              className="w-full h-full object-cover object-center md:object-[50%_30%]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>

          {/* Overlay Text */}
          <div className="relative z-10 text-center px-4 pt-24 md:pt-32">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
              Our Services
            </h1>
            <p className="text-white text-xl max-w-2xl mx-auto drop-shadow">
              Discover our range of construction services tailored to meet your unique needs
            </p>
          </div>
        </section>

        {/* Service Content */}
        <ServicesOverview />
      </main>
    </>
  );
};

export default ServicesPage;
