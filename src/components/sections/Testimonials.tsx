import React from 'react';
import { FiStar } from 'react-icons/fi';
import Card from '../ui/Card';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'María González',
      service: 'Pack Pijamada + Cine',
      rating: 5,
      comment: 'La experiencia fue increíble! Los niños no pararon de hablar de la pijamada. El proyector 4K fue espectacular y todo estuvo perfecto.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Ana Martínez',
      service: 'Pack Premium',
      rating: 5,
      comment: 'El servicio fue impecable! Las carpas hermosas, todo organizado y las cajitas Milka fueron el toque especial. ¡Totalmente recomendado!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Carmen López',
      service: 'Pack Pijamada + Skincare',
      rating: 5,
      comment: 'Una experiencia única! Las niñas se divirtieron muchísimo con el skincare y la pijamada. Servicio profesional de principio a fin.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FiStar
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
            Lo que dicen nuestras <span className="gradient-text">Clientas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La satisfacción de las familias que confían en nosotros es nuestra mejor carta de presentación.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary-200 to-primary-400 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.service}</p>
                </div>
              </div>

              <div className="flex space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <p className="text-gray-600 italic">
                "{testimonial.comment}"
              </p>
            </Card>
          ))}
        </div>

        {/* Review Summary */}
        <div className="bg-primary-50 rounded-2xl p-8 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">4.9</div>
              <div className="flex justify-center space-x-1 mb-2">
                {renderStars(5)}
              </div>
              <div className="text-gray-600">Puntuación promedio</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">150+</div>
              <div className="text-gray-600">Reseñas positivas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">98%</div>
              <div className="text-gray-600">Clientes satisfechos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;