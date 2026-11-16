import React, { useState, useMemo } from 'react';
import { useFashion } from '../context/FashionContext';
import { OutfitCard } from '../components/OutfitCard';
import { FiSearch, FiSliders, FiX, FiRefreshCcw } from 'react-icons/fi';

export const ExplorePage = () => {
  const { allOutfits } = useFashion();

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedOccasion, setSelectedOccasion] = useState('all');
  const [selectedSeason, setSelectedSeason] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filter and Sort Logic
  const filteredOutfits = useMemo(() => {
    return allOutfits.filter((outfit) => {
      // Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = outfit.name.toLowerCase().includes(query);
        const matchesTagline = outfit.tagline?.toLowerCase().includes(query);
        const matchesDesc = outfit.description.toLowerCase().includes(query);
        const matchesStyle = outfit.style.toLowerCase().includes(query);
        const matchesOccasion = outfit.occasion.toLowerCase().includes(query);
        const matchesItem = outfit.items?.some(it => it.name.toLowerCase().includes(query));

        if (!matchesName && !matchesTagline && !matchesDesc && !matchesStyle && !matchesOccasion && !matchesItem) {
          return false;
        }
      }

      // Category / Aesthetic
      if (selectedCategory !== 'all' && outfit.category !== selectedCategory) {
        return false;
      }

      // Gender
      if (selectedGender !== 'all' && outfit.gender !== selectedGender && outfit.gender !== 'unisex') {
        return false;
      }

      // Occasion
      if (selectedOccasion !== 'all' && outfit.occasion.toLowerCase() !== selectedOccasion.toLowerCase()) {
        return false;
      }

      // Season
      if (selectedSeason !== 'all' && outfit.season.toLowerCase() !== selectedSeason.toLowerCase()) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'popular') return b.likes - a.likes;
      return 0; // featured default
    });
  }, [allOutfits, searchQuery, selectedCategory, selectedGender, selectedOccasion, selectedSeason, sortBy]);

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedGender('all');
    setSelectedOccasion('all');
    setSelectedSeason('all');
    setSortBy('featured');
  };

  const hasActiveFilters = 
    searchQuery !== '' || 
    selectedCategory !== 'all' || 
    selectedGender !== 'all' || 
    selectedOccasion !== 'all' || 
    selectedSeason !== 'all' || 
    sortBy !== 'featured';

  return (
    <div className="explore-page animate-fade-in" style={{ padding: '40px 0 80px' }}>
      <div className="container">
        
        {/* Header Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{
            fontSize: '0.8rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--blush-deep)',
            fontWeight: 700
          }}>
            Curated Wardrobe Gallery
          </span>
          <h1 style={{
            fontSize: '2.6rem',
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            marginTop: '6px',
            color: 'var(--text-primary)'
          }}>
            Explore Fashion Catalog
          </h1>
          <p style={{
            maxWidth: '580px',
            margin: '10px auto 0',
            fontSize: '0.96rem',
            color: 'var(--text-secondary)'
          }}>
            Browse editorial looks designed for modern living. Filter by style aesthetic, occasion, or season to find your signature ensemble.
          </p>
        </div>

        {/* Search Bar & Quick Controls */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          padding: '20px 24px',
          border: '1px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '28px'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '16px',
            justifyContent: 'space-between'
          }}>
            
            {/* Search Input */}
            <div style={{
              flex: '1 1 320px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center'
            }}>
              <FiSearch 
                size={18} 
                color="var(--text-muted)" 
                style={{ position: 'absolute', left: '16px', pointerEvents: 'none' }} 
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search styles, items (blazer, slip, trench), aesthetics..."
                style={{
                  width: '100%',
                  padding: '12px 18px 12px 44px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.92rem',
                  color: 'var(--text-primary)',
                  transition: 'border 0.2s'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '14px',
                    color: 'var(--text-muted)',
                    display: 'flex'
                  }}
                  aria-label="Clear search"
                >
                  <FiX size={16} />
                </button>
              )}
            </div>

            {/* Sort Selector & Filter Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Sort:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{
                    padding: '10px 16px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.86rem',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                >
                  <option value="featured">✨ Featured Stylist Picks</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="popular">Most Loved</option>
                </select>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={resetAllFilters}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--blush-soft)',
                    color: 'var(--blush-active)',
                    fontSize: '0.82rem',
                    fontWeight: 600
                  }}
                >
                  <FiRefreshCcw size={13} />
                  <span>Reset All</span>
                </button>
              )}
            </div>

          </div>

          {/* Filter Pills: Category Tabs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginTop: '20px',
            paddingTop: '16px',
            borderTop: '1px solid var(--border-subtle)'
          }}>
            {[
              { id: 'all', label: 'All Aesthetics' },
              { id: 'aesthetic', label: 'Aesthetic Minimal' },
              { id: 'korean', label: 'Korean Chic' },
              { id: 'streetwear', label: 'Urban Streetwear' },
              { id: 'formal', label: 'Old Money & Formal' },
              { id: 'traditional', label: 'Festive & Traditional' },
              { id: 'casual', label: 'Everyday Casual' }
            ].map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.82rem',
                    fontWeight: isSelected ? 700 : 500,
                    backgroundColor: isSelected ? 'var(--text-primary)' : 'var(--bg-primary)',
                    color: isSelected ? '#FFFFFF' : 'var(--text-secondary)',
                    border: '1px solid',
                    borderColor: isSelected ? 'var(--text-primary)' : 'var(--border-subtle)',
                    transition: 'all 0.2s'
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Secondary Sub-Filters (Gender, Occasion, Season) */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            marginTop: '14px',
            alignItems: 'center'
          }}>
            {/* Gender Filter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>Gender:</span>
              <select
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.8rem',
                  color: 'var(--text-primary)'
                }}
              >
                <option value="all">All Genders</option>
                <option value="women">Women's Fashion</option>
                <option value="men">Men's Fashion</option>
                <option value="unisex">Unisex Fits</option>
              </select>
            </div>

            {/* Occasion Filter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>Occasion:</span>
              <select
                value={selectedOccasion}
                onChange={(e) => setSelectedOccasion(e.target.value)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.8rem',
                  color: 'var(--text-primary)'
                }}
              >
                <option value="all">All Occasions</option>
                <option value="college">College Campus</option>
                <option value="party">Party & Night Out</option>
                <option value="wedding">Wedding & Festive</option>
                <option value="casual">Casual Weekend</option>
                <option value="office">Office & Workwear</option>
                <option value="date">Date Night</option>
              </select>
            </div>

            {/* Season Filter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>Season:</span>
              <select
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.8rem',
                  color: 'var(--text-primary)'
                }}
              >
                <option value="all">All Seasons</option>
                <option value="summer">Summer Light</option>
                <option value="winter">Winter Layers</option>
                <option value="monsoon">Monsoon Weather</option>
              </select>
            </div>

            {/* Active Items Counter */}
            <div style={{ marginLeft: 'auto', fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              Showing {filteredOutfits.length} curated looks
            </div>
          </div>
        </div>

        {/* Outfits Gallery Grid or Empty State */}
        {filteredOutfits.length > 0 ? (
          <div className="grid-outfits">
            {filteredOutfits.map((outfit) => (
              <OutfitCard key={outfit.id} outfit={outfit} />
            ))}
          </div>
        ) : (
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            padding: '60px 24px',
            textAlign: 'center',
            border: '1px dashed var(--border-subtle)',
            maxWidth: '560px',
            margin: '40px auto'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'var(--blush-soft)',
              color: 'var(--blush-deep)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.8rem',
              margin: '0 auto 18px'
            }}>
              🔍
            </div>
            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '8px'
            }}>
              No matching outfits found
            </h3>
            <p style={{
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              marginBottom: '22px'
            }}>
              We couldn't find any looks matching your exact search criteria. Try adjusting your filters or clearing search terms.
            </p>
            <button
              onClick={resetAllFilters}
              className="btn-primary"
            >
              <span>Reset All Filters</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
