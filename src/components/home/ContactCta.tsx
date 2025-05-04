import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const ContactCta: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-grain-pattern"></div>
      
      {/* Diagonal Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Dream Build?
          </motion.h2>
          
          <motion.p 
            className="text-lg text-neutral-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Let's discuss your vision and how we can bring it to life. Schedule a consultation with our team today.
          </motion.p>
          
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              to="/contact" 
              className="btn bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg w-full md:w-auto"
            >
              Contact Us
            </Link>
            
            <a 
              href="tel:+13166442410" 
              className="btn bg-transparent border-2 border-white hover:bg-white hover:text-neutral-900 text-white px-8 py-4 text-lg w-full md:w-auto flex items-center justify-center"
            >
              <Phone size={20} className="mr-2" />
              (316) 644-2410
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;