import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Info } from 'lucide-react';

// ✅ Import hero image
import portfolioHero from '../images/portfolio_hero.jpg';

// ✅ Import project images
import dirtwork from '../images/dirtwork.jpg';
import diningRoom from '../images/ternes_dining_room.jpg';
import kitchen from '../images/ternes_kitchen.jpg';
import livingroom from '../images/ternes_livingroom.jpg';

import barnFront from '../images/barn_front.jpg';
import barnFrame from '../images/barn_frame.jpg';
import barnExterior from '../images/barn_exterior.jpg';
import yoderKitchen from '../images/yoder_finished kitchen.jpg';
import barnUpstairs from '../images/barn_upstair.jpg'; // ✅ Corrected .jpb to .jpg
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

// 🧠 You'll still need to define the ProjectCard and ProjectModal components
// or import them if they are split into separate files.

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
        <meta property="og:image" content={portfolioHero} />
        <meta property="og:url" content="https://ternesconstruction.com/portfolio" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Project Portfolio | Ternes Construction" />
        <meta name="twitter:description" content="See our latest completed custom homes and barndominiums." />
        <meta name="twitter:image" content={portfolioHero} />
      </Helmet>

      {/* Your layout, buttons, ProjectCard and ProjectModal rendering go here */}
    </>
  );
};

export default PortfolioPage;
