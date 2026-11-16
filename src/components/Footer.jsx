import React, { useState } from 'react';
import { useFashion } from '../context/FashionContext';
import { FiInstagram, FiTwitter, FiLinkedin, FiSend, FiHeart } from 'react-icons/fi';
import { FaPinterestP, FaTiktok } from 'react-icons/fa';

export const Footer = () => {
  const { navigateTo, showToast } = useFashion();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', 'info');
      return;
    }
    showToast('Subscribed! Welcome to the StyleSync VIP fashion circle ✨', 'success');
    setEmail('');
  };

  return (
    <footer style={{
      backgroundColor: '#231F20',
      color: '#FFFFFF',
      marginTop: '80px',
      paddingTop: '64px',
      paddingBottom: '36px',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          marginBottom: '56px'
        }}>
          {/* Brand Vision Column */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <span style={{
                fontSize: '1.4rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '6px 10px',
                borderRadius: '12px'
              }}>
                ✨
              </span>
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.75rem',
                fontWeight: 700,
                color: '#FAF7F2'
              }}>
                StyleSync
              </span>
            </div>
            <p style={{
              fontSize: '0.88rem',
              color: '#B8AFB0',
              lineHeight: 1.6,
              marginBottom: '20px'
            }}>
              Your Personal AI Fashion Stylist. Empowering you to discover confidence, curate timeless aesthetic looks, and organize your dream wardrobe effortlessly.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="#instagram"
                onClick={(e) => { e.preventDefault(); showToast('Opening StyleSync Instagram...', 'info'); }}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'background 0.2s'
                }}
              >
                <FiInstagram size={17} />
              </a>
              <a
                href="#pinterest"
                onClick={(e) => { e.preventDefault(); showToast('Opening StyleSync Pinterest boards...', 'info'); }}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'background 0.2s'
                }}
              >
                <FaPinterestP size={17} />
              </a>
              <a
                href="#tiktok"
                onClick={(e) => { e.preventDefault(); showToast('Opening StyleSync TikTok reels...', 'info'); }}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'background 0.2s'
                }}
              >
                <FaTiktok size={16} />
              </a>
              <a
                href="#twitter"
                onClick={(e) => { e.preventDefault(); showToast('Opening StyleSync X / Twitter...', 'info'); }}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'background 0.2s'
                }}
              >
                <FiTwitter size={17} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '0.92rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#FAF7F2',
              marginBottom: '18px'
            }}>
              Discover & Style
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Home Experience', tab: 'home' },
                { label: 'Explore Outfit Catalog', tab: 'explore' },
                { label: 'AI Outfit Recommendations', tab: 'recommendations' },
                { label: 'Fashion Personality Quiz', tab: 'quiz' },
                { label: 'Mix & Match Studio', tab: 'mixmatch' },
                { label: 'Budget-Friendly Styles', tab: 'budget' },
                { label: 'My Digital Closet', tab: 'wardrobe' }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => navigateTo(link.tab)}
                    style={{
                      color: '#B8AFB0',
                      fontSize: '0.88rem',
                      textAlign: 'left',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--blush-accent)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#B8AFB0'}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Aesthetic Categories */}
          <div>
            <h4 style={{
              fontSize: '0.92rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#FAF7F2',
              marginBottom: '18px'
            }}>
              Featured Aesthetics
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Minimalist Quiet Luxury',
                'Korean Chic & Soft Glam',
                'Old Money Executive',
                'Urban Cyber Streetwear',
                'Royal Festive & Ethnic',
                'Effortless Campus Casual'
              ].map((cat, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => navigateTo('explore')}
                    style={{
                      color: '#B8AFB0',
                      fontSize: '0.88rem',
                      textAlign: 'left',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--blush-accent)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#B8AFB0'}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 style={{
              fontSize: '0.92rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#FAF7F2',
              marginBottom: '18px'
            }}>
              The Weekly Style Edit
            </h4>
            <p style={{
              fontSize: '0.85rem',
              color: '#B8AFB0',
              lineHeight: 1.5,
              marginBottom: '14px'
            }}>
              Receive runway trend forecasts, capsule wardrobe cheat-sheets, and seasonal color alerts directly in your inbox.
            </p>
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email"
                placeholder="your.email@vogue.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  borderRadius: 'var(--radius-full)',
                  padding: '10px 16px',
                  color: '#FFFFFF',
                  fontSize: '0.85rem'
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: 'var(--blush-deep)',
                  color: '#FFFFFF',
                  borderRadius: 'var(--radius-full)',
                  padding: '10px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--blush-active)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--blush-deep)'}
                aria-label="Subscribe"
              >
                <FiSend size={15} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '28px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          fontSize: '0.82rem',
          color: '#8E8284'
        }}>
          <div>
            © {new Date().getFullYear()} StyleSync Technologies. All rights reserved. Built with modern React & Vite.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Crafted for fashion lovers everywhere</span>
            <FiHeart size={14} fill="#D47B75" color="#D47B75" />
          </div>
        </div>
      </div>
    </footer>
  );
};
