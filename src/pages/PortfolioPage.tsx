import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ProjectDetail from './ProjectDetail'; // ✅ Corrected import

// ✅ Images
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
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Project Portfolio | Ternes Construction</title>
        <meta name="description" content="Explore our portfolio of custom homes, barndominiums, and rural builds across Wichita and Kansas." />
        <meta property="og:title" content="Project Portfolio | Ternes Construction" />
        <meta property="og:description" content="Explore our portfolio of custom homes, barndominiums, and rural builds across Wichita and Kansas." />
        <meta property="og:image" content={portfolioHero} />
        <meta property="og:url" content="https://ternesconstruction.com/portfolio" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Project Portfolio | Ternes Construction" />
        <meta name="twitter:description" content="See our latest completed custom homes and barndominiums." />
        <meta name="twitter:image" content={portfolioHero} />
      </Helmet>

      {/* ✅ Hero Section */}
      <div className="w-full h-64 md:h-96 overflow-hidden relative mb-8">
        <img
          src={portfolioHero}
          alt="Project Portfolio Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">Project Portfolio</h1>
        </div>
      </div>

      <div className="p-8 bg-white min-h-screen">
        <div className="mb-6 space-x-3">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded border ${
                selectedCategory === category ? 'bg-black text-white' : 'bg-gray-200'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="cursor-pointer border rounded overflow-hidden shadow hover:shadow-lg transition"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.images[0]} alt={project.title} className="w-full h-64 object-cover" />
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
