import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import images
import portfolioHero from '../images/portfolio_hero.jpg';
import dirtwork from '../images/dirtwork.jpg';
import diningRoom from '../images/ternes_dining_room.jpg';
import kitchen from '../images/ternes_kitchen.jpg';
import livingroom from '../images/ternes_livingroom.jpg';
import barnFront from '../images/barn_front.jpg';
import barnFrame from '../images/barn_frame.jpg';
import barnExterior from '../images/barn_exterior.jpg';
import yoderKitchen from '../images/yoder_finished kitchen.jpg';
import barnUpstairs from '../images/barn_upstair.jpg';
import barnLiving from '../images/barn_living.jpg';
import barnInterior from '../images/barn_interrior.jpg';
import barnInside from '../images/barn_inside.jpg';
import buildProcess from '../images/build_process_hero.jpg';
import bar2 from '../images/ternes_bar2.jpg';
import livingRoom2 from '../images/ternes_living_room.jpg';
import office from '../images/ternes_office.jpg';
import shower from '../images/ternes_shower.jpg';

import ProjectDetail from '../components/ProjectDetail';

const projects = [
  {
    id: 'modern-farmhouse-2023',
    title: 'Modern Farmhouse',
    category: 'Custom Homes',
    location: 'East Wichita',
    date: '2023',
    images: [dirtwork, diningRoom, kitchen, livingroom],
    description: 'Contemporary farmhouse featuring open concept living spaces and custom finishes.'
  },
  {
    id: 'luxury-barndominium-2023',
    title: 'Luxury Barndominium',
    category: 'Barndominiums',
    location: 'Rural Sedgwick County',
    date: '2023',
    images: [barnFront, barnFrame, barnExterior, yoderKitchen, barnUpstairs, barnLiving, barnInterior, barnInside],
    description: 'Modern barndominium with high-end finishes and attached workshop.'
  },
  {
    id: 'rural-build-2023',
    title: 'Custom Rural Home',
    category: 'Rural Builds',
    location: 'West Wichita',
    date: '2023',
    images: [buildProcess, bar2, kitchen, livingRoom2, office, shower],
    description: 'Complete custom build on rural property with specialized features.'
  }
];

const categories = ['All', 'Custom Homes', 'Barndominiums', 'Rural Builds'];

const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Project Portfolio | Ternes Construction</title>
      </Helmet>

      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={portfolioHero}
          alt="Project Portfolio"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex flex-col justify-center items-center h-full text-white text-center">
          <motion.h1 className="text-5xl font-bold mb-4">Our Project Portfolio</motion.h1>
          <motion.p className="text-lg max-w-xl">
            Explore our collection of custom builds, from modern farmhouses to luxury barndominiums
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="cursor-pointer shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
                onClick={() => setSelectedProject(project.id)}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="text-sm text-neutral-500">{project.location} • {project.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            project={projects.find(p => p.id === selectedProject)!}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioPage;
