import React, { useEffect, useRef, useState } from 'react';
import { Send, MessageCircle, X } from 'lucide-react';
import { useGeminiChat } from '../hooks/useGeminiChat';
import { useLanguage } from '../contexts/LanguageContext';
import { useVoice } from '../hooks/useVoice';

const GeminiChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, isLoading, sendMessage, clearMessages } = useGeminiChat();
  const { language } = useLanguage();
  const { speak } = useVoice();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = () => {
    if (input.trim() !== '') {
      sendMessage(input.trim());
      setInput('');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-white rounded-3xl shadow-2xl w-80 h-[500px] flex flex-col border-4 border-purple-200 animate-fadeIn">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-t-3xl flex justify-between items-center">
            <div>
              <h3 className="font-bold">
                {language === 'ar' ? 'مساعد حمد 👦' : "Hamad's Helper 👦"}
              </h3>
              <p className="text-xs">{language === 'ar' ? 'مرحبًا بك في عالم التعلم!' : 'Welcome to learning world!'}</p>
            </div>
            <button onClick={clearMessages} className="text-white hover:text-gray-200">
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div
                  className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm ${
                    msg.isBot ? 'bg-purple-100 text-purple-800' : 'bg-blue-500 text-white'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-2xl text-sm">
                  {language === 'ar' ? 'يكتب...' : 'Typing...'}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t bg-white flex gap-2 items-center">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-none"
              placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Type your message here...'}
            />
            <button
              onClick={handleSend}
              className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full transition"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiChatAssistant;
