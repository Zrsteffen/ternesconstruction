import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionTitle from '../../components/ui/SectionTitle';
import ContactCta from '../../components/home/ContactCta';

import barnHero from '../../images/barn_hero.jpg';

const Barndominiums: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Barndominiums & Shop Houses | Ternes Construction</title>
        <meta
          name="description"
          content="Explore durable, low-maintenance barndominiums built by Ternes Construction using post-frame techniques. Learn how we help you navigate codes and build smarter."
        />
        <meta
          name="keywords"
          content="Kansas barndominium builder, post frame homes, durable shop houses, low maintenance construction, custom barndos, barndominiums Kansas, rural home builder"
        />
        <meta property="og:title" content="Barndominiums & Shop Houses | Ternes Construction" />
        <meta
          property="og:description"
          content="Post-frame barndominiums designed for durability and ease—Ternes Construction helps you build with confidence and code compliance."
        />
        <meta
          property="og:image"
          content="https://www.ternesconstruction.com/images/barn_hero.jpg"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-28 md:pt-32 h-[75vh] md:h-[90vh] bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={barnHero}
            alt="Modern post-frame barndominium"
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
              Barndominiums & Shop Houses
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Smarter builds, less upkeep—our post-frame barndominiums are built to last and tailored
              to your land, lifestyle, and local regulations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title="Smarter Materials. Strategic Builds."
            subtitle="Why Post-Frame Barndominiums Are a Win"
          />

          <div className="space-y-6 mt-10 max-w-4xl text-neutral-700">
            <p>
              Barndominiums have come a long way. Originally favored for their simplicity in
              non-regulated counties, today’s barndos often require full inspections, engineered
              foundations, and residential-grade specs depending on location.
            </p>
            <p>
              Ternes Construction uses proven post-frame building systems—designed to reduce
              costs, withstand harsh Kansas conditions, and minimize long-term upkeep. No steel
              frames needed.
            </p>
            <p>
              Our expertise lies in navigating code complexity and delivering efficient
              solutions. We guide you through zoning, permitting, and financing while ensuring
              your home lasts decades with minimal maintenance.
            </p>

            <ul className="space-y-4 mt-8">
              {[
                'Post-frame structure optimized for speed and strength',
                'Durable exteriors designed to reduce ongoing maintenance',
                'Adaptable to rural properties and code-compliant for regulated zones',
                'No steel frame required—more cost-effective with the same look',
                'Smart consulting to avoid surprises and control costs',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="text-primary-600 mt-1 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title="Built to Endure"
            subtitle="Low Maintenance. High Performance."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Less Upkeep, More Living',
                description:
                  'With metal siding and roofing, you can forget repainting, rot, or storm damage headaches.',
              },
              {
                title: 'Long-Term Value',
                description:
                  'Well-sealed post-frame shells keep your utilities low and protect against moisture and pests.',
              },
              {
                title: 'Code-Ready Design',
                description:
                  'Whether you’re in a rural township or regulated county, we design to comply and optimize cost.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
};

export default Barndominiums;
