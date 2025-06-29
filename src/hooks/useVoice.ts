import { useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const useVoice = () => {
  const { language } = useLanguage();

  const speak = useCallback((text: string, lang?: string) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang || (language === 'ar' ? 'ar-SA' : 'en-US');
      utterance.rate = 0.7; // مناسبة للقراءة باللغتين
      utterance.pitch = 1.05;
      utterance.volume = 0.95;

      // Try to select appropriate voice
      const voices = speechSynthesis.getVoices();
      const preferredVoice = voices.find(voice => 
        lang
          ? voice.lang.includes(lang)
          : language === 'ar'
          ? voice.lang.includes('ar') || voice.name.includes('Arabic')
          : voice.lang.includes('en') || voice.name.includes('English')
      );
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      speechSynthesis.speak(utterance);
    }
  }, [language]);

  const stopSpeaking = useCallback(() => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
    }
  }, []);

  return { speak, stopSpeaking };
};
