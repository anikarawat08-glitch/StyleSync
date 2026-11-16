import React, { useEffect } from 'react';
import { useFashion } from '../context/FashionContext';
import { FiX, FiHeart, FiLayers, FiPlusCircle, FiCheck, FiInfo } from 'react-icons/fi';

export const OutfitModal = () => {
  const { 
    selectedOutfit, 
    closeOutfitModal, 
    isWishlisted, 
    toggleWishlist, 
    navigateTo, 
    setMixMatchSelection,
    addToWardrobe,
    showToast
  } = useFashion();

  // Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeOutfitModal();
    };
    if (selectedOutfit) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedOutfit, closeOutfitModal]);

  if (!selectedOutfit) return null;

  const wishlisted = isWishlisted(selectedOutfit.id);

  const handleOpenInMixMatch = () => {
    setMixMatchSelection(selectedOutfit);
    closeOutfitModal();
    navigateTo('mixmatch');
    showToast('Loaded outfit pieces into Mix & Match Studio! 🎨', 'success');
  };

  const handleSavePieceToWardrobe = (item) => {
    addToWardrobe({
      name: item.name,
      category: item.category || 'Tops',
      color: selectedOutfit.colors?.[0] || '#FAF7F2',
      colorName: 'Look Accent',
      season: selectedOutfit.season || 'All-Season',
      occasion: selectedOutfit.occasion || 'Casual',
      notes: `Inspired by ${selectedOutfit.name}. Est price ₹${item.price}`,
      image: selectedOutfit.image
    });
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(35, 31, 32, 0.65)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={closeOutfitModal}
    >
      <div 
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '26px',
          maxWidth: '920px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '1fr 1.15fr',
          border: '1px solid var(--border-subtle)'
        }}
        className="modal-grid animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeOutfitModal}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-primary)',
            zIndex: 20,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
          aria-label="Close modal"
        >
          <FiX size={20} />
        </button>

        {/* Left Side: Editorial Image */}
        <div style={{
          position: 'relative',
          backgroundColor: '#F4EFEA',
          minHeight: '380px'
        }}>
          <img
            src={selectedOutfit.image}
            alt={selectedOutfit.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          <div style={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px'
          }}>
            <span className="badge badge-blush">
              {selectedOutfit.style}
            </span>
            <span className="badge badge-dark">
              {selectedOutfit.occasion}
            </span>
            <span className="badge badge-gold">
              {selectedOutfit.season}
            </span>
          </div>
        </div>

        {/* Right Side: Fashion Narrative & Details */}
        <div style={{
          padding: '32px 28px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '20px'
        }}>
          <div>
            <div style={{ marginBottom: '8px' }}>
              <span style={{
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--blush-deep)',
                fontWeight: 700
              }}>
                Curated Look Breakdown
              </span>
              <h2 style={{
                fontSize: '1.75rem',
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginTop: '4px',
                lineHeight: 1.2
              }}>
                {selectedOutfit.name}
              </h2>
            </div>

            <p style={{
              fontSize: '0.92rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '18px'
            }}>
              {selectedOutfit.description}
            </p>

            {/* Color Palette */}
            {selectedOutfit.colors && (
              <div style={{ marginBottom: '18px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '8px' }}>
                  Harmonious Color Codes:
                </span>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {selectedOutfit.colors.map((c, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: c,
                        border: '1px solid rgba(0,0,0,0.15)',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.06)'
                      }} />
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                        {c}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Outfit Items Breakdown */}
            <div style={{
              backgroundColor: 'var(--beige-light)',
              borderRadius: '16px',
              padding: '16px',
              marginBottom: '18px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '10px'
              }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Pieces in this Outfit:
                </span>
                <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--blush-deep)' }}>
                  Total: ₹{selectedOutfit.price.toLocaleString('en-IN')}
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {selectedOutfit.items.map((item, idx) => (
                  <div 
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.85rem',
                      padding: '6px 0',
                      borderBottom: idx < selectedOutfit.items.length - 1 ? '1px dashed rgba(0,0,0,0.08)' : 'none'
                    }}
                  >
                    <div>
                      <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{item.name}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '8px' }}>({item.category})</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontWeight: 700, color: 'var(--text-secondary)' }}>₹{item.price}</span>
                      <button
                        onClick={() => handleSavePieceToWardrobe(item)}
                        title="Add this piece to my wardrobe"
                        style={{
                          color: 'var(--blush-deep)',
                          padding: '3px 6px',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '3px',
                          fontSize: '0.72rem',
                          backgroundColor: 'rgba(212, 123, 117, 0.1)'
                        }}
                      >
                        <FiPlusCircle size={12} />
                        <span>Wardrobe</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stylist Tip Box */}
            <div style={{
              display: 'flex',
              gap: '12px',
              padding: '12px 16px',
              borderRadius: '14px',
              backgroundColor: 'var(--blush-light)',
              border: '1px solid rgba(232, 168, 161, 0.4)'
            }}>
              <FiInfo size={20} color="var(--blush-deep)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--blush-active)', textTransform: 'uppercase', display: 'block' }}>
                  Stylist's Pro Secret:
                </span>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.45, marginTop: '2px' }}>
                  {selectedOutfit.stylingTips}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            paddingTop: '12px',
            borderTop: '1px solid var(--border-subtle)'
          }}>
            <button
              onClick={() => toggleWishlist(selectedOutfit)}
              className={wishlisted ? "btn-blush" : "btn-secondary"}
              style={{ flex: 1, minWidth: '150px' }}
            >
              <FiHeart size={18} fill={wishlisted ? 'currentColor' : 'none'} />
              <span>{wishlisted ? 'In Wishlist' : 'Add to Wishlist'}</span>
            </button>

            <button
              onClick={handleOpenInMixMatch}
              className="btn-primary"
              style={{ flex: 1.2, minWidth: '170px' }}
            >
              <FiLayers size={18} />
              <span>Customize in Studio</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .modal-grid {
            grid-template-columns: 1fr !important;
            max-height: 94vh !important;
          }
        }
      `}</style>
    </div>
  );
};
