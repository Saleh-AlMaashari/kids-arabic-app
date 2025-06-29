import React from 'react';
import { Link } from 'react-router-dom';
import { arabicLetters } from '../data/arabicLetters';
import { useProgress } from '../hooks/useProgress';
import { useVoice } from '../hooks/useVoice';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckCircle, Circle } from 'lucide-react';

const LettersPage: React.FC = () => {
  const { progress } = useProgress();
  const { speak } = useVoice();
  const { language } = useLanguage();

  const t = {
    ar: {
      title: 'تعلم الحروف العربية',
      subtitle: 'Learn Arabic Letters',
      completed: 'مكتملة',
      word: 'كلمة',
      progress: 'تقدمك في التعلم',
      percent: 'مكتمل',
    },
    en: {
      title: 'Learn Arabic Letters',
      subtitle: 'تعلم الحروف العربية',
      completed: 'Completed',
      word: 'Word',
      progress: 'Your Learning Progress',
      percent: 'Completed',
    }
  }[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 font-arabic text-gray-800">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {t.subtitle}
          </p>
          <div className="text-lg text-blue-600">
            {t.completed}: {progress.completedLetters.length} / {arabicLetters.length}
          </div>
        </div>

        {/* Letters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {arabicLetters.map((letter, index) => {
            const isCompleted = progress.completedLetters.includes(letter.id);

            return (
              <Link
                key={letter.id}
                to={`/letters/${letter.id}`}
                className="group transform hover:scale-105 transition-all duration-300"
                onClick={() => speak(`${language === 'ar' ? 'حرف' : 'Letter'} ${letter.name}`)}
              >
                <div className={`
                  relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl border-4 
                  ${isCompleted ? 'border-green-400 bg-green-50' : 'border-blue-200 hover:border-blue-400'}
                  overflow-hidden
                `}>
                  {/* Completion Status */}
                  <div className="absolute top-4 right-4">
                    {isCompleted ? (
                      <CheckCircle className="text-green-500" size={24} />
                    ) : (
                      <Circle className="text-gray-300" size={24} />
                    )}
                  </div>

                  {/* Letter Display */}
                  <div className="text-center mb-4">
                    <div className="text-6xl font-bold text-blue-600 mb-2 font-arabic">
                      {letter.letter}
                    </div>
                    <div className="text-xl font-bold text-gray-700 font-arabic">
                      {letter.name}
                    </div>
                  </div>

                  {/* Word Example */}
                  <div className="text-center">
                    <img
                      src={letter.imageUrl}
                      alt={letter.word}
                      className="w-24 h-24 object-cover rounded-xl mx-auto mb-2 border-4 border-blue-300 shadow-md"
                    />
                    <div className="text-lg font-bold text-purple-600 font-arabic">
                      {letter.word}
                    </div>
                    <div className="text-sm text-gray-500">
                      {letter.wordEnglish}
                    </div>
                  </div>

                  {/* Number Badge */}
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-center mb-4 font-arabic">
              {t.progress}
            </h3>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
              <div
                className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full transition-all duration-500"
                style={{
                  width: `${(progress.completedLetters.length / arabicLetters.length) * 100}%`
                }}
              ></div>
            </div>
            <div className="text-center text-gray-600">
              {Math.round((progress.completedLetters.length / arabicLetters.length) * 100)}% {t.percent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LettersPage;
