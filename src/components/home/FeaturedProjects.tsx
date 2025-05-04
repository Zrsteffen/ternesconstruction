import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import CtaButton from '../ui/CtaButton';

const FeaturedProjects: React.FC = () => {
  const projects = [
    {
      id: 'modern-farmhouse',
      title: 'Modern Farmhouse',
      description: 'Contemporary farmhouse design with custom features, open-concept living spaces, and a stunning kitchen.',
      location: 'East Wichita',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
      category: 'Custom Home'
    },
    {
      id: 'luxury-barndominium',
      title: 'Luxury Barndominium',
      description: 'Spacious barndominium with high ceilings, custom finishes, and an attached shop for the ultimate work-live space.',
      location: 'Rural Sedgwick County',
      image: 'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg',
      category: 'Barndominium'
    },
    {
      id: 'custom-ranch',
      title: 'Custom Ranch Home',
      description: 'Single-level living with premium finishes, outdoor entertainment spaces, and energy-efficient features.',
      location: 'Northwest Wichita',
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg',
      category: 'Custom Home'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="Our Recent Work"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80"></div>
                <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 text-sm font-medium rounded">
                  {project.category}
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-white/80 mb-4">{project.location}</p>
                <Link 
                  to={`/portfolio/${project.id}`}
                  className="inline-flex items-center text-white hover:text-primary-300 transition-colors"
                >
                  View Project
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <CtaButton text="View All Projects" to="/portfolio" outline />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;