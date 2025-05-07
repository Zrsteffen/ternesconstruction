import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Info } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import portfolioHero from '../images/portfolio_hero.jpg';

const projects = [
  {
    id: 'modern-farmhouse-2023',
    title: 'Modern Farmhouse',
    category: 'Custom Homes',
    location: 'East Wichita',
    date: '2023',
    images: [
      '/images/dirtwork.jpg',
      '/images/ternes_dining_room.jpg',
      '/images/ternes_kitchen.jpg',
      '/images/ternes_livingroom.JPG',
    ],
    description: 'Contemporary farmhouse featuring open concept living spaces and custom finishes.'
  },
  {
    id: 'luxury-barndominium-2023',
    title: 'Luxury Barndominium',
    category: 'Barndominiums',
    location: 'Rural Sedgwick County',
    date: '2023',
    images: [
      '/images/barn_frame.jpg',
      '/images/barn_exterior.jpg',
      '/images/yoder_finished kitchen.jpg',
      '/images/barn_upstair.jpb',
      '/images/barn_living.jpg',
      '/images/barn_interrior.jpg',
      '/images/barn_inside.jpg',
    ],
    description: 'Modern barndominium with high-end finishes and attached workshop.'
  },
  {
    id: 'rural-build-2023',
    title: 'Custom Rural Home',
    category: 'Rural Builds',
    location: 'West Wichita',
    date: '2023',
    images: [
      '/images/build_process_hero.jpg',
      '/images/ternes_bar2.JPG',
      '/images/ternes_kitchen.jpg',
      '/images/ternes_living_room.jpg',
      '/images/ternes_office.jpg',
      '/images/ternes_shower.jpg',
    ],
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
        <meta name="description" content="Explore our portfolio of custom homes, barndominiums, and rural builds across Wichita and Kansas." />
        <meta property="og:title" content="Project Portfolio | Ternes Construction" />
        <meta property="og:description" content="Explore our portfolio of custom homes, barndominiums, and rural builds across Wichita and Kansas." />
        <meta property="og:image" content="/images/portfolio_hero.jpg" />
        <meta property="og:url" content="https://ternesconstruction.com/portfolio" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Project Portfolio | Ternes Construction" />
        <meta name="twitter:description" content="See our latest completed custom homes and barndominiums." />
        <meta name="twitter:image" content="/images/portfolio_hero.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img 
            src={portfolioHero}
            alt="Ternes Construction project portfolio"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Project Portfolio
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our collection of custom builds, from modern farmhouses to luxury barndominiums
          </motion.p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project.id)}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={projects.find(p => p.id === selectedProject)!}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

// Remaining component logic unchanged...

export default PortfolioPage;
