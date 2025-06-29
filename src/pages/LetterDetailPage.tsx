import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Volume2, Star, Trophy } from 'lucide-react';
import { getLetterById, arabicLetters } from '../data/arabicLetters';
import { useVoice } from '../hooks/useVoice';
import { useProgress } from '../hooks/useProgress';
import { useLanguage } from '../contexts/LanguageContext';

const LetterDetailPage: React.FC = () => {
  const { letterId } = useParams<{ letterId: string }>();
  const [showCelebration, setShowCelebration] = useState(false);
  const { speak } = useVoice();
  const { progress, completeLetter } = useProgress();
  const { language } = useLanguage();

  const letter = letterId ? getLetterById(letterId) : null;
  const currentIndex = arabicLetters.findIndex(l => l.id === letterId);
  const nextLetter = currentIndex < arabicLetters.length - 1 ? arabicLetters[currentIndex + 1] : null;
  const prevLetter = currentIndex > 0 ? arabicLetters[currentIndex - 1] : null;

  useEffect(() => {
    if (letter) {
      speak(language === 'ar' ? `حرف ${letter.name}. كلمة ${letter.word}` : `Letter ${letter.nameEn}. Word ${letter.wordEn}`);
    }
  }, [letter, speak, language]);

  const handleComplete = () => {
    if (letter && !progress.completedLetters.includes(letter.id)) {
      completeLetter(letter.id);
      setShowCelebration(true);
      speak(language === 'ar' ? 'أحسنت! لقد أكملت هذا الحرف بنجاح!' : 'Great job! You completed this letter!');
      setTimeout(() => setShowCelebration(false), 3000);
    }
  };

  if (!letter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-600 mb-4">
            {language === 'ar' ? 'الحرف غير موجود' : 'Letter not found'}
          </h2>
          <Link to="/letters" className="text-blue-500 hover:underline">
            {language === 'ar' ? 'العودة إلى قائمة الحروف' : 'Back to letters list'}
          </Link>
        </div>
      </div>
    );
  }

  const isCompleted = progress.completedLetters.includes(letter.id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-8">
      {showCelebration && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 text-center animate-pulse">
            <Trophy size={64} className="text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-green-600 mb-2 font-arabic">
              {language === 'ar' ? 'أحسنت!' : 'Great Job!'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ar' ? 'لقد أكملت الحرف' : 'You completed the letter'}
            </p>
            <div className="mt-4 flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={24} />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          {prevLetter ? (
            <Link to={`/letters/${prevLetter.id}`} className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <ArrowRight size={20} />
              <span className="font-arabic">{prevLetter.letter}</span>
            </Link>
          ) : (<div />)}

          <Link to="/letters" className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition-colors">
            {language === 'ar' ? 'قائمة الحروف' : 'Letters List'}
          </Link>

          {nextLetter ? (
            <Link to={`/letters/${nextLetter.id}`} className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <span className="font-arabic">{nextLetter.letter}</span>
              <ArrowLeft size={20} />
            </Link>
          ) : (<div />)}
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 text-center">
            <div className="text-8xl font-bold mb-4 font-arabic">{letter.letter}</div>
            <h1 className="text-3xl font-bold mb-2 font-arabic">
              {language === 'ar' ? `حرف ${letter.name}` : `Letter ${letter.nameEn}`}
            </h1>
            <p className="text-xl opacity-90">
              {language === 'ar' ? `الحرف ${letter.pronunciation}` : `Pronounced ${letter.pronunciationEn}`}
            </p>
            {isCompleted && (
              <div className="mt-4 flex items-center justify-center gap-2 bg-white/20 rounded-full px-4 py-2">
                <Star className="text-yellow-300 fill-current" size={20} />
                <span>{language === 'ar' ? 'مكتمل' : 'Completed'}</span>
              </div>
            )}
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <img
                  src={letter.imageUrl}
                  alt={letter.word}
                  className="w-64 h-64 object-cover rounded-3xl mx-auto shadow-lg border-8 border-purple-200"
                />
              </div>
              <div className="text-center md:text-right">
                <div className="text-6xl font-bold text-purple-600 mb-4 font-arabic">
                  {language === 'ar' ? letter.word : letter.wordEn}
                </div>
                <div className="text-2xl text-gray-600 mb-6">
                  {language === 'ar' ? letter.wordEn : letter.word}
                </div>
                <div className="space-y-4">
                  <button
                    onClick={() => speak(language === 'ar' ? `حرف ${letter.name}. كلمة ${letter.word}` : `Letter ${letter.nameEn}. Word ${letter.wordEn}`)}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-bold text-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <Volume2 size={24} />
                    <span className="font-arabic">{language === 'ar' ? 'استمع للحرف' : 'Listen to Letter'}</span>
                  </button>

                  <button
                    onClick={() => speak(language === 'ar' ? letter.word : letter.wordEn)}
                    className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-4 rounded-2xl font-bold text-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <span className="font-arabic">{language === 'ar' ? 'استمع للكلمة' : 'Listen to Word'}</span>
                  </button>

                  {!isCompleted && (
                    <button
                      onClick={handleComplete}
                      className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <Star size={24} />
                      <span className="font-arabic">{language === 'ar' ? 'إكمال الحرف' : 'Complete Letter'}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8">
            <h3 className="text-2xl font-bold text-center mb-6 font-arabic">
              {language === 'ar' ? 'تدرب على الحرف' : 'Practice the Letter'}
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link to={`/games?letter=${letter.id}`} className="bg-green-500 text-white p-6 rounded-2xl text-center hover:bg-green-600 transition-colors">
                <div className="text-4xl mb-2">🎮</div>
                <div className="font-bold font-arabic">{language === 'ar' ? 'العب' : 'Play'}</div>
              </Link>

              <Link to="/coloring" className="bg-purple-500 text-white p-6 rounded-2xl text-center hover:bg-purple-600 transition-colors">
                <div className="text-4xl mb-2">🎨</div>
                <div className="font-bold font-arabic">{language === 'ar' ? 'لون' : 'Color'}</div>
              </Link>

              <Link to="/quiz" className="bg-red-500 text-white p-6 rounded-2xl text-center hover:bg-red-600 transition-colors">
                <div className="text-4xl mb-2">🧠</div>
                <div className="font-bold font-arabic">{language === 'ar' ? 'اختبر' : 'Quiz'}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterDetailPage;
