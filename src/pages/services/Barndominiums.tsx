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
        <meta name="description" content="Explore the durability and design flexibility of barndominiums with Ternes Construction. Learn how inspection zones and regulations impact cost—and how our team helps you navigate them to build smarter." />
        <meta name="keywords" content="barndominiums Kansas, shop houses, custom barndo builder, rural construction, metal homes, barndominium costs, low maintenance homes" />
        <meta property="og:title" content="Barndominiums & Shop Houses | Ternes Construction" />
        <meta property="og:description" content="Durable, low-maintenance homes with flexible design—Ternes Construction is your expert guide to building barndominiums in Kansas and beyond." />
        <meta property="og:image" content="/images/barndominium-hero.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-neutral-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>
          <img 
            src="/images/barndominium-hero.jpg"
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
              Smarter construction, built to last—Ternes Construction helps you navigate county requirements, optimize cost, and build your dream space.
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
                title="Barndominiums Aren’t What They Used to Be" 
                subtitle="Navigating Cost, Durability & Compliance"
              />
              <div className="space-y-6">
                <p className="text-neutral-700">
                  Today’s barndominiums offer more than just metal siding. While they originated as a cost-effective alternative in areas without inspections, many counties now treat them just like traditional homes. That means you may need full footing foundations, residential-grade insulation, and upgraded finishes.
                </p>
                <p className="text-neutral-700">
                  Ternes Construction brings deep knowledge of local regulations. We help you identify when a barndominium can actually save you money—and when it might not. Our team consults on the smartest path forward, so you avoid surprises and stay in control of your budget.
                </p>

                <ul className="space-y-4">
                  {[
                    "Regulation-savvy guidance",
                    "Transparent cost forecasting",
                    "Flexible design options for live/work setups",
                    "Expertise in both inspected and non-inspected zones",
                    "Custom solutions for rural builds"
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
                title: "Durability",
                description: "Steel and engineered materials make barndos incredibly weather-resistant, pest-proof, and long-lasting."
              },
              {
                title: "Low Maintenance",
                description: "Minimal exterior upkeep and fewer moving parts translate to savings over time."
              },
              {
                title: "Modern Aesthetic",
                description: "From rustic to refined, today's barndominiums feature stunning finishes inside and out."
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
