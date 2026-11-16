import React, { useState } from 'react';
import { useFashion } from '../context/FashionContext';
import { OutfitCard } from '../components/OutfitCard';
import { FiCheck, FiRefreshCw, FiSliders, FiHeart, FiLayers } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

export const RecommendationPage = () => {
  const { allOutfits, showToast, isWishlisted, toggleWishlist, openOutfitModal, navigateTo, setMixMatchSelection } = useFashion();

  // Recommendation Criteria States
  const [gender, setGender] = useState('women');
  const [occasion, setOccasion] = useState('Casual');
  const [season, setSeason] = useState('Summer');
  const [style, setStyle] = useState('Aesthetic');
  const [budgetTier, setBudgetTier] = useState('any');

  const [isLoading, setIsLoading] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(true);

  // Compute recommendations based on user selections
  const generateRecommendations = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setHasGenerated(true);
      showToast('Stylist algorithm generated bespoke looks! ✨', 'success');
    }, 650);
  };

  // Score outfits according to criteria
  const scoredOutfits = allOutfits.map(outfit => {
    let score = 50; // base score

    // Gender match
    if (outfit.gender === gender || outfit.gender === 'unisex') score += 20;

    // Occasion match
    if (outfit.occasion.toLowerCase() === occasion.toLowerCase()) score += 25;

    // Season match
    if (outfit.season.toLowerCase() === season.toLowerCase()) score += 20;

    // Style aesthetic match
    if (outfit.style.toLowerCase() === style.toLowerCase()) score += 25;

    // Budget tier match
    if (budgetTier !== 'any') {
      if (budgetTier === 'budget' && outfit.price <= 2000) score += 15;
      else if (budgetTier === 'mid' && outfit.price > 2000 && outfit.price <= 4500) score += 15;
      else if (budgetTier === 'premium' && outfit.price > 4500) score += 15;
    }

    return {
      ...outfit,
      matchPercentage: Math.min(Math.round((score / 140) * 100), 99)
    };
  }).sort((a, b) => b.matchPercentage - a.matchPercentage);

  const topMatch = scoredOutfits[0];
  const alternativeMatches = scoredOutfits.slice(1, 5);

  return (
    <div className="recommendations-page animate-fade-in" style={{ padding: '40px 0 80px' }}>
      <div className="container">

        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{
            fontSize: '0.8rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--blush-deep)',
            fontWeight: 700
          }}>
            AI Personal Stylist Engine
          </span>
          <h1 style={{
            fontSize: '2.6rem',
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            marginTop: '6px',
            color: 'var(--text-primary)'
          }}>
            Bespoke Outfit Recommendations
          </h1>
          <p style={{
            maxWidth: '580px',
            margin: '10px auto 0',
            fontSize: '0.96rem',
            color: 'var(--text-secondary)'
          }}>
            Select your personal styling preferences below. Our algorithm harmonizes silhouettes, seasonal fabric weights, and color temperatures to craft your ideal look.
          </p>
        </div>

        {/* Interactive Stylist Criteria Form */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '28px',
          padding: '36px',
          border: '1px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-md)',
          marginBottom: '50px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '28px'
          }}>

            {/* 1. Category / Gender */}
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', display: 'block', marginBottom: '10px' }}>
                1. Preferred Fit & Category
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { id: 'women', label: "Women's Styling" },
                  { id: 'men', label: "Men's Styling" },
                  { id: 'unisex', label: "Gender-Neutral / Unisex" }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setGender(item.id)}
                    style={{
                      padding: '10px 16px',
                      borderRadius: '12px',
                      fontSize: '0.86rem',
                      fontWeight: gender === item.id ? 700 : 500,
                      backgroundColor: gender === item.id ? 'var(--blush-soft)' : 'var(--bg-primary)',
                      color: gender === item.id ? 'var(--blush-active)' : 'var(--text-secondary)',
                      border: '1px solid',
                      borderColor: gender === item.id ? 'var(--blush-accent)' : 'var(--border-subtle)',
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.2s'
                    }}
                  >
                    <span>{item.label}</span>
                    {gender === item.id && <FiCheck size={16} color="var(--blush-deep)" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Occasion */}
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', display: 'block', marginBottom: '10px' }}>
                2. Target Occasion
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {['College', 'Party', 'Wedding', 'Casual', 'Office', 'Date'].map((occ) => (
                  <button
                    key={occ}
                    type="button"
                    onClick={() => setOccasion(occ)}
                    style={{
                      padding: '10px 12px',
                      borderRadius: '12px',
                      fontSize: '0.84rem',
                      fontWeight: occasion === occ ? 700 : 500,
                      backgroundColor: occasion === occ ? 'var(--text-primary)' : 'var(--bg-primary)',
                      color: occasion === occ ? '#FFFFFF' : 'var(--text-secondary)',
                      border: '1px solid',
                      borderColor: occasion === occ ? 'var(--text-primary)' : 'var(--border-subtle)',
                      textAlign: 'center',
                      transition: 'all 0.2s'
                    }}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Season */}
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', display: 'block', marginBottom: '10px' }}>
                3. Weather / Season
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { id: 'Summer', label: '☀️ Summer (Light & Breathable)' },
                  { id: 'Winter', label: '❄️ Winter (Cozy Layering)' },
                  { id: 'Monsoon', label: '🌧️ Monsoon (Quick-dry & Fluid)' }
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSeason(s.id)}
                    style={{
                      padding: '10px 14px',
                      borderRadius: '12px',
                      fontSize: '0.84rem',
                      fontWeight: season === s.id ? 700 : 500,
                      backgroundColor: season === s.id ? 'var(--beige-warm)' : 'var(--bg-primary)',
                      color: season === s.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                      border: '1px solid',
                      borderColor: season === s.id ? 'var(--beige-muted)' : 'var(--border-subtle)',
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.2s'
                    }}
                  >
                    <span>{s.label}</span>
                    {season === s.id && <FiCheck size={16} color="var(--text-primary)" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Style & Budget */}
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', display: 'block', marginBottom: '10px' }}>
                4. Aesthetic & Budget Tier
              </label>

              <div style={{ marginBottom: '12px' }}>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                  Style Aesthetic:
                </span>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.86rem',
                    color: 'var(--text-primary)',
                    fontWeight: 600
                  }}
                >
                  <option value="Aesthetic">Aesthetic Minimalist</option>
                  <option value="Korean">Korean Chic / Soft Girl/Boy</option>
                  <option value="Casual">Casual Effortless</option>
                  <option value="Traditional">Festive & Traditional</option>
                  <option value="Streetwear">Urban Streetwear</option>
                  <option value="Formal">Formal & Old Money</option>
                </select>
              </div>

              <div>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                  Budget Range:
                </span>
                <select
                  value={budgetTier}
                  onChange={(e) => setBudgetTier(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.86rem',
                    color: 'var(--text-primary)',
                    fontWeight: 600
                  }}
                >
                  <option value="any">Any Budget Range</option>
                  <option value="budget">Budget-Friendly (Under ₹2,000)</option>
                  <option value="mid">Mid-Range (₹2,000 - ₹4,500)</option>
                  <option value="premium">Premium & Luxe (₹4,500+)</option>
                </select>
              </div>
            </div>

          </div>

          {/* Generate Button Row */}
          <div style={{
            marginTop: '32px',
            paddingTop: '24px',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <button
              onClick={generateRecommendations}
              disabled={isLoading}
              className="btn-primary"
              style={{
                padding: '16px 48px',
                fontSize: '1rem',
                minWidth: '280px'
              }}
            >
              {isLoading ? (
                <>
                  <FiRefreshCw className="animate-spin" size={18} />
                  <span>Matching Proportions & Fabrics...</span>
                </>
              ) : (
                <>
                  <HiSparkles size={18} />
                  <span>Generate Recommended Looks</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Recommendations Display */}
        {hasGenerated && topMatch && (
          <div>
            <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span className="badge badge-blush" style={{ marginBottom: '6px' }}>
                  Top Recommended Ensemble
                </span>
                <h2 style={{
                  fontSize: '1.9rem',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700
                }}>
                  {topMatch.matchPercentage}% Precision Stylist Match
                </h2>
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Targeting: {gender} • {occasion} • {season} • {style}
              </span>
            </div>

            {/* Featured Match Editorial Card */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '28px',
              overflow: 'hidden',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-lg)',
              display: 'grid',
              gridTemplateColumns: '1fr 1.2fr',
              marginBottom: '48px'
            }} className="featured-match-grid">
              
              <div style={{ position: 'relative', minHeight: '380px', backgroundColor: '#F4EFEA' }}>
                <img
                  src={topMatch.image}
                  alt={topMatch.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '18px',
                  left: '18px',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(8px)',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 800,
                  fontSize: '0.82rem',
                  color: 'var(--blush-deep)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}>
                  ⭐️ {topMatch.matchPercentage}% Compatibility
                </div>
              </div>

              <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                    <span className="badge badge-neutral">{topMatch.occasion}</span>
                    <span className="badge badge-blush">{topMatch.style}</span>
                    <span className="badge badge-gold">{topMatch.season}</span>
                  </div>

                  <h3 style={{
                    fontSize: '1.8rem',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 700,
                    marginBottom: '8px'
                  }}>
                    {topMatch.name}
                  </h3>

                  <p style={{
                    fontSize: '0.94rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '20px'
                  }}>
                    {topMatch.description}
                  </p>

                  {/* Why this works */}
                  <div style={{
                    backgroundColor: 'var(--beige-light)',
                    borderRadius: '16px',
                    padding: '16px 20px',
                    marginBottom: '20px'
                  }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>
                      Why This Look Works For You:
                    </span>
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {topMatch.stylingTips}
                    </p>
                  </div>

                  {/* Piece breakdown */}
                  <div style={{ marginBottom: '20px' }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
                      Ensemble Pieces & Est. Price:
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {topMatch.items.map((it, idx) => (
                        <span 
                          key={idx}
                          style={{
                            backgroundColor: '#FFFFFF',
                            border: '1px solid var(--border-subtle)',
                            padding: '4px 12px',
                            borderRadius: '10px',
                            fontSize: '0.8rem',
                            color: 'var(--text-secondary)'
                          }}
                        >
                          {it.name} (₹{it.price})
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Row */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  paddingTop: '20px',
                  borderTop: '1px solid var(--border-subtle)'
                }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block' }}>
                      Total Look Price
                    </span>
                    <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      ₹{topMatch.price.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      onClick={() => toggleWishlist(topMatch)}
                      className={isWishlisted(topMatch.id) ? "btn-blush" : "btn-secondary"}
                      style={{ padding: '10px 18px', fontSize: '0.86rem' }}
                    >
                      <FiHeart size={16} fill={isWishlisted(topMatch.id) ? 'currentColor' : 'none'} />
                      <span>{isWishlisted(topMatch.id) ? 'Saved' : 'Wishlist'}</span>
                    </button>
                    <button
                      onClick={() => openOutfitModal(topMatch)}
                      className="btn-primary"
                      style={{ padding: '10px 22px', fontSize: '0.86rem' }}
                    >
                      <span>Full Breakdown</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Alternative Recommended Outfits */}
            <div>
              <div style={{ marginBottom: '24px' }}>
                <span style={{
                  fontSize: '0.8rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--blush-deep)',
                  fontWeight: 700
                }}>
                  Curated Variations
                </span>
                <h3 style={{
                  fontSize: '1.7rem',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                  marginTop: '4px'
                }}>
                  More Outfits You Might Love
                </h3>
              </div>

              <div className="grid-outfits">
                {alternativeMatches.map((outfit) => (
                  <OutfitCard key={outfit.id} outfit={outfit} />
                ))}
              </div>
            </div>

          </div>
        )}

      </div>

      <style>{`
        @media (max-width: 860px) {
          .featured-match-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
