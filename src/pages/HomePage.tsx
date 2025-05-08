import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import SectionTitle from '../components/ui/SectionTitle';
import ServicesOverview from '../components/home/ServicesOverview';
import Testimonials from '../components/home/Testimonials';
import ContactCta from '../components/home/ContactCta';

import heroHouse from '../images/hero-house.jpg';
import aboutUs from '../images/about-us.jpg';
import modernFarmhouseHero from '../images/portfolio_hero.jpg';
import barndoHero from '../images/barn_exterior.jpg';
import ranchHero from '../images/build_process_hero.jpg';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home | Ternes Construction</title>
        <meta name="description" content="Crafting custom homes and barndominiums across Wichita with builder-direct service and family values." />
        <meta name="keywords" content="custom homes, barndominiums, Wichita builders, rural home construction, Ternes Construction" />
        <meta property="og:title" content="Home | Ternes Construction" />
        <meta property="og:description" content="Crafting custom homes and barndominiums across Wichita with builder-direct service and family values." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ternesconstruction.com/" />
        <meta property="og:image" content={heroHouse} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | Ternes Construction" />
        <meta name="twitter:description" content="Crafting custom homes and barndominiums across Wichita with builder-direct service and family values." />
        <meta name="twitter:image" content={heroHouse} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[75vh] md:h-[90vh] bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroHouse}
            alt="Hero custom home exterior"
            className="w-full h-full object-cover object-center brightness-[0.95]"
          />
          <div className="absolute inset-0 bg-black/20 z-10" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-20 flex flex-col justify-center h-full">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Custom Homes.<br />
            Family Values.<br />
            Builder-Direct.
          </motion.h1>

          <motion.p
            className="text-xl text-white/90 mt-6 max-w-2xl"
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
            <Link
              to="/portfolio"
              className="btn btn-outline text-white border-white hover:bg-white hover:text-neutral-900 text-lg px-8 py-4"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={aboutUs} alt="About Us" className="rounded-lg shadow-lg w-full h-auto" />
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
              At Ternes Construction, we're not just builders – we're your neighbors. Our family-owned business brings decades of craftsmanship with a personal touch that bigger companies can't match.
            </p>
            <p className="text-neutral-700 mb-6">
              Jamie and Jordan Ternes work directly with every client, ensuring clear communication, transparent pricing, and a building process that respects your vision and budget. No shortcuts. Just honest work.
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
      </section>

      <ServicesOverview />

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle subtitle="Our Recent Work" title="Featured Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {[
              {
                title: 'Modern Farmhouse',
                category: 'Custom Home',
                location: 'East Wichita',
                image: modernFarmhouseHero,
                link: '/portfolio#modern-farmhouse-2023',
              },
              {
                title: 'Luxury Barndominium',
                category: 'Barndominium',
                location: 'Rural Sedgwick County',
                image: barndoHero,
                link: '/portfolio#luxury-barndominium-2023',
              },
              {
                title: 'Custom Ranch Home',
                category: 'Custom Home',
                location: 'Northwest Wichita',
                image: ranchHero,
                link: '/portfolio#rural-build-2023',
              },
            ].map((project, idx) => (
              <Link
                key={idx}
                to={project.link}
                className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-sm font-semibold text-white bg-primary-600 px-3 py-1 rounded mb-2 w-fit">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-white/80 text-sm">{project.location}</p>
                  <span className="mt-4 inline-flex items-center text-white font-medium group-hover:underline">
                    View Project <ArrowRight size={16} className="ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="inline-block px-8 py-3 border border-primary-600 text-primary-600 font-semibold rounded hover:bg-primary-600 hover:text-white transition"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <ContactCta />
    </>
  );
};

export default HomePage;
