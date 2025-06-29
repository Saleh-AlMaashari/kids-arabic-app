import { useState, useEffect } from 'react';
import { UserProgress } from '../types';

const defaultProgress: UserProgress = {
  completedLetters: [],
  gameScores: {},
  quizScores: {},
  lastVisited: 'home',
  totalStars: 0
};

export const useProgress = () => {
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);

  useEffect(() => {
    const saved = localStorage.getItem('hamad-learning-progress');
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to parse progress:', error);
      }
    }
  }, []);

  const saveProgress = (newProgress: UserProgress) => {
    setProgress(newProgress);
    localStorage.setItem('hamad-learning-progress', JSON.stringify(newProgress));
  };

  const completeLetter = (letterId: string) => {
    const newProgress = {
      ...progress,
      completedLetters: [...new Set([...progress.completedLetters, letterId])],
      totalStars: progress.totalStars + 1
    };
    saveProgress(newProgress);
  };

  const updateGameScore = (gameId: string, correct: number, total: number) => {
    const percentage = Math.round((correct / total) * 100);
    const newProgress = {
      ...progress,
      gameScores: {
        ...progress.gameScores,
        [gameId]: { correct, total, percentage }
      }
    };
    saveProgress(newProgress);
  };

  const updateQuizScore = (quizId: string, score: number) => {
    const newProgress = {
      ...progress,
      quizScores: {
        ...progress.quizScores,
        [quizId]: score
      }
    };
    saveProgress(newProgress);
  };

  return {
    progress,
    completeLetter,
    updateGameScore,
    updateQuizScore,
    saveProgress
  };
};