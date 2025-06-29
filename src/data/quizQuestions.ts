import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'ما هو الحرف الأول في كلمة أرنب؟',
    questionEnglish: 'What is the first letter in the word rabbit?',
    options: ['أ', 'ب', 'ت', 'ث'],
    correctAnswer: 0,
    letterId: 'alif'
  },
  {
    id: 'q2',
    question: 'أي من هذه الكلمات تبدأ بحرف الباء؟',
    questionEnglish: 'Which of these words starts with the letter Baa?',
    options: ['أرنب', 'بطة', 'تفاح', 'ثعلب'],
    correctAnswer: 1,
    letterId: 'baa'
  },
  {
    id: 'q3',
    question: 'ما هو الحرف في كلمة تفاح؟',
    questionEnglish: 'What is the letter in the word apple?',
    options: ['أ', 'ب', 'ت', 'ث'],
    correctAnswer: 2,
    letterId: 'taa'
  }
];