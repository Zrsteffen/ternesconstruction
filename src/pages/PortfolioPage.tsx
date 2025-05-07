import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Info } from 'lucide-react';
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
    description: 'Contemporary farmhouse featuring open concept living spaces and custom finishes.',
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
      '/images/barn_upstair.jpg', // ✅ fixed typo here
      '/images/barn_living.jpg',
      '/images/barn_interrior.jpg',
      '/images/barn_inside.jpg',
    ],
    description: 'Modern barndominium with high-end finishes and attached workshop.',
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
    description: 'Complete custom build on rural property with specialized features.',
  },
];

const categories = ['All', 'Custom Homes', 'Barndominiums', 'Rural Builds'];

const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Project Portfolio | Ternes Construction</title>
        <meta name="description" content="Explore our portfolio of custom homes, barndominiums, and rural builds across Wichita and Kansas." />
        <meta property="og:image" content="/images/portfolio_hero.jpg" />
      </Helmet>

      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img src={portfolioHero} alt="Portfolio hero" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.h1 className="text-4xl md:text-6xl font-bold text-white mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Our Project Portfolio
          </motion.h1>
          <motion.p className="text-xl text-white/90 max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Explore our collection of custom builds, from modern farmhouses to luxury barndominiums
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category ? 'bg-primary-600 text-white' : 'bg-white text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project.id)} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal project={projects.find((p) => p.id === selectedProject)!} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
};

// === ProjectCard Component ===
const ProjectCard: React.FC<{ project: typeof projects[0]; onClick: () => void }> = ({ project, onClick }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prev) =>
          prev === project.images.length - 1 ? 0 : prev + 1
        );
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [inView, project.images.length]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-lg shadow-lg bg-white"
    >
      <div className="relative h-64 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImageIndex}
            src={project.images[currentImageIndex]}
            alt={project.title}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button
            onClick={onClick}
            className="bg-white p-3 rounded-full hover:bg-neutral-100 transition"
          >
            <Info size={24} />
          </button>
        </div>
      </div>
      <div className="p-6">
        <span className="text-sm font-medium text-primary-600">{project.category}</span>
        <h3 className="text-xl font-bold mt-1">{project.title}</h3>
        <p className="text-neutral-600 mt-2">{project.location}</p>
      </div>
    </motion.div>
  );
};

// === ProjectModal Component ===
const ProjectModal: React.FC<{ project: typeof projects[0]; onClose: () => void }> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-700">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-neutral-600 mb-6">{project.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <img key={index} src={image} alt={`${project.title} - ${index + 1}`} className="rounded-lg shadow-md" />
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong className="block text-neutral-900">Location</strong>
              <span className="text-neutral-600">{project.location}</span>
            </div>
            <div>
              <strong className="block text-neutral-900">Completed</strong>
              <span className="text-neutral-600">{project.date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
