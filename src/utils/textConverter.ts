import { fontStyles } from './fontMappings';

export const convertText = (text: string, fontStyle: keyof typeof fontStyles): string => {
  if (!fontStyles[fontStyle]) return text;
  
  return text.split('').map(char => {
    return fontStyles[fontStyle].chars[char] || char;
  }).join('');
};