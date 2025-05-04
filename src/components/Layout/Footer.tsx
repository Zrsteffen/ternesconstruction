import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Logo isFooter />
            </div>
            <p className="text-neutral-300 mb-6">
              Family-owned, builder-direct custom homes with transparency, 
              craftsmanship, and personalized service across Wichita and rural Kansas.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/p/Ternes-Construction-100089614570083/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-neutral-800 hover:bg-primary-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/ternesconstruction/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-neutral-800 hover:bg-primary-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:info@ternesconstruction.com" 
                className="bg-neutral-800 hover:bg-primary-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-neutral-300 hover:text-white transition-colors">
                  Project Portfolio
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-neutral-300 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-medium mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/custom-homes" className="text-neutral-300 hover:text-white transition-colors">
                  Custom Homes
                </Link>
              </li>
              <li>
                <Link to="/services/barndominiums" className="text-neutral-300 hover:text-white transition-colors">
                  Barndominiums & Shop Houses
                </Link>
              </li>
              <li>
                <Link to="/services/rural-builds" className="text-neutral-300 hover:text-white transition-colors">
                  Rural Builds
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-medium mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="mr-3 mt-1 text-primary-400" />
                <div>
                  <a href="tel:+13166442410" className="text-neutral-300 hover:text-white transition-colors block">
                    Jamie: (316) 644-2410
                  </a>
                  <a href="tel:+13166442481" className="text-neutral-300 hover:text-white transition-colors">
                    Jordan: (316) 644-2481
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 mt-1 text-primary-400" />
                <div>
                  <a href="mailto:info@ternesconstruction.com" className="text-neutral-300 hover:text-white transition-colors">
                    info@ternesconstruction.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-primary-400" />
                <div className="text-neutral-300">
                  Wichita, Kansas<br />
                  Serving Wichita and surrounding areas
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-3 mt-1 text-primary-400" />
                <div className="text-neutral-300">
                  Monday - Friday: 8am - 5pm<br />
                  Weekends: By appointment
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Ternes Construction. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-neutral-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-neutral-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;