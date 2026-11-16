import React, { useState } from 'react';
import { useFashion } from '../context/FashionContext';
import { 
  FiHeart, 
  FiCompass, 
  FiLayers, 
  FiFolder, 
  FiHome, 
  FiDollarSign, 
  FiMenu, 
  FiX 
} from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import { GiClothes } from 'react-icons/gi';

export const Navbar = () => {
  const { activeTab, navigateTo, wishlist, wardrobe } = useFashion();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: FiHome },
    { id: 'explore', label: 'Explore', icon: FiCompass },
    { id: 'recommendations', label: 'Recommendations', icon: HiSparkles },
    { id: 'quiz', label: 'Style Quiz', icon: GiClothes },
    { id: 'mixmatch', label: 'Mix & Match', icon: FiLayers },
    { id: 'budget', label: 'Budget Fashion', icon: FiDollarSign },
    { id: 'wardrobe', label: 'My Wardrobe', icon: FiFolder, badge: wardrobe.length },
    { id: 'wishlist', label: 'Wishlist', icon: FiHeart, badge: wishlist.length }
  ];

  const handleNavClick = (id) => {
    navigateTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300" style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: 'rgba(250, 247, 242, 0.92)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(235, 222, 211, 0.8)',
      boxShadow: '0 4px 20px rgba(50, 30, 35, 0.04)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '78px'
      }}>
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          style={{ 
            cursor: 'pointer', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px' 
          }}
        >
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #FDE8E6 0%, #E8A8A1 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(212, 123, 117, 0.25)',
            color: '#8C3A35',
            fontSize: '1.25rem',
            fontWeight: 'bold'
          }}>
            ✨
          </div>
          <div>
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.65rem',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              display: 'block',
              lineHeight: 1.1
            }}>
              StyleSync
            </span>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.68rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--blush-deep)',
              fontWeight: 600,
              display: 'block'
            }}>
              Personal Fashion Stylist
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }} className="desktop-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  padding: '9px 15px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                  backgroundColor: isActive ? 'var(--text-primary)' : 'transparent',
                  boxShadow: isActive ? '0 4px 14px rgba(35, 31, 32, 0.16)' : 'none',
                  transition: 'all 0.22s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'var(--blush-soft)';
                    e.currentTarget.style.color = 'var(--blush-active)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }
                }}
              >
                <Icon size={16} />
                <span>{item.label}</span>
                {item.badge !== undefined && item.badge > 0 && (
                  <span style={{
                    backgroundColor: isActive ? 'var(--blush-deep)' : 'var(--blush-soft)',
                    color: isActive ? '#FFFFFF' : 'var(--blush-deep)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '1px 7px',
                    borderRadius: '12px',
                    marginLeft: '2px',
                    border: isActive ? 'none' : '1px solid rgba(212, 123, 117, 0.3)'
                  }}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-nav-toggle"
          style={{
            display: 'none',
            padding: '10px',
            borderRadius: '12px',
            backgroundColor: 'var(--beige-warm)',
            color: 'var(--text-primary)',
            fontSize: '1.4rem'
          }}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#FAF7F2',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '16px 20px 24px',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 18px',
                    borderRadius: '14px',
                    fontSize: '0.96rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? '#FFFFFF' : 'var(--text-primary)',
                    backgroundColor: isActive ? 'var(--blush-deep)' : 'var(--beige-light)',
                    textAlign: 'left',
                    width: '100%'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span style={{
                      backgroundColor: isActive ? 'rgba(255,255,255,0.25)' : 'var(--blush-soft)',
                      color: isActive ? '#FFFFFF' : 'var(--blush-deep)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: '10px'
                    }}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Inline styles for responsive menu visibility */}
      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};
