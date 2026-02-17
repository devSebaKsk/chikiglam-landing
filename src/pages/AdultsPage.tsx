import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowLeft, FiGift, FiSun } from 'react-icons/fi';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

gsap.registerPlugin(ScrollTrigger);

const AdultsPage: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const floatingShapesRef = useRef<HTMLDivElement[]>([]);

  const packs = [
    {
      icon: <FiGift className="w-10 h-10" />,
      title: 'Art & Wine',
      subtitle: '🍷🎨🖌️',
      description: 'Experiencia completa para 6 personas con arte, vino y pijamada.',
      price: '$460.000',
      color: 'from-purple-600 to-pink-600',
      features: [
        'Mesas, almohadones y decoración completa',
        '🫒🧀 Picada gourmet con vajilla',
        '🍷 2 botellas vino Saurus State (gusto a elección)',
        'Juegos para adultos: HUES and CUES, AMIGOS DE MIERDA, TABOO, BLEFF',
        '🎨 Espacio de Arte con profesora (1.5 hs)',
        'Materiales de arte incluidos',
        '🏕️ Pijamada completa con colchones inflables',
        'Ropa de cama y almohadas incluidas'
      ],
      reservation: '🚨 Reserva: 30% del valor, 7-10 días anticipación mínimo'
    },
    {
      icon: <FiSun className="w-10 h-10" />,
      title: 'Pack Sunset Art',
      subtitle: '🌅🎨',
      description: '¡Sale plan de chicas! Experiencia artística relajada para 6 personas.',
      price: '$350.000',
      color: 'from-orange-500 to-pink-500',
      features: [
        '✅ Experiencia artística súper relajada',
        '✅ Mesa dulce con todas las cositas ricas 🍰',
        '✅ Gin para el brindis perfecto 🍹',
        'Ambiente sunset ideal para fotos',
        'Materiales de arte premium',
        'Música ambiente relajante'
      ],
      reservation: '🚨 Reserva: 30% del valor, 7 días anticipación'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax del fondo
      gsap.to(backgroundRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });

      // Animación de formas flotantes
      floatingShapesRef.current.forEach((shape, index) => {
        if (shape) {
          gsap.to(shape, {
            y: -40,
            rotation: 180,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1
            }
          });

          // Rotación continua
          gsap.to(shape, {
            rotation: '+=360',
            duration: 25 + (index * 5),
            repeat: -1,
            ease: 'none'
          });
        }
      });

      // Animación del header
      gsap.fromTo(
        headerRef.current,
        { 
          opacity: 0, 
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out'
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
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
            stagger: 0.3,
            delay: 0.5
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleBackClick = () => {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <section ref={sectionRef} className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Fondo con parallax */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20 will-change-transform"
      >
        {/* Formas flotantes en modo oscuro */}
        {[
          { size: 'w-28 h-28', style: { top: '15%', left: '10%' }, gradient: 'from-purple-500/20 to-pink-500/20' },
          { size: 'w-20 h-20', style: { top: '25%', right: '15%' }, gradient: 'from-orange-500/20 to-red-500/20' },
          { size: 'w-36 h-36', style: { bottom: '25%', left: '15%' }, gradient: 'from-pink-500/20 to-purple-500/20' },
          { size: 'w-24 h-24', style: { bottom: '15%', right: '10%' }, gradient: 'from-cyan-500/20 to-blue-500/20' },
          { size: 'w-16 h-16', style: { top: '55%', left: '8%' }, gradient: 'from-yellow-500/20 to-orange-500/20' }
        ].map((shape, i) => (
          <div
            key={i}
            ref={el => el && (floatingShapesRef.current[i] = el)}
            className={`absolute will-change-transform rounded-full bg-gradient-to-r ${shape.size} ${shape.gradient}`}
            style={shape.style}
          />
        ))}
      </div>

      <div className="container-custom relative z-10 py-16">
        {/* Botón back */}
        <button
          onClick={handleBackClick}
          className="mb-8 flex items-center text-gray-300 hover:text-white transition-colors duration-300"
        >
          <FiArrowLeft className="w-5 h-5 mr-2" />
          Volver al inicio
        </button>

        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <div className="mb-8">
            <div className="text-4xl font-display font-bold gradient-text mb-8">
              Chikiglam
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
            Experiencias <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">+25</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Momentos especiales para adultos que buscan experiencias únicas.<br />
            Arte, vino y conexión en ambientes exclusivos.
          </p>
        </div>

        {/* Cards de packs */}
        <div ref={cardsRef} className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {packs.map((pack, index) => (
            <Card 
              key={index}
              className="bg-gray-800 border-gray-700 p-0 overflow-hidden hover:scale-105 transition-all duration-300 group"
            >
              {/* Header del pack */}
              <div className={`bg-gradient-to-r ${pack.color} p-8 text-white relative`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-full bg-white/20">
                      {pack.icon}
                    </div>
                    <span className="text-sm opacity-80">{pack.subtitle}</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{pack.title}</h3>
                  <div className="text-3xl font-bold">{pack.price}</div>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8 text-gray-100">
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {pack.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {pack.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mt-3 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-700/50 p-4 rounded-lg mb-8">
                  <p className="text-sm text-yellow-400 font-medium">
                    {pack.reservation}
                  </p>
                </div>

                <Button 
                  variant="secondary" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none group-hover:shadow-lg transition-all duration-300"
                >
                  Reservar Experiencia
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm p-12 rounded-3xl border border-purple-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              ¿Tienes una idea diferente?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Creamos experiencias personalizadas para grupos de adultos. 
              Cuéntanos tu idea y la hacemos realidad.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4"
            >
              Consultar Experiencia Personalizada
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdultsPage;