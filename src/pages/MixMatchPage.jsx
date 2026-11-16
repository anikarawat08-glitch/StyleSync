import React, { useState } from 'react';
import { useFashion } from '../context/FashionContext';
import { MIX_MATCH_ITEMS } from '../data/fashionData';
import { FiShuffle, FiHeart, FiFolderPlus, FiCheck, FiInfo } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

export const MixMatchPage = () => {
  const { addToWardrobe, toggleWishlist, isWishlisted, showToast } = useFashion();

  // Active Category Tab for selection
  const [activeCategory, setActiveCategory] = useState('tops');

  // Selected pieces state
  const [selectedTop, setSelectedTop] = useState(MIX_MATCH_ITEMS.tops[0]);
  const [selectedBottom, setSelectedBottom] = useState(MIX_MATCH_ITEMS.bottoms[0]);
  const [selectedDress, setSelectedDress] = useState(null); // or use dress instead of top+bottom
  const [selectedShoes, setSelectedShoes] = useState(MIX_MATCH_ITEMS.shoes[0]);
  const [selectedAccessory, setSelectedAccessory] = useState(MIX_MATCH_ITEMS.accessories[0]);

  const isDressMode = !!selectedDress;

  // Calculate Total Outfit Cost
  const totalPrice = isDressMode
    ? (selectedDress?.price || 0) + (selectedShoes?.price || 0) + (selectedAccessory?.price || 0)
    : (selectedTop?.price || 0) + (selectedBottom?.price || 0) + (selectedShoes?.price || 0) + (selectedAccessory?.price || 0);

  // Randomize / Shuffle Combination
  const handleShuffle = () => {
    const randomTop = MIX_MATCH_ITEMS.tops[Math.floor(Math.random() * MIX_MATCH_ITEMS.tops.length)];
    const randomBottom = MIX_MATCH_ITEMS.bottoms[Math.floor(Math.random() * MIX_MATCH_ITEMS.bottoms.length)];
    const randomShoes = MIX_MATCH_ITEMS.shoes[Math.floor(Math.random() * MIX_MATCH_ITEMS.shoes.length)];
    const randomAcc = MIX_MATCH_ITEMS.accessories[Math.floor(Math.random() * MIX_MATCH_ITEMS.accessories.length)];

    setSelectedTop(randomTop);
    setSelectedBottom(randomBottom);
    setSelectedDress(null);
    setSelectedShoes(randomShoes);
    setSelectedAccessory(randomAcc);

    showToast('Shuffled pieces for a fresh aesthetic look! 🎲✨', 'info');
  };

  // Switch to Dress mode or Top/Bottom mode
  const handleSelectDress = (dress) => {
    setSelectedDress(dress);
    showToast(`Selected "${dress.name}" (Dress Mode)`, 'info');
  };

  const handleSelectTop = (top) => {
    setSelectedDress(null);
    setSelectedTop(top);
  };

  const handleSelectBottom = (bottom) => {
    setSelectedDress(null);
    setSelectedBottom(bottom);
  };

  // Save composite look to Wardrobe
  const handleSaveToWardrobe = () => {
    const compositeName = isDressMode
      ? `Custom ${selectedDress.name} Ensemble`
      : `${selectedTop.name} & ${selectedBottom.name} Combo`;

    addToWardrobe({
      name: compositeName,
      category: isDressMode ? 'Dresses' : 'Tops',
      color: '#F4EFEA',
      colorName: 'Custom Harmony Blend',
      season: 'All-Season',
      occasion: 'Casual',
      notes: `Mix & Match Studio creation. Includes: ${isDressMode ? selectedDress.name : `${selectedTop.name} + ${selectedBottom.name}`}, ${selectedShoes.name}, ${selectedAccessory.name}. Est total: ₹${totalPrice}`,
      image: isDressMode ? selectedDress.image : selectedTop.image
    });
  };

  return (
    <div className="mix-match-page animate-fade-in" style={{ padding: '40px 0 80px' }}>
      <div className="container">

        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span style={{
            fontSize: '0.8rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--blush-deep)',
            fontWeight: 700
          }}>
            Creative Fashion Studio
          </span>
          <h1 style={{
            fontSize: '2.6rem',
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            marginTop: '6px',
            color: 'var(--text-primary)'
          }}>
            Mix & Match Atelier
          </h1>
          <p style={{
            maxWidth: '560px',
            margin: '10px auto 0',
            fontSize: '0.96rem',
            color: 'var(--text-secondary)'
          }}>
            Combine separates in real-time, test silhouette proportions, and preview how fabrics and tones harmonise together before dressing.
          </p>
        </div>

        {/* Studio Layout: Canvas vs Palette Selection */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '36px',
          alignItems: 'start'
        }} className="mix-match-grid">

          {/* LEFT: Live Interactive Outfit Canvas */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '28px',
            padding: '32px',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-md)',
            position: 'sticky',
            top: '100px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px'
            }}>
              <div>
                <span className="badge badge-blush">
                  Live Mannequin Canvas
                </span>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                  marginTop: '4px'
                }}>
                  {isDressMode ? selectedDress.name : `${selectedTop.name} + ${selectedBottom.name}`}
                </h3>
              </div>

              <button
                onClick={handleShuffle}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 16px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--beige-light)',
                  color: 'var(--text-primary)',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  border: '1px solid var(--border-subtle)'
                }}
                title="Shuffle pieces"
              >
                <FiShuffle size={14} />
                <span>Shuffle</span>
              </button>
            </div>

            {/* Visual Look Composition Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isDressMode ? '1fr 1fr' : '1fr 1fr',
              gap: '14px',
              marginBottom: '24px'
            }}>
              {isDressMode ? (
                /* Dress Piece */
                <div style={{
                  position: 'relative',
                  gridColumn: '1 / 2',
                  height: '320px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  backgroundColor: '#F4EFEA',
                  border: '1px solid var(--border-subtle)'
                }}>
                  <img
                    src={selectedDress.image}
                    alt={selectedDress.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '8px 12px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                    color: '#FFF',
                    fontSize: '0.78rem'
                  }}>
                    <span style={{ fontWeight: 700 }}>Dress:</span> {selectedDress.name}
                  </div>
                </div>
              ) : (
                <>
                  {/* Top Piece */}
                  <div style={{
                    position: 'relative',
                    height: '210px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    backgroundColor: '#F4EFEA',
                    border: '1px solid var(--border-subtle)'
                  }}>
                    <img
                      src={selectedTop.image}
                      alt={selectedTop.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '8px 12px',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                      color: '#FFF',
                      fontSize: '0.78rem'
                    }}>
                      <span style={{ fontWeight: 700 }}>Top:</span> {selectedTop.name}
                    </div>
                  </div>

                  {/* Bottom Piece */}
                  <div style={{
                    position: 'relative',
                    height: '210px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    backgroundColor: '#F4EFEA',
                    border: '1px solid var(--border-subtle)'
                  }}>
                    <img
                      src={selectedBottom.image}
                      alt={selectedBottom.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '8px 12px',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                      color: '#FFF',
                      fontSize: '0.78rem'
                    }}>
                      <span style={{ fontWeight: 700 }}>Bottom:</span> {selectedBottom.name}
                    </div>
                  </div>
                </>
              )}

              {/* Shoes Piece */}
              <div style={{
                position: 'relative',
                height: isDressMode ? '150px' : '150px',
                borderRadius: '20px',
                overflow: 'hidden',
                backgroundColor: '#F4EFEA',
                border: '1px solid var(--border-subtle)'
              }}>
                <img
                  src={selectedShoes.image}
                  alt={selectedShoes.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '6px 10px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                  color: '#FFF',
                  fontSize: '0.76rem'
                }}>
                  <span style={{ fontWeight: 700 }}>Shoes:</span> {selectedShoes.name}
                </div>
              </div>

              {/* Accessory Piece */}
              <div style={{
                position: 'relative',
                height: isDressMode ? '150px' : '150px',
                borderRadius: '20px',
                overflow: 'hidden',
                backgroundColor: '#F4EFEA',
                border: '1px solid var(--border-subtle)'
              }}>
                <img
                  src={selectedAccessory.image}
                  alt={selectedAccessory.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '6px 10px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                  color: '#FFF',
                  fontSize: '0.76rem'
                }}>
                  <span style={{ fontWeight: 700 }}>Accent:</span> {selectedAccessory.name}
                </div>
              </div>
            </div>

            {/* Stylist Harmony Indicator */}
            <div style={{
              backgroundColor: 'var(--beige-light)',
              borderRadius: '16px',
              padding: '16px 20px',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--blush-deep)' }}>
                  Aesthetic Synergy
                </span>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  96% Harmony Match • French Neutral Elegance
                </h4>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>
                  Total Combo Cost
                </span>
                <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  ₹{totalPrice.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Actions: Save Combo to Wardrobe */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={handleSaveToWardrobe}
                className="btn-primary"
                style={{ flex: 1, padding: '12px 20px', fontSize: '0.9rem' }}
              >
                <FiFolderPlus size={16} />
                <span>Save Combo to My Wardrobe</span>
              </button>
            </div>
          </div>

          {/* RIGHT: Garment Selector Trays */}
          <div>
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '24px',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-sm)',
              marginBottom: '20px'
            }}>
              <span style={{
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--text-muted)',
                fontWeight: 700,
                display: 'block',
                marginBottom: '12px'
              }}>
                Select Category to Swap Pieces:
              </span>

              {/* Category Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {[
                  { id: 'tops', label: 'Tops (Shirts & Knits)' },
                  { id: 'bottoms', label: 'Bottoms (Trousers & Skirts)' },
                  { id: 'dresses', label: 'Dresses & Gowns' },
                  { id: 'shoes', label: 'Footwear' },
                  { id: 'accessories', label: 'Bags & Jewelry' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.84rem',
                      fontWeight: activeCategory === cat.id ? 700 : 500,
                      backgroundColor: activeCategory === cat.id ? 'var(--text-primary)' : 'var(--bg-primary)',
                      color: activeCategory === cat.id ? '#FFFFFF' : 'var(--text-secondary)',
                      border: '1px solid',
                      borderColor: activeCategory === cat.id ? 'var(--text-primary)' : 'var(--border-subtle)',
                      transition: 'all 0.2s'
                    }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Pieces Grid for Active Category */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: '16px'
            }}>
              {MIX_MATCH_ITEMS[activeCategory]?.map((piece) => {
                const isSelected = 
                  (activeCategory === 'tops' && selectedTop?.id === piece.id && !isDressMode) ||
                  (activeCategory === 'bottoms' && selectedBottom?.id === piece.id && !isDressMode) ||
                  (activeCategory === 'dresses' && selectedDress?.id === piece.id) ||
                  (activeCategory === 'shoes' && selectedShoes?.id === piece.id) ||
                  (activeCategory === 'accessories' && selectedAccessory?.id === piece.id);

                return (
                  <div
                    key={piece.id}
                    onClick={() => {
                      if (activeCategory === 'tops') handleSelectTop(piece);
                      else if (activeCategory === 'bottoms') handleSelectBottom(piece);
                      else if (activeCategory === 'dresses') handleSelectDress(piece);
                      else if (activeCategory === 'shoes') setSelectedShoes(piece);
                      else if (activeCategory === 'accessories') setSelectedAccessory(piece);
                    }}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '18px',
                      overflow: 'hidden',
                      border: isSelected ? '2px solid var(--blush-deep)' : '1px solid var(--border-subtle)',
                      boxShadow: isSelected ? '0 8px 24px rgba(212, 123, 117, 0.25)' : 'var(--shadow-sm)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      position: 'relative'
                    }}
                  >
                    {isSelected && (
                      <div style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--blush-deep)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10
                      }}>
                        <FiCheck size={14} />
                      </div>
                    )}

                    <div style={{ height: '170px', overflow: 'hidden', backgroundColor: '#F4EFEA' }}>
                      <img
                        src={piece.image}
                        alt={piece.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>

                    <div style={{ padding: '12px 14px' }}>
                      <h4 style={{
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '4px',
                        lineHeight: 1.3
                      }}>
                        {piece.name}
                      </h4>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                          {piece.color}
                        </span>
                        <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--blush-deep)' }}>
                          ₹{piece.price}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stylist Advice Footer Box */}
            <div style={{
              marginTop: '28px',
              padding: '20px',
              borderRadius: '20px',
              backgroundColor: 'var(--blush-light)',
              border: '1px solid rgba(232, 168, 161, 0.4)',
              display: 'flex',
              gap: '12px'
            }}>
              <FiInfo size={20} color="var(--blush-deep)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--blush-active)', textTransform: 'uppercase' }}>
                  Styling Balance Tip:
                </span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '2px', lineHeight: 1.5 }}>
                  When wearing wide-leg or pleated bottoms, keep your top fitted or cropped to preserve an hourglass proportion. When pairing bold footwear, maintain a minimalist jewelry accent.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .mix-match-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
