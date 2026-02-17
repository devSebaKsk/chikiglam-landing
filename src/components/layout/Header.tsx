import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from '../ui/Button';

type HeaderProps = {
  showBackButton?: boolean;
  onBackClick?: () => void;
  backLabel?: string;
};

const Header: React.FC<HeaderProps> = ({
  showBackButton = false,
  onBackClick,
  backLabel = 'Volver a opciones',
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Packs', href: '#services' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
            <div className="flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="Chikiglam beauty salon logo" 
              className={`h-10 w-auto transition-all duration-300 ${
                isScrolled ? 'scale-90 brightness-100' : 'scale-100 brightness-110'
              }`} 
            />
            </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            {showBackButton && (
              <button
                type="button"
                onClick={onBackClick}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {backLabel}
              </button>
            )}
            <Button variant="primary" size="sm">
              Reservar Pijamada
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              {showBackButton && (
                <button
                  type="button"
                  onClick={onBackClick}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  {backLabel}
                </button>
              )}
              <div className="px-3 py-2">
                <Button variant="primary" size="sm" className="w-full">
                  Reservar Pijamada
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;