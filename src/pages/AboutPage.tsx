import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

import SectionTitle from '../components/ui/SectionTitle';
import ContactCta from '../components/home/ContactCta';

import jamie from '../images/jamie.jpg';
import jordan from '../images/jordan.jpg';
import aboutUs from '../images/about-us.jpg';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <CheckCircle2 size={40} className="text-primary-600 mb-4" />,
      title: 'Family-Centric Approach',
      description: 'We treat every client like family, fostering relationships built on trust and mutual respect.'
    },
    {
      icon: <Award size={40} className="text-primary-600 mb-4" />,
      title: 'Transparency',
      description: 'Our cost-plus pricing model ensures honesty and clarity throughout the building process.'
    },
    {
      icon: <Users size={40} className="text-primary-600 mb-4" />,
      title: 'Quality Over Quantity',
      description: 'We focus on delivering exceptional craftsmanship, using durable and energy-efficient materials to build homes that stand the test of time.'
    },
    {
      icon: <Heart size={40} className="text-primary-600 mb-4" />,
      title: 'Client Collaboration',
      description: 'Your vision guides our work. We prioritize open communication to ensure your home reflects your unique needs and lifestyle.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Ternes Construction | Custom Home Builders</title>
        <meta name="description" content="Meet Jamie and Jordan Ternes — the builder-direct team behind Wichita’s trusted custom home construction company. Learn how their hands-on approach ensures your dream home becomes a reality." />
        <meta property="og:title" content="About Us | Ternes Construction" />
        <meta property="og:description" content="Meet Jamie and Jordan Ternes — the builder-direct team behind Wichita’s trusted custom home construction company." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ternesconstruction.com/about" />
        <meta property="og:image" content="https://www.ternesconstruction.com/images/about-us.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Ternes Construction" />
        <meta name="twitter:description" content="Meet Jamie and Jordan Ternes — builder-direct custom home experts in Wichita, KS." />
        <meta name="twitter:image" content="https://www.ternesconstruction.com/images/about-us.jpg" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ternes Construction",
              "url": "https://www.ternesconstruction.com",
              "logo": "https://www.ternesconstruction.com/images/logo.png",
              "description": "Family-owned custom home builder in Wichita, Kansas specializing in barndominiums, rural builds, and high-quality custom homes.",
              "founder": ["Jamie Ternes", "Jordan Ternes"],
              "foundingLocation": "Wichita, KS",
              "sameAs": []
            }
          `}
        </script>
      </Helmet>

      {/* Hero Image Section */}
      <section className="relative h-[75vh] md:h-[90vh] bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutUs}
            alt="Ternes Construction About Us Hero"
            className="w-full h-full object-cover object-top md:object-center brightness-[0.95]"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-black/20 z-10" />
        </div>
      
        <div className="container mx-auto px-4 md:px-8 relative z-20 flex flex-col justify-center h-full pt-24 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Meet Your Builder-Direct Team
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              A family-run operation driven by transparency, craftsmanship, and a commitment to treating every build like it’s our own.
            </p>
          </motion.div>
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
            Learn more about <Link to="/services" className="text-primary-600 hover:underline">our custom home services</Link>.
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
              <img src={jamie} alt="Jamie Ternes" className="rounded-full w-48 h-48 mx-auto object-cover mb-6 shadow-lg" loading="lazy" />
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
              <img src={jordan} alt="Jordan Ternes" className="rounded-full w-48 h-48 mx-auto object-cover mb-6 shadow-lg" loading="lazy" />
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
