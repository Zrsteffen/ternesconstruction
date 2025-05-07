import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Info } from 'lucide-react';

// ✅ Import hero and images
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
import heroHouse from '../images/hero-house.jpg';
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
        <meta name="description" content="Explore our portfolio of custom homes, barndominiums, and rural builds across Wichita and Kansas." />
        <meta property="og:image" content={portfolioHero} />
      </Helmet>

      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img src={portfolioHero} alt="Hero" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-center text-center text-white">
          <motion.h1 className="text-5xl font-bold" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>Our Project Portfolio</motion.h1>
          <motion.p className="text-xl mt-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>Explore our custom homes and barndominiums</motion.p>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map(cat => (
              <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-6 py-2 rounded-full ${selectedCategory === cat ? 'bg-primary-600 text-white' : 'bg-white text-neutral-600 hover:bg-neutral-100'}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project.id)} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal project={projects.find(p => p.id === selectedProject)!} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
};

const ProjectCard: React.FC<{ project: typeof projects[0]; onClick: () => void }> = ({ project, onClick }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [inView, project.images.length]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, y: 20 }}
      className="relative overflow-hidden bg-white rounded-lg shadow-md group"
    >
      <div className="relative h-64">
        <motion.img
          key={index}
          src={project.images[index]}
          alt={`${project.title} Image`}
          className="object-cover w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity">
          <button onClick={onClick} className="bg-white text-black p-2 rounded-full shadow"><Info size={20} /></button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="text-sm text-neutral-500">{project.location}</p>
      </div>
    </motion.div>
  );
};

const ProjectModal: React.FC<{ project: typeof projects[0]; onClose: () => void }> = ({ project, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
    <div className="bg-white max-w-4xl w-full p-6 rounded-lg relative overflow-auto max-h-[90vh]">
      <button onClick={onClose} className="absolute top-4 right-4 text-neutral-600 hover:text-black">&times;</button>
      <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
      <p className="text-neutral-600 mb-4">{project.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.images.map((img, i) => (
          <img key={i} src={img} alt={`${project.title} ${i + 1}`} className="rounded shadow" />
        ))}
      </div>
      <div className="mt-4 flex justify-between text-sm">
        <span><strong>Location:</strong> {project.location}</span>
        <span><strong>Completed:</strong> {project.date}</span>
      </div>
    </div>
  </div>
);

export default PortfolioPage;
