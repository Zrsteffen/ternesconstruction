import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-neutral-800 border-t border-neutral-200">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Logo isFooter />
            </div>
            <p className="text-neutral-600 mb-6">
              Family-owned, builder-direct custom homes with transparency, craftsmanship, and personalized service across Wichita and rural Kansas.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/p/Ternes-Construction-100089614570083/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/ternesconstruction/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="mailto:info@ternesconstruction.com" 
                className="text-neutral-500 hover:text-primary-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Services', to: '/services' },
                { label: 'Project Portfolio', to: '/portfolio' },
                { label: 'Testimonials', to: '/testimonials' },
                { label: 'Contact Us', to: '/contact' },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-neutral-600 hover:text-primary-600 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/custom-homes" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Custom Homes
                </Link>
              </li>
              <li>
                <Link to="/services/barndominiums" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Barndominiums & Shop Houses
                </Link>
              </li>
              <li>
                <Link to="/services/rural-builds" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Rural Builds
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <ul className="space-y-4 text-neutral-600">
              <li className="flex items-start">
                <Phone size={20} className="mr-3 mt-1 text-primary-600" />
                <div>
                  <a href="tel:+13166442410" className="hover:text-primary-600 block">
                    Jamie: (316) 644-2410
                  </a>
                  <a href="tel:+13166442481" className="hover:text-primary-600">
                    Jordan: (316) 644-2481
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 mt-1 text-primary-600" />
                <a href="mailto:info@ternesconstruction.com" className="hover:text-primary-600">
                  info@ternesconstruction.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-primary-600" />
                <span>
                  Wichita, Kansas<br />
                  Serving Wichita and surrounding areas
                </span>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-3 mt-1 text-primary-600" />
                <span>
                  Monday - Friday: 8am - 5pm<br />
                  Weekends: By appointment
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-500 mb-4 md:mb-0">
            &copy; {currentYear} Ternes Construction. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-neutral-500 hover:text-primary-600 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-sm text-neutral-500 hover:text-primary-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
