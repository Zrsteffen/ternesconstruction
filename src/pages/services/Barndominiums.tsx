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
        <meta name="description" content="Specialized in building custom barndominiums and shop houses that combine living space with functional work areas." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-neutral-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>
          <img 
            src="/barndominium-hero.jpg"
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
              The perfect blend of comfortable living space and functional work areas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Versatile Living & Working Spaces" 
                subtitle="Why Choose a Barndominium"
              />
              
              <div className="space-y-6">
                <p className="text-neutral-700">
                  Barndominiums offer a unique combination of living and workspace, perfect for those who need a functional workshop or storage area alongside their home. Our designs maximize both comfort and utility.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Custom living space design",
                    "Integrated workshop areas",
                    "Durable metal construction",
                    "Energy-efficient solutions",
                    "Flexible floor plans",
                    "Modern amenities"
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
                src="/barndo-1.jpg" 
                alt="Barndominium interior" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="/barndo-2.jpg" 
                alt="Barndominium exterior" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle 
            title="Benefits of Barndominiums" 
            subtitle="Why They're Popular"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Cost-Effective",
                description: "More affordable than traditional construction while offering greater space and flexibility."
              },
              {
                title: "Quick Construction",
                description: "Metal frame construction allows for faster build times compared to traditional homes."
              },
              {
                title: "Low Maintenance",
                description: "Durable materials and simple design mean less maintenance over time."
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

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle 
            title="Featured Barndominiums" 
            subtitle="Our Recent Work"
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
                  src={`/barndo-project-${project}.jpg`}
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