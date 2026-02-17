export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number; // in minutes
  category: ServiceCategory;
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  rating: number;
  comment: string;
  image?: string;
  date: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  date?: string;
  message?: string;
}

export interface AppointmentRequest extends ContactFormData {
  preferredTime?: string;
  isNewClient: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  specialties: string[];
  experience: number; // years
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  hours: {
    [key: string]: {
      open: string;
      close: string;
      closed?: boolean;
    };
  };
  socialMedia: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}