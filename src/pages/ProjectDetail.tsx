import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    category: string;
    location: string;
    date: string;
    images: string[];
    description: string;
  };
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [index, setIndex] = useState(0);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % project.images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-lg shadow-lg bg-white cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.images[index]}
          alt={`${project.title} - Image ${index + 1}`}
          className="w-full h-full object-cover"
        />

        {/* Navigation Arrows */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 text-black px-2 py-1 rounded-r hover:bg-white transition z-10"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 text-black px-2 py-1 rounded-l hover:bg-white transition z-10"
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}

        {/* Hover Icon */}
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-white/90 hover:bg-white text-neutral-900 p-3 rounded-full transition">
            <Info size={24} />
          </div>
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

export default ProjectCard;
