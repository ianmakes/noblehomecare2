import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-gray-800 text-white">
      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Logo and Tagline Column */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center">
                <img src="/lovable-uploads/heart-logo.png" alt="Premier Healthcare Heart Logo" className="w-12 h-20 md:w-24 md:h-24 object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-healthcare-teal">Premier Healthcare</h3>
                <p className="text-sm text-gray-300">of Georgia</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your Care. Your Comfort. Your Home.
            </p>
            <p className="text-sm text-gray-400">
              Providing compassionate, personalized home care services across Georgia 
              with dignity, respect, and excellence.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" onClick={handleLinkClick} className="text-gray-300 hover:text-healthcare-teal transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleLinkClick} className="text-gray-300 hover:text-healthcare-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={handleLinkClick} className="text-gray-300 hover:text-healthcare-teal transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/jobs" onClick={handleLinkClick} className="text-gray-300 hover:text-healthcare-teal transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleLinkClick} className="text-gray-300 hover:text-healthcare-teal transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" onClick={handleLinkClick} className="text-gray-300 hover:text-healthcare-teal transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
            
            <div className="mt-6">
              <h5 className="text-md font-medium mb-3">Service Areas</h5>
              <p className="text-sm text-gray-400">
                Fayette, Fulton, Clayton, Cobb, Coweta, DeKalb, Carroll, 
                Douglas, Gwinnett, Henry Counties
              </p>
            </div>
          </div>

          {/* Contact Information Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-healthcare-teal" />
                <a href="tel:470-210-7666" className="text-gray-300 hover:text-white">
                  470-210-7666
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-healthcare-teal" />
                <a href="mailto:service.premierhealthcarega@gmail.com" className="text-gray-300 hover:text-white text-sm break-all">
                  service.premierhealthcarega@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-healthcare-teal mt-1" />
                <div className="text-gray-300 text-sm">
                  <p>Serving Metro Atlanta</p>
                  <p>& Surrounding Counties</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-6">
              <h5 className="text-md font-medium mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-healthcare-teal rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-healthcare-teal rounded-full flex items-center justify-center transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-healthcare-teal rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-healthcare-teal rounded-full flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">© 2025 Premier Healthcare of Georgia, Inc. All rights reserved. | Licensed & Insured | Powered by Elevate.time™️</p>
        </div>
      </div>
    </footer>;
};
export default Footer;