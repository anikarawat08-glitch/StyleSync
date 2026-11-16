import React, { useState } from 'react';
import { FASHION_TIPS } from '../data/fashionData';
import { FiRefreshCw, FiZap } from 'react-icons/fi';

export const FashionTipCard = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleNextTip = () => {
    setCurrentIdx((prev) => (prev + 1) % FASHION_TIPS.length);
  };

  const tip = FASHION_TIPS[currentIdx];

  return (
    <div style={{
      backgroundColor: 'linear-gradient(135deg, #FAF7F2 0%, #F5EFEB 100%)',
      borderRadius: '24px',
      padding: '28px 32px',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)',
      position: 'relative',
      overflow: 'hidden',
      background: 'white'
    }}>
      {/* Decorative background accent */}
      <div style={{
        position: 'absolute',
        top: '-20px',
        right: '-20px',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        backgroundColor: 'var(--blush-soft)',
        opacity: 0.5,
        pointerEvents: 'none'
      }} />

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '14px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: 'var(--blush-soft)',
            color: 'var(--blush-deep)'
          }}>
            <FiZap size={15} />
          </span>
          <span style={{
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--blush-deep)'
          }}>
            Fashion Tip of the Day • {tip.category}
          </span>
        </div>

        <button
          onClick={handleNextTip}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: 'var(--text-secondary)',
            backgroundColor: 'var(--beige-light)',
            padding: '6px 12px',
            borderRadius: 'var(--radius-full)',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--blush-soft)';
            e.currentTarget.style.color = 'var(--blush-active)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--beige-light)';
            e.currentTarget.style.color = 'var(--text-secondary)';
          }}
        >
          <FiRefreshCw size={13} />
          <span>Next Tip</span>
        </button>
      </div>

      <p style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '1.22rem',
        lineHeight: 1.5,
        color: 'var(--text-primary)',
        fontStyle: 'italic',
        marginBottom: '12px'
      }}>
        "{tip.tip}"
      </p>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <span style={{
          fontSize: '0.78rem',
          color: 'var(--text-muted)',
          fontWeight: 600
        }}>
          — {tip.author}
        </span>
        <span style={{
          fontSize: '0.75rem',
          color: 'var(--text-light)',
          fontFamily: 'monospace'
        }}>
          {currentIdx + 1} of {FASHION_TIPS.length}
        </span>
      </div>
    </div>
  );
};
