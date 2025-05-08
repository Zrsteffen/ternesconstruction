import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import SectionTitle from '../components/ui/SectionTitle';
import ServicesOverview from '../components/home/ServicesOverview';
import Testimonials from '../components/home/Testimonials';
import ContactCta from '../components/home/ContactCta';

import heroHouse from '../images/hero-house.jpg';
import aboutUs from '../images/about-us.jpg';
import modernFarmhouseHero from '../images/portfolio_hero.jpg';
import barndoHero from '../images/barn_exterior.jpg';
import ranchHero from '../images/build_process_hero.jpg';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home | Ternes Construction</title>
        <meta name="description" content="Crafting custom homes and barndominiums across Wichita with builder-direct service and family values." />
        <meta name="keywords">
