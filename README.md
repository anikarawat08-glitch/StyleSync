# ✨ StyleSync – Your Personal Fashion Stylist

> **A Pinterest-Inspired Fashion-Tech Web Application for Personalized Outfit Recommendations, Style Archetype Discovery, and Virtual Wardrobe Management.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://stylesync-eight-lac.vercel.app)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/anikarawat08-glitch/StyleSync)

- 🌐 **Live Website:** [https://stylesync-eight-lac.vercel.app](https://stylesync-eight-lac.vercel.app)
- 💻 **GitHub Repository:** [https://github.com/anikarawat08-glitch/StyleSync](https://github.com/anikarawat08-glitch/StyleSync)

Built as a high-standard **3rd-Year B.Tech CSE Mini-Project / Portfolio Showcase** using modern React.js, Vite, HTML5, CSS3, React Icons, and LocalStorage.

---

## 🌸 Live Experience & Aesthetic Theme

- **Color Palette:** Soft blush pink (`#FDF2F0`, `#FCE8E6`, `#E8A8A1`, `#D47B75`), warm beige & cream (`#FAF7F2`, `#FAF5EF`, `#EFE6DC`), off-white, espresso charcoal, and antique gold accents.
- **Typography:** *Playfair Display* & *Cormorant Garamond* (Editorial Haute Couture Headings), *Plus Jakarta Sans* (Clean Modern UI), *Alex Brush* (Artistic Accents).
- **Design Philosophy:** Minimalist, Pinterest-inspired moodboards, rounded cards (20–28px), layered glassmorphism, responsive micro-interactions, and high-fashion editorial imagery.

---

## 💎 Key Modules & Features

### 1. 🏠 Home Experience
- **Editorial Hero Section:** "Discover Your Style, Wear Your Confidence" with responsive CTA buttons (*Get Started*, *Explore Outfits*).
- **Live Stats Counters:** 1,200+ Ensembles, 98.4% Match Accuracy, 50K+ Outfits Saved.
- **Popular Fashion Categories:** Korean Chic, Aesthetic Minimal, Urban Streetwear, Old Money & Formal, Festive & Traditional, Everyday Casual.
- **Trending Outfits Showcase:** Direct preview and quick-view modal triggers.
- **Fashion Tip of the Day:** Interactive daily styling wisdom with instant shuffle.
- **Color Palette Inspiration:** Copyable hex codes for trending color harmonies (Parisian Oat & Rose, Old Money Equestrian, Matcha Latte, Midnight Onyx).
- **3-Step Architecture Flow:** Visual guide explaining the stylist pipeline.

### 2. 🔍 Explore Fashion Catalog
- **Live Search Engine:** Instant filter by outfit name, piece keywords (e.g. *trench*, *slip*, *linen*), aesthetics, and occasions.
- **Multi-Factor Filters:** Category tabs, Gender selector (Women, Men, Unisex), Occasion (College, Party, Wedding, Casual, Office, Date), and Season (Summer, Winter, Monsoon).
- **Dynamic Sorting:** Featured Stylist Picks, Price: Low to High, Price: High to Low, Highest Rated, Most Loved.
- **Persistent Wishlist Integration:** Direct one-click heart save.
- **Quick-View Modal:** Deep breakdown of individual outfit pieces, prices, color harmony, and professional styling secrets.

### 3. 🪄 AI Outfit Recommendations Engine
- **Multi-Factor Input Form:**
  - Gender / Preferred fit
  - Occasion (*College, Party, Wedding, Casual, Office, Date*)
  - Season (*Summer, Winter, Monsoon*)
  - Aesthetic Style (*Aesthetic, Korean, Casual, Traditional, Streetwear, Formal*)
  - Budget Tier (*Under ₹2,000, ₹2,000–₹4,500, ₹4,500+*)
- **Scoring & Compatibility Algorithm:** Evaluates compatibility % and returns a curated Top Match with alternative variations.
- **Actionable Styling Advice:** Detailed explanation of why the ensemble works for the selected season and silhouette.

### 4. 🪞 Interactive Fashion Personality Quiz
- **5 Multi-Choice Questions:** Weekend vibes, color preferences, footwear staples, accessories, and shopping principles.
- **Animated Progress Tracking:** Visual step-by-step progress bar.
- **Confetti Celebration:** Powered by `canvas-confetti`.
- **4 Distinct Style Archetypes:**
  1. *The Chic Minimalist* (Quiet luxury, clean lines, warm taupes)
  2. *Seoul Soft Glam Trendsetter* (Playful proportions, pastels, K-drama charm)
  3. *The Urban Rebel* (Bold utility cargos, streetwear kicks)
  4. *Classic Elegance & Old Money* (Heritage tailoring, double-breasted trench)
- **Results Card:** Includes personality breakdown, core capsule staples checklist, signature color swatches (with click-to-copy), and tailored outfit recommendations.
- **Persistent Storage:** Saved in `localStorage` so results persist on refresh.

### 5. 🎨 Mix & Match Studio
- **Interactive Visual Atelier:** Combine separates across categories:
  - *Tops* (Shirts, knits, blouses, vests)
  - *Bottoms* (Pleated trousers, wide-leg denim, skirts)
  - *Dresses* (Satin gowns, slip dresses)
  - *Shoes* (Loafers, trainers, heels, boots)
  - *Accessories* (Shoulder bags, gold chains, sunglasses, silk scarves)
- **Live Canvas Display:** Layered preview with dynamic Stylist Synergy Score (e.g., 96% Harmony Match).
- **Total Price Calculator:** Calculates real-time total look investment.
- **Shuffle Button:** Instant randomized looks for spontaneous inspiration.
- **Save to Wardrobe:** Automatically saves custom combos directly to the user's digital wardrobe!

### 6. 👗 My Digital Wardrobe
- **Virtual Closet Organizer:** Pre-seeded with fashionable capsule items.
- **Add Garment Modal:**
  - Name, category, color picker & name, season, occasion, notes.
  - **Dual Image Input:** Supports both external image URLs and **direct local photo upload from the device** (encoded to Base64 data URL)!
- **Closet AI Outfit Generator:** Button *“Style Outfit From My Closet”* dynamically selects and pairs pieces from what the user already owns!
- **Persistent LocalStorage:** Items, custom uploads, and removals persist across reloads.
- **Reset Option:** Easily restore default curated capsule items.

### 7. 💌 Wishlist Moodboard
- **Saved Looks Gallery:** Persistent across browser refreshes via `localStorage`.
- **Active Badge Counter:** Dynamically updates in the navigation bar.
- **Total Portfolio Valuation:** Displays the cumulative estimated value of saved looks.
- **Share Moodboard:** Copies shareable link to clipboard.
- **Chic Empty State:** Visual prompt directing users to explore.

### 8. 🏷️ Budget-Friendly Fashion Studio
- **Interactive Range Slider:** Slide between ₹800 and ₹7,000 with quick preset pills (Under ₹1,000, ₹2,000, ₹3,500, ₹5,000, ₹7,000).
- **Live Budget Filter:** Filters all catalog ensembles within the exact budget cap.
- **Pro Stylist Hacks:** "How to Make Budget Clothes Look Luxury" (Steam & de-pill, tonal monochrome, button swaps, structured layers).

---

## 🛠️ Technology Stack & Libraries

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern component-based frontend architecture |
| **Vite 8** | High-performance build tool and hot module replacement |
| **CSS3 Custom Design System** | CSS variables, glassmorphism, responsive grid & keyframes |
| **React Icons (`react-icons`)** | Feather (`fi`), Heroicons (`hi`), Game Icons (`gi`), FontAwesome (`fa`) |
| **Canvas Confetti (`canvas-confetti`)** | Celebratory animations on quiz completion |
| **LocalStorage API** | Persistent client-side state for Wishlist, Wardrobe, and Quiz results |

---

## 📂 Project Directory Structure

```
StyleSync/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── ColorPaletteSection.jsx  # Trending swatches with click-to-copy
│   │   ├── FashionTipCard.jsx       # Daily fashion wisdom widget
│   │   ├── Footer.jsx               # Editorial footer with newsletter & socials
│   │   ├── Navbar.jsx               # Sticky glassmorphic navbar & mobile drawer
│   │   ├── OutfitCard.jsx           # Pinterest-style rounded outfit card
│   │   ├── OutfitModal.jsx          # Quick-view modal with piece-by-piece breakdown
│   │   └── Toast.jsx                # Global floating notification pill
│   ├── context/
│   │   └── FashionContext.jsx       # Centralized state (Wishlist, Wardrobe, Quiz, Modal)
│   ├── data/
│   │   └── fashionData.js           # Curated looks, quiz questions, mix-match pieces
│   ├── pages/
│   │   ├── BudgetFashionPage.jsx    # Interactive budget slider & luxury hacks
│   │   ├── ExplorePage.jsx          # Filterable & searchable outfit gallery
│   │   ├── HomePage.jsx             # Hero, categories, trending looks, guide
│   │   ├── MixMatchPage.jsx         # Interactive outfit builder & mannequin canvas
│   │   ├── RecommendationPage.jsx   # Multi-criteria personal stylist engine
│   │   ├── StyleQuizPage.jsx        # Step-by-step fashion personality test
│   │   ├── WardrobePage.jsx         # Virtual closet with photo upload & generator
│   │   └── WishlistPage.jsx         # Persistent moodboard & portfolio value
│   ├── App.css                      # App container styling
│   ├── App.jsx                      # Main layout controller
│   ├── index.css                    # Design system (palette, typography, animations)
│   └── main.jsx                     # Application root render
├── index.html                       # HTML5 entry with Google Fonts
├── package.json                     # Dependencies & scripts
└── vite.config.js                   # Vite configuration
```

---

## 🚀 How to Run the Project Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to experience **StyleSync**.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

---

## 🎓 Academic Presentation Notes (B.Tech CSE Mini-Project)

1. **State Management & Persistence:** Demonstrates decoupling UI state from local persistence using React Context API + browser `localStorage` synchronization with custom error boundaries.
2. **Dynamic Algorithmic Matching:** Demonstrates multi-variable weighted scoring (Gender + Occasion + Season + Style + Budget) in the recommendation engine.
3. **Interactive Media Handling:** Integrates client-side file reading (`FileReader` API) to convert user-selected images into Base64 URLs stored without requiring an external backend.
4. **Responsive Mobile-First UI/UX:** Responsive breakpoints, custom CSS grid, glassmorphic filters, and interactive feedback toasts ensure production-grade user experience.
