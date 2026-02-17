import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../ui/Button';
import Parallax from '../ui/Parallax';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement[]>([]);
  const featuresRef = useRef<HTMLDivElement>(null);

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

      // Animaciones de elementos flotantes
      floatingElementsRef.current.forEach((element, index) => {
        if (element) {
          gsap.to(element, {
            y: -60 - (index * 20),
            x: 30 - (index * 10),
            rotation: 180 + (index * 45),
            scale: 1.2 + (index * 0.1),
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 2 + (index * 0.5)
            }
          });

          // Rotación y pulsación continua
          gsap.to(element, {
            rotation: '+=360',
            duration: 15 + (index * 5),
            repeat: -1,
            ease: 'none'
          });

          gsap.to(element, {
            scale: 1.5,
            opacity: 0.6,
            duration: 4 + (index * 1),
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          });
        }
      });

      // Animación 3D del contenido
      gsap.fromTo(
        contentRef.current,
        { 
          opacity: 0, 
          x: -100, 
          rotationY: -15,
          scale: 0.9,
          filter: 'blur(10px)'
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animación 3D de la imagen con efecto de profundidad
      gsap.fromTo(
        imageRef.current,
        { 
          opacity: 0, 
          x: 100, 
          rotationY: 15,
          rotationX: -10,
          scale: 0.8,
          filter: 'blur(15px)'
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          rotationX: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Hover effects para la imagen
      const imageElement = imageRef.current;
      if (imageElement) {
        imageElement.addEventListener('mouseenter', () => {
          gsap.to(imageElement, {
            rotationY: 8,
            rotationX: -5,
            scale: 1.05,
            z: 50,
            duration: 0.4,
            ease: 'power2.out'
          });
        });

        imageElement.addEventListener('mouseleave', () => {
          gsap.to(imageElement, {
            rotationY: 0,
            rotationX: 0,
            scale: 1,
            z: 0,
            duration: 0.4,
            ease: 'power2.out'
          });
        });
      }

      // Animación de las features con stagger
      const features = featuresRef.current?.children;
      if (features) {
        gsap.fromTo(
          features,
          { 
            opacity: 0, 
            x: -50, 
            scale: 0.8 
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: 'back.out(1.7)',
            stagger: 0.2,
            scrollTrigger: {
              trigger: featuresRef.current,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={sectionRef} id="about" className="section-padding relative overflow-hidden">
      {/* Fondo con parallax */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-bl from-brand-cyan/5 via-transparent to-brand-purple/5 will-change-transform"
      >
        {/* Elementos flotantes decorativos */}
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            ref={el => el && (floatingElementsRef.current[i] = el)}
            className={`absolute will-change-transform ${
              i % 3 === 0 ? 'w-28 h-28 rounded-full bg-gradient-to-r from-brand-blue/10 to-brand-cyan/10' :
              i % 3 === 1 ? 'w-20 h-20 rotate-45 bg-gradient-to-r from-brand-pink/10 to-brand-purple/10' :
              'w-36 h-36 rounded-full bg-gradient-to-r from-brand-yellow/10 to-brand-pink/10'
            }`}
            style={{
              top: `${15 + (Math.random() * 70)}%`,
              left: `${5 + (Math.random() * 90)}%`,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div ref={contentRef} className="transform-gpu will-change-transform">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-gray-900 mb-8">
              Nuestra <span className="gradient-text">Experiencia</span>
            </h2>
          
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Chikiglam nació de la pasión por crear experiencias únicas e inolvidables para los más pequeños. 
              Especializados en pijamadas temáticas, carpas XL y noches de cine mágicas.
            </p>
          
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Con equipamiento de primera calidad y un servicio integral, transformamos cualquier espacio 
              en el escenario perfecto para celebraciones especiales que quedarán grabadas en la memoria 
              de los niños para siempre.
            </p>

            <div ref={featuresRef} className="space-y-4 mb-10">
              <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/50 transition-all duration-300">
                <div className="w-3 h-3 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full"></div>
                <span className="text-gray-700 font-medium">Proyector láser 4K con streaming</span>
              </div>
              <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/50 transition-all duration-300">
                <div className="w-3 h-3 bg-gradient-to-r from-brand-purple to-brand-pink rounded-full"></div>
                <span className="text-gray-700 font-medium">Carpa XL</span>
              </div>
              <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/50 transition-all duration-300">
                <div className="w-3 h-3 bg-gradient-to-r from-brand-yellow to-brand-pink rounded-full"></div>
                <span className="text-gray-700 font-medium">Kits de skincare</span>
              </div>
              <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/50 transition-all duration-300">
                <div className="w-3 h-3 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full"></div>
                <span className="text-gray-700 font-medium">Servicio completo de armado y retiro</span>
              </div>
            </div>

            <Parallax speed={0.3}>
              <Button 
                variant="primary" 
                size="lg" 
                className="group relative overflow-hidden"
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  servicesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="relative z-10">Ver Nuestros Packs</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </Parallax>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative transform-gpu will-change-transform perspective-1000">
            <div className="aspect-square bg-gradient-to-br from-brand-blue/20 via-brand-purple/20 to-brand-pink/20 rounded-3xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-white/50 to-transparent flex items-center justify-center backdrop-blur-sm p-4">
                <div className="w-full h-full max-w-md">
                  <iframe
                    title="Instagram Reel"
                    src="https://www.instagram.com/reel/DSVmGo7EipV/embed"
                    className=" h-full rounded-2xl"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            
            {/* Elementos decorativos mejorados */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-brand-yellow/20 to-brand-pink/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-r from-brand-cyan/20 to-brand-blue/20 rounded-full blur-2xl float"></div>
            <div className="absolute top-1/2 -right-4 w-6 h-6 bg-brand-purple rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/4 -left-2 w-4 h-4 bg-brand-cyan rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-brand-pink/30 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;