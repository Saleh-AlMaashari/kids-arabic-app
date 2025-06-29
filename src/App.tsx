import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import GeminiChatAssistant from './components/GeminiChatAssistant';
import HomePage from './pages/HomePage';
import LettersPage from './pages/LettersPage';
import LetterDetailPage from './pages/LetterDetailPage';
import GamesPage from './pages/GamesPage';
import ColoringPage from './pages/ColoringPage';
import StoriesPage from './pages/StoriesPage';
import VideosPage from './pages/VideosPage';
import QuizPage from './pages/QuizPage';
import ParentsPage from './pages/ParentsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/letters" element={<LettersPage />} />
              <Route path="/letters/:letterId" element={<LetterDetailPage />} />
              <Route path="/games" element={<GamesPage />} />
              <Route path="/coloring" element={<ColoringPage />} />
              <Route path="/stories" element={<StoriesPage />} />
              <Route path="/videos" element={<VideosPage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/parents" element={<ParentsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>

          <Footer />
          <GeminiChatAssistant />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;