import { BusinessInfo } from '../types';

// Colores de la marca Chikiglam
export const BRAND_COLORS = {
  blue: '#83c7ed',      // Azul claro
  purple: '#6f28d0',    // Morado
  yellow: '#fed801',    // Amarillo
  pink: '#f4068b',      // Rosa/Magenta
  cyan: '#1adede',      // Cyan/Turquesa
};

export const BUSINESS_INFO: BusinessInfo = {
  name: 'Chikiglam',
  tagline: '¡La Mejor Pijamada se Aproxima!',
  description: 'Experiencias mágicas de pijamadas y glamping temático. Cine, skincare y diversión asegurada para crear recuerdos inolvidables.',
  phone: '+1 (555) 123-4567',
  email: 'hello@chikiglam.com',
  address: {
    street: '123 Adventure St',
    city: 'Fun City',
    state: 'FC',
    zipCode: '12345',
  },
  hours: {
    monday: { open: '15:00', close: '22:00' },
    tuesday: { open: '15:00', close: '22:00' },
    wednesday: { open: '15:00', close: '22:00' },
    thursday: { open: '15:00', close: '22:00' },
    friday: { open: '15:00', close: '23:00' },
    saturday: { open: '14:00', close: '23:00' },
    sunday: { open: '14:00', close: '22:00' },
  },
  socialMedia: {
    instagram: 'https://instagram.com/chikiglam',
    facebook: 'https://facebook.com/chikiglam',
    twitter: 'https://twitter.com/chikiglam',
  },
};

export const NAVIGATION_ITEMS = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Nosotros', href: '#about' },
  { name: 'Servicios', href: '#services' },
  { name: 'Testimonios', href: '#testimonials' },
  { name: 'Contacto', href: '#contact' },
];

export const SERVICE_CATEGORIES = [
  { id: 'hair', name: 'Cabello', icon: 'scissors' },
  { id: 'facial', name: 'Facial', icon: 'sun' },
  { id: 'nails', name: 'Uñas', icon: 'heart' },
  { id: 'body', name: 'Cuerpo', icon: 'droplet' },
];

export const ANIMATION_DELAYS = {
  hero: {
    title: '0s',
    subtitle: '0.2s',
    buttons: '0.4s',
  },
  features: {
    base: '0.1s',
    increment: '0.1s',
  },
};