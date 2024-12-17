import React, { useState } from 'react';
import { TextInput } from './components/TextInput';
import { FontPreview } from './components/FontPreview';
import { Controls } from './components/Controls';
import { fontStyles } from './utils/fontMappings';
import { Type } from 'lucide-react';

function App() {
  const [text, setText] = useState('Preview text');
  const [fontSize, setFontSize] = useState(24);
  const [color, setColor] = useState('#000000');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Type className="w-10 h-10 text-blue-600 mr-2" />
            <h1 className="text-4xl font-bold text-gray-900">Font Changer</h1>
          </div>
          <p className="text-gray-600">
            Convert your text into special fonts that work everywhere! The converted text maintains its style when copied and pasted.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <TextInput value={text} onChange={setText} />
        </div>

        <Controls
          fontSize={fontSize}
          color={color}
          onFontSizeChange={setFontSize}
          onColorChange={setColor}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {Object.keys(fontStyles).map((style) => (
            <FontPreview
              key={style}
              text={text}
              fontStyle={style as keyof typeof fontStyles}
              fontSize={fontSize}
              color={color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;