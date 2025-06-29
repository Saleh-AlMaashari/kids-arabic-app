import React, { useState } from 'react';
import { MessageCircle, Volume2, VolumeX } from 'lucide-react';
import { useVoice } from '../hooks/useVoice';

const VoiceAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const { speak, stopSpeaking } = useVoice();

  const assistantPhrases = [
    'مرحباً! أنا مساعد حمد. كيف يمكنني مساعدتك اليوم؟',
    'هل تريد تعلم حرف جديد؟',
    'لنلعب لعبة ممتعة!',
    'هل تريد سماع قصة جميلة؟',
    'أحسنت! تقدم رائع!',
    'لنلون معاً!'
  ];

  const handleSpeak = (phrase: string) => {
    setIsListening(true);
    speak(phrase);
    setTimeout(() => setIsListening(false), 3000);
  };

  const handleStop = () => {
    stopSpeaking();
    setIsListening(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Main Assistant Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center ${
          isListening ? 'animate-pulse' : ''
        }`}
      >
        <MessageCircle size={28} />
      </button>

      {/* Assistant Panel */}
      {isOpen && (
        <div className="absolute bottom-20 left-0 bg-white rounded-2xl shadow-2xl p-6 w-80 border-4 border-purple-200 animate-fadeIn">
          <div className="text-center mb-4">
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-3">
              <MessageCircle size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-purple-700 font-arabic">
              مساعد حمد
            </h3>
            <p className="text-sm text-gray-600">Hamad's Helper</p>
          </div>

          <div className="space-y-2 max-h-60 overflow-y-auto">
            {assistantPhrases.map((phrase, index) => (
              <button
                key={index}
                onClick={() => handleSpeak(phrase)}
                className="w-full p-3 text-right bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors duration-200 text-purple-800 font-arabic text-sm border border-purple-200"
              >
                {phrase}
              </button>
            ))}
          </div>

          <div className="flex justify-center mt-4 gap-2">
            <button
              onClick={handleStop}
              className="p-2 bg-red-100 hover:bg-red-200 rounded-lg transition-colors"
            >
              <VolumeX size={20} className="text-red-600" />
            </button>
            <button
              onClick={() => handleSpeak('مرحباً بك في عالم حمد التعليمي!')}
              className="p-2 bg-green-100 hover:bg-green-200 rounded-lg transition-colors"
            >
              <Volume2 size={20} className="text-green-600" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoiceAssistant;