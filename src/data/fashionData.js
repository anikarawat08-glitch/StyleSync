// StyleSync Curated Fashion Dataset

export const FASHION_CATEGORIES = [
  {
    id: "all",
    name: "All Styles",
    icon: "✨",
    count: 24,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "korean",
    name: "Korean Chic",
    icon: "🌸",
    count: 8,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "aesthetic",
    name: "Aesthetic Minimal",
    icon: "🕊️",
    count: 10,
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "streetwear",
    name: "Urban Streetwear",
    icon: "🛹",
    count: 7,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "formal",
    name: "Old Money & Work",
    icon: "💼",
    count: 9,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "traditional",
    name: "Festive & Ethnic",
    icon: "🪞",
    count: 6,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "casual",
    name: "Everyday Effortless",
    icon: "☕",
    count: 12,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80"
  }
];

export const OUTFITS = [
  {
    id: "outfit-1",
    name: "Parisian Linen & Trench",
    tagline: "Effortless French girl warmth with tailored neutral layers",
    category: "aesthetic",
    gender: "women",
    occasion: "Office",
    season: "Summer",
    style: "Aesthetic",
    budgetTier: "mid",
    price: 3499,
    rating: 4.9,
    likes: 842,
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80",
    description: "A breezy cream linen blend structured with a fluid drape camel trench. Balances corporate professionalism with relaxed European sophistication.",
    items: [
      { name: "Oatmeal Linen Vest", price: 999, category: "Tops" },
      { name: "High-Waist Pleated Trousers", price: 1299, category: "Bottoms" },
      { name: "Pointed Leather Loafers", price: 899, category: "Shoes" },
      { name: "Minimalist Gold Huggies", price: 302, category: "Accessories" }
    ],
    colors: ["#FDFBF7", "#E6D7C3", "#C5A880", "#2E282A"],
    stylingTips: "Roll the trouser hem once and wear delicate gold jewelry to maintain an elongated, airy silhouette."
  },
  {
    id: "outfit-2",
    name: "Seoul Pastel Oversized Knit",
    tagline: "Soft K-drama aesthetic with cozy drop-shoulder tailoring",
    category: "korean",
    gender: "women",
    occasion: "College",
    season: "Winter",
    style: "Korean",
    budgetTier: "budget",
    price: 1899,
    rating: 4.8,
    likes: 1230,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    description: "The hallmark Seoul campus style featuring an oversized lavender-blush knit sweater tucked loosely into a tennis pleated or tailored straight skirt.",
    items: [
      { name: "Pastel Chunky Crewneck", price: 799, category: "Tops" },
      { name: "A-Line Corduroy Mini Skirt", price: 599, category: "Bottoms" },
      { name: "Platform Canvas Sneakers", price: 399, category: "Shoes" },
      { name: "Canvas Crossbody Tote", price: 102, category: "Accessories" }
    ],
    colors: ["#FAD2E1", "#E2ECE9", "#BEE1E6", "#FFF1E6"],
    stylingTips: "Half-tuck the sweater at the front center to define the waistline without losing the relaxed drape."
  },
  {
    id: "outfit-3",
    name: "Sunset Golden Hour Slip & Blazer",
    tagline: "Satin glow paired with structured menswear silhouette",
    category: "aesthetic",
    gender: "women",
    occasion: "Date",
    season: "Summer",
    style: "Aesthetic",
    budgetTier: "mid",
    price: 3899,
    rating: 5.0,
    likes: 954,
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
    description: "A champagne satin bias-cut slip dress offset by an oversized ecru wool-blend blazer. Striking the ideal tension between feminine allure and architectural structure.",
    items: [
      { name: "Champagne Bias Slip Dress", price: 1899, category: "Dresses" },
      { name: "Oversized Ecru Dad Blazer", price: 1299, category: "Outerwear" },
      { name: "Strappy Kitten Heels", price: 499, category: "Shoes" },
      { name: "Pearl Drop Earrings", price: 202, category: "Accessories" }
    ],
    colors: ["#F9F5F0", "#E8D5B5", "#8C7B6B", "#D4AF37"],
    stylingTips: "Drape the blazer loosely over your shoulders for cocktail hours, or belt it around the waist for a sleeker dinner look."
  },
  {
    id: "outfit-4",
    name: "Cyber Tokyo Oversized Streetwear",
    tagline: "Edgy monochrome utility with high-top footwear",
    category: "streetwear",
    gender: "unisex",
    occasion: "Party",
    season: "Winter",
    style: "Streetwear",
    budgetTier: "budget",
    price: 2499,
    rating: 4.7,
    likes: 712,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    description: "Heavyweight drop-shoulder graphic hoodie paired with tactical multi-pocket cargo pants and chunky platform kicks. Urban comfort at its peak.",
    items: [
      { name: "Heavyweight Charcoal Boxy Hoodie", price: 999, category: "Tops" },
      { name: "Wide-Leg Utility Cargo Pants", price: 899, category: "Bottoms" },
      { name: "Retro High-Top Kicks", price: 499, category: "Shoes" },
      { name: "Industrial Crossbody Pouch", price: 102, category: "Accessories" }
    ],
    colors: ["#232323", "#4A4E69", "#9A8C98", "#F2E9E4"],
    stylingTips: "Cinch the bottom ankle toggles on your cargos to accentuate statement high-top sneakers."
  },
  {
    id: "outfit-5",
    name: "Regal Ivory & Gold Chanderi Ensemble",
    tagline: "Contemporary festive fusion with delicate zardozi detailing",
    category: "traditional",
    gender: "women",
    occasion: "Wedding",
    season: "Summer",
    style: "Traditional",
    budgetTier: "premium",
    price: 6899,
    rating: 4.9,
    likes: 1420,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    description: "A breathable ivory Chanderi silk anarkali kurta paired with flared organza dupatta finished in hand-worked marodi borders. Timeless Indian festive royalty.",
    items: [
      { name: "Ivory Gold Chanderi Kurta Set", price: 4299, category: "Dresses" },
      { name: "Sheer Organza Scalloped Dupatta", price: 1299, category: "Accessories" },
      { name: "Embellished Mojaris", price: 899, category: "Shoes" },
      { name: "Kundan Chandbali Earrings", price: 402, category: "Accessories" }
    ],
    colors: ["#FFFFF0", "#F3E5AB", "#D4AF37", "#990000"],
    stylingTips: "Keep makeup dewy with warm bronzed lids and a micro bindi to let the gold weave reflect ambient festive lighting."
  },
  {
    id: "outfit-6",
    name: "Milanese Tailored Wool Overcoat",
    tagline: "Sharply tailored corporate dominance in rich espresso tones",
    category: "formal",
    gender: "men",
    occasion: "Office",
    season: "Winter",
    style: "Formal",
    budgetTier: "premium",
    price: 5499,
    rating: 4.9,
    likes: 884,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    description: "A rich wool blend single-breasted topcoat over an Italian turtleneck knit and tapered micro-check trousers. The quintessential European executive look.",
    items: [
      { name: "Camel Wool Tailored Overcoat", price: 2999, category: "Outerwear" },
      { name: "Fine-Knit Black Mockneck", price: 999, category: "Tops" },
      { name: "Charcoal Wool Dress Trousers", price: 999, category: "Bottoms" },
      { name: "Burnished Oxford Brogues", price: 502, category: "Shoes" }
    ],
    colors: ["#3D2B1F", "#1A1A1A", "#6E6E6E", "#D8C3A5"],
    stylingTips: "Match your belt leather directly to your brogues' burnished patina for a seamless sartorial polish."
  },
  {
    id: "outfit-7",
    name: "Cozy Matcha Latte College Fit",
    tagline: "Relaxed campus layering with smart collegiate tones",
    category: "casual",
    gender: "unisex",
    occasion: "College",
    season: "Monsoon",
    style: "Casual",
    budgetTier: "budget",
    price: 1499,
    rating: 4.8,
    likes: 640,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
    description: "A sage green ribbed crewneck over an oversized crisp white poplin shirt, paired with vintage light-wash relaxed denim and water-resistant boots.",
    items: [
      { name: "Sage Knit Crewneck Sweater", price: 599, category: "Tops" },
      { name: "Straight Fit Washed Denim", price: 599, category: "Bottoms" },
      { name: "Lug-Sole Chunky Loafers", price: 201, category: "Shoes" },
      { name: "Corduroy College Backpack", price: 100, category: "Accessories" }
    ],
    colors: ["#A3B18A", "#DAD7CD", "#344E41", "#588157"],
    stylingTips: "Let the crisp white collar peek out 1 inch above the sweater neckline for an instant preppy upgrade."
  },
  {
    id: "outfit-8",
    name: "Monsoon Coastal Linen Resort",
    tagline: "Breathable airy neutrals built for humid tropical evenings",
    category: "casual",
    gender: "men",
    occasion: "Casual",
    season: "Monsoon",
    style: "Aesthetic",
    budgetTier: "budget",
    price: 1999,
    rating: 4.7,
    likes: 512,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    description: "A camp-collar open-weave Cuban shirt worn over relaxed drawstring linen pants. Keeps you breezy, dry, and impeccably styled during humid weather.",
    items: [
      { name: "Camp Collar Textured Linen Shirt", price: 799, category: "Tops" },
      { name: "Drawstring Ecru Linen Trousers", price: 799, category: "Bottoms" },
      { name: "Woven Slip-on Espadrilles", price: 299, category: "Shoes" },
      { name: "Tortoise Shell Shades", price: 102, category: "Accessories" }
    ],
    colors: ["#F5F5DC", "#D2B48C", "#4682B4", "#2F4F4F"],
    stylingTips: "Leave the top two buttons unbuttoned and pair with braided leather bracelets for breezy coastal charm."
  },
  {
    id: "outfit-9",
    name: "Velvet Midnight Glamour Jumpsuit",
    tagline: "Deep jewel tones crafted for rooftop parties and soirees",
    category: "aesthetic",
    gender: "women",
    occasion: "Party",
    season: "Winter",
    style: "Formal",
    budgetTier: "mid",
    price: 3299,
    rating: 4.9,
    likes: 1105,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
    description: "An emerald green plush velvet wide-leg jumpsuit with a sculpted sweetheart neckline and metallic gold chain belt.",
    items: [
      { name: "Plush Emerald Velvet Jumpsuit", price: 2199, category: "Dresses" },
      { name: "Metallic Gold Link Waist Belt", price: 399, category: "Accessories" },
      { name: "Pointed Ankle-Strap Pumps", price: 599, category: "Shoes" },
      { name: "Glitter Box Clutch", price: 102, category: "Accessories" }
    ],
    colors: ["#0B3C26", "#042014", "#D4AF37", "#1E1E1E"],
    stylingTips: "Apply a deep berry lip and wear hair in a high slick bun to highlight the architectural neckline."
  },
  {
    id: "outfit-10",
    name: "Korean Minimalist Trench & Beret",
    tagline: "Autumnal street chic inspired by Hongdae art districts",
    category: "korean",
    gender: "women",
    occasion: "Date",
    season: "Winter",
    style: "Korean",
    budgetTier: "mid",
    price: 3699,
    rating: 4.9,
    likes: 1540,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    description: "A tailored beige trench coat worn over a ribbed mockneck top and plaid pleated A-line skirt, crowned with a wool felt beret.",
    items: [
      { name: "Classic Double-Breasted Trench", price: 1999, category: "Outerwear" },
      { name: "Ribbed Warm Ivory Mockneck", price: 699, category: "Tops" },
      { name: "Houndstooth Pleated Midi Skirt", price: 699, category: "Bottoms" },
      { name: "Chelsea Leather Ankle Boots", price: 302, category: "Shoes" }
    ],
    colors: ["#EAD8C0", "#A79277", "#FFF2E1", "#332924"],
    stylingTips: "Tilt the beret at a subtle 15-degree angle and pair with ankle boots and ribbed knee-high socks."
  },
  {
    id: "outfit-11",
    name: "Monochrome Minimalist Athleisure",
    tagline: "Clean silhouette tailored for weekend brunch and travel",
    category: "casual",
    gender: "unisex",
    occasion: "Casual",
    season: "Summer",
    style: "Casual",
    budgetTier: "budget",
    price: 1399,
    rating: 4.6,
    likes: 490,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    description: "An oatmeal seamless crop tank paired with fluid high-waisted ribbed lounge pants and pristine minimalist dad sneakers.",
    items: [
      { name: "Seamless Ribbed Tank", price: 399, category: "Tops" },
      { name: "Wide Leg Flared Lounge Pant", price: 599, category: "Bottoms" },
      { name: "Chunky White Trainers", price: 301, category: "Shoes" },
      { name: "Minimalist Baseball Cap", price: 100, category: "Accessories" }
    ],
    colors: ["#F5F5F0", "#E0DED8", "#B8B5AD", "#222222"],
    stylingTips: "Throw a lightweight linen shirt unbuttoned over top for sun protection and effortless movement."
  },
  {
    id: "outfit-12",
    name: "Modern Kurta with Nehru Jacket",
    tagline: "Sharp Indian ethnic wear for celebrations and cocktail evenings",
    category: "traditional",
    gender: "men",
    occasion: "Wedding",
    season: "Winter",
    style: "Traditional",
    budgetTier: "mid",
    price: 3999,
    rating: 4.8,
    likes: 923,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
    description: "A midnight navy raw silk kurta churidar paired with a jacquard woven self-textured Nehru bundi jacket with antique metal buttons.",
    items: [
      { name: "Navy Silk Straight Cut Kurta", price: 1699, category: "Tops" },
      { name: "Brocade Textured Nehru Jacket", price: 1299, category: "Outerwear" },
      { name: "Ivory Cotton Churidar", price: 499, category: "Bottoms" },
      { name: "Tan Leather Kolhapuris", price: 502, category: "Shoes" }
    ],
    colors: ["#001F3F", "#C0A080", "#FFFFFF", "#85144b"],
    stylingTips: "Insert a pocket square in contrasting burnt orange or muted gold to break the solid navy silhouette."
  }
];

// Mix & Match Wardrobe Inventory
export const MIX_MATCH_ITEMS = {
  tops: [
    {
      id: "mm-top-1",
      name: "Ivory Silk Button-Down",
      color: "Ivory",
      price: 899,
      style: "Aesthetic",
      image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "mm-top-2",
      name: "Oversized Charcoal Graphic Tee",
      color: "Charcoal",
      price: 499,
      style: "Streetwear",
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "mm-top-3",
      name: "Blush Cropped Cardigan",
      color: "Blush Pink",
      price: 799,
      style: "Korean",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "mm-top-4",
      name: "Tailored Camel Structured Vest",
      color: "Camel",
      price: 999,
      style: "Formal",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=500&q=80"
    }
  ],
  bottoms: [
    {
      id: "mm-bot-1",
      name: "High-Waist Beige Trousers",
      color: "Warm Beige",
      price: 1199,
      style: "Formal",
      image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "mm-bot-2",
      name: "Wide-Leg Vintage Blue Denim",
      color: "Vintage Blue",
      price: 999,
      style: "Casual",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "mm-bot-3",
      name: "Pleated Tennis Mini Skirt",
      color: "Cream",
      price: 699,
      style: "Korean",
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "mm-bot-4",
      name: "Satin Bias Slip Midi Skirt",
      color: "Mocha",
      price: 899,
      style: "Aesthetic",
      image: "https://images.unsplash.com/photo-1577900232427-18219b9166a0?auto=format&fit=crop&w=500&q=80"
    }
  ],
  dresses: [
    {
      id: "mm-dress-1",
      name: "Champagne Satin Slip Gown",
      color: "Champagne",
      price: 1899,
      style: "Aesthetic",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "mm-dress-2",
      name: "Little Black Corset Dress",
      color: "Black",
      price: 1599,
      style: "Party",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "mm-dress-3",
      name: "Floral Wrap Summer Dress",
      color: "Pastel Blossom",
      price: 1299,
      style: "Casual",
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=500&q=80"
    }
  ],
  shoes: [
    {
      id: "mm-shoe-1",
      name: "Classic White Minimal Trainers",
      color: "Pure White",
      price: 799,
      style: "Casual",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "mm-shoe-2",
      name: "Pointed Chunky Leather Loafers",
      color: "Espresso",
      price: 999,
      style: "Formal",
      image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "mm-shoe-3",
      name: "Barely-There Strappy Heeled Sandals",
      color: "Nude Rose",
      price: 899,
      style: "Aesthetic",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "mm-shoe-4",
      name: "Lug Sole Chelsea Boots",
      color: "Black",
      price: 1299,
      style: "Streetwear",
      image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=500&q=80"
    }
  ],
  accessories: [
    {
      id: "mm-acc-1",
      name: "Quilted Leather Shoulder Bag",
      color: "Cloud Cream",
      price: 799,
      style: "Aesthetic",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "mm-acc-2",
      name: "Dainty Layered Gold Herringbone Chains",
      color: "Gold",
      price: 399,
      style: "Aesthetic",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "mm-acc-3",
      name: "Vintage Oval Tortoiseshell Sunglasses",
      color: "Amber Brown",
      price: 499,
      style: "Korean",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "mm-acc-4",
      name: "French Silk Twilly Scarf",
      color: "Peach Rose",
      price: 299,
      style: "Formal",
      image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=500&q=80"
    }
  ]
};

// Personality Quiz Questions
export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What does your dream Saturday outfit look like?",
    subtitle: "Choose the vibe that immediately feels like 'you'",
    options: [
      {
        text: "Clean linen trousers, white button-down & gold hoops",
        archetype: "minimalist",
        icon: "☕",
        vibe: "Understated Elegance"
      },
      {
        text: "Oversized pastel knit sweater with pleated mini skirt & sneakers",
        archetype: "korean",
        icon: "🌸",
        vibe: "Soft & Youthful"
      },
      {
        text: "Baggy utility cargos, graphic crop tee & chunky high-tops",
        archetype: "streetwear",
        icon: "🛹",
        vibe: "Bold & Street-Savvy"
      },
      {
        text: "Sharp double-breasted blazer, silk cami & pointed loafers",
        archetype: "old_money",
        icon: "🏛️",
        vibe: "Polished Prestige"
      }
    ]
  },
  {
    id: 2,
    question: "Which color palette makes you feel radiant and confident?",
    subtitle: "Colors speak louder than trends",
    options: [
      {
        text: "Cream, Warm Taupe, Champagne & Espresso",
        archetype: "minimalist",
        icon: "🌾",
        vibe: "Earthy Neutrals"
      },
      {
        text: "Matcha green, powdery baby blue & soft blush pink",
        archetype: "korean",
        icon: "🍡",
        vibe: "Dreamy Pastels"
      },
      {
        text: "Pitch black, gunmetal, reflective grey & neon accents",
        archetype: "streetwear",
        icon: "⚡",
        vibe: "High Contrast"
      },
      {
        text: "Navy blue, ivory, camel tan & deep burgundy",
        archetype: "old_money",
        icon: "🍷",
        vibe: "Regal Classics"
      }
    ]
  },
  {
    id: 3,
    question: "Pick the footwear you could wear for 48 hours straight:",
    subtitle: "Footwear anchors your entire outfit energy",
    options: [
      {
        text: "Minimalist leather slide mules or almond-toe ballet flats",
        archetype: "minimalist",
        icon: "🥿",
        vibe: "Timeless Comfort"
      },
      {
        text: "Chunky platform dad sneakers with white ribbed socks",
        archetype: "korean",
        icon: "👟",
        vibe: "Trendy & Bouncy"
      },
      {
        text: "Retro Jordan high-tops or platform combat boots",
        archetype: "streetwear",
        icon: "🥾",
        vibe: "Edgy Attitude"
      },
      {
        text: "Handmade horsebit loafers or polished ankle Chelsea boots",
        archetype: "old_money",
        icon: "👞",
        vibe: "Sartorial Polish"
      }
    ]
  },
  {
    id: 4,
    question: "How do you treat accessories in your daily look?",
    subtitle: "The finishing touch that defines your personality",
    options: [
      {
        text: "Barely-there: one thin gold necklace, tiny studs, classic watch",
        archetype: "minimalist",
        icon: "✨",
        vibe: "Subtle Luxury"
      },
      {
        text: "Playful: hair ribbons, pastel beaded bracelets, cute claw clips",
        archetype: "korean",
        icon: "🎀",
        vibe: "Whimsical Charm"
      },
      {
        text: "Statement: heavy chain link chokers, bucket hats, utility bag",
        archetype: "streetwear",
        icon: "⛓️",
        vibe: "Fearless Impact"
      },
      {
        text: "Heritage: silk twill scarf, signet ring, structured leather bag",
        archetype: "old_money",
        icon: "💼",
        vibe: "Heirloom Quality"
      }
    ]
  },
  {
    id: 5,
    question: "What is your #1 golden rule when shopping?",
    subtitle: "What is the true motivation behind your purchases?",
    options: [
      {
        text: "Will this seamlessly integrate into my capsule wardrobe?",
        archetype: "minimalist",
        icon: "🌿",
        vibe: "Versatility & Fabric"
      },
      {
        text: "Does it look adorable in photos and give cozy cute energy?",
        archetype: "korean",
        icon: "📸",
        vibe: "Aesthetic Appeal"
      },
      {
        text: "Is it unique, hyped, and expressive of my individuality?",
        archetype: "streetwear",
        icon: "🔥",
        vibe: "Originality"
      },
      {
        text: "Is the tailoring impeccable and will it last for decades?",
        archetype: "old_money",
        icon: "⏳",
        vibe: "Longevity & Fit"
      }
    ]
  }
];

// Quiz Style Archetypes
export const STYLE_ARCHETYPES = {
  minimalist: {
    title: "The Chic Minimalist",
    subtitle: "Quiet Luxury, Clean Lines & Timeless Neutrals",
    description: "You believe that less is genuinely more. Your power lies in sublime fabrics, tailored silhouettes, and an effortless aesthetic that feels expensive without having to shout.",
    palette: ["#FAF7F2", "#E8D5B5", "#8C7B6B", "#2E282A", "#D4AF37"],
    staples: ["Fluid Pleated Trousers", "Oversized Poplin Shirt", "Champagne Satin Slip", "Leather Loafers", "Fine Gold Hoops"],
    recommendedOutfitIds: ["outfit-1", "outfit-3", "outfit-8"]
  },
  korean: {
    title: "Seoul Soft Glam Trendsetter",
    subtitle: "Playful Proportions, Pastel Hugs & K-Fashion Charm",
    description: "You capture the magnetic spirit of modern Gangnam street fashion. Oversized silhouettes balanced with delicate textures, soft colors, and playful accessories make your looks unforgettable.",
    palette: ["#FAD2E1", "#E2ECE9", "#BEE1E6", "#FFF1E6", "#DDBEA9"],
    staples: ["Drop-Shoulder Chunky Knit", "Tennis Pleated Skirt", "Platform Canvas Kicks", "Beret / Hair Ribbon", "Cropped Cardigan"],
    recommendedOutfitIds: ["outfit-2", "outfit-10", "outfit-7"]
  },
  streetwear: {
    title: "The Urban Rebel",
    subtitle: "Bold Utility, High Contrast & Fearless Street Spirit",
    description: "Rules are meant to be rewritten. You embrace oversized street silhouettes, multi-pocket utility layers, and statement sneakers with raw, magnetic confidence.",
    palette: ["#121212", "#4A4E69", "#F2E9E4", "#FF4A4A", "#9A8C98"],
    staples: ["Heavyweight Boxy Hoodie", "Cargo Parachute Pants", "Retro High-Tops", "Industrial Crossbody", "Statement Beanie"],
    recommendedOutfitIds: ["outfit-4", "outfit-7", "outfit-11"]
  },
  old_money: {
    title: "Classic Elegance & Old Money",
    subtitle: "Heritage Tailoring, Aristocratic Neutrals & Sartorial Mastery",
    description: "Your style belongs in an editorial shoot in Milan or St. Moritz. Pristine collars, structured trench coats, cashmere knits, and burnished leather accessories reflect timeless status.",
    palette: ["#001F3F", "#C0A080", "#3D2B1F", "#FFFFF0", "#556B2F"],
    staples: ["Double-Breasted Wool Overcoat", "Fine-Knit Mockneck", "Structured Leather Tote", "Horsebit Brogues", "Silk Twilly Scarf"],
    recommendedOutfitIds: ["outfit-6", "outfit-10", "outfit-12"]
  }
};

// Daily Fashion Wisdom Tips
export const FASHION_TIPS = [
  {
    id: 1,
    category: "Proportion & Silhouette",
    tip: "The Rule of Thirds: Divide your outfit into 1/3 top and 2/3 bottom (or vice versa) rather than splitting 50/50. A high-waisted trouser with a tucked-in top instantly elongates your legs.",
    author: "StyleSync Fashion Directors"
  },
  {
    id: 2,
    category: "Color Theory",
    tip: "The 60-30-10 Palette Principle: Use 60% dominant neutral (e.g., beige or cream), 30% complementary tone (e.g., olive or mocha), and 10% punchy accent (e.g., gold jewelry or a ruby bag).",
    author: "Color Harmonies Lab"
  },
  {
    id: 3,
    category: "Capsule Wardrobe",
    tip: "Invest in high-contact pieces first: Good outerwear, quality leather footwear, and a well-fitted blazer carry 80% of your visual impact, even when paired with budget t-shirts.",
    author: "Minimalist Stylist Series"
  },
  {
    id: 4,
    category: "Monochrome Magic",
    tip: "When wearing head-to-toe single color (like all ivory or all black), mix at least 3 distinct textures (e.g., ribbed knit + smooth satin + chunky suede) to prevent looking flat.",
    author: "Editorial Runway Guide"
  },
  {
    id: 5,
    category: "Accessory Power",
    tip: "The Neckline & Jewelry Match: Pair scoop and square necklines with pendant chains, turtlenecks with long layered necklaces, and deep V-necks with dainty chokers.",
    author: "Jewelry Styling Desk"
  }
];

// Color Combination Guides
export const COLOR_PALETTES = [
  {
    name: "Parisian Oat & Rose",
    season: "All-Season",
    colors: [
      { hex: "#FDFBF7", name: "Warm Cream" },
      { hex: "#F7EDE2", name: "Almond Milk" },
      { hex: "#F5D0C5", name: "Soft Blush" },
      { hex: "#846B63", name: "French Taupe" }
    ],
    vibe: "Delicate, soft and naturally flattering against every skin tone."
  },
  {
    name: "Old Money Equestrian",
    season: "Autumn / Winter",
    colors: [
      { hex: "#1B2A4A", name: "Regatta Navy" },
      { hex: "#C59B27", name: "Antique Gold" },
      { hex: "#4A3525", name: "Saddle Leather" },
      { hex: "#FAF5EF", name: "Pristine Bone" }
    ],
    vibe: "High society elegance that commands respect in boardrooms and galleries."
  },
  {
    name: "Matcha Latte & Sage",
    season: "Spring / Monsoon",
    colors: [
      { hex: "#A3B18A", name: "Matcha Leaf" },
      { hex: "#DAD7CD", name: "Pebble Grey" },
      { hex: "#588157", name: "Forest Sage" },
      { hex: "#344E41", name: "Deep Spruce" }
    ],
    vibe: "Serene, organic and calming; ideal for casual coffee dates and campuses."
  },
  {
    name: "Midnight Cocktail & Ruby",
    season: "Evening / Party",
    colors: [
      { hex: "#0F1115", name: "Midnight Onyx" },
      { hex: "#800E13", name: "Spiced Merlot" },
      { hex: "#D4AF37", name: "Champagne Gold" },
      { hex: "#F5F3F4", name: "Chiffon White" }
    ],
    vibe: "Dramatic, alluring and magnetic for celebrations and night outings."
  }
];

// Pre-seeded Wardrobe Items
export const INITIAL_WARDROBE_ITEMS = [
  {
    id: "ward-1",
    name: "Classic Beige Trench Coat",
    category: "Outerwear",
    color: "#E6D7C3",
    colorName: "Warm Beige",
    season: "All-Season",
    occasion: "Office",
    notes: "Essential capsule piece, goes with everything.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80",
    dateAdded: "2026-11-10"
  },
  {
    id: "ward-2",
    name: "High-Rise Pleated Ivory Trousers",
    category: "Bottoms",
    color: "#FDFBF7",
    colorName: "Ivory",
    season: "Summer",
    occasion: "College",
    notes: "Super comfortable drape, bought during spring sale.",
    image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=600&q=80",
    dateAdded: "2026-11-12"
  },
  {
    id: "ward-3",
    name: "Chunky Pastel Knit Sweater",
    category: "Tops",
    color: "#FAD2E1",
    colorName: "Blush Pink",
    season: "Winter",
    occasion: "Casual",
    notes: "Cozy weekend knit for cold mornings.",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80",
    dateAdded: "2026-11-14"
  },
  {
    id: "ward-4",
    name: "Minimalist White Leather Sneakers",
    category: "Shoes",
    color: "#FFFFFF",
    colorName: "Pure White",
    season: "All-Season",
    occasion: "Casual",
    notes: "Everyday staple, wiped clean weekly.",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
    dateAdded: "2026-11-15"
  },
  {
    id: "ward-5",
    name: "Gold Multi-Layer Chain Necklace",
    category: "Accessories",
    color: "#D4AF37",
    colorName: "Warm Gold",
    season: "All-Season",
    occasion: "Party",
    notes: "Adds instant polish to basic tees and dress necklines.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
    dateAdded: "2026-11-16"
  }
];

// Budget Fashion Highlights
export const BUDGET_OUTFIT_COLLECTIONS = [
  {
    tier: 999,
    label: "Under ₹999",
    tagline: "Effortless Thrift & High-Street Chic",
    outfits: [
      {
        id: "bud-1",
        name: "Casual Street Coffee Run",
        price: 899,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
        breakdown: [
          { item: "Ribbed Cotton Crop Tank", cost: 299 },
          { item: "Linen Drawstring Shorts", cost: 399 },
          { item: "Canvas Tote Bag", cost: 201 }
        ],
        hack: "Pair monochromatic basics with structured canvas accessories to emulate Scandinavian minimal fashion."
      },
      {
        id: "bud-2",
        name: "Campus Prep Polo & Shorts",
        price: 949,
        image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80",
        breakdown: [
          { item: "Breathable Waffle Polo", cost: 449 },
          { item: "Pleated Chino Shorts", cost: 399 },
          { item: "Retro Ankle Socks (3-Pack)", cost: 101 }
        ],
        hack: "Button the collar completely up and tuck into high-waist bottoms for instant Ivy League aesthetics."
      }
    ]
  },
  {
    tier: 1999,
    label: "Under ₹1,999",
    tagline: "Smart Casual & Campus Glow-Up",
    outfits: [
      {
        id: "bud-3",
        name: "Pastel Chic Seoul Brunch",
        price: 1899,
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80",
        breakdown: [
          { item: "Oversized Soft Knit Cardigan", cost: 799 },
          { item: "Tailored Wide-Leg Trousers", cost: 799 },
          { item: "Dainty Pearl Drop Earrings", cost: 301 }
        ],
        hack: "French tuck the cardigan corner to balance the oversized volume with a defined silhouette."
      },
      {
        id: "bud-4",
        name: "Monsoon Minimalist Resort Set",
        price: 1799,
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
        breakdown: [
          { item: "Camp Collar Linen Blend Shirt", cost: 799 },
          { item: "Relaxed Drawstring Pant", cost: 700 },
          { item: "Woven Slip-On Espadrilles", cost: 300 }
        ],
        hack: "Ironing linen creates clean lines, but natural wrinkles exude effortless vacation luxury."
      }
    ]
  },
  {
    tier: 3499,
    label: "Under ₹3,499",
    tagline: "Statement Evening & Date Night Glam",
    outfits: [
      {
        id: "bud-5",
        name: "Golden Hour Slip & Tailored Blazer",
        price: 3299,
        image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=600&q=80",
        breakdown: [
          { item: "Satin Bias Cut Midi Slip", cost: 1499 },
          { item: "Structured Dad Blazer", cost: 1299 },
          { item: "Strappy Block Heels", cost: 501 }
        ],
        hack: "Throwing an oversized blazer over a delicate slip dress balances glam with modern power dressing."
      },
      {
        id: "bud-6",
        name: "Contemporary Fusion Kurta Set",
        price: 2999,
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80",
        breakdown: [
          { item: "Raw Silk Straight Kurta", cost: 1499 },
          { item: "Woven Jacquard Bundi Jacket", cost: 1000 },
          { item: "Tan Handcrafted Mojaris", cost: 500 }
        ],
        hack: "Pair traditional kurtas with tapered ankle chinos for a modern Indo-western fusion flair."
      }
    ]
  }
];
