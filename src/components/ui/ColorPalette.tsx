import React from 'react';
import { BRAND_COLORS } from '../../constants';

interface ColorPaletteProps {
  showPalette?: boolean;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ showPalette = false }) => {
  if (!showPalette) return null;

  const colors = [
    { name: 'Pink', hex: BRAND_COLORS.pink, class: 'bg-brand-pink' },
    { name: 'Purple', hex: BRAND_COLORS.purple, class: 'bg-brand-purple' },
    { name: 'Yellow', hex: BRAND_COLORS.yellow, class: 'bg-brand-yellow' },
    { name: 'Cyan', hex: BRAND_COLORS.cyan, class: 'bg-brand-cyan' },
    { name: 'Blue', hex: BRAND_COLORS.blue, class: 'bg-brand-blue' },
  ];

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border z-50">
      <h4 className="text-sm font-semibold mb-3 text-gray-800">Paleta Chikiglam</h4>
      <div className="grid grid-cols-5 gap-2">
        {colors.map((color) => (
          <div key={color.name} className="text-center">
            <div 
              className={`w-8 h-8 rounded-full ${color.class} mb-1 border-2 border-white shadow-md`}
              title={`${color.name}: ${color.hex}`}
            />
            <span className="text-xs text-gray-600">{color.name}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-3 space-y-1">
        <div className="h-2 bg-gradient-to-r from-brand-pink via-brand-purple to-brand-cyan rounded"></div>
        <div className="h-2 bg-gradient-to-r from-brand-yellow via-brand-cyan to-brand-blue rounded"></div>
        <div className="h-2 bg-gradient-to-r from-brand-purple via-brand-pink to-brand-yellow rounded"></div>
      </div>
    </div>
  );
};

export default ColorPalette;