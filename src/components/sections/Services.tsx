import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiCamera, FiStar, FiFilm, FiGift, FiHeart } from 'react-icons/fi';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Parallax from '../ui/Parallax';

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const floatingShapesRef = useRef<HTMLDivElement[]>([]);
  const services = [
    {
      icon: <FiFilm className="w-8 h-8" />,
      title: 'PACK CINE',
      description: 'Sesión de cinema con proyector 4K, pochoclo y ambiente cinematográfico para una noche de película inolvidable.',
      color: 'from-purple-400 to-pink-500',
      features: ['Proyector 4K', 'Puffs cómodas', 'Pochoclo incluido', 'Pantalla gigante']
    },
    {
      icon: <FiStar className="w-8 h-8" />,
      title: 'PACK PIJAMANDA',
      description: 'La experiencia clásica de pijamadas con todo el equipamiento necesario para una noche divertida.',
      color: 'from-blue-400 to-cyan-500',
      features: ['Carpa XL', 'Luces LED', 'Colchónes alta densidad', 'Decoracion interior']
    },
    {
      icon: <FiStar className="w-8 h-8" />,
      title: 'PACK PREMIUM',
      description: 'La experiencia más completa con todos los extras y servicios adicionales para una celebración única.',
      color: 'from-yellow-400 to-orange-500',
      features: ['Todo incluido', 'Decoración premium', 'Caja Souvenir', 'Skincare']
    },
    {
      icon: <FiCamera className="w-8 h-8" />,
      title: 'PACK Pijamada + Cine',
      description: 'La combinación perfecta de pijamada y cine para una noche llena de diversión y entretenimiento.',
      color: 'from-indigo-400 to-purple-500',
      features: ['Carpa XL', 'Proyector 4K', 'Puffs cómodas', 'Colchónes alta densidad', 'Pochoclo incluido', 'Decoracion interior']
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: 'PACK Skincare',
      description: 'Skincare para una noche llena de diversión y cuidado personal.',
      color: 'from-rose-400 to-indigo-400',
      features: ['Mascarillas faciales', 'Rodajas de pepino', 'Skincare 5 pasos','Batas suaves']
    },
    {
      icon: <FiGift className="w-8 h-8" />,
      title: 'PACK Pijamada + Skincare',
      description: 'La combinación perfecta de pijamada y skincare para una noche llena de diversión y cuidado personal.',
      color: 'from-pink-400 to-purple-500',
      features: ['Carpa XL', 'Mascarillas faciales', 'Skincare 5 pasos','Batas suaves', 'Colchónes alta densidad', 'Decoracion interior']
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax del fondo
      gsap.to(backgroundRef.current, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });

      // Animación de formas flotantes simplificada
      floatingShapesRef.current.forEach((shape, index) => {
        if (shape) {
          gsap.to(shape, {
            y: -30,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1
            }
          });

          // Rotación suave
          gsap.to(shape, {
            rotation: '+=360',
            duration: 30 + (index * 5),
            repeat: -1,
            ease: 'none'
          });
        }
      });

      // Animación del header con 3D
      gsap.fromTo(
        headerRef.current,
        { 
          opacity: 0, 
          y: 80, 
          rotationX: -20,
          scale: 0.8,
          filter: 'blur(20px)'
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animación simple de las cards
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { 
            opacity: 0, 
            y: 60, 
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            stagger: 0.2,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={sectionRef} id="services" className="section-padding bg-white relative overflow-hidden">
      {/* Fondo con parallax */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-tr from-brand-blue/3 via-brand-purple/2 to-brand-pink/3 will-change-transform"
      >
        {/* Formas flotantes */}
        {[
          { size: 'w-20 h-20', style: { top: '20%', left: '15%' }, gradient: 'from-brand-yellow/20 to-brand-pink/20' },
          { size: 'w-16 h-16', style: { top: '60%', left: '80%' }, gradient: 'from-brand-cyan/20 to-brand-blue/20' },
          { size: 'w-24 h-24', style: { top: '40%', left: '70%' }, gradient: 'from-brand-purple/20 to-brand-pink/20' },
          { size: 'w-12 h-12', style: { top: '80%', left: '20%' }, gradient: 'from-brand-blue/20 to-brand-cyan/20' }
        ].map((shape, i) => (
          <div
            key={i}
            ref={el => el && (floatingShapesRef.current[i] = el)}
            className={`absolute will-change-transform rounded-full bg-gradient-to-r ${shape.size} ${shape.gradient}`}
            style={shape.style}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div ref={headerRef} className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-gray-900 mb-6">
            Nuestros <span className="gradient-text">Packs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige la experiencia perfecta para tu celebración. Cada pack incluye todo lo necesario 
            para crear recuerdos inolvidables.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden p-0 hover:scale-105 transition-transform duration-300 ease-out flex flex-col h-full"
            >
              {/* Gradiente del header */}
              <div className={`bg-gradient-to-r ${service.color} p-8 text-white relative`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <div className="service-icon inline-block p-3 rounded-full bg-white/20 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-8 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-primary-500 mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 mt-auto"
                  onClick={() => {
                    const message = `Hola! Me interesa el ${service.title}. ¿Puedes darme más información?`;
                    const phone = '5492995217901';
                    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
                    window.open(url, '_blank', 'noopener,noreferrer');
                  }}
                >
                  Más Información
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action mejorado */}
        <div className="text-center mt-20">
          <Parallax speed={0.5}>
            <div className="bg-gradient-to-r from-brand-purple to-brand-pink p-8 rounded-3xl text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                ¿No encuentras lo que buscas?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Creamos experiencias personalizadas según tus necesidades
              </p>
              <Button size="lg" className="text-brand-pink bg-white text-gray-900 hover:bg-gray-100 hover:text-white">
                Cotizar Pack Personalizado
              </Button>
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default Services;