import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, Heart } from 'lucide-react';

import SectionTitle from '../components/ui/SectionTitle';
import ContactCta from '../components/home/ContactCta';

import jamie from '../images/jamie.JPG';
import jordan from '../images/jordan.JPG';
import aboutUs from '../images/about-us.JPG';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <CheckCircle2 size={40} className="text-primary-600 mb-4" />,
      title: "Family-Centric Approach",
      description: "We treat every client like family, fostering relationships built on trust and mutual respect."
    },
    {
      icon: <Award size={40} className="text-primary-600 mb-4" />,
      title: "Transparency",
      description: "Our cost-plus pricing model ensures honesty and clarity throughout the building process."
    },
    {
      icon: <Users size={40} className="text-primary-600 mb-4" />,
      title: "Quality Over Quantity",
      description: "We focus on delivering exceptional craftsmanship, using durable and energy-efficient materials to build homes that stand the test of time."
    },
    {
      icon: <Heart size={40} className="text-primary-600 mb-4" />,
      title: "Client Collaboration",
      description: "Your vision guides our work. We prioritize open communication to ensure your home reflects your unique needs and lifestyle."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Ternes Construction | Custom Home Builders</title>
        <meta name="description" content="Meet Jamie and Jordan Ternes — the builder-direct team behind Wichita’s trusted custom home construction company. Learn how their hands-on approach ensures your dream home becomes a reality." />
      </Helmet>

      {/* Hero Image Section */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] lg:min-h-screen">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutUs}
            alt="Ternes Construction About Us Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        </div>

        <div className="relative z-20 container mx-auto px-4 md:px-8 h-full flex flex-col justify-center pt-32">
          <motion.h1
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Meet Your Builder-Direct Team
          </motion.h1>
          <motion.p
            className="text-white text-xl mt-6 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A family-run operation driven by transparency, craftsmanship, and a commitment to treating every build like it’s our own.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <SectionTitle
            title="Who We Are"
            subtitle="Family-Owned and Builder-Led"
            center
          />
          <p className="max-w-3xl mx-auto text-neutral-700 text-lg">
            At Ternes Construction, you're not just hiring a contractor — you're building with a family. Jamie and Jordan work directly with every client to ensure communication is personal, pricing is transparent, and the build experience is one-of-a-kind.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Jamie */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src={jamie} alt="Jamie Ternes" className="rounded-full w-48 h-48 mx-auto object-cover mb-6 shadow-lg" />
              <h3 className="text-2xl font-semibold mb-2">Jamie Ternes</h3>
              <p className="text-neutral-600">Co-Founder & Client Partner</p>
              <p className="mt-4 text-neutral-700 max-w-md mx-auto">
                Jamie brings vision to life. As the creative voice of the business, she helps clients navigate design, budgeting, selections, and project planning — while making sure every decision aligns with your dream.
              </p>
            </motion.div>

            {/* Jordan */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img src={jordan} alt="Jordan Ternes" className="rounded-full w-48 h-48 mx-auto object-cover mb-6 shadow-lg" />
              <h3 className="text-2xl font-semibold mb-2">Jordan Ternes</h3>
              <p className="text-neutral-600">Co-Founder & Master Builder</p>
              <p className="mt-4 text-neutral-700 max-w-md mx-auto">
                With over a decade of hands-on field experience, Jordan leads build execution with precision. From site prep to final walkthrough, he ensures the work exceeds expectations — every board, every nail, every time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title="Our Core Values"
            subtitle="What We Stand For"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {value.icon}
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
};

export default AboutPage;
