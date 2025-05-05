import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionTitle from '../../components/ui/SectionTitle';
import ContactCta from '../../components/home/ContactCta';

const Barndominiums: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Barndominiums & Shop Houses | Ternes Construction</title>
        <meta name="description" content="Explore the unmatched durability and low-maintenance benefits of barndominiums with Ternes Construction. Build smarter and longer-lasting with our expert team." />
        <meta name="keywords" content="durable homes, low maintenance barndominiums, metal homes, long lasting construction, shop houses Kansas, custom barndos, Ternes barndominiums" />
        <meta property="og:title" content="Barndominiums & Shop Houses | Ternes Construction" />
        <meta property="og:description" content="Built to last and made for low upkeep—Ternes Construction delivers barndominiums that outlast traditional homes and simplify life." />
        <meta property="og:image" content="/images/barn_hero.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-neutral-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>
          <img 
            src="/images/barn_hero.jpg"
            alt="Modern barndominium exterior" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Barndominiums & Shop Houses</h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl">
              Long-lasting, low-maintenance, and built for life—Ternes Construction helps you create a barndominium that stands the test of time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Built Strong. Built to Last." 
                subtitle="Why Barndominiums Are the Smarter Choice"
              />
              <div className="space-y-6">
                <p className="text-neutral-700">
                  Today’s barndominiums are engineered for exceptional strength and resilience. With steel framing, metal roofing, and composite materials, they resist pests, fire, and severe weather better than traditional wood-framed homes.
                </p>
                <p className="text-neutral-700">
                  While some counties treat barndominiums the same as conventional homes—requiring foundations, insulation, and inspections—Ternes Construction helps you navigate what’s required and when alternative methods may be possible.
                </p>
                <p className="text-neutral-700">
                  We specialize in crafting homes that go the distance. Our clients enjoy reduced maintenance costs, longer lifespans, and modern aesthetics without the headaches of traditional construction upkeep.
                </p>

                <ul className="space-y-4">
                  {[
                    "Structural integrity with steel and engineered components",
                    "Low maintenance exterior and interior options",
                    "Improved resistance to rot, termites, and corrosion",
                    "Weather-ready performance in all Kansas climates",
                    "Consultation to optimize your design for longevity"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="text-primary-600 mt-1 mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/images/barndo-1.jpg" 
                alt="Barndominium interior" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="/images/barndo-2.jpg" 
                alt="Barndominium exterior" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle 
            title="Built to Endure" 
            subtitle="Why Barndominiums Last Longer"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Engineered for Strength",
                description: "Steel frames and paneling provide better protection against time and nature than traditional materials."
              },
              {
                title: "Simplified Upkeep",
                description: "Low-maintenance finishes mean fewer repairs, less repainting, and long-term savings."
              },
              {
                title: "Modern Efficiency",
                description: "Metal-clad builds can be sealed tight for energy savings and easier cleaning, indoors and out."
              }
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

      {/* Featured Work */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle 
            title="Featured Barndominiums" 
            subtitle="Built with Experience and Care"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map((project, index) => (
              <motion.div
                key={index}
                className="bg-neutral-50 rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <img 
                  src={`/images/barndo-project-${project}.jpg`}
                  alt={`Barndominium project ${project}`} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project Name</h3>
                  <p className="text-neutral-600">Description of the barndominium project and its unique features.</p>
                </div>
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
