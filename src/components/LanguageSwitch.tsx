import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitch: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-white/20 rounded-full p-2">
      <Globe size={20} className="text-white" />
      <button
        onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
        className={`px-3 py-1 rounded-full text-sm font-bold transition-all duration-300 ${
          language === 'ar' 
            ? 'bg-white text-blue-600' 
            : 'text-white hover:bg-white/20'
        }`}
      >
        عربي
      </button>
      <button
        onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
        className={`px-3 py-1 rounded-full text-sm font-bold transition-all duration-300 ${
          language === 'en' 
            ? 'bg-white text-blue-600' 
            : 'text-white hover:bg-white/20'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitch;