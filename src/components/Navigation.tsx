import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ContactModal from './ContactModal';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
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
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300 rounded-2xl bg-white/95 backdrop-blur-sm shadow-xl border border-white/20 ${isScrolled ? 'py-0 bg-white/100' : 'py-1'}`}>
        {/* Main navigation */}
        <div className="container-custom">
          <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
            <Link to="/" onClick={handleNavClick} className="flex items-center space-x-3 md:space-x-4">
              <div className="flex items-center justify-center">
                <img src="/noble-logo.png" alt="Noble Homecare Agency Logo" className={`object-contain transition-all duration-300 ${isScrolled ? 'w-12 h-12 md:w-14 md:h-14' : 'w-16 h-16 md:w-20 md:h-20'}`} />
              </div>
              <div className="flex flex-col">
                <h1 className={`font-bold text-primary leading-tight transition-all duration-300 ${isScrolled ? 'text-base md:text-lg' : 'text-lg md:text-xl'}`}>Noble Homecare Agency</h1>
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