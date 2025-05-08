return (
  <footer className="bg-white text-neutral-800 border-t border-neutral-200">
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <div className="mb-6">
            <Logo isFooter className="w-36 md:w-44" /> {/* Larger Logo */}
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
              <Facebook size={20} />
            </a>
            <a 
              href="https://www.instagram.com/ternesconstruction/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-primary-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="mailto:info@ternesconstruction.com" 
              className="text-neutral-500 hover:text-primary-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-medium mb-6">Quick Links</h3>
          <ul className="space-y-3 text-neutral-600">
            {['Home', 'About Us', 'Services', 'Project Portfolio', 'Testimonials', 'Contact Us'].map((label, idx) => (
              <li key={idx}>
                <Link to={`/${label.toLowerCase().replace(/ /g, '-')}`} className="hover:text-primary-600 transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-medium mb-6">Our Services</h3>
          <ul className="space-y-3 text-neutral-600">
            <li>
              <Link to="/services/custom-homes" className="hover:text-primary-600 transition-colors">Custom Homes</Link>
            </li>
            <li>
              <Link to="/services/barndominiums" className="hover:text-primary-600 transition-colors">Barndominiums & Shop Houses</Link>
            </li>
            <li>
              <Link to="/services/rural-builds" className="hover:text-primary-600 transition-colors">Rural Builds</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-medium mb-6">Contact Information</h3>
          <ul className="space-y-4 text-neutral-600">
            <li className="flex items-start">
              <Phone size={20} className="mr-3 mt-1 text-primary-600" />
              <div>
                <a href="tel:+13166442410" className="block hover:text-primary-600 transition-colors">Jamie: (316) 644-2410</a>
                <a href="tel:+13166442481" className="hover:text-primary-600 transition-colors">Jordan: (316) 644-2481</a>
              </div>
            </li>
            <li className="flex items-start">
              <Mail size={20} className="mr-3 mt-1 text-primary-600" />
              <a href="mailto:info@ternesconstruction.com" className="hover:text-primary-600 transition-colors">
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
          &copy; {new Date().getFullYear()} Ternes Construction. All rights reserved.
        </p>
        <div className="flex space-x-6 text-sm text-neutral-500">
          <Link to="/privacy-policy" className="hover:text-primary-600 transition-colors">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-primary-600 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);
