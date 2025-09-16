import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ContactModal from './ContactModal';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About Us',
    path: '/about'
  }, {
    name: 'Services',
    path: '/services'
  }, {
    name: 'Jobs',
    path: '/jobs'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  const isActive = (path: string) => location.pathname === path;
  const handleNavClick = () => {
    setIsOpen(false);
    // Scroll to top when navigating
    window.scrollTo(0, 0);
  };
  return <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        {/* Top bar with contact info - Hidden on mobile */}
        <div className="healthcare-gradient hidden md:block">
          <div className="container-custom">
            <div className="flex justify-between items-center py-2 text-white text-sm">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Phone size={14} />
                  <span>470-210-7666</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Mail size={14} />
                  <span>service.premierhealthcarega@gmail.com</span>
                </div>
              </div>
              <div>
                <span className="font-medium">Your Care. Your Comfort. Your Home.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="container-custom">
          <div className="flex justify-between items-center py-3 md:py-4">
            <Link to="/" onClick={handleNavClick} className="flex items-center space-x-3 md:space-x-4">
              <div className="flex items-center justify-center">
                <img src="/lovable-uploads/premier-healthcare-logo.png" alt="Premier Healthcare Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg md:text-xl font-bold text-primary leading-tight">Premier Healthcare</h1>
                <p className="text-xs md:text-sm text-muted-foreground leading-tight -mt-1">of Georgia, Inc.</p>
              </div>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(item => <Link key={item.name} to={item.path} onClick={handleNavClick} className={`text-gray-700 hover:text-healthcare-teal font-medium transition-colors duration-200 ${isActive(item.path) ? 'text-healthcare-teal border-b-2 border-healthcare-teal pb-1' : ''}`}>
                  {item.name}
                </Link>)}
              <button onClick={() => setIsConsultationModalOpen(true)} className="btn-healthcare">
                Get Care Today
              </button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile navigation */}
          {isOpen && <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-4">
                {navItems.map(item => <Link key={item.name} to={item.path} className={`text-gray-700 hover:text-healthcare-teal font-medium py-2 ${isActive(item.path) ? 'text-healthcare-teal' : ''}`} onClick={handleNavClick}>
                    {item.name}
                  </Link>)}
                <button onClick={() => {
              setIsConsultationModalOpen(true);
              setIsOpen(false);
            }} className="btn-healthcare w-full">
                  Get Care Today
                </button>
              </div>
            </div>}
        </div>
      </nav>

      <ContactModal isOpen={isConsultationModalOpen} onClose={() => setIsConsultationModalOpen(false)} type="consultation" />
    </>;
};
export default Navigation;