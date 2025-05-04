import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServicesOverview from '../components/home/ServicesOverview';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Custom Home Builder</title>
        <meta name="description" content="Explore our comprehensive construction services including custom homes, barndominiums, rural builds, and home additions." />
      </Helmet>
      
      <main className="min-h-screen">
        <div className="bg-primary-50 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
              Discover our range of construction services tailored to meet your unique needs
            </p>
          </div>
        </div>
        
        <ServicesOverview />
      </main>
    </>
  );
};

export default ServicesPage;