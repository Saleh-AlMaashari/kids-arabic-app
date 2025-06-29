import React from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-gray-800 text-white p-6 mt-auto">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Heart size={20} className="text-red-400 fill-current" />
          <p className="font-arabic text-lg">
            {language === 'ar' ? 'صُنع بحب من قِبل حمد العوضي' : 'Made with love by Hamad Al Awadhi'}
          </p>
        </div>
        <p className="text-sm opacity-80">
          {language === 'ar'
            ? 'منصة تعلم تفاعلية للأطفال من عمر 4 إلى 8 سنوات'
            : 'Interactive Learning Platform for Children Ages 4-8'}
        </p>
      </div>
    </footer>
  );
};

export default Footer;