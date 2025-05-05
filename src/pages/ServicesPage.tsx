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
      </Helmet>

      <main className="min-h-screen">
        {/* Hero Section with Background Image */}
        <section className="relative min-h-[60vh] md:min-h-[80vh] lg:min-h-screen flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={servicesHero}
              alt="Custom home under construction"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>

          {/* Overlay Text */}
          <div className="relative z-10 text-center px-4">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
              Our Services
            </h1>
            <p className="text-white text-xl max-w-2xl mx-auto drop-shadow">
              Discover our range of construction services tailored to meet your unique needs
            </p>
          </div>
        </section>

        {/* Service Blocks */}
        <ServicesOverview />
      </main>
    </>
  );
};

export default ServicesPage;
