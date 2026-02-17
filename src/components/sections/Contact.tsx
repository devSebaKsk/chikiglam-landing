import React, { useState } from 'react';
import { FiPhone, FiMapPin, FiClock, FiInstagram } from 'react-icons/fi';
import Button from '../ui/Button';
import Card from '../ui/Card';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = '5492995217901';
    const messageLines = [
      'Hola! Quiero reservar una pijamada.',
      `Nombre: ${formData.name || '-'}`,
      `Pack: ${formData.service || '-'}`,
      formData.date ? `Fecha: ${formData.date}` : null,
      formData.message ? `Mensaje: ${formData.message}` : null,
    ].filter(Boolean);

    const message = messageLines.join('\n');
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    // Open WhatsApp chat with the prefilled message.
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const contactInfo = [
    {
      icon: <FiPhone className="w-6 h-6 text-primary-500" />,
      title: 'Teléfono',
      info: '+54 9 299 5217901',
      subtitle: 'Lun - Sáb: 9:00 - 20:00',
    },
    {
      icon: <FiInstagram className="w-6 h-6 text-primary-500" />,
      title: 'Instagram',
      info: '@chiki.glam',
      subtitle: 'Síguenos para ver nuestras últimas pijamadas y promociones',
    },
    {
      icon: <FiMapPin className="w-6 h-6 text-primary-500" />,
      title: 'Ubicación',
      info: 'Neuquen - Neuquen',
      subtitle: 'Alrededores de la ciudad',
    },
    {
      icon: <FiClock className="w-6 h-6 text-primary-500" />,
      title: 'Horarios',
      info: 'Lun - Sáb: 9:00 - 20:00',
      subtitle: 'Dom: 10:00 - 18:00',
    },
  ];

  const services = [
    'Pack Cine',
    'Pack Pijamada',
    'Pack Pijamada + Cine',
    'Pack Pijamada + Skincare',
    'Pack Premium',
    'Propuesta Mixtura & Chikiglam',
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
            Reserva tu <span className="gradient-text">Pijamada</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos listos para crear una experiencia mágica. Reserva tu pijamada o contáctanos para más información.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Formulario de Reserva
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-1 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-1 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Pack Deseado *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Selecciona un pack</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Fecha Preferida
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Mensaje Adicional
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="Cuéntanos: ¿Cuántos niños participarán? ¿Alguna preferencia especial?"
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Enviar Reserva
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div>
            <div className="grid gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary-50">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-900 font-medium">
                        {item.info}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;