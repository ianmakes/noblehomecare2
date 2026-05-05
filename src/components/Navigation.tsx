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
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300 rounded-2xl ${isScrolled ? 'healthcare-gradient shadow-xl border border-white/10 py-0' : 'bg-transparent py-1 shadow-none border-none'}`}>
        {/* Main navigation */}
        <div className="container-custom">
          <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-14' : 'h-20'}`}>
            <a href="/" className="flex items-center space-x-3 md:space-x-4 group">
              <div className={`relative flex items-center justify-center transition-all duration-500 ${isScrolled ? 'bg-white/10 p-1 shadow-none border-none rounded-full' : 'bg-white/10 p-1.5 shadow-2xl border-2 border-healthcare-gold rounded-full'}`}>
                <img 
                  src="/noble-logo.png" 
                  alt="Noble Homecare Agency Logo" 
                  className={`object-contain transition-all duration-500 brightness-0 invert ${isScrolled ? 'w-8 h-8 md:w-9 md:h-9' : 'w-14 h-14 md:w-16 md:h-16'}`} 
                />
                <div className="absolute inset-0 rounded-full border border-white/50 pointer-events-none"></div>
              </div>
              <div className="flex flex-col">
                <h1 className={`font-serif font-bold leading-none transition-all duration-300 text-white ${isScrolled ? 'text-sm md:text-lg' : 'text-lg md:text-2xl'}`}>
                  Noble Homecare
                </h1>
                <span className={`uppercase tracking-[0.2em] font-medium transition-all duration-300 text-healthcare-gold ${isScrolled ? 'text-[8px] md:text-[9px]' : 'text-[10px] md:text-xs'}`}>
                  Agency of Georgia
                </span>
              </div>
            </a>

            {/* Desktop navigation */}
            <div className={`hidden md:flex items-center transition-all duration-300 ${isScrolled ? 'space-x-6' : 'space-x-8'}`}>
              {navItems.map(item => <Link key={item.name} to={item.path} onClick={handleNavClick} className={`font-medium transition-all duration-200 text-white/90 hover:text-white ${isScrolled ? 'text-sm' : 'text-base'} ${isActive(item.path) ? 'text-white border-b-2 border-white pb-1' : ''}`}>
                  {item.name}
                </Link>)}
              <button onClick={() => setIsConsultationModalOpen(true)} className={`btn-healthcare bg-healthcare-gold text-white hover:bg-healthcare-gold-dark transition-all duration-300 ${isScrolled ? 'px-4 py-1.5 text-xs' : ''}`}>
                Get Care Today
              </button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile navigation */}
          {isOpen && <div className={`md:hidden pb-4 rounded-b-2xl mt-2 px-4 shadow-xl border-t transition-all duration-300 ${isScrolled ? 'bg-healthcare-green/95 border-white/10' : 'bg-white/95 border-gray-100'}`}>
              <div className="flex flex-col space-y-4 pt-4">
                {navItems.map(item => <Link key={item.name} to={item.path} className={`font-medium py-2 transition-colors ${isScrolled ? 'text-white/90 hover:text-white' : 'text-gray-700 hover:text-healthcare-teal'} ${isActive(item.path) ? (isScrolled ? 'text-healthcare-gold' : 'text-healthcare-teal') : ''}`} onClick={handleNavClick}>
                    {item.name}
                  </Link>)}
                <button onClick={() => {
              setIsConsultationModalOpen(true);
              setIsOpen(false);
            }} className={`btn-healthcare w-full ${isScrolled ? 'bg-healthcare-gold text-white' : ''}`}>
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