import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Gamepad2, Palette, Book, Brain, Users, Play } from 'lucide-react';
import { useVoice } from '../hooks/useVoice';
import { useLanguage } from '../contexts/LanguageContext';
import HamadAvatar from '../assets/hamad-avatar.png';

const HomePage: React.FC = () => {
  const { speak } = useVoice();
  const { language, t } = useLanguage();

  useEffect(() => {
    // Welcome message with proper Arabic tashkeel
    const timer = setTimeout(() => {
      speak(
        language === 'ar'
          ? 'أَهْلًا وَسَهْلًا بِكَ فِي عالَمِ حَمَد العَواضِي! ماذا تُحِبُّ أَنْ تَتَعَلَّمَ اليَوْم؟'
          : t('voice.welcome')
      );
    }, 1000);

    return () => clearTimeout(timer);
  }, [speak, t, language]);

  const menuItems = [
    {
      title: t('nav.letters'),
      titleEn: 'Learn Letters',
      icon: BookOpen,
      path: '/letters',
      color: 'from-blue-500 to-blue-600',
      description:
        language === 'ar'
          ? 'سنتعلم الحروف بالصوت والصورة وألعاب ممتعة!'
          : 'Learn letters with sounds, pictures, and fun games!'
    },
    {
      title: t('nav.games'),
      titleEn: 'Games',
      icon: Gamepad2,
      path: '/games',
      color: 'from-green-500 to-green-600',
      description:
        language === 'ar' ? 'نلعب ونتحدى أنفسنا! هل أنت جاهز؟ 🎮' : 'Play fun and exciting games!'
    },
    {
      title: t('nav.coloring'),
      titleEn: 'Coloring',
      icon: Palette,
      path: '/coloring',
      color: 'from-purple-500 to-purple-600',
      description:
        language === 'ar' ? 'اختر ألوانك المفضلة وابدأ التلوين الآن! 🖍️' : 'Pick your colors and start drawing!'
    },
    {
      title: t('nav.stories'),
      titleEn: 'Story Time',
      icon: Book,
      path: '/stories',
      color: 'from-orange-500 to-orange-600',
      description:
        language === 'ar' ? 'استمع إلى قصص مسلية ومليئة بالمغامرات! 📖' : 'Listen to exciting and fun stories!'
    },
    {
      title: t('nav.videos'),
      titleEn: 'Videos',
      icon: Play,
      path: '/videos',
      color: 'from-red-500 to-red-600',
      description:
        language === 'ar' ? 'فيديوهات فيها أناشيد ورسوم متحركة للتعلم 🎥' : 'Songs, cartoons, and learning videos!'
    },
    {
      title: t('nav.quiz'),
      titleEn: 'Quiz',
      icon: Brain,
      path: '/quiz',
      color: 'from-indigo-500 to-indigo-600',
      description:
        language === 'ar' ? 'لعبة الأسئلة! كم إجابة صحيحة ستحصل؟ 🧠' : 'Fun quizzes! How many can you get right?'
    },
    {
      title: t('nav.parents'),
      titleEn: 'Parent Zone',
      icon: Users,
      path: '/parents',
      color: 'from-pink-500 to-pink-600',
      description:
        language === 'ar' ? 'نصائح مفيدة ومتابعة تقدم أطفالكم 👨‍👩‍👧' : 'Helpful tips for parents and progress tracking'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="text-center py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Avatar Image */}
          <img
  src={HamadAvatar}
  alt="Hamad Avatar"
  className="w-32 h-32 mx-auto mb-6 rounded-full shadow-lg border-4 border-white object-cover"
/>


          <h1 className={`text-4xl md:text-6xl font-bold mb-4 text-gray-800 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {language === 'ar' ? 'مرحبًا بك! أنا صديقك حمد' : "Hi! I'm your friend Hamad"}
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-purple-600">
            {language === 'ar' ? 'جاهز نبدأ المرح؟ 🎉' : 'Ready to start the fun? 🎉'}
          </h2>
          <p className={`text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto ${language === 'ar' ? 'font-arabic' : ''}`}>
            {language === 'ar'
              ? 'سنتعلم الحروف والكلمات من خلال اللعب والقصص 🎨📖'
              : 'We will learn letters and words through play and stories 🎨📖'}
          </p>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="group transform hover:scale-105 transition-all duration-300"
                onClick={() => speak(language === 'ar' ? `هيا نذهب إلى قسم ${item.title}` : `Let's go to ${item.titleEn}`)}
              >
                <div className={`bg-gradient-to-r ${item.color} p-8 rounded-3xl shadow-lg hover:shadow-2xl text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <IconComponent size={128} />
                  </div>
                  <div className="relative z-10">
                    <IconComponent size={48} className="mb-4 mx-auto" />
                    <h3 className={`text-2xl font-bold mb-2 text-center ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {item.title}
                    </h3>
                    <p className="text-lg mb-3 text-center opacity-90">
                      {language === 'ar' ? item.title : item.titleEn}
                    </p>
                    <p className={`text-sm text-center opacity-80 ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-12 bg-white/50 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className={`text-2xl font-bold mb-4 text-gray-800 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {language === 'ar' ? 'جاهز تبدأ الرحلة؟ 🧠📚' : 'Ready to begin your journey? 🧠📚'}
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            {language === 'ar' ? 'اختر ما تُحب أن تتعلمه الآن!' : 'Choose what you want to learn now!'}
          </p>
          <Link
            to="/letters"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            onClick={() => speak(language === 'ar' ? 'لِنَبدَأْ تَعلُّم الحُرُوف!' : "Let's start learning letters!")}
          >
            <BookOpen className="inline-block mr-2" size={24} />
            <span className={language === 'ar' ? 'font-arabic' : ''}>
              {t('home.start')}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
