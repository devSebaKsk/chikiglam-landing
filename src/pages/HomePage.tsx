import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../components/ui/Button';

gsap.registerPlugin(ScrollTrigger);

const HomePage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const floatingShapesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax del fondo
      gsap.to(backgroundRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });

      // Animación de formas flotantes
      floatingShapesRef.current.forEach((shape, index) => {
        if (shape) {
          gsap.to(shape, {
            y: -50 - (index * 20),
            rotation: 360,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1
            }
          });

          // Rotación continua
          gsap.to(shape, {
            rotation: '+=360',
            duration: 20 + (index * 5),
            repeat: -1,
            ease: 'none'
          });
        }
      });

      // Animación del logo
      gsap.fromTo(
        logoRef.current,
        { 
          opacity: 0, 
          y: -50, 
          scale: 0.8 
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.2
        }
      );

      // Animación del título
      gsap.fromTo(
        titleRef.current,
        { 
          opacity: 0, 
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.5
        }
      );

      // Animación de las cards
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { 
            opacity: 0, 
            y: 100, 
            scale: 0.8
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
            stagger: 0.3,
            delay: 0.8
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleFamilyClick = () => {
    window.history.pushState({}, '', '/familia');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const handleAdultsClick = () => {
    window.history.pushState({}, '', '/adults');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden">
      {/* Fondo con parallax */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 via-transparent to-brand-pink/5 will-change-transform"
      >
        {/* Formas flotantes */}
        {[
          { size: 'w-32 h-32', style: { top: '10%', left: '10%' }, gradient: 'from-brand-yellow/20 to-brand-pink/20' },
          { size: 'w-20 h-20', style: { top: '20%', right: '15%' }, gradient: 'from-brand-cyan/20 to-brand-blue/20' },
          { size: 'w-40 h-40', style: { bottom: '20%', left: '20%' }, gradient: 'from-brand-purple/20 to-brand-pink/20' },
          { size: 'w-24 h-24', style: { bottom: '10%', right: '10%' }, gradient: 'from-brand-blue/20 to-brand-cyan/20' },
          { size: 'w-16 h-16', style: { top: '50%', left: '5%' }, gradient: 'from-brand-pink/20 to-brand-purple/20' },
          { size: 'w-28 h-28', style: { top: '60%', right: '5%' }, gradient: 'from-brand-yellow/20 to-brand-cyan/20' }
        ].map((shape, i) => (
          <div
            key={i}
            ref={el => el && (floatingShapesRef.current[i] = el)}
            className={`absolute will-change-transform rounded-full bg-gradient-to-r ${shape.size} ${shape.gradient}`}
            style={shape.style}
          />
        ))}
      </div>

    

      {/* División de pantalla en dos mitades */}
      <div ref={cardsRef} className="flex min-h-screen relative z-10">
        {/* Mitad izquierda - Opción Familia */}
        <div 
          onClick={handleFamilyClick} 
          className="w-1/2 cursor-pointer group relative flex items-center justify-center bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 hover:from-brand-blue/20 hover:to-brand-cyan/20 transition-all duration-500"
        >
          <div className="text-center px-8 py-12 max-w-md">
            <div className="mb-8 transform group-hover:scale-105 transition-transform duration-300">
              <div className=" h-40  mx-auto flex items-center justify-center mb-6">
                 <img 
              src="/logo.png" 
              alt="Chikiglam beauty salon logo" 
              className="h-30 w-auto transition-all duration-300" 
            />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Opción Familia
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                Pijamadas mágicas y glamping para los más pequeños. 
                Experiencias inolvidables llenas de diversión y aventura.
              </p>
              <div className="space-y-2 text-sm text-gray-500 mb-8">
                <div>🏕️ Glamping y carpas temáticas</div>
                <div>🎬 Pack Cine con proyector HD</div>
                <div>🎮 Actividades y juegos</div>
                <div>✨ Equipamiento premium</div>
              </div>
            </div>
            <Button 
              variant="primary" 
              size="lg" 
              className="w-full group-hover:shadow-xl transform group-hover:-translate-y-1 transition-all duration-300"
            >
              Explorar Packs Familiares
            </Button>
          </div>
          
          {/* Línea divisoria */}
          <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Mitad derecha - Opción Adultos */}
        <div 
          onClick={handleAdultsClick} 
          className="w-1/2 cursor-pointer group relative flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition-all duration-500"
        >
          <div className="text-center px-8 py-12 max-w-md">
            <div className="mb-8 transform group-hover:scale-105 transition-transform duration-300">
              <div className=" h-40  mx-auto flex items-center justify-center mb-6">
                 <img 
              src="/logo2.png" 
              alt="Chikiglam beauty salon logo" 
              className="h-30 w-auto transition-all duration-300" 
            />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Opción Grandes +25
              </h2>
              <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
                Experiencias sofisticadas para adultos. Arte, vino y momentos únicos 
                para celebrar entre amigos.
              </p>
              <div className="space-y-2 text-sm text-gray-400 mb-8">
                <div>🍷 Art & Wine con profesora</div>
                <div>🎨 Experiencias artísticas</div>
                <div>🥂 Mesa dulce y gin</div>
                <div>🌅 Ambientes exclusivos</div>
              </div>
            </div>
            <Button 
              variant="secondary" 
              size="lg" 
              className="w-full group-hover:shadow-xl transform group-hover:-translate-y-1 transition-all duration-300 bg-white text-gray-900 hover:bg-gray-100"
            >
              Ver Experiencias +25
            </Button>
          </div>
        </div>
      </div>

      {/* Footer absoluto en la parte inferior */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 text-center text-gray-500">
        <p>Creando recuerdos inolvidables desde 2024</p>
        <p className="text-xs text-gray-600 mt-2">© 2024 PixelIT. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default HomePage;