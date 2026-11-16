import React, { useState, useMemo } from 'react';
import { useFashion } from '../context/FashionContext';
import { 
  FiPlus, 
  FiTrash2, 
  FiSearch, 
  FiFolder, 
  FiX, 
  FiUploadCloud, 
  FiRefreshCw, 
  FiCheck 
} from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

export const WardrobePage = () => {
  const { wardrobe, addToWardrobe, removeFromWardrobe, resetWardrobe, showToast } = useFashion();

  // Filters & Search
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Add Item Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [generatedOutfit, setGeneratedOutfit] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    category: 'Tops',
    color: '#E8A8A1',
    colorName: 'Blush Pink',
    season: 'All-Season',
    occasion: 'Casual',
    notes: '',
    image: ''
  });

  // Handle Image File Upload (converts file to base64 data-URL)
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2.5 * 1024 * 1024) {
        showToast('Please select an image under 2.5MB', 'info');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result }));
        showToast('Image uploaded successfully! 📸', 'success');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      showToast('Please provide a name for your clothing item', 'info');
      return;
    }

    const defaultImages = {
      Tops: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=600&q=80',
      Bottoms: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=600&q=80',
      Dresses: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80',
      Shoes: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80',
      Accessories: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
      Outerwear: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80'
    };

    const finalImage = formData.image.trim() || defaultImages[formData.category] || defaultImages.Tops;

    addToWardrobe({
      ...formData,
      image: finalImage
    });

    setIsModalOpen(false);
    setFormData({
      name: '',
      category: 'Tops',
      color: '#E8A8A1',
      colorName: 'Blush Pink',
      season: 'All-Season',
      occasion: 'Casual',
      notes: '',
      image: ''
    });
  };

  // Filtered wardrobe items
  const filteredItems = useMemo(() => {
    return wardrobe.filter(item => {
      const matchCat = selectedCategory === 'All' || item.category === selectedCategory;
      const matchQuery = !searchQuery.trim() || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.colorName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.notes?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [wardrobe, selectedCategory, searchQuery]);

  // Generate a complete look from actual wardrobe pieces
  const generateOutfitFromCloset = () => {
    const tops = wardrobe.filter(i => i.category === 'Tops' || i.category === 'Outerwear');
    const bottoms = wardrobe.filter(i => i.category === 'Bottoms');
    const dresses = wardrobe.filter(i => i.category === 'Dresses');
    const shoes = wardrobe.filter(i => i.category === 'Shoes');
    const accessories = wardrobe.filter(i => i.category === 'Accessories');

    const useDress = dresses.length > 0 && (tops.length === 0 || Math.random() > 0.6);

    if (useDress) {
      const dress = dresses[Math.floor(Math.random() * dresses.length)];
      const shoe = shoes[Math.floor(Math.random() * shoes.length)];
      const acc = accessories[Math.floor(Math.random() * accessories.length)];
      setGeneratedOutfit({
        type: 'dress',
        pieces: [dress, shoe, acc].filter(Boolean),
        vibe: 'Effortless One-Piece Sophistication'
      });
    } else {
      const top = tops[Math.floor(Math.random() * tops.length)];
      const bottom = bottoms[Math.floor(Math.random() * bottoms.length)];
      const shoe = shoes[Math.floor(Math.random() * shoes.length)];
      const acc = accessories[Math.floor(Math.random() * accessories.length)];
      
      if (!top && !bottom && !shoe) {
        showToast('Please add more items to your wardrobe first!', 'info');
        return;
      }

      setGeneratedOutfit({
        type: 'combo',
        pieces: [top, bottom, shoe, acc].filter(Boolean),
        vibe: 'Curated Capsule Closet Synergy'
      });
    }

    showToast('Styled a fresh look from your closet! ✨', 'success');
  };

  // Categories count
  const categoriesList = ['All', 'Tops', 'Bottoms', 'Dresses', 'Shoes', 'Accessories', 'Outerwear'];

  return (
    <div className="wardrobe-page animate-fade-in" style={{ padding: '40px 0 80px' }}>
      <div className="container">

        {/* Section Header */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '36px',
          gap: '20px'
        }}>
          <div>
            <span style={{
              fontSize: '0.8rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--blush-deep)',
              fontWeight: 700
            }}>
              Personal Digital Closet
            </span>
            <h1 style={{
              fontSize: '2.6rem',
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              marginTop: '6px',
              color: 'var(--text-primary)'
            }}>
              My Digital Wardrobe
            </h1>
            <p style={{
              maxWidth: '540px',
              margin: '8px 0 0',
              fontSize: '0.94rem',
              color: 'var(--text-secondary)'
            }}>
              Organize your actual garments, catalog your essentials, and let StyleSync create smart outfit formulas from what you already own.
            </p>
          </div>

          {/* Action Header Buttons */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={generateOutfitFromCloset}
              className="btn-blush"
              style={{ padding: '12px 22px' }}
            >
              <HiSparkles size={16} />
              <span>Style Outfit From My Closet</span>
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary"
              style={{ padding: '12px 24px' }}
            >
              <FiPlus size={18} />
              <span>Add Clothing Item</span>
            </button>
          </div>
        </div>

        {/* Generated Closet Look Banner */}
        {generatedOutfit && (
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            padding: '24px 28px',
            border: '1.5px solid var(--blush-accent)',
            boxShadow: '0 12px 30px rgba(212, 123, 117, 0.15)',
            marginBottom: '36px',
            position: 'relative'
          }} className="animate-fade-in">
            <button
              onClick={() => setGeneratedOutfit(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                color: 'var(--text-muted)',
                cursor: 'pointer'
              }}
              aria-label="Dismiss look"
            >
              <FiX size={18} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <span className="badge badge-blush">AI Closet Pairing</span>
              <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {generatedOutfit.vibe}
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${generatedOutfit.pieces.length}, minmax(140px, 1fr))`,
              gap: '16px'
            }}>
              {generatedOutfit.pieces.map((pc, idx) => (
                <div key={idx} style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-subtle)',
                  textAlign: 'center'
                }}>
                  <div style={{ height: '120px', overflow: 'hidden' }}>
                    <img src={pc.image} alt={pc.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '8px 10px' }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', display: 'block' }}>
                      {pc.name}
                    </span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--blush-deep)' }}>
                      {pc.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filter and Search Bar */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '22px',
          padding: '20px 24px',
          border: '1px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '32px'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            marginBottom: '16px'
          }}>
            {/* Search */}
            <div style={{
              position: 'relative',
              flex: '1 1 280px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <FiSearch size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '16px' }} />
              <input
                type="text"
                placeholder="Search wardrobe by item name, color, or notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 16px 10px 42px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.88rem'
                }}
              />
            </div>

            {/* Total Count & Reset */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                {wardrobe.length} Wardrobe Pieces
              </span>
              <button
                onClick={resetWardrobe}
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--beige-light)'
                }}
                title="Restore default curated items"
              >
                <FiRefreshCw size={12} />
                <span>Reset Default Items</span>
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            paddingTop: '12px',
            borderTop: '1px solid var(--border-subtle)'
          }}>
            {categoriesList.map((cat) => {
              const count = cat === 'All' ? wardrobe.length : wardrobe.filter(i => i.category === cat).length;
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '6px 14px',
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
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Wardrobe Items Grid */}
        {filteredItems.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '24px'
          }}>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
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
                {/* Delete button */}
                <button
                  onClick={() => removeFromWardrobe(item.id)}
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(4px)',
                    color: '#B00020',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    zIndex: 10
                  }}
                  title="Remove from wardrobe"
                >
                  <FiTrash2 size={14} />
                </button>

                {/* Image */}
                <div style={{
                  position: 'relative',
                  height: '240px',
                  backgroundColor: '#F4EFEA',
                  overflow: 'hidden'
                }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px'
                  }}>
                    <span className="badge badge-blush" style={{ fontSize: '0.68rem', padding: '3px 8px' }}>
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{
                      fontSize: '1rem',
                      fontFamily: 'var(--font-serif)',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '4px'
                    }}>
                      {item.name}
                    </h3>

                    {item.notes && (
                      <p style={{
                        fontSize: '0.8rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.4,
                        marginBottom: '10px'
                      }}>
                        {item.notes}
                      </p>
                    )}
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '10px',
                    borderTop: '1px solid var(--border-subtle)',
                    fontSize: '0.74rem',
                    color: 'var(--text-muted)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: item.color || '#DDD',
                        border: '1px solid rgba(0,0,0,0.1)'
                      }} />
                      <span>{item.colorName || 'Neutral'}</span>
                    </div>
                    <span>{item.season || 'All-Season'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            padding: '60px 24px',
            textAlign: 'center',
            border: '1px dashed var(--border-subtle)',
            maxWidth: '540px',
            margin: '40px auto'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: 'var(--blush-soft)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.6rem',
              margin: '0 auto 16px'
            }}>
              👗
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>
              No garments found
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              You don't have any clothing items matching "{selectedCategory}". Add a new piece or reset the default collection.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary"
            >
              <span>Add Your First Item</span>
            </button>
          </div>
        )}

      </div>

      {/* Add Item Modal */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(35, 31, 32, 0.65)',
          backdropFilter: 'blur(8px)',
          zIndex: 2100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }} onClick={() => setIsModalOpen(false)}>
          <div 
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '26px',
              maxWidth: '540px',
              width: '100%',
              padding: '32px',
              boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
              border: '1px solid var(--border-subtle)',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
            className="animate-fade-in"
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700 }}>
                Add Garment to Closet
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{ color: 'var(--text-muted)' }}
              >
                <FiX size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                  Item Name / Title *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ribbed Cashmere Turtleneck"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.86rem'
                    }}
                  >
                    <option value="Tops">Tops</option>
                    <option value="Bottoms">Bottoms</option>
                    <option value="Dresses">Dresses</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Outerwear">Outerwear</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                    Season
                  </label>
                  <select
                    value={formData.season}
                    onChange={(e) => setFormData(prev => ({ ...prev, season: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.86rem'
                    }}
                  >
                    <option value="All-Season">All-Season</option>
                    <option value="Summer">Summer</option>
                    <option value="Winter">Winter</option>
                    <option value="Monsoon">Monsoon</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                    Color Tone
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                      type="color"
                      value={formData.color}
                      onChange={(e) => setFormData(prev => ({ ...prev, color: e.target.value }))}
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    />
                    <input
                      type="text"
                      placeholder="e.g. Warm Rose"
                      value={formData.colorName}
                      onChange={(e) => setFormData(prev => ({ ...prev, colorName: e.target.value }))}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        borderRadius: '10px',
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.84rem'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                    Occasion
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData(prev => ({ ...prev, occasion: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.86rem'
                    }}
                  >
                    <option value="Casual">Casual</option>
                    <option value="College">College</option>
                    <option value="Office">Office</option>
                    <option value="Party">Party</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Date">Date Night</option>
                  </select>
                </div>
              </div>

              {/* Image Input Options */}
              <div>
                <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                  Item Photo (Upload or Image URL)
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px',
                    borderRadius: '12px',
                    border: '1.5px dashed var(--border-subtle)',
                    backgroundColor: 'var(--bg-primary)',
                    cursor: 'pointer',
                    fontSize: '0.84rem',
                    color: 'var(--text-secondary)'
                  }}>
                    <FiUploadCloud size={18} color="var(--blush-deep)" />
                    <span>Upload photo from device</span>
                    <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
                  </label>

                  <input
                    type="url"
                    placeholder="Or paste an image URL (https://...)"
                    value={formData.image}
                    onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.82rem'
                    }}
                  />
                </div>

                {formData.image && (
                  <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img src={formData.image} alt="Preview" style={{ width: '40px', height: '40px', borderRadius: '8px', objectFit: 'cover' }} />
                    <span style={{ fontSize: '0.75rem', color: '#2A9D8F' }}>Photo selected</span>
                  </div>
                )}
              </div>

              <div>
                <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                  Styling Notes / Brand (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Bought from Zara, style with high-waist pants"
                  value={formData.notes}
                  onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.84rem',
                    resize: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn-secondary"
                  style={{ flex: 1, padding: '10px' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ flex: 1.5, padding: '10px' }}
                >
                  Save to Wardrobe
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
