import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-auto">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Heart size={20} className="text-red-400 fill-current" />
          <p className="font-arabic text-lg">صُنع بحب من قِبل حمد العوضي</p>
        </div>
        <p className="text-sm opacity-80 mb-2">Created with love by Hamad Al Awadhi</p>
        <p className="text-xs opacity-60">
          Interactive Learning Platform for Children Ages 4-8
        </p>
      </div>
    </footer>
  );
};

export default Footer;