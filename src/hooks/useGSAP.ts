import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar el plugin
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const ctx = useRef<gsap.Context>();

  useEffect(() => {
    ctx.current = gsap.context(() => {});
    return () => ctx.current?.revert();
  }, []);

  return ctx.current;
};

// Hook para animaciones de entrada
export const useFadeInUp = (ref: React.RefObject<HTMLElement>, delay: number = 0) => {
  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: 'power2.out',
      }
    );
  }, [ref, delay]);
};

// Hook para animaciones con scroll
export const useScrollAnimation = (
  ref: React.RefObject<HTMLElement>,
  animation: gsap.TweenVars
) => {
  useEffect(() => {
    if (!ref.current) return;

    const scrollTriggerVars =
      animation.scrollTrigger && typeof animation.scrollTrigger === 'object'
        ? animation.scrollTrigger
        : undefined;

    gsap.fromTo(
      ref.current,
      animation.from || {},
      {
        ...animation.to,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          ...scrollTriggerVars,
        },
      }
    );
  }, [ref, animation]);
};