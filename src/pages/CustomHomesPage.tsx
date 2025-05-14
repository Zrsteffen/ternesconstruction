import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../components/ui/SectionTitle';
import ContactCta from '../components/home/ContactCta';

import customCountertop from '../images/custom_countertop.jpg';
import customIsland from '../images/custom_island.jpg';
import customKitchen from '../images/custom_kitchen.jpg';
import customLighting from '../images/custom_lighting.jpg';
import customMasterBath from '../images/custom_master_bath.jpg';
import customStairs from '../images/custom_stairs.jpg';
import ternesKitchen from '../images/ternes_kitchen.jpg';
import ternesLivingRoom from '../images/ternes_living_room.jpg';
import ternesMain from '../images/ternes_main.jpg';
import ternesShower from '../images/ternes_shower.jpg';
import yoderKitchen from '../images/yoder_finished kitchen.jpg';

const CustomHomesPage: React.FC = () => {
  const images = [
    customCountertop,
    customIsland,
    customKitchen,
    customLighting,
    customMasterBath,
    customStairs,
    ternesKitchen,
    ternesLivingRoom,
    ternesMain,
    ternesShower,
    yoderKitchen
  ];

  return (
    <>
      <Helmet>
        <title>Custom Homes | Ternes Construction</title>
        <meta
          name="description"
          content="See our portfolio of fully custom homes designed with precision craftsmanship, modern layouts, and client-guided personalization across Wichita and Kansas."
        />
        <meta property="og:title" content="Custom Homes | Ternes Construction" />
        <meta
          property="og:description"
          content="View our custom home builds — designed for your lifestyle, crafted by your builder. Built in Sedgwick, Butler, and beyond."
        />
        <meta
          property="og:image"
          content="https://www.ternesconstruction.com/images/ternes_kitchen.jpg"
        />
        <meta property="og:url" content="https://www.ternesconstruction.com/projects/custom" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Homes | Ternes Construction" />
        <meta
          name="twitter:description"
          content="Explore our Wichita-area custom home builds — modern design, client-first process, timeless quality."
        />
        <meta
          name="twitter:image"
          content="https://www.ternesconstruction.com/images/ternes_kitchen.jpg"
        />
        <link rel="canonical" href="https://www.ternesconstruction.com/projects/custom" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[75vh] md:h-[90vh] bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={ternesMain}
            alt="Wichita Custom Home Hero"
            className="w-full h-full object-cover object-center brightness-[0.9]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30 z-10" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-20 flex flex-col justify-center h-full pt-24 md:pt-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Custom Homes, Built Around You
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            See how our client-focused process and hands-on craftsmanship deliver truly one-of-a-kind homes.
          </p>
        </div>
      </section>

      {/* Gallery + Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title="Signature Builds"
            subtitle="Wichita’s Custom Home Experts"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {images.map((img, i) => (
              <div
                key={i}
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={img}
                  alt={`Custom Home Project ${i + 1}`}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-16 text-center text-lg text-neutral-700 leading-relaxed">
            <p className="mb-6">
              From initial vision to final walkthrough, our custom home builds reflect the personality, priorities, and lifestyle of each client. Whether you want a chef’s kitchen, home office, spa bathroom, or open-concept design, we build with your future in mind.
            </p>
            <p>
              With decades of hands-on experience and builder-direct service, Ternes Construction is trusted across Wichita and surrounding counties for one reason: we treat every home like it’s our own.
            </p>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
};

export default CustomHomesPage;
