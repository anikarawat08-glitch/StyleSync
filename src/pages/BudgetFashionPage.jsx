import React, { useState, useMemo } from 'react';
import { useFashion } from '../context/FashionContext';
import { BUDGET_OUTFIT_COLLECTIONS } from '../data/fashionData';
import { OutfitCard } from '../components/OutfitCard';
import { FiDollarSign, FiCheck, FiSliders, FiTag, FiZap, FiShoppingBag } from 'react-icons/fi';

export const BudgetFashionPage = () => {
  const { allOutfits, openOutfitModal, toggleWishlist, isWishlisted } = useFashion();

  // Selected Budget Target (default 3000)
  const [maxBudget, setMaxBudget] = useState(3500);

  // Quick preset pills
  const presets = [
    { label: 'Under ₹1,000', value: 1000 },
    { label: 'Under ₹2,000', value: 2000 },
    { label: 'Under ₹3,500', value: 3500 },
    { label: 'Under ₹5,000', value: 5000 },
    { label: 'Luxe / ₹7,000', value: 7000 }
  ];

  // Filter all outfits that fit within user's budget
  const matchingOutfits = useMemo(() => {
    return allOutfits.filter(o => o.price <= maxBudget).sort((a, b) => b.price - a.price);
  }, [allOutfits, maxBudget]);

  return (
    <div className="budget-fashion-page animate-fade-in" style={{ padding: '40px 0 80px' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{
            fontSize: '0.8rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--blush-deep)',
            fontWeight: 700
          }}>
            Smart Styling On Any Budget
          </span>
          <h1 style={{
            fontSize: '2.6rem',
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            marginTop: '6px',
            color: 'var(--text-primary)'
          }}>
            Budget-Friendly Fashion Studio
          </h1>
          <p style={{
            maxWidth: '560px',
            margin: '10px auto 0',
            fontSize: '0.96rem',
            color: 'var(--text-secondary)'
          }}>
            Elegance is not about price tags; it is about intentional pairing. Set your target budget and explore complete ensembles designed to look high-end.
          </p>
        </div>

        {/* Budget Controller Box */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '28px',
          padding: '36px',
          border: '1px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-md)',
          maxWidth: '820px',
          margin: '0 auto 48px'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            marginBottom: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                backgroundColor: 'var(--blush-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--blush-deep)'
              }}>
                <FiTag size={18} />
              </span>
              <div>
                <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
                  Current Target Budget
                </span>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Max Budget: ₹{maxBudget.toLocaleString('en-IN')}
                </h3>
              </div>
            </div>

            <span className="badge badge-blush">
              {matchingOutfits.length} Outfits Available
            </span>
          </div>

          {/* Interactive Range Slider */}
          <div style={{ marginBottom: '24px' }}>
            <input
              type="range"
              min="800"
              max="7000"
              step="100"
              value={maxBudget}
              onChange={(e) => setMaxBudget(Number(e.target.value))}
              style={{
                width: '100%',
                height: '8px',
                borderRadius: '4px',
                background: 'linear-gradient(to right, #E8A8A1, #D47B75)',
                outline: 'none',
                cursor: 'pointer'
              }}
            />
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '0.76rem',
              color: 'var(--text-muted)',
              marginTop: '6px',
              fontWeight: 600
            }}>
              <span>₹800 (Minimalist Thrift)</span>
              <span>₹3,500 (Smart Casual)</span>
              <span>₹7,000 (Occasion Luxe)</span>
            </div>
          </div>

          {/* Preset Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            {presets.map((preset) => (
              <button
                key={preset.value}
                onClick={() => setMaxBudget(preset.value)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.84rem',
                  fontWeight: maxBudget === preset.value ? 700 : 500,
                  backgroundColor: maxBudget === preset.value ? 'var(--text-primary)' : 'var(--bg-primary)',
                  color: maxBudget === preset.value ? '#FFFFFF' : 'var(--text-secondary)',
                  border: '1px solid',
                  borderColor: maxBudget === preset.value ? 'var(--text-primary)' : 'var(--border-subtle)',
                  transition: 'all 0.2s'
                }}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Curated Budget Look Breakdown Cards */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{ marginBottom: '28px' }}>
            <span style={{
              fontSize: '0.8rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--blush-deep)',
              fontWeight: 700
            }}>
              Affordable Formula Guides
            </span>
            <h2 style={{
              fontSize: '2rem',
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              marginTop: '4px'
            }}>
              Complete Looks Under ₹{maxBudget.toLocaleString('en-IN')}
            </h2>
          </div>

          {matchingOutfits.length > 0 ? (
            <div className="grid-outfits">
              {matchingOutfits.map(outfit => (
                <OutfitCard key={outfit.id} outfit={outfit} />
              ))}
            </div>
          ) : (
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '50px 24px',
              textAlign: 'center',
              border: '1px dashed var(--border-subtle)',
              maxWidth: '520px',
              margin: '30px auto'
            }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem' }}>
                No outfits found below ₹{maxBudget}. Try moving the slider to ₹1,500 or higher to view complete looks.
              </p>
            </div>
          )}
        </div>

        {/* Budget Fashion Styling Hacks Section */}
        <section style={{
          backgroundColor: 'var(--beige-light)',
          borderRadius: '30px',
          padding: '48px 36px',
          border: '1px solid var(--border-subtle)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="badge badge-blush" style={{ marginBottom: '8px' }}>
              StyleSync Fashion Director Secrets
            </span>
            <h3 style={{
              fontSize: '2.1rem',
              fontFamily: 'var(--font-serif)',
              fontWeight: 700
            }}>
              How to Make Budget Clothes Look Luxury
            </h3>
            <p style={{ maxWidth: '520px', margin: '8px auto 0', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              Stylist principles to elevate affordable everyday garments into runway-ready outfits.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}>
            {[
              {
                title: 'Steam & De-Pill Everything',
                desc: 'A ₹400 handheld steamer transforms wrinkled, cheap fabrics into crisp, structured silhouettes. Wrinkles instantly deflate garment perceived value.',
                icon: '💨'
              },
              {
                title: 'The Tonal Monochrome Rule',
                desc: 'Wearing varying shades of the same color family (e.g. oatmeal vest + ivory trousers) automatically creates a unified high-fashion look.',
                icon: '🎨'
              },
              {
                title: 'Swap Plastic Buttons with Horn/Metal',
                desc: 'Inexpensive blazers and cardigans often skimp on buttons. Replacing them with mother-of-pearl or dark horn buttons gives an instant designer glow-up.',
                icon: '✨'
              },
              {
                title: 'Invest in One Structured Outer Layer',
                desc: 'Pairing basic ₹300 tees with a sharp structured blazer or wool-blend trench makes your entire look appear worth 10x the price.',
                icon: '🧥'
              }
            ].map((hack, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '24px',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '12px' }}>
                  {hack.icon}
                </span>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                  marginBottom: '8px'
                }}>
                  {hack.title}
                </h4>
                <p style={{
                  fontSize: '0.86rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.55
                }}>
                  {hack.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
