import { useState, useCallback } from 'react';
import { ChatMessage, ChatButton } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const API_KEY = 'AIzaSyBhFBKxYHINX3k_Uewmjw5w0vCZaXHgpKE';

export const useGeminiChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { language } = useLanguage();

  const generateResponse = useCallback(async (userMessage: string, context?: string) => {
    setIsLoading(true);

    const systemPrompt =
      language === 'ar'
        ? `أنت المعلم "حمد"، مساعد ذكي خاص بالأطفال من عمر ٤ إلى ٨ سنوات. 
- تحدث كأنك صديقهم المرح.
- استخدم كلمات بسيطة.
- كل رد يجب أن يحتوي على رموز تعبيرية.
- علمهم شيئًا صغيرًا في كل رد (حرف، كلمة، سؤال).
- لا تكتب فقرات طويلة، فقط جمل قصيرة مفرحة.
- شجع الطفل دائمًا (أحسنت، برافو، ممتاز).
${context ? `السياق: ${context}` : ''}`
        : `You are "Hamad", a smart, friendly teacher for children aged 4 to 8.
- Speak like a cheerful friend.
- Use very simple sentences.
- Include emojis in every reply.
- Teach them small things (letters, words, fun questions).
- Do NOT write long paragraphs.
- Always say something encouraging (Well done! Bravo!)
${context ? `Context: ${context}` : ''}`;

    const prompt = `${systemPrompt}\n\nChild: ${userMessage}`;

    try {
      const response = await fetch(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`
,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              temperature: 0.9,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 300
            }
          })
        }
      );

      const data = await response.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '...';

      const botMessage: ChatMessage = {
        id: Date.now().toString(),
        text,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Gemini Chat Error:', error);
      const errorMessage: ChatMessage = {
        id: Date.now().toString(),
        text: language === 'ar'
          ? 'أوه! صار خطأ، نجرب مرة ثانية؟ 😅'
          : 'Oops! Something went wrong. Want to try again? 😊',
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [language]);

  const sendMessage = useCallback((text: string, context?: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    generateResponse(text, context);
  }, [generateResponse]);

  const handleButtonClick = useCallback((action: string, data?: any) => {
    let message = '';
    let context = '';

    switch (action) {
      case 'learn_letter':
        message = language === 'ar' ? 'أريد تعلم حرف 🎓' : 'I want to learn a letter 🎓';
        context = 'Teach the child one Arabic letter clearly with an example';
        break;
      case 'play_game':
        message = language === 'ar' ? 'هل نلعب؟ 🎮' : 'Let’s play a game 🎮';
        context = 'Suggest a fun, educational game for a child';
        break;
      case 'read_story':
        message = language === 'ar' ? 'احكِ لي قصة 🐰' : 'Tell me a story 🐰';
        context = 'Tell a short story for a child in a fun, kind tone';
        break;
      case 'coloring':
        message = language === 'ar' ? 'أحب التلوين! 🖍️' : 'I love coloring! 🖍️';
        context = 'Suggest a coloring activity for a child';
        break;
      default:
        message = language === 'ar' ? 'مرحباً! 😄' : 'Hello there! 😄';
    }

    sendMessage(message, context);
  }, [language, sendMessage]);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  return {
    messages,
    isLoading,
    sendMessage,
    handleButtonClick,
    clearMessages
  };
};
