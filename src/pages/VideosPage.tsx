import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { youtubeVideos } from '../data/youtubeVideos';
import { useLanguage } from '../contexts/LanguageContext';
import { useVoice } from '../hooks/useVoice';

const VideosPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedVideo, setSelectedVideo] = useState<typeof youtubeVideos[0] | null>(null);
  const { language } = useLanguage();
  const { speak } = useVoice();

  const categories = [
    { id: 'all', name: language === 'ar' ? 'الكل' : 'All' },
    { id: 'letters', name: language === 'ar' ? 'الحروف' : 'Letters' },
    { id: 'songs', name: language === 'ar' ? 'الأغاني' : 'Songs' },
    { id: 'stories', name: language === 'ar' ? 'القصص' : 'Stories' },
    { id: 'drawing', name: language === 'ar' ? 'الرسم' : 'Drawing' }
  ];

  const filteredVideos = selectedCategory === 'all'
    ? youtubeVideos
    : youtubeVideos.filter(video => video.category === selectedCategory);

  const handleVideoSelect = (video: typeof youtubeVideos[0]) => {
    setSelectedVideo(video);
    speak(language === 'ar' ? video.title : video.titleEn);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className={`text-4xl font-bold mb-4 text-gray-800 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {language === 'ar' ? 'الفيديوهات التعليمية' : 'Educational Videos'}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {language === 'ar' ? 'فيديوهات ممتعة لتعلم اللغة العربية' : 'Fun videos to learn Arabic'}
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'bg-white text-red-500 hover:bg-red-50 border-2 border-red-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Selected Video */}
        {selectedVideo && (
          <div className="mb-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={selectedVideo.url.replace('watch?v=', 'embed/') + '?autoplay=1&rel=0&modestbranding=1'}
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className={`text-2xl font-bold mb-2 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                  {language === 'ar' ? selectedVideo.title : selectedVideo.titleEn}
                </h3>
                <p className={`text-gray-600 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                  {language === 'ar' ? selectedVideo.description : selectedVideo.descriptionEn}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-105"
              onClick={() => handleVideoSelect(video)}
            >
              <div className="relative aspect-video bg-gradient-to-br from-red-400 to-orange-400">
                <img
                  src={`https://img.youtube.com/vi/${video.url.split('v=')[1]}/maxresdefault.jpg`}
                  alt={language === 'ar' ? video.title : video.titleEn}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.url.split('v=')[1]}/hqdefault.jpg`;
                  }}
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Play size={24} className="text-red-500 ml-1" />
                  </div>
                </div>
                {video.ageAppropriate && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    4-8 {language === 'ar' ? 'سنوات' : 'years'}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                  {language === 'ar' ? video.title : video.titleEn}
                </h3>
                <p className={`text-gray-600 text-sm ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                  {language === 'ar' ? video.description : video.descriptionEn}
                </p>
                <div className="mt-4">
                  <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold">
                    {categories.find(c => c.id === video.category)?.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Safety Notice */}
        <div className="mt-12 bg-green-100 border-4 border-green-400 rounded-3xl p-8 text-center">
          <div className="text-4xl mb-4">🛡️</div>
          <h3 className={`text-2xl font-bold text-green-700 mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {language === 'ar' ? 'محتوى آمن للأطفال' : 'Child-Safe Content'}
          </h3>
          <p className={`text-green-600 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {language === 'ar'
              ? 'جميع الفيديوهات مراجعة ومناسبة للأطفال من عمر 4-8 سنوات'
              : 'All videos are reviewed and appropriate for children ages 4–8'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideosPage;
