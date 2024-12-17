import React from 'react';
import { Copy } from 'lucide-react';
import { fontStyles } from '../utils/fontMappings';
import { convertText } from '../utils/textConverter';

interface FontPreviewProps {
  text: string;
  fontStyle: keyof typeof fontStyles;
}

export const FontPreview: React.FC<FontPreviewProps> = ({ text, fontStyle }) => {
  const convertedText = convertText(text, fontStyle);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(convertedText);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{fontStyles[fontStyle].name}</h3>
        <button
          onClick={handleCopy}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          title="Copy to clipboard"
        >
          <Copy className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      <p className="text-lg break-words">{convertedText || 'Preview will appear here'}</p>
    </div>
  );
};