import React, { useState } from 'react';
import { useFashion } from '../context/FashionContext';
import { QUIZ_QUESTIONS, STYLE_ARCHETYPES, OUTFITS } from '../data/fashionData';
import { OutfitCard } from '../components/OutfitCard';
import confetti from 'canvas-confetti';
import { FiCheckCircle, FiRefreshCw, FiArrowRight, FiHeart, FiCopy } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

export const StyleQuizPage = () => {
  const { quizResult, saveQuizArchetype, clearQuizResult, showToast } = useFashion();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  // Trigger celebration confetti
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E8A8A1', '#D47B75', '#D4AF37', '#FAF7F2']
      });
    } catch (e) {
      // Fallback if canvas confetti isn't supported
    }
  };

  const handleSelectOption = (archetype) => {
    const updated = { ...selectedAnswers, [currentQuestionIndex]: archetype };
    setSelectedAnswers(updated);

    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Calculate winner archetype
      setIsCalculating(true);
      setTimeout(() => {
        const counts = {};
        Object.values(updated).forEach(arch => {
          counts[arch] = (counts[arch] || 0) + 1;
        });

        let highestArch = 'minimalist';
        let maxCount = 0;
        Object.entries(counts).forEach(([arch, count]) => {
          if (count > maxCount) {
            maxCount = count;
            highestArch = arch;
          }
        });

        saveQuizArchetype(highestArch);
        setIsCalculating(false);
        triggerConfetti();
      }, 800);
    }
  };

  const handleRetake = () => {
    clearQuizResult();
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
  };

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];
  const progressPercent = Math.round(((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100);

  // If a result is active (either saved in LocalStorage or just generated)
  if (quizResult && !isCalculating) {
    const archetype = quizResult;
    const recommendedOutfits = OUTFITS.filter(o => 
      archetype.recommendedOutfitIds ? archetype.recommendedOutfitIds.includes(o.id) : true
    );

    return (
      <div className="quiz-result-view animate-fade-in" style={{ padding: '40px 0 80px' }}>
        <div className="container">
          
          {/* Result Header Badge */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 18px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--blush-soft)',
              color: 'var(--blush-active)',
              fontSize: '0.82rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '16px'
            }}>
              <HiSparkles /> Your Fashion Archetype Unlocked
            </span>
            <h1 style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)',
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              lineHeight: 1.15
            }}>
              {archetype.title}
            </h1>
            <p style={{
              fontSize: '1.15rem',
              fontFamily: 'var(--font-editorial)',
              fontStyle: 'italic',
              color: 'var(--blush-deep)',
              marginTop: '6px'
            }}>
              "{archetype.subtitle}"
            </p>
          </div>

          {/* Archetype Profile Card */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '28px',
            padding: '40px',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-lg)',
            marginBottom: '48px'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: '36px',
              alignItems: 'center'
            }} className="archetype-grid">
              
              <div>
                <span style={{
                  fontSize: '0.78rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--text-muted)',
                  fontWeight: 700,
                  display: 'block',
                  marginBottom: '10px'
                }}>
                  Personality Analysis
                </span>
                <p style={{
                  fontSize: '1.02rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '24px'
                }}>
                  {archetype.description}
                </p>

                {/* Signature Palette */}
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', display: 'block', marginBottom: '10px' }}>
                    Your Signature Color Harmony Palette:
                  </span>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {archetype.palette?.map((hex, i) => (
                      <div 
                        key={i}
                        onClick={() => {
                          navigator.clipboard?.writeText(hex);
                          showToast(`Copied ${hex} to clipboard!`, 'info');
                        }}
                        style={{
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '6px 12px',
                          borderRadius: '12px',
                          backgroundColor: 'var(--bg-primary)',
                          border: '1px solid var(--border-subtle)'
                        }}
                        title="Click to copy hex"
                      >
                        <span style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          backgroundColor: hex,
                          border: '1px solid rgba(0,0,0,0.1)'
                        }} />
                        <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', fontWeight: 600 }}>
                          {hex}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <button
                    onClick={handleRetake}
                    className="btn-secondary"
                  >
                    <FiRefreshCw size={15} />
                    <span>Retake Style Quiz</span>
                  </button>
                </div>
              </div>

              {/* Core Wardrobe Staples Box */}
              <div style={{
                backgroundColor: 'var(--beige-light)',
                borderRadius: '24px',
                padding: '30px',
                border: '1px solid var(--border-subtle)'
              }}>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span>🧥 Your Core Capsule Staples</span>
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {archetype.staples?.map((staple, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)'
                    }}>
                      <FiCheckCircle size={17} color="var(--blush-deep)" />
                      <span>{staple}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* Archetype Recommended Outfits Showcase */}
          <div>
            <div style={{ marginBottom: '28px' }}>
              <span style={{
                fontSize: '0.8rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--blush-deep)',
                fontWeight: 700
              }}>
                Bespoke Capsule Selection
              </span>
              <h2 style={{
                fontSize: '2rem',
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                marginTop: '4px'
              }}>
                Recommended Looks For {archetype.title}
              </h2>
            </div>

            <div className="grid-outfits">
              {recommendedOutfits.map(outfit => (
                <OutfitCard key={outfit.id} outfit={outfit} />
              ))}
            </div>
          </div>

        </div>

        <style>{`
          @media (max-width: 820px) {
            .archetype-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    );
  }

  // Quiz Questions Flow
  return (
    <div className="quiz-page animate-fade-in" style={{ padding: '40px 0 80px' }}>
      <div className="container" style={{ maxWidth: '780px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{
            fontSize: '0.8rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--blush-deep)',
            fontWeight: 700
          }}>
            Interactive Style Archetype Quiz
          </span>
          <h1 style={{
            fontSize: '2.4rem',
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            marginTop: '6px',
            color: 'var(--text-primary)'
          }}>
            Discover Your True Fashion Identity
          </h1>
          <p style={{
            fontSize: '0.94rem',
            color: 'var(--text-secondary)',
            marginTop: '8px'
          }}>
            Select the options that genuinely reflect your daily habits and aesthetic instinct.
          </p>
        </div>

        {/* Progress Bar */}
        <div style={{ marginBottom: '36px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '0.82rem',
            fontWeight: 600,
            color: 'var(--text-muted)',
            marginBottom: '8px'
          }}>
            <span>Question {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}</span>
            <span>{progressPercent}% Complete</span>
          </div>
          <div style={{
            width: '100%',
            height: '8px',
            backgroundColor: 'var(--beige-warm)',
            borderRadius: 'var(--radius-full)',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${progressPercent}%`,
              height: '100%',
              backgroundColor: 'var(--blush-deep)',
              borderRadius: 'var(--radius-full)',
              transition: 'width 0.4s ease'
            }} />
          </div>
        </div>

        {/* Question Card */}
        {isCalculating ? (
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '28px',
            padding: '60px 32px',
            textAlign: 'center',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--border-subtle)'
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
              margin: '0 auto 20px',
              fontSize: '1.8rem'
            }}>
              ✨
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginBottom: '8px' }}>
              Synthesizing Your Style DNA...
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              Analyzing color palettes, fabric textures, and silhouette balance to generate your personalized archetype.
            </p>
          </div>
        ) : (
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '28px',
            padding: '40px',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--border-subtle)'
          }}>
            <div style={{ marginBottom: '28px' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--blush-deep)', fontWeight: 700, textTransform: 'uppercase' }}>
                Question {currentQ.id}
              </span>
              <h2 style={{
                fontSize: '1.6rem',
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                marginTop: '4px',
                color: 'var(--text-primary)'
              }}>
                {currentQ.question}
              </h2>
              {currentQ.subtitle && (
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                  {currentQ.subtitle}
                </p>
              )}
            </div>

            {/* Answer Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {currentQ.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt.archetype)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '18px 22px',
                    borderRadius: '18px',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1.5px solid var(--border-subtle)',
                    textAlign: 'left',
                    transition: 'all 0.25s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--blush-light)';
                    e.currentTarget.style.borderColor = 'var(--blush-accent)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-primary)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <span style={{
                    fontSize: '1.5rem',
                    width: '44px',
                    height: '44px',
                    borderRadius: '14px',
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    flexShrink: 0
                  }}>
                    {opt.icon}
                  </span>
                  <div style={{ flex: 1 }}>
                    <span style={{
                      fontSize: '0.96rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      display: 'block',
                      lineHeight: 1.4
                    }}>
                      {opt.text}
                    </span>
                    <span style={{
                      fontSize: '0.76rem',
                      color: 'var(--blush-deep)',
                      fontWeight: 600,
                      marginTop: '2px',
                      display: 'block'
                    }}>
                      {opt.vibe}
                    </span>
                  </div>
                  <FiArrowRight size={18} color="var(--blush-deep)" />
                </button>
              ))}
            </div>

            {/* Step navigation backtrack */}
            {currentQuestionIndex > 0 && (
              <div style={{ marginTop: '24px', textAlign: 'center' }}>
                <button
                  onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
                  style={{
                    fontSize: '0.84rem',
                    color: 'var(--text-muted)',
                    fontWeight: 600,
                    textDecoration: 'underline'
                  }}
                >
                  ← Back to Previous Question
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
