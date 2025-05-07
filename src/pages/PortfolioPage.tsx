import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Images
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

const projects = [
  {
    id: 'modern-farmhouse-2023',
    title: 'Modern Farmhouse',
    category: 'Custom Homes',
    location: 'East Wichita',
    date: '2023',
    images: [dirtwork, diningRoom, kitchen, livingroom],
    description: 'Contemporary farmhouse featuring open concept living spaces and custom finishes.',
  },
  {
    id: 'luxury-barndominium-2023',
    title: 'Luxury Barndominium',
    category: 'Barndominiums',
    location: 'Rural Sedgwick County',
    date: '2023',
    images: [barnFront, barnFrame, barnExterior, yoderKitchen, barnUpstairs, barnLiving, barnInterior, barnInside],
    description: 'Modern barndominium with high-end finishes and attached workshop.',
  },
  {
    id: 'rural-build-2023',
    title: 'Custom Rural Home',
    category: 'Rural Builds',
    location: 'West Wichita',
    date: '2023',
    images: [buildProcess, bar2, kitchen, livingRoom2, office, shower],
    description: 'Complete custom build on rural property with specialized features.',
  }
];

const categories = ['All', 'Custom Homes', 'Barndominiums', 'Rural Builds'];

const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Project Portfolio | Ternes Construction</title>
        <meta name="description" content="Explore our portfolio of custom homes, barndominiums, and rural builds across Wichita and Kansas." />
        <meta property="og:image" content={portfolioHero} />
      </Helmet>

      <section className="relative h-[60vh] overflow-hidden">
        <img src={portfolioHero} alt="Portfolio Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center z-10">
          <h1 className="text-4xl md:text-6xl text-white font-bold">Our Project Portfolio</h1>
        </div>
      </section>

      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition ${
                  selectedCategory === category
                    ? 'bg-forest text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
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
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition p-4"
              >
                <img src={project.images[0]} alt={project.title} className="w-full h-64 object-cover rounded mb-4" />
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default PortfolioPage;
