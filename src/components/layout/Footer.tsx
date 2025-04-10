
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-seflam-blue text-white dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">SEFLAM SGL</h3>
            <p className="mb-4 text-gray-300">
              Providing top-tier engineering, procurement, and construction services in the oil and gas industry.
            </p>
            <div className="flex items-center mb-2">
              <Phone className="h-5 w-5 mr-2" />
              <span>+234 1 453 8880</span>
            </div>
            <div className="flex items-center mb-2">
              <Mail className="h-5 w-5 mr-2" />
              <span>info@seflamsgl.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/qhse" className="text-gray-300 hover:text-white transition-colors">
                  QHSE
                </Link>
              </li>
              <li>
                <Link to="/nigerian-content" className="text-gray-300 hover:text-white transition-colors">
                  Nigerian Content
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#engineering" className="text-gray-300 hover:text-white transition-colors">
                  Engineering
                </Link>
              </li>
              <li>
                <Link to="/services#procurement" className="text-gray-300 hover:text-white transition-colors">
                  Procurement
                </Link>
              </li>
              <li>
                <Link to="/services#construction" className="text-gray-300 hover:text-white transition-colors">
                  Construction
                </Link>
              </li>
              <li>
                <Link to="/services#offshore-installation" className="text-gray-300 hover:text-white transition-colors">
                  Offshore Installation
                </Link>
              </li>
              <li>
                <Link to="/services#laser-scanning" className="text-gray-300 hover:text-white transition-colors">
                  Laser Scanning
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Locations</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">Head Office:</h4>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    11 Olosa Street, Victoria Island, Lagos, Nigeria
                  </span>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-1">Construction Yard:</h4>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Seflam Yard, Rumuolumeni, Port Harcourt, Rivers State, Nigeria
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} Seflam SGL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
