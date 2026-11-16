import React from 'react';
import { FashionProvider, useFashion } from './context/FashionContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { OutfitModal } from './components/OutfitModal';

import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { RecommendationPage } from './pages/RecommendationPage';
import { StyleQuizPage } from './pages/StyleQuizPage';
import { MixMatchPage } from './pages/MixMatchPage';
import { WardrobePage } from './pages/WardrobePage';
import { WishlistPage } from './pages/WishlistPage';
import { BudgetFashionPage } from './pages/BudgetFashionPage';

const AppContent = () => {
  const { activeTab } = useFashion();

  const renderActivePage = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'explore':
        return <ExplorePage />;
      case 'recommendations':
        return <RecommendationPage />;
      case 'quiz':
        return <StyleQuizPage />;
      case 'mixmatch':
        return <MixMatchPage />;
      case 'wardrobe':
        return <WardrobePage />;
      case 'wishlist':
        return <WishlistPage />;
      case 'budget':
        return <BudgetFashionPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="stylesync-app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: '1 0 auto' }}>
        {renderActivePage()}
      </main>
      <Footer />
      <OutfitModal />
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <FashionProvider>
      <AppContent />
    </FashionProvider>
  );
}
