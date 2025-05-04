import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Warehouse, Tractor } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      id: 'custom-homes',
      title: 'Custom Homes',
      description: 'Personalized homes built to your exact specifications, reflecting your lifestyle and preferences with premium craftsmanship.',
      icon: <Home size={48} className="text-primary-600 mb-4" />,
      link: '/services/custom-homes'
    },
    {
      id: 'barndominiums',
      title: 'Barndominiums & Shop Houses',
      description: 'Versatile metal and wood structures combining living spaces with workshops, perfect for those needing functional work areas.',
      icon: <Warehouse size={48} className="text-primary-600 mb-4" />,
      link: '/services/barndominiums'
    },
    {
      id: 'rural-builds',
      title: 'Rural Builds',
      description: 'Specialized construction for rural properties, navigating unique challenges like well systems, septic solutions, and more.',
      icon: <Tractor size={48} className="text-primary-600 mb-4" />,
      link: '/services/rural-builds'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle 
          title="Our Services" 
          subtitle="What We Offer"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-neutral-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-neutral-600 mb-6">{service.description}</p>
              <Link 
                to={service.link}
                className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;