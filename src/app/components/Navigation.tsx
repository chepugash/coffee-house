import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-neutral-900/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-white text-2xl font-bold">
            Coffee House
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#menu">Меню</NavLink>
            <NavLink href="#about">О нас</NavLink>
            <NavLink href="#contacts">Контакты</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col space-y-4 py-4">
              <MobileNavLink href="#menu" onClick={() => setIsMobileMenuOpen(false)}>
                Меню
              </MobileNavLink>
              <MobileNavLink href="#about" onClick={() => setIsMobileMenuOpen(false)}>
                О нас
              </MobileNavLink>
              <MobileNavLink href="#contacts" onClick={() => setIsMobileMenuOpen(false)}>
                Контакты
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white transition-colors duration-300"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, onClick, children }: { 
  href: string; 
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-300 hover:text-white transition-colors duration-300 block"
    >
      {children}
    </a>
  );
} 