import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Volume2, Book } from 'lucide-react';
import { stories } from '../data/stories';
import { useVoice } from '../hooks/useVoice';

const StoriesPage: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState(stories[0]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isReading, setIsReading] = useState(false);
  const { speak, stopSpeaking } = useVoice();

  useEffect(() => {
    speak('مرحباً بك في وقت القصة! اختر قصة واستمع إليها');
  }, []);

  const handlePageChange = (direction: 'next' | 'prev') => {
    if (direction === 'next' && currentPage < selectedStory.pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleReadPage = () => {
    const page = selectedStory.pages[currentPage];
    if (page) {
      setIsReading(true);
      speak(page.audioText);
      setTimeout(() => setIsReading(false), 5000);
    }
  };

  const handleStopReading = () => {
    stopSpeaking();
    setIsReading(false);
  };

  const currentPageData = selectedStory.pages[currentPage];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 font-arabic text-gray-800">
            وقت القصة
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Story Time
          </p>
        </div>

        {/* Story Selection */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-center mb-4 font-arabic">
              اختر قصة
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {stories.map((story) => (
                <button
                  key={story.id}
                  onClick={() => {
                    setSelectedStory(story);
                    setCurrentPage(0);
                    speak(story.title);
                  }}
                  className={`p-6 rounded-2xl border-4 transition-all duration-300 ${
                    selectedStory.id === story.id
                      ? 'border-orange-400 bg-orange-50'
                      : 'border-gray-200 bg-white hover:border-orange-300'
                  }`}
                >
                  <Book size={32} className="mx-auto mb-3 text-orange-500" />
                  <h4 className="font-bold mb-2 font-arabic">{story.title}</h4>
                  <p className="text-sm text-gray-600">{story.titleEnglish}</p>
                  <div className="mt-2 text-xs bg-orange-100 px-2 py-1 rounded-full">
                    {story.pages.length} صفحات
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Story Reader */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Story Header */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 text-center">
            <h2 className="text-2xl font-bold mb-2 font-arabic">
              {selectedStory.title}
            </h2>
            <p className="text-lg opacity-90">{selectedStory.titleEnglish}</p>
            <div className="mt-3 bg-white/20 rounded-full px-4 py-2 inline-block">
              صفحة {currentPage + 1} من {selectedStory.pages.length}
            </div>
          </div>

          {/* Story Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center min-h-[400px]">
              {/* Image */}
              <div className="order-2 md:order-1">
                <img
                  src={currentPageData.imageUrl}
                  alt={`Story page ${currentPage + 1}`}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg border-4 border-orange-200"
                />
              </div>

              {/* Text */}
              <div className="order-1 md:order-2 text-center md:text-right">
                <div className="text-2xl leading-relaxed mb-6 font-arabic text-gray-800">
                  {currentPageData.text}
                </div>
                <div className="text-lg text-gray-600 mb-6 italic">
                  {currentPageData.textEnglish}
                </div>

                {/* Audio Controls */}
                <div className="flex justify-center gap-4">
                  {!isReading ? (
                    <button
                      onClick={handleReadPage}
                      className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                    >
                      <Volume2 size={24} />
                      <span className="font-arabic">اقرأ الصفحة</span>
                    </button>
                  ) : (
                    <button
                      onClick={handleStopReading}
                      className="bg-red-500 text-white px-6 py-3 rounded-2xl hover:bg-red-600 transition-colors flex items-center gap-2 animate-pulse"
                    >
                      <span className="font-arabic">توقف</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="bg-gray-50 p-6 flex justify-between items-center">
            <button
              onClick={() => handlePageChange('prev')}
              disabled={currentPage === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl transition-all duration-300 ${
                currentPage === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg'
              }`}
            >
              <ChevronRight size={20} />
              <span className="font-arabic">السابق</span>
            </button>

            {/* Page Indicators */}
            <div className="flex gap-2">
              {selectedStory.pages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? 'bg-orange-500 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => handlePageChange('next')}
              disabled={currentPage === selectedStory.pages.length - 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl transition-all duration-300 ${
                currentPage === selectedStory.pages.length - 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg'
              }`}
            >
              <span className="font-arabic">التالي</span>
              <ChevronLeft size={20} />
            </button>
          </div>
        </div>

        {/* Story completed celebration */}
        {currentPage === selectedStory.pages.length - 1 && (
          <div className="mt-8 text-center">
            <div className="bg-green-100 border-4 border-green-400 rounded-3xl p-8 max-w-md mx-auto">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-green-700 mb-2 font-arabic">
                انتهت القصة!
              </h3>
              <p className="text-green-600 mb-4">Story Complete!</p>
              <button
                onClick={() => {
                  setCurrentPage(0);
                  speak('لنقرأ القصة مرة أخرى!');
                }}
                className="bg-green-600 text-white px-6 py-3 rounded-2xl hover:bg-green-700 transition-colors font-arabic"
              >
                اقرأ مرة أخرى
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoriesPage;