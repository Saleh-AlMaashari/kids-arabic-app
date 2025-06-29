export interface ArabicLetter {
  id: string;
  letter: string;
  name: string;
  nameEn: string;
  word: string;
  wordEn: string;
  imageUrl: string;
  position: 'beginning' | 'middle' | 'end' | 'isolated';
  pronunciation: string;
  pronunciationEn: string;
  tashkeel: string; // With vowel marks
}

export interface GameScore {
  correct: number;
  total: number;
  percentage: number;
}

export interface UserProgress {
  completedLetters: string[];
  gameScores: Record<string, GameScore>;
  quizScores: Record<string, number>;
  lastVisited: string;
  totalStars: number;
  language: 'ar' | 'en';
}

export interface Story {
  id: string;
  title: string;
  titleEn: string;
  pages: StoryPage[];
  ageGroup: string;
  moral: string;
  moralEn: string;
  questions: StoryQuestion[];
}

export interface StoryPage {
  id: string;
  text: string;
  textEn: string;
  imageUrl: string;
  audioText: string;
  audioTextEn: string;
}

export interface StoryQuestion {
  id: string;
  pageIndex: number;
  question: string;
  questionEn: string;
  options: string[];
  optionsEn: string[];
  correctAnswer: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  questionEn: string;
  options: string[];
  optionsEn: string[];
  correctAnswer: number;
  letterId: string;
}

export interface YouTubeVideo {
  id: string;
  title: string;
  titleEn: string;
  videoId: string;
  category: 'letters' | 'songs' | 'stories' | 'drawing';
  ageAppropriate: boolean;
  description: string;
  descriptionEn: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  buttons?: ChatButton[];
}

export interface ChatButton {
  text: string;
  textEn: string;
  action: string;
  data?: any;
}

export type Language = 'ar' | 'en';