import React, { useState, useEffect } from 'react';
import { quizQuestions } from '../data/quizQuestions';
import { useVoice } from '../hooks/useVoice';
import { useProgress } from '../hooks/useProgress';
import { Brain, Star, Trophy, RotateCcw } from 'lucide-react';

interface QuizState {
  currentQuestion: number;
  selectedAnswer: number | null;
  correctAnswers: number;
  showResult: boolean;
  quizComplete: boolean;
}

const QuizPage: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    selectedAnswer: null,
    correctAnswers: 0,
    showResult: false,
    quizComplete: false
  });

  const { speak } = useVoice();
  const { updateQuizScore } = useProgress();

  useEffect(() => {
    speak('مرحباً بك في صفحة الاختبارات! دعنا نختبر معلوماتك');
    readCurrentQuestion();
  }, []);

  const readCurrentQuestion = () => {
    const question = quizQuestions[quizState.currentQuestion];
    if (question) {
      setTimeout(() => {
        speak(question.question);
      }, 1000);
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (quizState.showResult) return;

    setQuizState(prev => ({
      ...prev,
      selectedAnswer: answerIndex
    }));

    const question = quizQuestions[quizState.currentQuestion];
    const option = question.options[answerIndex];
    speak(option);
  };

  const handleSubmitAnswer = () => {
    if (quizState.selectedAnswer === null) return;

    const question = quizQuestions[quizState.currentQuestion];
    const isCorrect = quizState.selectedAnswer === question.correctAnswer;
    
    setQuizState(prev => ({
      ...prev,
      showResult: true,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers
    }));

    if (isCorrect) {
      speak('أحسنت! إجابة صحيحة');
    } else {
      speak('إجابة خاطئة. الإجابة الصحيحة هي: ' + question.options[question.correctAnswer]);
    }
  };

  const handleNextQuestion = () => {
    const nextIndex = quizState.currentQuestion + 1;
    
    if (nextIndex >= quizQuestions.length) {
      // Quiz complete
      setQuizState(prev => ({
        ...prev,
        quizComplete: true
      }));
      
      const finalScore = Math.round((quizState.correctAnswers / quizQuestions.length) * 100);
      updateQuizScore('main-quiz', finalScore);
      
      speak(`انتهى الاختبار! نتيجتك ${finalScore} بالمائة`);
    } else {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: nextIndex,
        selectedAnswer: null,
        showResult: false
      }));
      
      setTimeout(() => {
        readCurrentQuestion();
      }, 500);
    }
  };

  const resetQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      selectedAnswer: null,
      correctAnswers: 0,
      showResult: false,
      quizComplete: false
    });
    
    setTimeout(() => {
      readCurrentQuestion();
    }, 500);
  };

  const currentQuestion = quizQuestions[quizState.currentQuestion];
  const progress = ((quizState.currentQuestion + 1) / quizQuestions.length) * 100;

  if (quizState.quizComplete) {
    const finalScore = Math.round((quizState.correctAnswers / quizQuestions.length) * 100);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-8 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
            <Trophy size={80} className="text-yellow-500 mx-auto mb-6" />
            
            <h1 className="text-4xl font-bold mb-4 font-arabic text-gray-800">
              تهانينا!
            </h1>
            <p className="text-2xl text-gray-600 mb-6">Congratulations!</p>
            
            <div className="mb-6">
              <div className="text-6xl font-bold text-purple-600 mb-2">
                {finalScore}%
              </div>
              <p className="text-lg text-gray-600 font-arabic">
                أجبت بشكل صحيح على {quizState.correctAnswers} من {quizQuestions.length} أسئلة
              </p>
            </div>

            <div className="flex justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`${finalScore >= (i + 1) * 20 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  size={32} 
                />
              ))}
            </div>

            <div className="space-y-4">
              <div className={`p-4 rounded-2xl ${
                finalScore >= 80 ? 'bg-green-100 text-green-800' :
                finalScore >= 60 ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                <div className="font-bold font-arabic">
                  {finalScore >= 80 ? 'ممتاز!' :
                   finalScore >= 60 ? 'جيد!' :
                   'تحتاج لمزيد من التدريب'}
                </div>
                <div className="text-sm">
                  {finalScore >= 80 ? 'Excellent!' :
                   finalScore >= 60 ? 'Good!' :
                   'Keep practicing!'}
                </div>
              </div>

              <button
                onClick={resetQuiz}
                className="bg-purple-600 text-white px-8 py-3 rounded-2xl hover:bg-purple-700 transition-colors flex items-center gap-2 mx-auto"
              >
                <RotateCcw size={20} />
                <span className="font-arabic">أعد الاختبار</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 font-arabic text-gray-800">
            اختبار الحروف
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Letters Quiz
          </p>
          
          {/* Progress Bar */}
          <div className="bg-white rounded-2xl p-4 shadow-lg max-w-md mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold">السؤال {quizState.currentQuestion + 1}</span>
              <span className="text-sm text-gray-600">من {quizQuestions.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-purple-500 to-indigo-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Quiz Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Question Header */}
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-8 text-center">
            <Brain size={48} className="mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2 font-arabic">
              {currentQuestion.question}
            </h2>
            <p className="text-lg opacity-90">
              {currentQuestion.questionEnglish}
            </p>
          </div>

          {/* Answer Options */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={quizState.showResult}
                  className={`
                    p-6 rounded-2xl border-4 text-xl font-bold transition-all duration-300 font-arabic
                    ${quizState.selectedAnswer === index
                      ? quizState.showResult
                        ? index === currentQuestion.correctAnswer
                          ? 'bg-green-100 border-green-400 text-green-800'
                          : 'bg-red-100 border-red-400 text-red-800'
                        : 'bg-blue-100 border-blue-400 text-blue-800'
                      : quizState.showResult && index === currentQuestion.correctAnswer
                        ? 'bg-green-100 border-green-400 text-green-800'
                        : 'bg-gray-50 border-gray-300 text-gray-800 hover:bg-purple-50 hover:border-purple-300'
                    }
                    ${quizState.showResult ? 'cursor-not-allowed' : 'hover:shadow-lg transform hover:scale-105'}
                  `}
                >
                  <div className="text-3xl mb-2">{option}</div>
                  {quizState.showResult && index === currentQuestion.correctAnswer && (
                    <div className="text-green-600 text-sm">✓ الإجابة الصحيحة</div>
                  )}
                  {quizState.showResult && quizState.selectedAnswer === index && index !== currentQuestion.correctAnswer && (
                    <div className="text-red-600 text-sm">✗ إجابة خاطئة</div>
                  )}
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="text-center">
              {!quizState.showResult ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={quizState.selectedAnswer === null}
                  className={`
                    px-8 py-4 rounded-2xl font-bold text-xl transition-all duration-300
                    ${quizState.selectedAnswer !== null
                      ? 'bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg transform hover:scale-105'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }
                  `}
                >
                  <span className="font-arabic">تأكيد الإجابة</span>
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-xl hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <span className="font-arabic">
                    {quizState.currentQuestion < quizQuestions.length - 1 ? 'السؤال التالي' : 'إنهاء الاختبار'}
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* Score Display */}
          <div className="bg-gray-50 p-6 text-center">
            <div className="flex justify-center gap-8">
              <div>
                <div className="text-2xl font-bold text-green-600">{quizState.correctAnswers}</div>
                <div className="text-sm text-gray-600 font-arabic">صحيح</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">
                  {quizState.currentQuestion + (quizState.showResult ? 1 : 0) - quizState.correctAnswers}
                </div>
                <div className="text-sm text-gray-600 font-arabic">خطأ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;