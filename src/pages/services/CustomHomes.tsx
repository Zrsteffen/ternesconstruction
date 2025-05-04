import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionTitle from '../../components/ui/SectionTitle';
import ContactCta from '../../components/home/ContactCta';

const CustomHomes: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Custom Homes | Ternes Construction</title>
        <meta name="description" content="Experience luxury custom home building with Ternes Construction. We bring your dream home to life with exceptional craftsmanship and attention to detail." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-neutral-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>
          <img 
            src="/custom-home-hero.jpg"
            alt="Luxury custom home exterior" 
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Custom Homes</h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl">
              Crafting your dream home with exceptional quality and personalized attention to detail
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
                title="Your Vision, Our Expertise" 
                subtitle="Custom Home Building"
              />
              
              <div className="space-y-6">
                <p className="text-neutral-700">
                  At Ternes Construction, we specialize in creating custom homes that perfectly match your lifestyle and preferences. Our comprehensive approach ensures every detail is thoughtfully considered and executed to the highest standards.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Personalized design consultation",
                    "Quality materials and craftsmanship",
                    "Energy-efficient solutions",
                    "Transparent cost-plus pricing",
                    "Detailed project timeline",
                    "Regular communication and updates"
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
                src="/custom-home-1.jpg" 
                alt="Custom home interior" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="/custom-home-2.jpg" 
                alt="Custom home exterior" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle 
            title="Our Building Process" 
            subtitle="How We Work"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Design Phase",
                description: "We work closely with you to create a custom design that matches your vision and lifestyle needs."
              },
              {
                title: "Planning & Preparation",
                description: "Detailed planning ensures every aspect of your custom home is considered before construction begins."
              },
              {
                title: "Construction",
                description: "Our experienced team brings your design to life with careful attention to quality and detail."
              }
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

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle 
            title="Featured Custom Homes" 
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
                  src={`/custom-home-project-${project}.jpg`}
                  alt={`Custom home project ${project}`} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project Name</h3>
                  <p className="text-neutral-600">Description of the custom home project and its unique features.</p>
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

export default CustomHomes;