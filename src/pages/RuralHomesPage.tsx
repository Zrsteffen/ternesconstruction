import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../components/ui/SectionTitle';
import ContactCta from '../components/home/ContactCta';

import ruralFront from '../images/rural_home_front.jpg';
import ruralDriveway from '../images/rural_home_driveway.jpg';
import ruralSunset from '../images/rural_home_sunset.jpg';
import ruralBarnExterior from '../images/rural_barn_exterior.jpg';
import framingRural from '../images/framing_rural.jpg';
import birdseyeRural from '../images/birdseye_rural.jpg';
import ruralBoxIn from '../images/rural_home_box_in.jpg';
import dirtwork from '../images/dirtwork.jpg';
import barnExterior from '../images/barn_exterior.jpg';

const RuralHomesPage: React.FC = () => {
  const images = [
    ruralFront,
    ruralDriveway,
    ruralSunset,
    ruralBarnExterior,
    framingRural,
    birdseyeRural,
    ruralBoxIn,
    dirtwork,
    barnExterior
  ];

  return (
    <>
      <Helmet>
        <title>Rural Homes | Ternes Construction</title>
        <meta
          name="description"
          content="Explore our rural home builds — expertly crafted for privacy, acreage, and off-grid beauty across Sedgwick County and surrounding Kansas regions."
        />
        <meta property="og:title" content="Rural Homes | Ternes Construction" />
        <meta
          property="og:description"
          content="See our rural builds designed for space, comfort, and country living — all with the craftsmanship and care you expect from Ternes Construction."
        />
        <meta
          property="og:image"
          content="https://www.ternesconstruction.com/images/rural_home_front.jpg"
        />
        <meta property="og:url" content="https://www.ternesconstruction.com/projects/rural" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rural Homes | Ternes Construction" />
        <meta
          name="twitter:description"
          content="Discover our rural home projects — open land, wide skies, and quality that stands the test of time."
        />
        <meta
          name="twitter:image"
          content="https://www.ternesconstruction.com/images/rural_home_front.jpg"
        />
        <link rel="canonical" href="https://www.ternesconstruction.com/projects/rural" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[75vh] md:h-[90vh] bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={ruralFront}
            alt="Rural Custom Home in Kansas"
            className="w-full h-full object-cover object-center brightness-[0.9]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30 z-10" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-20 flex flex-col justify-center h-full pt-24 md:pt-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Rural Homes. Real Craftsmanship.
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Space to breathe. Built to last. Discover how our rural projects make wide-open dreams a reality.
          </p>
        </div>
      </section>

      {/* Gallery + Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title="Featured Rural Builds"
            subtitle="Built For Acreage, Privacy, and Kansas Weather"
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
                  alt={`Rural Home Project ${i + 1}`}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-16 text-center text-lg text-neutral-700 leading-relaxed">
            <p className="mb-6">
              Rural builds require a different kind of builder. From site prep and dirt work to code-compliant well and septic coordination — we manage it all while delivering beautiful, durable homes that suit your land and lifestyle.
            </p>
            <p>
              Whether you’re building on a farmstead, family acreage, or starting fresh in open country — Ternes Construction brings experience, honesty, and quality to every square foot.
            </p>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
};

export default RuralHomesPage;
