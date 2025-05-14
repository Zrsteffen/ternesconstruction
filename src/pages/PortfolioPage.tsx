import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';

import portfolioHero from '../images/portfolio_hero.jpg';

// Fully Custom Home
import bar2 from '../images/ternes_bar2.jpg';
import diningRoom from '../images/ternes_dining_room.jpg';
import bar3 from '../images/ternes_bar3.jpg';
import island from '../images/custom_island.jpg';
import art from '../images/ternes_art.jpg';
import landscaping from '../images/custom_landscaping.jpg';
import kitchen from '../images/ternes_kitchen.jpg';
import livingroom from '../images/ternes_livingroom.jpg';
import masterBath from '../images/custom_master_bath.jpg';
import countertop from '../images/custom_countertop.jpg';
import lighting from '../images/custom_lighting.jpg';
import stairs from '../images/custom_stairs.jpg';
import customKitchen from '../images/custom_kitchen.jpg';
import kitchen1 from '../images/ternes_kitchen(1).jpg';

// Barndominium
import barnCover from '../images/barn_hero.jpg';
import barnFront from '../images/barn_front.jpg';
import barnFrame from '../images/barn_frame.jpg';
import barnExterior from '../images/barn_exterior.jpg';
import yoderKitchen from '../images/yoder_finished kitchen.jpg';
import barnUpstairs from '../images/barn_upstair.jpg';
import barnLiving from '../images/barn_living.jpg';
import barnInterior from '../images/barn_interrior.jpg';
import barnInside from '../images/barn_inside.jpg';

// Rural Build
import ruralCover from '../images/hero-house.jpg';
import dirtwork from '../images/dirtwork.jpg';
import buildProcess from '../images/build_process_hero.jpg';
import office from '../images/ternes_office.jpg';
import shower from '../images/ternes_shower.jpg';
import ruralBoxIn from '../images/rural_home_box_in.jpg';
import framing from '../images/framing_rural.jpg';
import driveway from '../images/rural_home_driveway.jpg';

const projects = [
  {
    id: 'fully-custom-home',
    title: 'Fully Custom Home',
    category: 'Custom Homes',
    location: 'East Wichita',
    date: '2023',
    images: [
      bar2, diningRoom, bar3, island, bar2, art, landscaping,
      kitchen, livingroom, masterBath, countertop, lighting, stairs, customKitchen, kitchen1,
    ],
    description: 'Custom-built home in Wichita featuring bespoke kitchen design, curated finishes, and premium amenities.',
    cover: landscaping,
  },
  {
    id: 'luxury-barndominium-2023',
    title: 'Luxury Barndominium',
    category: 'Barndominiums',
    location: 'Rural Sedgwick County',
    date: '2023',
    images: [
      barnCover, barnFront, barnFrame, barnExterior, yoderKitchen,
      barnUpstairs, barnLiving, barnInterior, barnInside,
    ],
    description: 'Modern luxury barndominium in Sedgwick County built with metal siding and shop-house layout.',
    cover: barnCover,
  },
  {
    id: 'rural-build-2023',
    title: 'Custom Rural Home',
    category: 'Rural Builds',
    location: 'West Wichita',
    date: '2023',
    images: [
      ruralCover, dirtwork, buildProcess, office, shower,
      ruralBoxIn, framing, driveway,
    ],
    description: 'Rural residential construction outside Wichita with full site development and custom finish selections.',
    cover: ruralCover,
  },
];

const PortfolioPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <Helmet>
        <title>Project Portfolio | Ternes Construction</title>
        <meta name="description" content="Explore our portfolio of custom homes, barndominiums, and rural builds across Wichita and Kansas." />
        <meta property="og:title" content="Project Portfolio | Ternes Construction" />
        <meta property="og:description" content="Explore our portfolio of custom homes, barndominiums, and rural builds across Wichita and Kansas." />
        <meta property="og:image" content={portfolioHero} />
        <meta property="og:url" content="https://www.ternesconstruction.com/portfolio" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Project Portfolio | Ternes Construction" />
        <meta name="twitter:description" content="See our latest completed custom homes and barndominiums." />
        <meta name="twitter:image" content={portfolioHero} />
        <link rel="canonical" href="https://www.ternesconstruction.com/portfolio" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
        <img
          src={portfolioHero}
          alt="Wichita custom home portfolio hero image"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
        <div className="relative z-20 flex items-center justify-center h-full text-center px-4 pt-24 md:pt-32">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
            Project Portfolio
          </h1>
        </div>
      </section>

      {/* Build Category Links */}
      <div className="bg-neutral-50 py-16 px-4 md:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6 text-neutral-800">Browse by Build Type</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Link to="/projects/custom" className="border p-6 rounded-lg shadow hover:shadow-lg bg-white transition">
            <h3 className="text-xl font-semibold mb-2">Custom Homes</h3>
            <p className="text-gray-600">Tailored designs, one-of-a-kind finishes, and your dream layout.</p>
          </Link>
          <Link to="/projects/barndominiums" className="border p-6 rounded-lg shadow hover:shadow-lg bg-white transition">
            <h3 className="text-xl font-semibold mb-2">Barndominiums</h3>
            <p className="text-gray-600">Shop-house builds blending utility, style, and open-concept living.</p>
          </Link>
          <Link to="/projects/rural" className="border p-6 rounded-lg shadow hover:shadow-lg bg-white transition">
            <h3 className="text-xl font-semibold mb-2">Rural Builds</h3>
            <p className="text-gray-600">Built for acreage, space, and the Kansas lifestyle.</p>
          </Link>
        </div>
      </div>

      {/* Project Grid */}
      <div className="p-8 bg-white">
        <h2 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Recent Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="cursor-pointer border rounded overflow-hidden shadow hover:shadow-lg transition"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.cover}
                alt={`Preview of ${project.title} project in ${project.location}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-500">{project.location} · {project.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default PortfolioPage;
