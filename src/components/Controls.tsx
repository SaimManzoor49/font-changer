import React from 'react';
import { Sliders, Palette } from 'lucide-react';

interface ControlsProps {
  fontSize: number;
  color: string;
  onFontSizeChange: (size: number) => void;
  onColorChange: (color: string) => void;
}

export const Controls: React.FC<ControlsProps> = ({
  fontSize,
  color,
  onFontSizeChange,
  onColorChange,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-blue-600" />
            <label className="text-sm font-medium text-gray-700">Font Size</label>
          </div>
          <input
            type="range"
            min="12"
            max="72"
            value={fontSize}
            onChange={(e) => onFontSizeChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-sm text-gray-600 text-right">{fontSize}px</div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-blue-600" />
            <label className="text-sm font-medium text-gray-700">Text Color</label>
          </div>
          <input
            type="color"
            value={color}
            onChange={(e) => onColorChange(e.target.value)}
            className="w-full h-10 rounded cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}