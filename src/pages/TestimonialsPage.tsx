import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../components/ui/SectionTitle';

const TestimonialsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Testimonials | Your Company</title>
        <meta name="description" content="See what our clients say about our work and services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <SectionTitle
          title="Client Testimonials"
          subtitle="What Our Clients Say"
          description="Discover what our valued clients have to say about their experiences working with us"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Placeholder for testimonials - you can add real testimonials data later */}
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">Client Name</h3>
                  <p className="text-gray-600">Company Position</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;