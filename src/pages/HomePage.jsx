import React from 'react';
import { useFashion } from '../context/FashionContext';
import { FASHION_CATEGORIES, OUTFITS } from '../data/fashionData';
import { OutfitCard } from '../components/OutfitCard';
import { FashionTipCard } from '../components/FashionTipCard';
import { ColorPaletteSection } from '../components/ColorPaletteSection';
import { FiArrowRight, FiCheckCircle, FiHeart, FiLayers, FiShield } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

export const HomePage = () => {
  const { navigateTo } = useFashion();

  // Top trending outfits for the showcase
  const trendingOutfits = OUTFITS.slice(0, 4);

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '50px 0 80px',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '48px',
            alignItems: 'center'
          }} className="hero-grid">
            
            {/* Left Content */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--blush-soft)',
                border: '1px solid rgba(232, 168, 161, 0.4)',
                marginBottom: '20px'
              }}>
                <HiSparkles size={16} color="var(--blush-deep)" />
                <span style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--blush-active)'
                }}>
                  The Future of Personal Styling
                </span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                lineHeight: 1.15,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: '22px'
              }}>
                Discover Your Style, <br />
                <span style={{
                  fontStyle: 'italic',
                  fontFamily: 'var(--font-editorial)',
                  color: 'var(--blush-deep)',
                  fontWeight: 600
                }}>
                  Wear Your Confidence.
                </span>
              </h1>

              <p style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                maxWidth: '520px',
                marginBottom: '36px'
              }}>
                Curated fashion recommendations powered by aesthetic psychology. Explore bespoke outfit formulas tailored to your body type, favorite colors, occasion, and budget.
              </p>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '40px'
              }}>
                <button
                  onClick={() => navigateTo('recommendations')}
                  className="btn-primary"
                  style={{ padding: '16px 32px', fontSize: '1rem' }}
                >
                  <span>Get Started</span>
                  <FiArrowRight size={18} />
                </button>

                <button
                  onClick={() => navigateTo('explore')}
                  className="btn-secondary"
                  style={{ padding: '16px 32px', fontSize: '1rem' }}
                >
                  <span>Explore Outfits</span>
                </button>
              </div>

              {/* Trust Metric Badges */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '24px',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-subtle)'
              }}>
                <div>
                  <span style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', display: 'block', lineHeight: 1 }}>
                    1,200+
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                    Curated Ensembles
                  </span>
                </div>
                <div style={{ width: '1px', height: '32px', backgroundColor: 'var(--border-subtle)' }} />
                <div>
                  <span style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', display: 'block', lineHeight: 1 }}>
                    98.4%
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                    Style Match Accuracy
                  </span>
                </div>
                <div style={{ width: '1px', height: '32px', backgroundColor: 'var(--border-subtle)' }} />
                <div>
                  <span style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', display: 'block', lineHeight: 1 }}>
                    50K+
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                    Outfits Saved
                  </span>
                </div>
              </div>
            </div>

            {/* Right Editorial Visual Showcase */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'relative',
                borderRadius: '30px',
                overflow: 'hidden',
                boxShadow: '0 24px 60px rgba(70, 40, 45, 0.14)',
                border: '6px solid #FFFFFF'
              }}>
                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=85"
                  alt="Fashion Stylist Showcase"
                  style={{
                    width: '100%',
                    height: '520px',
                    objectFit: 'cover'
                  }}
                />
                
                {/* Overlay gradient */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(35, 31, 32, 0.6) 0%, transparent 60%)'
                }} />

                <div style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  right: '24px',
                  color: '#FFFFFF'
                }}>
                  <span className="badge badge-blush" style={{ marginBottom: '8px', display: 'inline-flex' }}>
                    Spring Editorial Pick
                  </span>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontFamily: 'var(--font-serif)',
                    color: '#FFFFFF',
                    fontWeight: 700
                  }}>
                    The Art of Intentional Dressing
                  </h3>
                  <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.85)', marginTop: '4px' }}>
                    Effortless neutral layering with hand-crafted Italian linen
                  </p>
                </div>
              </div>

              {/* Floating Pill Card Top Right */}
              <div style={{
                position: 'absolute',
                top: '-18px',
                right: '-12px',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(12px)',
                padding: '12px 20px',
                borderRadius: 'var(--radius-full)',
                boxShadow: '0 12px 28px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                border: '1px solid rgba(232, 168, 161, 0.3)'
              }} className="animate-float">
                <span style={{ fontSize: '1.2rem' }}>✨</span>
                <div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', display: 'block' }}>
                    Aesthetic Match
                  </span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--blush-deep)', fontWeight: 600 }}>
                    98% Harmony Score
                  </span>
                </div>
              </div>

              {/* Floating Pill Card Bottom Left */}
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-16px',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(12px)',
                padding: '14px 22px',
                borderRadius: '20px',
                boxShadow: '0 12px 28px rgba(0, 0, 0, 0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                border: '1px solid rgba(220, 206, 195, 0.4)'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
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
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)', display: 'block' }}>
                    Capsule Wardrobe
                  </span>
                  <span style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
                    Mix & Match 20+ Outfits
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Popular Categories Grid */}
      <section style={{ padding: '40px 0 60px' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '32px',
            gap: '16px'
          }}>
            <div>
              <span style={{
                fontSize: '0.8rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--blush-deep)',
                fontWeight: 700
              }}>
                Signature Aesthetics
              </span>
              <h2 style={{
                fontSize: '2.2rem',
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                marginTop: '6px'
              }}>
                Popular Fashion Categories
              </h2>
            </div>
            <button
              onClick={() => navigateTo('explore')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.92rem',
                fontWeight: 700,
                color: 'var(--blush-deep)'
              }}
            >
              <span>View All Categories</span>
              <FiArrowRight size={16} />
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: '20px'
          }}>
            {FASHION_CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
              <div
                key={cat.id}
                onClick={() => navigateTo('explore')}
                style={{
                  position: 'relative',
                  height: '240px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.35s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(35, 31, 32, 0.75) 0%, transparent 60%)'
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  color: '#FFFFFF'
                }}>
                  <span style={{ fontSize: '1.3rem', display: 'block', marginBottom: '4px' }}>
                    {cat.icon}
                  </span>
                  <h4 style={{
                    fontSize: '1.05rem',
                    fontFamily: 'var(--font-serif)',
                    color: '#FFFFFF',
                    fontWeight: 700
                  }}>
                    {cat.name}
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)' }}>
                    {cat.count} Curated Looks
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Outfit Recommendations Grid */}
      <section style={{ padding: '50px 0' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '36px',
            gap: '16px'
          }}>
            <div>
              <span style={{
                fontSize: '0.8rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--blush-deep)',
                fontWeight: 700
              }}>
                Curated Spotlight
              </span>
              <h2 style={{
                fontSize: '2.2rem',
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                marginTop: '6px'
              }}>
                Trending Outfits This Season
              </h2>
            </div>
            <button
              onClick={() => navigateTo('explore')}
              className="btn-secondary"
            >
              <span>Explore Complete Catalog</span>
              <FiArrowRight size={16} />
            </button>
          </div>

          <div className="grid-outfits">
            {trendingOutfits.map((outfit) => (
              <OutfitCard key={outfit.id} outfit={outfit} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Style Quiz Banner Callout */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #FDE8E6 0%, #F5D3CE 50%, #FAF5EF 100%)',
            borderRadius: '28px',
            padding: '48px 40px',
            border: '1px solid rgba(232, 168, 161, 0.5)',
            boxShadow: 'var(--shadow-lg)',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            alignItems: 'center',
            gap: '40px'
          }} className="quiz-banner-grid">
            <div>
              <span className="badge badge-blush" style={{ marginBottom: '12px' }}>
                Interactive Fashion Test
              </span>
              <h2 style={{
                fontSize: '2.3rem',
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '14px',
                lineHeight: 1.25
              }}>
                What Is Your True Fashion Personality Archetype?
              </h2>
              <p style={{
                fontSize: '0.98rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '26px'
              }}>
                Answer 5 curated lifestyle questions to uncover whether you're a Chic Minimalist, Seoul Soft Trendsetter, Urban Rebel, or Old Money Connoisseur. Get tailored color codes and capsule recommendations instantly.
              </p>
              <button
                onClick={() => navigateTo('quiz')}
                className="btn-primary"
                style={{ padding: '16px 32px' }}
              >
                <HiSparkles size={18} />
                <span>Take the Free Style Quiz</span>
              </button>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {[
                { title: 'The Chic Minimalist', icon: '☕', desc: 'Neutral linen, quiet luxury & sleek loafers' },
                { title: 'Seoul Soft Glam', icon: '🌸', desc: 'Pastel oversized knits & pleated tennis skirts' },
                { title: 'Urban Rebel', icon: '🛹', desc: 'Multi-pocket cargo & high-contrast street kicks' },
                { title: 'Old Money Executive', icon: '🏛️', desc: 'Double-breasted trench & heritage brogues' }
              ].map((arch, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(8px)',
                    padding: '14px 18px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    border: '1px solid rgba(255,255,255,0.7)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
                  }}
                >
                  <span style={{ fontSize: '1.4rem' }}>{arch.icon}</span>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {arch.title}
                    </h4>
                    <span style={{ fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
                      {arch.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fashion Tip of the Day & Palette Section */}
      <section style={{ padding: '20px 0 60px' }}>
        <div className="container">
          <FashionTipCard />
          <ColorPaletteSection />
        </div>
      </section>

      {/* How StyleSync Works - 3 Step Guide */}
      <section style={{ padding: '40px 0 80px', backgroundColor: 'var(--beige-light)', borderRadius: '32px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{
              fontSize: '0.8rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--blush-deep)',
              fontWeight: 700
            }}>
              Seamless Experience
            </span>
            <h2 style={{
              fontSize: '2.2rem',
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              marginTop: '6px'
            }}>
              How StyleSync Works
            </h2>
            <p style={{
              maxWidth: '520px',
              margin: '10px auto 0',
              fontSize: '0.94rem',
              color: 'var(--text-secondary)'
            }}>
              Three simple steps to transform your personal wardrobe into an effortless runway collection.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                step: '01',
                title: 'Set Preferences or Take Quiz',
                desc: 'Select your preferred occasion, season, gender, and budget — or take our 2-minute visual personality quiz.',
                icon: HiSparkles
              },
              {
                step: '02',
                title: 'Mix & Match or Explore',
                desc: 'Browse hundreds of complete looks with item breakdowns, or enter our interactive studio to pair tops, bottoms, and accessories.',
                icon: FiLayers
              },
              {
                step: '03',
                title: 'Organize Your Digital Closet',
                desc: 'Save outfits to your persistent wishlist and upload your own clothes into your personal digital wardrobe organizer.',
                icon: FiCheckCircle
              }
            ].map((st, idx) => {
              const Icon = st.icon;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '24px',
                    padding: '36px 30px',
                    border: '1px solid var(--border-subtle)',
                    boxShadow: 'var(--shadow-sm)',
                    position: 'relative'
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2.4rem',
                    fontWeight: 700,
                    color: 'var(--blush-soft)',
                    position: 'absolute',
                    top: '20px',
                    right: '24px',
                    lineHeight: 1
                  }}>
                    {st.step}
                  </span>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '16px',
                    backgroundColor: 'var(--blush-soft)',
                    color: 'var(--blush-deep)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 700,
                    marginBottom: '10px'
                  }}>
                    {st.title}
                  </h3>
                  <p style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6
                  }}>
                    {st.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inline styles for responsive layout */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .quiz-banner-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
