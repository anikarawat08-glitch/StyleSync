import React from 'react';
import { useFashion } from '../context/FashionContext';
import { FiHeart, FiEye, FiStar } from 'react-icons/fi';

export const OutfitCard = ({ outfit }) => {
  const { isWishlisted, toggleWishlist, openOutfitModal } = useFashion();
  const wishlisted = isWishlisted(outfit.id);

  return (
    <div 
      className="outfit-card animate-fade-in"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '22px',
        overflow: 'hidden',
        border: '1px solid rgba(226, 214, 203, 0.65)',
        boxShadow: '0 6px 20px rgba(58, 42, 45, 0.05)',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 18px 36px rgba(212, 123, 117, 0.16)';
        e.currentTarget.style.borderColor = 'rgba(232, 168, 161, 0.8)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(58, 42, 45, 0.05)';
        e.currentTarget.style.borderColor = 'rgba(226, 214, 203, 0.65)';
      }}
    >
      {/* Image Container with Badges */}
      <div 
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '125%', // 4:5 Pinterest portrait ratio
          overflow: 'hidden',
          backgroundColor: '#F7EFEA',
          cursor: 'pointer'
        }}
        onClick={() => openOutfitModal(outfit)}
      >
        <img
          src={outfit.image}
          alt={outfit.name}
          loading="lazy"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.06)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1.0)';
          }}
        />

        {/* Gradient Overlay for Bottom Legibility */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '40%',
          background: 'linear-gradient(to top, rgba(30, 24, 25, 0.5) 0%, transparent 100%)',
          pointerEvents: 'none'
        }} />

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(outfit);
          }}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: wishlisted ? '#D47B75' : 'rgba(255, 255, 255, 0.88)',
            backdropFilter: 'blur(8px)',
            color: wishlisted ? '#FFFFFF' : '#3A3234',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
            transition: 'all 0.25s ease',
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1.0)';
          }}
        >
          <FiHeart 
            size={18} 
            fill={wishlisted ? '#FFFFFF' : 'none'} 
            strokeWidth={2.2}
          />
        </button>

        {/* Floating Category Pill */}
        <div style={{
          position: 'absolute',
          top: '14px',
          left: '14px',
          display: 'flex',
          gap: '6px',
          zIndex: 5
        }}>
          <span style={{
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(8px)',
            color: '#231F20',
            fontSize: '0.72rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            padding: '4px 10px',
            borderRadius: 'var(--radius-full)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
            {outfit.style}
          </span>
        </div>

        {/* Occasion / Season Tag on Image Bottom */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          left: '14px',
          display: 'flex',
          gap: '6px',
          alignItems: 'center'
        }}>
          <span style={{
            color: '#FFFFFF',
            fontSize: '0.75rem',
            fontWeight: 600,
            textShadow: '0 1px 3px rgba(0,0,0,0.6)',
            letterSpacing: '0.02em'
          }}>
            {outfit.occasion} • {outfit.season}
          </span>
        </div>
      </div>

      {/* Card Content Details */}
      <div style={{
        padding: '18px 20px',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'space-between'
      }}>
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '6px'
          }}>
            <h3 
              onClick={() => openOutfitModal(outfit)}
              style={{
                fontSize: '1.18rem',
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                cursor: 'pointer',
                lineHeight: 1.3
              }}
            >
              {outfit.name}
            </h3>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#B38867'
            }}>
              <FiStar size={13} fill="#D4AF37" color="#D4AF37" />
              <span>{outfit.rating}</span>
            </div>
          </div>

          <p style={{
            fontSize: '0.84rem',
            color: 'var(--text-secondary)',
            marginBottom: '14px',
            lineHeight: 1.45,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {outfit.tagline || outfit.description}
          </p>

          {/* Color harmony swatches */}
          {outfit.colors && outfit.colors.length > 0 && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '14px'
            }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>Palette:</span>
              <div style={{ display: 'flex', gap: '4px' }}>
                {outfit.colors.map((c, i) => (
                  <span
                    key={i}
                    title={c}
                    style={{
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      backgroundColor: c,
                      border: '1px solid rgba(0,0,0,0.1)'
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Actions Row */}
        <div style={{
          paddingTop: '12px',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <span style={{
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              color: 'var(--text-muted)',
              display: 'block'
            }}>
              Est. Complete Look
            </span>
            <span style={{
              fontSize: '1.15rem',
              fontWeight: 800,
              color: 'var(--text-primary)'
            }}>
              ₹{outfit.price.toLocaleString('en-IN')}
            </span>
          </div>

          <button
            onClick={() => openOutfitModal(outfit)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--beige-light)',
              color: 'var(--text-primary)',
              fontSize: '0.82rem',
              fontWeight: 600,
              border: '1px solid var(--border-subtle)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--text-primary)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--beige-light)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
          >
            <FiEye size={14} />
            <span>Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};
