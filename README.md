# Chikiglam Landing Page 💄✨

Una landing page moderna y responsive para un salón de belleza, construida con React, TypeScript y Tailwind CSS.

## 🚀 Características

- ✅ **React 18** con TypeScript
- ✅ **Tailwind CSS** para estilos responsive y modernos
- ✅ **Componentes modulares** y reutilizables
- ✅ **Hooks personalizados** para funcionalidades específicas
- ✅ **Animaciones suaves** con CSS y Framer Motion
- ✅ **Formulario de contacto** completamente funcional
- ✅ **Diseño responsive** optimizado para mobile-first
- ✅ **SEO optimizado** con meta tags apropiados

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── layout/         # Layout components (Header, Footer)
│   ├── sections/       # Secciones de la landing page
│   └── ui/             # Componentes reutilizables (Button, Card)
├── hooks/              # Custom React hooks
├── types/              # Definiciones de TypeScript
├── utils/              # Funciones de utilidad
├── constants/          # Constantes de la aplicación
└── assets/             # Recursos estáticos
```

### Componentes Principales

#### Layout
- `Header.tsx` - Navegación principal con menú responsive
- `Footer.tsx` - Información de contacto y links

#### Secciones
- `Hero.tsx` - Sección principal con call-to-action
- `Features.tsx` - Características destacadas del salón
- `About.tsx` - Historia y presentación del negocio
- `Services.tsx` - Catálogo de servicios disponibles
- `Testimonials.tsx` - Reseñas de clientes
- `Contact.tsx` - Formulario de contacto y información

#### UI Components
- `Button.tsx` - Botón reutilizable con múltiples variantes
- `Card.tsx` - Tarjeta base para contenido

### Hooks Personalizados

- `useScrollspy.ts` - Detecta la sección activa durante scroll
- `useIntersectionObserver.ts` - Observa elementos en viewport
- `useLocalStorage.ts` - Manejo de localStorage con tipos

## 🎨 Paleta de Colores de la Marca

```css
/* Colores oficiales de Chikiglam */
--brand-blue: #83c7ed     /* Azul claro suave */
--brand-purple: #6f28d0   /* Morado vibrante */
--brand-yellow: #fed801   /* Amarillo brillante */
--brand-pink: #f4068b     /* Rosa magenta */
--brand-cyan: #1adede     /* Cyan turquesa */

/* Uso en Tailwind */
brand-blue    /* Azul claro */
brand-purple  /* Morado principal */
brand-yellow  /* Amarillo energético */
brand-pink    /* Rosa vibrante (color primario) */
brand-cyan    /* Cyan refrescante */
```

### Gradientes de la marca:
- **Texto principal**: Rosa → Morado → Cyan
- **Fondo hero**: Morado → Rosa → Cyan  
- **Acentos**: Amarillo → Cyan → Azul

## 🛠️ Instalación y Configuración

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar el servidor de desarrollo:**
   ```bash
   npm start
   ```

3. **Construir para producción:**
   ```bash
   npm run build
   ```

## 📱 Responsive Design

El diseño está optimizado para:
- 📱 **Mobile**: 320px - 768px
- 📟 **Tablet**: 768px - 1024px  
- 💻 **Desktop**: 1024px+

## 🎯 Características Técnicas

### Performance
- Lazy loading de componentes
- Imágenes optimizadas
- CSS comprimido en producción
- JavaScript minificado

### Accesibilidad
- Navegación por teclado
- Alt text en imágenes
- Contraste de colores AA
- Roles ARIA apropiados

### SEO
- Meta tags optimizados
- Estructura semántica HTML5
- Schema markup para negocio local
- Sitemap automático

## 🔧 Personalización

### Cambiar colores del tema
Los colores están configurados en `tailwind.config.js`. Para usar los colores de la marca:

```javascript
// Colores disponibles
brand-blue    // #83c7ed
brand-purple  // #6f28d0  
brand-yellow  // #fed801
brand-pink    // #f4068b (color principal)
brand-cyan    // #1adede

// Ejemplos de uso
className="bg-brand-pink text-white"
className="text-brand-purple hover:text-brand-cyan"
className="bg-gradient-to-r from-brand-pink to-brand-purple"
```

### Agregar nuevos servicios
Modifica `src/components/sections/Services.tsx`:
```javascript
const services = [
  {
    icon: <TuIcon />,
    title: 'Nuevo Servicio',
    description: 'Descripción...',
    price: 'Desde $XX',
    features: ['Característica 1', 'Característica 2'],
  },
];
```

### Personalizar información del negocio
Actualiza `src/constants/index.ts`:
```javascript
export const BUSINESS_INFO = {
  name: 'Tu Salón',
  phone: 'Tu Teléfono',
  email: 'tu@email.com',
  // ... más información
};
```

## 📞 Integración de Formulario

El formulario de contacto está preparado para integrarse con:
- **Netlify Forms**
- **Formspree**
- **EmailJS**
- **Backend personalizado**

Ejemplo con EmailJS:
```javascript
// En Contact.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    );
    // Mostrar mensaje de éxito
  } catch (error) {
    // Manejar error
  }
};
```

## 🚀 Deploy

### Netlify
1. Conecta tu repositorio de GitHub
2. Build command: `npm run build`
3. Publish directory: `build`

### Vercel
1. Importa el proyecto desde GitHub
2. Despliega automáticamente

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 💡 Próximas Características

- [ ] Sistema de reservas online
- [ ] Galería de trabajos realizados
- [ ] Blog/consejos de belleza
- [ ] Sistema de membresías
- [ ] Integración con redes sociales
- [ ] Chat en vivo
- [ ] PWA (Progressive Web App)

---

**Hecho con ❤️ para el mundo de la belleza**