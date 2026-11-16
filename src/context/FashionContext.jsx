import React, { createContext, useContext, useState, useEffect } from 'react';
import { OUTFITS, INITIAL_WARDROBE_ITEMS, STYLE_ARCHETYPES } from '../data/fashionData';

const FashionContext = createContext();

export const FashionProvider = ({ children }) => {
  // Navigation State
  const [activeTab, setActiveTab] = useState('home');

  // Wishlist State (LocalStorage)
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('stylesync_wishlist');
      return saved ? JSON.parse(saved) : ["outfit-1", "outfit-3"];
    } catch (e) {
      console.error("Error reading wishlist from localStorage", e);
      return ["outfit-1", "outfit-3"];
    }
  });

  // Wardrobe State (LocalStorage)
  const [wardrobe, setWardrobe] = useState(() => {
    try {
      const saved = localStorage.getItem('stylesync_wardrobe');
      return saved ? JSON.parse(saved) : INITIAL_WARDROBE_ITEMS;
    } catch (e) {
      console.error("Error reading wardrobe from localStorage", e);
      return INITIAL_WARDROBE_ITEMS;
    }
  });

  // Quiz Result State (LocalStorage)
  const [quizResult, setQuizResult] = useState(() => {
    try {
      const saved = localStorage.getItem('stylesync_quiz_result');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      console.error("Error reading quiz result from localStorage", e);
      return null;
    }
  });

  // Modal State for Quick View
  const [selectedOutfit, setSelectedOutfit] = useState(null);

  // Mix & Match preloaded selection (can be sent from recommendation or explore)
  const [mixMatchSelection, setMixMatchSelection] = useState(null);

  // Toast System
  const [toast, setToast] = useState({ visible: false, message: '', type: 'info' });

  // Sync Wishlist to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('stylesync_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error("Error saving wishlist to localStorage", e);
    }
  }, [wishlist]);

  // Sync Wardrobe to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('stylesync_wardrobe', JSON.stringify(wardrobe));
    } catch (e) {
      console.error("Error saving wardrobe to localStorage", e);
    }
  }, [wardrobe]);

  // Sync Quiz Result to LocalStorage
  useEffect(() => {
    try {
      if (quizResult) {
        localStorage.setItem('stylesync_quiz_result', JSON.stringify(quizResult));
      }
    } catch (e) {
      console.error("Error saving quiz result to localStorage", e);
    }
  }, [quizResult]);

  // Toast helper
  const showToast = (message, type = 'info') => {
    setToast({ visible: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 3200);
  };

  // Wishlist Actions
  const toggleWishlist = (outfit) => {
    const outfitId = typeof outfit === 'string' ? outfit : outfit.id;
    const outfitName = typeof outfit === 'object' ? outfit.name : 'Outfit';

    if (wishlist.includes(outfitId)) {
      setWishlist(prev => prev.filter(id => id !== outfitId));
      showToast(`Removed "${outfitName}" from Wishlist`, 'info');
    } else {
      setWishlist(prev => [...prev, outfitId]);
      showToast(`Added "${outfitName}" to Wishlist ✨`, 'heart');
    }
  };

  const removeFromWishlist = (outfitId) => {
    setWishlist(prev => prev.filter(id => id !== outfitId));
    showToast('Item removed from your wishlist', 'info');
  };

  const isWishlisted = (outfitId) => wishlist.includes(outfitId);

  // Wardrobe Actions
  const addToWardrobe = (newItem) => {
    const itemWithId = {
      ...newItem,
      id: `ward-${Date.now()}`,
      dateAdded: new Date().toISOString().split('T')[0]
    };
    setWardrobe(prev => [itemWithId, ...prev]);
    showToast(`"${newItem.name}" added to your Digital Wardrobe 👗`, 'success');
  };

  const removeFromWardrobe = (itemId) => {
    setWardrobe(prev => prev.filter(item => item.id !== itemId));
    showToast('Wardrobe item removed', 'info');
  };

  const resetWardrobe = () => {
    setWardrobe(INITIAL_WARDROBE_ITEMS);
    showToast('Wardrobe restored to default collection', 'info');
  };

  // Quiz Actions
  const saveQuizArchetype = (archetypeKey) => {
    const archetypeData = STYLE_ARCHETYPES[archetypeKey];
    if (archetypeData) {
      const resultObj = {
        key: archetypeKey,
        ...archetypeData,
        dateTaken: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      };
      setQuizResult(resultObj);
      showToast(`Style Profile: "${archetypeData.title}" unlocked! 🎉`, 'success');
    }
  };

  const clearQuizResult = () => {
    setQuizResult(null);
    localStorage.removeItem('stylesync_quiz_result');
    showToast('Quiz reset. Take it anytime!', 'info');
  };

  // Modal handlers
  const openOutfitModal = (outfit) => {
    setSelectedOutfit(outfit);
  };

  const closeOutfitModal = () => {
    setSelectedOutfit(null);
  };

  // Switch tab & scroll top smoothly
  const navigateTo = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FashionContext.Provider
      value={{
        activeTab,
        navigateTo,
        wishlist,
        toggleWishlist,
        removeFromWishlist,
        isWishlisted,
        wardrobe,
        addToWardrobe,
        removeFromWardrobe,
        resetWardrobe,
        quizResult,
        saveQuizArchetype,
        clearQuizResult,
        selectedOutfit,
        openOutfitModal,
        closeOutfitModal,
        mixMatchSelection,
        setMixMatchSelection,
        toast,
        showToast,
        allOutfits: OUTFITS
      }}
    >
      {children}
    </FashionContext.Provider>
  );
};

export const useFashion = () => {
  const context = useContext(FashionContext);
  if (!context) {
    throw new Error('useFashion must be used within a FashionProvider');
  }
  return context;
};
