import { Heart, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-healthcare-green-dark text-white border-t-4 border-healthcare-gold">
      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Logo and Tagline Column */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center bg-white p-2 rounded-lg">
                <img src="/noble-logo.png" alt="Noble Homecare Agency Logo" className="w-16 h-16 object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-healthcare-gold">Noble Homecare Agency</h3>
                <p className="text-sm text-gray-300">of Georgia</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed font-serif italic">
              "Your Care. Your Comfort. Your Home."
            </p>
            <p className="text-sm text-gray-400">
              Providing compassionate, personalized home care services across Georgia 
              with dignity, respect, and excellence.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-healthcare-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" onClick={handleLinkClick} className="text-gray-300 hover:text-healthcare-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleLinkClick} className="text-gray-300 hover:text-healthcare-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={handleLinkClick} className="text-gray-300 hover:text-healthcare-gold transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/jobs" onClick={handleLinkClick} className="text-gray-300 hover:text-healthcare-gold transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleLinkClick} className="text-gray-300 hover:text-healthcare-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information Column */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-healthcare-gold">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-healthcare-gold" />
                <a href="tel:1-866-756-7374" className="text-gray-300 hover:text-white">
                  1-866-756-7374
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-healthcare-gold" />
                <a href="mailto:info@noblehomecareagency.com" className="text-gray-300 hover:text-white text-sm break-all">
                  info@noblehomecareagency.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-healthcare-gold mt-1" />
                <div className="text-gray-300 text-sm">
                  <p>7120 Weatherford Drive</p>
                  <p>Powder Springs, GA 30127</p>
                </div>
              </div>
            </div>


          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-gray-400 font-serif">© 2025 Noble Homecare Agency All rights reserved. | Licensed & Insured</p>
        </div>
      </div>
    </footer>;
};
export default Footer;