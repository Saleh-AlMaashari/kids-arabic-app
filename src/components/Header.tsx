import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Star } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitch from './LanguageSwitch';

const Header: React.FC = () => {
  const location = useLocation();
  const { progress } = useProgress();
  const { language, t } = useLanguage();

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo and Title */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <span className="text-2xl">🎓</span>
          </div>
          <div className={language === 'ar' ? 'text-right' : 'text-left'}>
            <h1 className="text-xl font-bold font-arabic">
              {language === 'ar' ? 'عالم حمد العوضي التعليمي' : 'Hamad Al Awadhi\'s Learning World'}
            </h1>
            <p className="text-sm opacity-90">
              {language === 'ar' ? 'عالم التعلم التفاعلي' : 'Interactive Learning World'}
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4">
          {location.pathname !== '/' && (
            <Link
              to="/"
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              title={t('nav.home')}
            >
              <Home size={24} />
            </Link>
          )}
          
          {/* Progress Stars */}
          <div className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-lg">
            <Star size={20} className="text-yellow-300 fill-current" />
            <span className="font-bold">{progress.totalStars}</span>
          </div>

          {/* Language Switch */}
          <LanguageSwitch />
        </nav>
      </div>
    </header>
  );
};

export default Header;