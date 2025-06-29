import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { arabicLetters } from '../data/arabicLetters';
import { useVoice } from '../hooks/useVoice';
import { useProgress } from '../hooks/useProgress';
import { Shuffle, RotateCcw, Star, Trophy } from 'lucide-react';

interface GameItem {
  id: string;
  letter: string;
  word: string;
  imageUrl: string;
  matched: boolean;
}

const GamesPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const selectedLetter = searchParams.get('letter');
  const { speak } = useVoice();
  const { updateGameScore } = useProgress();

  const [gameItems, setGameItems] = useState<GameItem[]>([]);
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [gameComplete, setGameComplete] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  // Initialize game
  useEffect(() => {
    initializeGame();
  }, [selectedLetter]);

  const initializeGame = () => {
    let lettersToUse = selectedLetter 
      ? arabicLetters.filter(l => l.id === selectedLetter)
      : arabicLetters.slice(0, 6);

    const items: GameItem[] = [];
    lettersToUse.forEach(letter => {
      // Add letter card
      items.push({
        id: `letter-${letter.id}`,
        letter: letter.letter,
        word: letter.word,
        imageUrl: '',
        matched: false
      });
      // Add image card
      items.push({
        id: `image-${letter.id}`,
        letter: letter.letter,
        word: letter.word,
        imageUrl: letter.imageUrl,
        matched: false
      });
    });

    // Shuffle items
    const shuffled = items.sort(() => Math.random() - 0.5);
    setGameItems(shuffled);
    setSelectedCards([]);
    setScore({ correct: 0, total: 0 });
    setGameComplete(false);
    setShowCelebration(false);
  };

  const handleCardClick = (itemId: string) => {
    if (selectedCards.length >= 2 || selectedCards.includes(itemId)) return;

    const newSelected = [...selectedCards, itemId];
    setSelectedCards(newSelected);

    const item = gameItems.find(i => i.id === itemId);
    if (item) {
      speak(item.word);
    }

    if (newSelected.length === 2) {
      checkMatch(newSelected);
    }
  };

  const checkMatch = (selected: string[]) => {
    const [first, second] = selected;
    const firstItem = gameItems.find(i => i.id === first);
    const secondItem = gameItems.find(i => i.id === second);

    if (firstItem && secondItem) {
      const isMatch = firstItem.word === secondItem.word;
      const newScore = { ...score, total: score.total + 1 };

      if (isMatch) {
        newScore.correct += 1;
        speak('أحسنت! إجابة صحيحة');
        
        setGameItems(prev => prev.map(item => 
          item.id === first || item.id === second 
            ? { ...item, matched: true }
            : item
        ));
      } else {
        speak('حاول مرة أخرى');
      }

      setScore(newScore);
      
      setTimeout(() => {
        setSelectedCards([]);
        
        // Check if game is complete
        const allMatched = gameItems.every(item => 
          item.matched || item.id === first || item.id === second
        );
        
        if (allMatched && isMatch) {
          setGameComplete(true);
          setShowCelebration(true);
          updateGameScore('matching-game', newScore.correct, newScore.total);
          speak('رائع! لقد أكملت اللعبة بنجاح!');
          setTimeout(() => setShowCelebration(false), 3000);
        }
      }, 1500);
    }
  };

  const getCardClasses = (item: GameItem) => {
    const baseClasses = "relative w-full h-32 rounded-2xl border-4 cursor-pointer transition-all duration-300 transform hover:scale-105";
    
    if (item.matched) {
      return `${baseClasses} bg-green-100 border-green-400 opacity-75`;
    }
    
    if (selectedCards.includes(item.id)) {
      return `${baseClasses} bg-blue-100 border-blue-400 scale-105`;
    }
    
    return `${baseClasses} bg-white border-gray-300 hover:border-blue-400 hover:shadow-lg`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      {/* Celebration */}
      {showCelebration && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 text-center animate-bounce">
            <Trophy size={64} className="text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-green-600 mb-2 font-arabic">
              مبروك!
            </h2>
            <p className="text-xl text-gray-600 mb-4">Congratulations!</p>
            <div className="text-lg">
              النتيجة: {score.correct} من {score.total}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 font-arabic text-gray-800">
            لعبة المطابقة
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Matching Game
          </p>
          
          {/* Score */}
          <div className="flex justify-center gap-4 mb-6">
            <div className="bg-white px-6 py-3 rounded-2xl shadow-lg">
              <div className="text-2xl font-bold text-green-600">{score.correct}</div>
              <div className="text-sm text-gray-500 font-arabic">صحيح</div>
            </div>
            <div className="bg-white px-6 py-3 rounded-2xl shadow-lg">
              <div className="text-2xl font-bold text-blue-600">{score.total}</div>
              <div className="text-sm text-gray-500 font-arabic">المجموع</div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4">
            <button
              onClick={initializeGame}
              className="bg-blue-500 text-white px-6 py-3 rounded-2xl hover:bg-blue-600 transition-colors flex items-center gap-2"
            >
              <Shuffle size={20} />
              <span className="font-arabic">خلط جديد</span>
            </button>
            <button
              onClick={() => {
                setSelectedCards([]);
                setScore({ correct: 0, total: 0 });
              }}
              className="bg-gray-500 text-white px-6 py-3 rounded-2xl hover:bg-gray-600 transition-colors flex items-center gap-2"
            >
              <RotateCcw size={20} />
              <span className="font-arabic">إعادة تشغيل</span>
            </button>
          </div>
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {gameItems.map((item) => (
            <div
              key={item.id}
              className={getCardClasses(item)}
              onClick={() => handleCardClick(item.id)}
            >
              <div className="absolute inset-0 flex items-center justify-center p-4">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.word}
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 font-arabic mb-2">
                      {item.letter}
                    </div>
                    <div className="text-lg font-bold text-gray-700 font-arabic">
                      {item.word}
                    </div>
                  </div>
                )}
              </div>
              
              {item.matched && (
                <div className="absolute top-2 right-2">
                  <Star className="text-yellow-500 fill-current" size={24} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Game Complete */}
        {gameComplete && (
          <div className="mt-8 text-center">
            <div className="bg-green-100 border-4 border-green-400 rounded-3xl p-8 max-w-md mx-auto">
              <Trophy size={48} className="text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-700 mb-2 font-arabic">
                لعبة مكتملة!
              </h3>
              <p className="text-green-600 mb-4">
                النتيجة النهائية: {Math.round((score.correct / score.total) * 100)}%
              </p>
              <button
                onClick={initializeGame}
                className="bg-green-600 text-white px-6 py-3 rounded-2xl hover:bg-green-700 transition-colors font-arabic"
              >
                العب مرة أخرى
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamesPage;