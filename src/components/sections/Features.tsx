import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiStar, FiHeart, FiShield, FiClock } from 'react-icons/fi';
import Card from '../ui/Card';

gsap.registerPlugin(ScrollTrigger);

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const floatingShapesRef = useRef<HTMLDivElement[]>([]);

  const features = [
    {
      icon: <FiStar className="w-8 h-8 text-primary-500" />,
      title: 'Equipamiento Premium',
      description: 'Proyector láser 4K, carpas de alta calidad y todo el equipamiento necesario para una experiencia única.',
    },
    {
      icon: <FiHeart className="w-8 h-8 text-primary-500" />,
      title: 'Experiencias Personalizadas',
      description: 'Cada evento es único. Adaptamos nuestros packs según el grupo y las preferencias de los niños.',
    },
    {
      icon: <FiShield className="w-8 h-8 text-primary-500" />,
      title: 'Seguridad Garantizada',
      description: 'Todos nuestros equipos son seguros y seguimos protocolos estrictos para el bienestar de los niños.',
    },
    {
      icon: <FiClock className="w-8 h-8 text-primary-500" />,
      title: 'Servicio Completo',
      description: 'Nos encargamos del armado y retiro completo. Tú solo disfruta de la experiencia con los niños.',
    },
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
            y: -100 - (index * 30),
            x: 20 - (index * 10),
            rotation: 180 + (index * 45),
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 2 + (index * 0.5)
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

      // Animación del header con 3D
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50, rotationX: -15, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animación 3D de las cards
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { 
            opacity: 0, 
            y: 100, 
            rotationY: -30,
            scale: 0.8,
            filter: 'blur(10px)'
          },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 1.2,
            ease: 'power3.out',
            stagger: {
              amount: 0.8,
              from: 'start'
            },
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Efectos hover 3D
        Array.from(cards).forEach((card) => {
          const cardElement = card as HTMLElement;
          
          cardElement.addEventListener('mouseenter', () => {
            gsap.to(cardElement, {
              rotationY: 8,
              rotationX: -5,
              scale: 1.05,
              z: 50,
              duration: 0.3,
              ease: 'power2.out'
            });
          });

          cardElement.addEventListener('mouseleave', () => {
            gsap.to(cardElement, {
              rotationY: 0,
              rotationX: 0,
              scale: 1,
              z: 0,
              duration: 0.3,
              ease: 'power2.out'
            });
          });
        });
      }

      // Animación avanzada de stats con contador
      const statNumbers = statsRef.current?.querySelectorAll('.stat-number');
      if (statNumbers) {
        statNumbers.forEach((number) => {
          const element = number as HTMLElement;
          const target = parseInt(element.getAttribute('data-target') || '0');
          const suffix = element.getAttribute('data-suffix') || '';
          
          // Objeto contador
          const counter = { value: 0 };
          
          // Animación del contador
          gsap.to(counter, {
            value: target,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => {
              const val = Math.floor(counter.value);
              element.textContent = val + suffix;
            },
            scrollTrigger: {
              trigger: element,
              start: 'top 90%',
              toggleActions: 'play none none none',
              once: true
            }
          });
        });

        if (statsRef.current?.children) {
          gsap.fromTo(
            statsRef.current.children,
            { 
              opacity: 0, 
              y: 50, 
              scale: 0.8,
              rotationX: 20 
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotationX: 0,
              duration: 1,
              ease: 'back.out(1.7)',
              stagger: 0.15,
              scrollTrigger: {
                trigger: statsRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Fondo con parallax */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 via-transparent to-brand-cyan/5 will-change-transform"
      >
        {/* Formas flotantes */}
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            ref={el => el && (floatingShapesRef.current[i] = el)}
            className={`absolute rounded-full bg-gradient-to-r opacity-20 will-change-transform ${
              i % 3 === 0 ? 'from-brand-pink to-brand-purple w-32 h-32' :
              i % 3 === 1 ? 'from-brand-yellow to-brand-cyan w-24 h-24' :
              'from-brand-blue to-brand-purple w-40 h-40'
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
            ¿Por qué elegir <span className="gradient-text">Chikiglam</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nos destacamos por ofrecer experiencias únicas de pijamadas con los más altos estándares de calidad.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 text-center transform-gpu will-change-transform">
              <div className="flex justify-center mb-6">
                <div className="p-3 rounded-full bg-primary-50">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Stats mejoradas */}
        <div ref={statsRef} className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          <div className="transform-gpu will-change-transform">
            <div className="text-4xl font-bold text-primary-500 mb-2 stat-number" data-target="100" data-suffix="+">0+</div>
            <div className="text-gray-600">Eventos Realizados</div>
          </div>
          <div className="transform-gpu will-change-transform">
            <div className="text-4xl font-bold text-primary-500 mb-2 stat-number" data-target="600" data-suffix="+">0+</div>
            <div className="text-gray-600">Sonrisas Exitosas</div>
          </div>
          <div className="transform-gpu will-change-transform">
            <div className="text-4xl font-bold text-primary-500 mb-2 stat-number" data-target="10" data-suffix="">0</div>
            <div className="text-gray-600">Capacidad Máxima por carpa</div>
          </div>
          <div className="transform-gpu will-change-transform">
            <div className="text-4xl font-bold text-primary-500 mb-2 stat-number" data-target="100" data-suffix="%">0%</div>
            <div className="text-gray-600">Diversión Garantizada</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;