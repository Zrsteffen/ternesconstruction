import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from '../ui/Logo';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="z-10">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => `font-medium hover:text-primary-600 transition-colors ${
                isActive ? 'text-primary-600' : isScrolled ? 'text-neutral-800' : 'text-white'
              }`}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `font-medium hover:text-primary-600 transition-colors ${
                isActive ? 'text-primary-600' : isScrolled ? 'text-neutral-800' : 'text-white'
              }`}
            >
              About
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => `font-medium hover:text-primary-600 transition-colors ${
                isActive ? 'text-primary-600' : isScrolled ? 'text-neutral-800' : 'text-white'
              }`}
            >
              Services
            </NavLink>
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => `font-medium hover:text-primary-600 transition-colors ${
                isActive ? 'text-primary-600' : isScrolled ? 'text-neutral-800' : 'text-white'
              }`}
            >
              Portfolio
            </NavLink>
            <NavLink 
              to="/testimonials" 
              className={({ isActive }) => `font-medium hover:text-primary-600 transition-colors ${
                isActive ? 'text-primary-600' : isScrolled ? 'text-neutral-800' : 'text-white'
              }`}
            >
              Testimonials
            </NavLink>
            <Link 
              to="/contact" 
              className="btn btn-primary"
            >
              Contact Us
            </Link>
          </nav>

          {/* Phone Number for Desktop */}
          <div className="hidden lg:flex items-center">
            <a 
              href="tel:+13166442410" 
              className={`flex items-center font-medium ml-8 hover:text-primary-600 transition-colors ${
                isScrolled ? 'text-neutral-800' : 'text-white'
              }`}
            >
              <Phone size={20} className="mr-2" />
              (316) 644-2410
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden z-10 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-neutral-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-neutral-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden flex flex-col`}
      >
        <div className="flex flex-col items-center justify-center h-full text-center space-y-8 px-4">
          <Link 
            to="/" 
            className="text-xl font-medium hover:text-primary-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-xl font-medium hover:text-primary-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/services" 
            className="text-xl font-medium hover:text-primary-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/portfolio" 
            className="text-xl font-medium hover:text-primary-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link 
            to="/testimonials" 
            className="text-xl font-medium hover:text-primary-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </Link>
          <Link 
            to="/contact" 
            className="btn btn-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
          <a 
            href="tel:+13166442410" 
            className="flex items-center text-xl font-medium hover:text-primary-600 transition-colors"
          >
            <Phone size={20} className="mr-2" />
            (316) 644-2410
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;