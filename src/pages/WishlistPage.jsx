import React from 'react';
import { useFashion } from '../context/FashionContext';
import { OutfitCard } from '../components/OutfitCard';
import { FiHeart, FiTrash2, FiShare2, FiArrowRight } from 'react-icons/fi';

export const WishlistPage = () => {
  const { wishlist, allOutfits, removeFromWishlist, navigateTo, showToast } = useFashion();

  // Filter outfits that are in wishlist
  const wishlistedOutfits = allOutfits.filter(outfit => wishlist.includes(outfit.id));

  // Calculate total price of wishlisted looks
  const totalValue = wishlistedOutfits.reduce((acc, curr) => acc + curr.price, 0);

  const handleShareWishlist = () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast('Wishlist link copied to clipboard! 💌', 'success');
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to remove all saved outfits from your wishlist?')) {
      wishlist.forEach(id => removeFromWishlist(id));
      showToast('Wishlist cleared', 'info');
    }
  };

  return (
    <div className="wishlist-page animate-fade-in" style={{ padding: '40px 0 80px' }}>
      <div className="container">

        {/* Header */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '36px',
          gap: '20px'
        }}>
          <div>
            <span style={{
              fontSize: '0.8rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--blush-deep)',
              fontWeight: 700
            }}>
              Curated Moodboard
            </span>
            <h1 style={{
              fontSize: '2.6rem',
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              marginTop: '6px',
              color: 'var(--text-primary)'
            }}>
              My Style Wishlist
            </h1>
            <p style={{
              maxWidth: '520px',
              margin: '8px 0 0',
              fontSize: '0.94rem',
              color: 'var(--text-secondary)'
            }}>
              Your dream fashion ensembles, saved and organized. All items remain persistently saved across sessions in LocalStorage.
            </p>
          </div>

          {/* Action Buttons */}
          {wishlistedOutfits.length > 0 && (
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={handleShareWishlist}
                className="btn-secondary"
                style={{ padding: '10px 18px', fontSize: '0.86rem' }}
              >
                <FiShare2 size={15} />
                <span>Share Moodboard</span>
              </button>

              <button
                onClick={handleClearAll}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 16px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--blush-soft)',
                  color: 'var(--blush-active)',
                  fontSize: '0.84rem',
                  fontWeight: 600
                }}
              >
                <FiTrash2 size={14} />
                <span>Clear All</span>
              </button>
            </div>
          )}
        </div>

        {/* Stats Summary Bar */}
        {wishlistedOutfits.length > 0 && (
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '20px 28px',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            marginBottom: '36px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                backgroundColor: 'var(--blush-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--blush-deep)'
              }}>
                <FiHeart size={20} fill="#D47B75" />
              </div>
              <div>
                <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Saved Favorites
                </span>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {wishlistedOutfits.length} Curated {wishlistedOutfits.length === 1 ? 'Outfit' : 'Outfits'}
                </h4>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>
                Total Estimated Value
              </span>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--blush-deep)' }}>
                ₹{totalValue.toLocaleString('en-IN')}
              </h4>
            </div>
          </div>
        )}

        {/* Wishlist Outfits Grid */}
        {wishlistedOutfits.length > 0 ? (
          <div className="grid-outfits">
            {wishlistedOutfits.map((outfit) => (
              <OutfitCard key={outfit.id} outfit={outfit} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '28px',
            padding: '70px 24px',
            textAlign: 'center',
            border: '1px dashed var(--border-subtle)',
            maxWidth: '560px',
            margin: '40px auto',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              backgroundColor: 'var(--blush-soft)',
              color: 'var(--blush-deep)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              boxShadow: '0 8px 24px rgba(212, 123, 117, 0.2)'
            }}>
              <FiHeart size={32} />
            </div>

            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.65rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '10px'
            }}>
              Your Wishlist is Empty
            </h3>

            <p style={{
              fontSize: '0.94rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '28px'
            }}>
              You haven't saved any looks yet. Tap the heart icon on any outfit in the catalog or recommendations to curate your personal fashion moodboard.
            </p>

            <button
              onClick={() => navigateTo('explore')}
              className="btn-primary"
              style={{ padding: '14px 32px' }}
            >
              <span>Explore Outfits Now</span>
              <FiArrowRight size={16} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
