import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

type NavLink = {
  id: string;
  label: string;
  type: 'section' | 'page';
  path?: string;
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');


  const location = useLocation();
  const navigate = useNavigate();
  const isLandingPage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section based on scroll position (only on landing page)
  useEffect(() => {
    if (!isLandingPage) return;

    const sectionIds = ['beranda', 'tentang-kami', 'layanan', 'tim-dokter', 'hasil-nyata'];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [isLandingPage]);

  // Navigation links configuration
  const navLinks: NavLink[] = [
    { id: 'beranda', label: 'Beranda', type: 'section' },
    { id: 'tentang-kami', label: 'Tentang Kami', type: 'section' },
    { id: 'layanan', label: 'Layanan', type: 'page', path: '/services' },
    { id: 'tim-dokter', label: 'Tim Dokter', type: 'page', path: '/doctors' },
    { id: 'hasil-nyata', label: 'Galeri', type: 'page', path: '/gallery' }
  ];

  const scrollToSection = (sectionId: string) => {
    if (isLandingPage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to landing page with hash for section
      navigate(`/#${sectionId}`);
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (link: NavLink) => {
    if (link.type === 'section') {
      scrollToSection(link.id);
    } else if (link.path) {
      navigate(link.path);
      setIsMobileMenuOpen(false);
    }
  };

  const isActive = (link: NavLink) => {
    if (link.type === 'page' && link.path) {
      return location.pathname === link.path;
    }
    return isLandingPage && activeSection === link.id;
  };

  return (
    <>
      <motion.nav
        role="navigation"
        aria-label="Navigasi utama"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'glass shadow-lg py-4'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center"
              >
                <Sparkles className="w-5 h-5 text-white" />
              </motion.div>
              <div>
                <h1 className="text-2xl font-bold text-dark group-hover:text-primary transition-all">
                  Contoh5
                </h1>
                <p className="text-xs text-dark/70 -mt-1">Skin Clinic</p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div
                  key={link.id}
                  className="relative"
                >
                  <button
                    onClick={() => handleNavClick(link)}
                    className={`relative text-sm font-medium transition-colors ${isActive(link)
                      ? 'text-primary'
                      : 'text-dark hover:text-primary'
                      }`}
                  >
                    {link.label}
                  </button>
                  {isActive(link) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <motion.button
                onClick={() => scrollToSection('cta')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2 bg-primary text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
              >
                <span className="relative z-10">Konsultasi Sekarang</span>
              </motion.button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-dark hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            >
              {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </motion.nav >

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menu navigasi"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs glass-dark z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-bold text-white">Contoh5</span>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-white hover:text-primary-light transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex flex-col space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.id}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => handleNavClick(link)}
                        className={`flex items-center justify-between w-full text-left px-4 py-3 text-lg font-medium rounded-xl transition-all ${isActive(link)
                          ? 'text-primary-light bg-white/10'
                          : 'text-white hover:text-primary-light hover:bg-white/5'
                          }`}
                      >
                        <span>{link.label}</span>
                        {link.type === 'page' && (
                          <span className="text-xs text-white/50 bg-white/10 px-2 py-1 rounded-full">
                            Halaman
                          </span>
                        )}
                      </button>
                    </motion.div>
                  ))}

                  <div className="pt-4 mt-4 border-t border-white/10">
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: navLinks.length * 0.1 }}
                    >
                      <button
                        onClick={() => scrollToSection('cta')}
                        className="block w-full px-6 py-4 bg-primary text-white text-center rounded-xl font-medium shadow-lg shadow-primary/30"
                      >
                        Konsultasi Sekarang
                      </button>
                    </motion.div>
                  </div>

                  {/* Quick links in mobile */}
                  <div className="pt-6 mt-4 border-t border-white/10">
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-3 px-4">Halaman Lainnya</p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { label: 'Galeri', path: '/gallery' },
                        { label: 'Tim Dokter', path: '/doctors' },
                      ].map((item, index) => (
                        <motion.div
                          key={item.path}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: (navLinks.length + 1) * 0.1 + index * 0.05 }}
                        >
                          <Link
                            to={item.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block px-3 py-2 text-sm rounded-lg transition-all ${location.pathname === item.path
                              ? 'text-primary-light bg-white/10'
                              : 'text-white/70 hover:text-white hover:bg-white/5'
                              }`}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
