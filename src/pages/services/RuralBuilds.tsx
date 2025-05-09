import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionTitle from '../../components/ui/SectionTitle';
import ContactCta from '../../components/home/ContactCta';

import ruralHero from '../../images/rural_hero.jpg';

const RuralBuilds: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Rural Builds | Ternes Construction</title>
        <meta
          name="description"
          content="Specialized in rural construction projects with expertise in well systems, septic solutions, and off-grid considerations."
        />
        <meta property="og:title" content="Rural Builds | Ternes Construction" />
        <meta
          property="og:description"
          content="Expert rural construction with full-service planning, infrastructure, and compliance. We help bring your dream build to life."
        />
        <meta
          property="og:image"
          content="https://www.ternesconstruction.com/images/rural_hero.jpg"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* ✅ Fixed Hero Section */}
      <section className="relative pt-28 md:pt-32 h-[75vh] md:h-[90vh] bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={ruralHero}
            alt="Custom rural home"
            className="w-full h-full object-cover object-center brightness-[0.95]"
          />
          <div className="absolute inset-0 bg-black/20 z-10" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-20 flex flex-col justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Rural Builds
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Expert solutions for rural construction with comprehensive site planning and infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ✅ Rural Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <SectionTitle
            title="Rural Building Expertise"
            subtitle="Specialized Solutions"
          />
          <p className="text-neutral-700 text-lg mb-8">
            Building in rural areas presents unique challenges that require specialized
            knowledge and experience. Our team has extensive expertise in handling all aspects
            of rural construction.
          </p>
          <ul className="space-y-4 text-neutral-700">
            {[
              'Complete site evaluation',
              'Well system installation',
              'Septic system solutions',
              'Power infrastructure',
              'Access road construction',
              'Environmental considerations',
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className="text-primary-600 mt-1 mr-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ✅ Rural Build Process */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title="Our Rural Building Process"
            subtitle="How We Work"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Site Planning',
                description:
                  'Comprehensive evaluation of your property to determine the best location and orientation for your home.',
              },
              {
                title: 'Infrastructure Development',
                description:
                  'Installation of necessary systems including water, septic, and power solutions.',
              },
              {
                title: 'Construction',
                description:
                  'Building your dream home with attention to rural-specific considerations and challenges.',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-neutral-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
};

export default RuralBuilds;
