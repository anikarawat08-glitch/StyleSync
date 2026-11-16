import React, { useState } from 'react';
import { COLOR_PALETTES } from '../data/fashionData';
import { useFashion } from '../context/FashionContext';
import { FiCopy, FiCheck } from 'react-icons/fi';

export const ColorPaletteSection = () => {
  const { showToast } = useFashion();
  const [copiedHex, setCopiedHex] = useState(null);

  const handleCopy = (hex) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    showToast(`Copied hex code: ${hex} 🎨`, 'info');
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <section style={{ margin: '56px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <span style={{
          fontSize: '0.8rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--blush-deep)',
          fontWeight: 700
        }}>
          Curated Stylist Palettes
        </span>
        <h2 style={{
          fontSize: '2.1rem',
          fontFamily: 'var(--font-serif)',
          fontWeight: 700,
          marginTop: '6px',
          color: 'var(--text-primary)'
        }}>
          Color Harmony & Moodboards
        </h2>
        <p style={{
          maxWidth: '560px',
          margin: '10px auto 0',
          fontSize: '0.94rem',
          color: 'var(--text-secondary)'
        }}>
          Click any color swatch to copy its exact hex code. Curated tonal blends that guarantee your outfit always looks cohesive.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
        gap: '24px'
      }}>
        {COLOR_PALETTES.map((palette, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '24px',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}
          >
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '14px'
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700
                }}>
                  {palette.name}
                </h3>
                <span className="badge badge-neutral" style={{ fontSize: '0.7rem' }}>
                  {palette.season}
                </span>
              </div>

              {/* Swatches Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '8px',
                marginBottom: '16px'
              }}>
                {palette.colors.map((c, cIdx) => (
                  <div
                    key={cIdx}
                    onClick={() => handleCopy(c.hex)}
                    style={{
                      cursor: 'pointer',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                    title={`Click to copy ${c.hex}`}
                  >
                    <div style={{
                      width: '100%',
                      paddingTop: '100%',
                      position: 'relative',
                      borderRadius: '12px',
                      backgroundColor: c.hex,
                      border: '1px solid rgba(0,0,0,0.1)',
                      boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.08)'
                    }}>
                      {copiedHex === c.hex && (
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'rgba(0,0,0,0.4)',
                          borderRadius: '12px',
                          color: '#FFFFFF'
                        }}>
                          <FiCheck size={16} />
                        </div>
                      )}
                    </div>
                    <span style={{
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      color: 'var(--text-muted)',
                      fontFamily: 'monospace'
                    }}>
                      {c.hex}
                    </span>
                  </div>
                ))}
              </div>

              <p style={{
                fontSize: '0.84rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
                marginTop: '4px'
              }}>
                {palette.vibe}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
