import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../ui/Button';
import { FiPlay, FiStar } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const Hero = (): JSX.Element => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement[]>([]);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement[]>([]);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.5, rotate: -180 },
        { 
          opacity: 1, 
          scale: 1,
          rotate: 0,
          duration: 1.5, 
          ease: 'back.out(1.7)',
          delay: 0.1
        }
      );

// Animación del título con efectos de texto
      if (titleRef.current) {
        tl.fromTo(
          Array.from(titleRef.current.children),
          { 
            opacity: 0, 
            y: 100, 
            rotationX: 90,
            transformOrigin: 'center bottom'
          },
          { 
            opacity: 1, 
            y: 0, 
            rotationX: 0,
            duration: 1.5, 
            stagger: 0.2,
            ease: 'power3.out'
          },
          '-=1.5'
        );
      }
      
      // Parallax para el título
      gsap.to(titleRef.current, {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });

      // Animación del subtítulo con typewriter effect
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 1.2, 
          ease: 'power2.out'
        },
        '-=1'
      );
      
      // Parallax suave para subtítulo
      gsap.to(subtitleRef.current, {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2
        }
      });

      // Animación de los botones con bounce
      if (buttonsRef.current) {
        tl.fromTo(
          Array.from(buttonsRef.current.children),
          { 
            opacity: 0, 
            y: 50, 
            scale: 0.8,
            rotation: 5 
          },
          { 
            opacity: 1, 
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 1, 
            stagger: 0.1,
            ease: 'bounce.out'
          },
          '-=0.8'
        );
      }

      // Animación avanzada de elementos flotantes con parallax
      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          // Entrada espectacular
          tl.fromTo(
            el,
            { 
              opacity: 0, 
              scale: 0, 
              rotation: -360,
              filter: 'blur(20px)'
            },
            { 
              opacity: 0.7, 
              scale: 1,
              rotation: 0,
              filter: 'blur(0px)',
              duration: 1.5,
              ease: 'elastic.out(1, 0.8)'
            },
            index * 0.15
          );

          // Movimiento parallax durante scroll
          gsap.to(el, {
            y: -100 - (index * 20),
            x: 50 - (index * 30),
            rotation: 180,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1 + (index * 0.5)
            }
          });

          // Animación continua de flotación
          gsap.to(el, {
            y: '+=30',
            rotation: '+=360',
            duration: 8 + (index * 2),
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1
          });
          
          // Pulsación sutil
          gsap.to(el, {
            scale: 1.2,
            duration: 3 + (index * 0.5),
            ease: 'power1.inOut',
            yoyo: true,
            repeat: -1
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (

  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background con parallax */}
    <div 
      ref={backgroundRef}
      className="absolute inset-0 bg-gradient-to-r from-brand-purple via-brand-pink to-brand-cyan will-change-transform"
    >
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Particles de estrellas */}
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={i}
          ref={el => starsRef.current[i] = el!}
          className="absolute text-white/30 text-sm pointer-events-none will-change-transform"
        >
          <FiStar />
        </div>
      ))}
      
      {/* Elemento parallax adicional */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-50"
      ></div>
    </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Logo animado */}
          <div ref={logoRef} className="flex justify-center mb-8">
            <img 
              src="/logo.png" 
              alt="Chikiglam beauty salon logo" 
              className="h-20 w-auto drop-shadow-2xl" 
            />
          </div>
          
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6"
          >
            ¡La Mejor
            <span className="block gradient-text bg-gradient-to-r from-brand-yellow via-brand-cyan to-brand-blue bg-clip-text">
              Pijamada se Aproxima!
            </span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl mb-8 opacity-90 will-change-transform drop-shadow-lg"
          >
            Experiencias mágicas de pijamadas. 
            Cine, skincare y diversión asegurada para los más pequeños.
          </p>

          <div 
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center will-change-transform"
          >
            <Button variant="primary" size="lg">
              Reservar Pijamada
            </Button>
            <button className="flex items-center space-x-2 text-white hover:text-brand-yellow transition-colors duration-200">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <FiPlay className="ml-1" />
              </div>
              <span className="font-medium">Ver Video</span>
            </button>
          </div>
        </div>

        {/* Floating Elements mejorados */}
        <div 
          ref={el => floatingElementsRef.current[0] = el!}
          className="absolute top-20 left-10 w-24 h-24 rounded-full bg-gradient-to-r from-brand-yellow/20 to-brand-pink/20 backdrop-blur-sm will-change-transform"
        ></div>
        <div 
          ref={el => floatingElementsRef.current[1] = el!}
          className="absolute top-40 right-20 w-20 h-20 rounded-full bg-gradient-to-r from-brand-cyan/30 to-brand-blue/30 backdrop-blur-sm will-change-transform"
        ></div>
        <div 
          ref={el => floatingElementsRef.current[2] = el!}
          className="absolute bottom-40 left-20 w-16 h-16 rounded-full bg-gradient-to-r from-brand-purple/25 to-brand-pink/25 backdrop-blur-sm will-change-transform"
        ></div>
        <div 
          ref={el => floatingElementsRef.current[3] = el!}
          className="absolute top-32 right-40 w-18 h-18 rounded-full bg-gradient-to-r from-brand-blue/20 to-brand-cyan/20 backdrop-blur-sm will-change-transform"
        ></div>
        <div 
          ref={el => floatingElementsRef.current[4] = el!}
          className="absolute bottom-60 right-10 w-14 h-14 rounded-full bg-gradient-to-r from-brand-yellow/30 to-brand-purple/30 backdrop-blur-sm will-change-transform"
        ></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full">
          <div className="w-1 h-3 bg-white/70 rounded-full mx-auto mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;