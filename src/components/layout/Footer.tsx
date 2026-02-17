import React from 'react';
import { FiInstagram, FiFacebook, FiTwitter, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src="/logo.png" 
              alt="Chikiglam beauty salon logo" 
              className="h-16 w-auto" 
            />
            <p className="text-gray-400">
              Experiencias mágicas de pijamadas. Creamos recuerdos inolvidables para los más pequeños.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/chiki.glam" className="text-gray-400 hover:text-primary-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <FiInstagram size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61575189385012" className="text-gray-400 hover:text-primary-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <FiFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Packs</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonios</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Packs</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Pack Cine</span></li>
              <li><span className="text-gray-400">Pack Pijamada</span></li>
              <li><span className="text-gray-400">Pack Premium</span></li>
              <li><span className="text-gray-400">Mixtura & Chikiglam</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FiPhone className="text-primary-500" />
                <span className="text-gray-400">+54 9 299 5217901</span>
              </div> 
              <div className="flex items-center space-x-3">
                <FiInstagram className="text-primary-500" />
                <span className="text-gray-400">@chiki.glam</span>
              </div>
              <div className="flex items-start space-x-3">
                <FiMapPin className="text-primary-500 mt-1" />
                <span className="text-gray-400">Neuquen - Neuquen</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PixelIT. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;