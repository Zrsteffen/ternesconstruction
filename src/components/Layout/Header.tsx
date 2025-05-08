import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link to="/" className="z-20 flex-shrink-0">
          <Logo size={100} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {[
            { label: 'Home', to: '/' },
            { label: 'About', to: '/about' },
            { label: 'Services', to: '/services' },
            { label: 'Portfolio', to: '/portfolio' },
            { label: 'Testimonials', to: '/testimonials' },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `font-medium hover:text-primary-600 transition-colors ${
                  isActive ? 'text-primary-600' : 'text-neutral-800'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </nav>

        {/* Phone Number */}
        <div className="hidden lg:flex items-center">
          <a
            href="tel:+13166442410"
            className="flex items-center font-medium ml-8 text-neutral-800 hover:text-primary-600 transition-colors"
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
            <X size={24} className="text-neutral-800" />
          ) : (
            <Menu size={24} className="text-neutral-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden flex flex-col`}
      >
        <div className="flex flex-col items-center justify-center h-full text-center space-y-8 px-4">
          {[
            { label: 'Home', to: '/' },
            { label: 'About', to: '/about' },
            { label: 'Services', to: '/services' },
            { label: 'Portfolio', to: '/portfolio' },
            { label: 'Testimonials', to: '/testimonials' },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-xl font-medium hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

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
