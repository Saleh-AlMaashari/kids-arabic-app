import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
  dir: 'rtl' | 'ltr';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.letters': 'الحروف',
    'nav.games': 'الألعاب',
    'nav.coloring': 'التلوين',
    'nav.stories': 'القصص',
    'nav.quiz': 'الاختبار',
    'nav.parents': 'منطقة الآباء',
    'nav.contact': 'اتصل بنا',
    'nav.videos': 'الفيديوهات',
    
    // Home page
    'home.welcome': 'مرحباً! أنا حمد العوضي',
    'home.subtitle': 'تعلم الحروف العربية والكلمات من خلال الألعاب والقصص الممتعة',
    'home.start': 'ابدأ التعلم',
    
    // Letters
    'letters.title': 'تعلم الحروف العربية',
    'letters.completed': 'مكتملة',
    'letters.listen': 'استمع للحرف',
    'letters.word': 'استمع للكلمة',
    'letters.complete': 'إكمال الحرف',
    
    // Games
    'games.title': 'لعبة المطابقة',
    'games.correct': 'صحيح',
    'games.total': 'المجموع',
    'games.shuffle': 'خلط جديد',
    'games.restart': 'إعادة تشغيل',
    'games.complete': 'لعبة مكتملة!',
    'games.playAgain': 'العب مرة أخرى',
    
    // Common
    'common.next': 'التالي',
    'common.previous': 'السابق',
    'common.save': 'حفظ',
    'common.download': 'تحميل',
    'common.clear': 'مسح',
    'common.close': 'إغلاق',
    'common.excellent': 'ممتاز!',
    'common.good': 'جيد!',
    'common.tryAgain': 'حاول مرة أخرى',
    
    // Voice messages
'voice.welcome': 'أَهْلًا وَسَهْلًا بِكَ فِي عالَمِ حَمَد العَواضِي التَّعْلِيمِي! ماذا تُحِبُّ أَنْ تَتَعَلَّمَ اليَوْم؟',
'voice.goodJob': 'أَحْسَنْتَ! إِجابَةٌ صَحِيحَةٌ!',
'voice.tryAgain': 'لا تَقْلَق! حاوِلْ مَرَّةً أُخْرَى!',
'voice.completed': 'رائِع! لَقَدْ أَكْمَلْتَ هٰذا الحَرْفَ بِنَجاح!',

  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.letters': 'Letters',
    'nav.games': 'Games',
    'nav.coloring': 'Coloring',
    'nav.stories': 'Stories',
    'nav.quiz': 'Quiz',
    'nav.parents': 'Parents',
    'nav.contact': 'Contact',
    'nav.videos': 'Videos',
    
    // Home page
    'home.welcome': 'Welcome! I\'m Hamad Al Awadhi',
    'home.subtitle': 'Learn Arabic letters and words through fun games and interactive stories',
    'home.start': 'Start Learning',
    
    // Letters
    'letters.title': 'Learn Arabic Letters',
    'letters.completed': 'Completed',
    'letters.listen': 'Listen to Letter',
    'letters.word': 'Listen to Word',
    'letters.complete': 'Complete Letter',
    
    // Games
    'games.title': 'Matching Game',
    'games.correct': 'Correct',
    'games.total': 'Total',
    'games.shuffle': 'New Shuffle',
    'games.restart': 'Restart',
    'games.complete': 'Game Complete!',
    'games.playAgain': 'Play Again',
    
    // Common
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.save': 'Save',
    'common.download': 'Download',
    'common.clear': 'Clear',
    'common.close': 'Close',
    'common.excellent': 'Excellent!',
    'common.good': 'Good!',
    'common.tryAgain': 'Try Again',
    
    // Voice messages
    'voice.welcome': 'Welcome to Hamad Al Awadhi\'s Learning World! Choose what you want to learn today',
    'voice.goodJob': 'Great job! Correct answer',
    'voice.tryAgain': 'Try again',
    'voice.completed': 'Great job! You have completed this letter successfully!',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    const saved = localStorage.getItem('hamad-language');
    if (saved && (saved === 'ar' || saved === 'en')) {
      setLanguage(saved as Language);
    }
    
    // Update document direction
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('hamad-language', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const t = (key: string, fallback?: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || fallback || key;
  };

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage: handleSetLanguage,
      t,
      dir: language === 'ar' ? 'rtl' : 'ltr'
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};