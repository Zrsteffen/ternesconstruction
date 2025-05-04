import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import CtaButton from '../components/ui/CtaButton';
import FeaturedProjects from '../components/home/FeaturedProjects';
import ServicesOverview from '../components/home/ServicesOverview';
import Testimonials from '../components/home/Testimonials';
import ContactCta from '../components/home/ContactCta';
import heroHouse from '../images/hero-house.JPG';
import aboutUs from '../images/about-us.JPG';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ternes Construction | Custom Homes in Wichita, KS</title>
        <meta name="description" content="Family-owned custom home builder in Wichita, Kansas. Specializing in custom homes, barndominiums, and rural builds with transparency and craftsmanship." />
        <meta property="og:title" content="Ternes Construction | Custom Homes in Wichita, KS" />
        <meta property="og:description" content="Family-owned custom home builder in Wichita, Kansas. Specializing in custom homes, barndominiums, and rural builds with transparency and craftsmanship." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ternesconstruction.com" />
        <meta property="og:image" content="/images/hero-house.JPG" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] lg:min-h-screen">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
          <img 
            src={heroHouse} 
            alt="Hero custom home exterior" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
          <motion.h1 
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Custom Homes.<br />
            Family Values.<br />
            Builder-Direct.
          </motion.h1>
          
          <motion.p 
            className="text-white text-xl mt-6 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Over 15 years of hands-on craftsmanship building custom homes, barndominiums, and rural properties across Wichita and beyond.
          </motion.p>
          
          <motion.div 
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">
              Start Your Dream Build
            </Link>
            <Link to="/portfolio" className="btn btn-outline text-white border-white hover:bg-white hover:text-neutral-900 text-lg px-8 py-4">
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={aboutUs} 
                alt="Ternes Construction About Us" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white py-4 px-6 rounded-lg shadow-xl hidden md:block">
                <p className="text-2xl font-semibold">15+</p>
                <p className="text-sm uppercase tracking-wider">Years Experience</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary-600 font-medium uppercase tracking-wider">About Ternes Construction</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">A Family-Owned Builder You Can Trust</h2>
              <p className="text-neutral-700 mb-6">
                At Ternes Construction, we're not just builders – we're your neighbors. Our family-owned business brings together decades of craftsmanship with a personal touch that bigger companies simply can't match.
              </p>
              <p className="text-neutral-700 mb-6">
                Jamie and Jordan Ternes work directly with every client, ensuring clear communication, transparent pricing, and a building process that respects your vision and budget. We believe in doing things right the first time, with no shortcuts.
              </p>
              <blockquote className="border-l-4 border-primary-600 pl-4 italic text-neutral-600 my-6">
                "We treat every home like we're building it for our own family."
              </blockquote>
              <div className="mt-8">
                <Link to="/about" className="flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors group">
                  Learn more about our story
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ServicesOverview />
      <FeaturedProjects />
      <Testimonials />
      <ContactCta />
    </>
  );
};

export default HomePage;
