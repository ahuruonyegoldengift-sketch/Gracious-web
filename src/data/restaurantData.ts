import { MenuItem, WineItem, GalleryItem } from '../types';

export const GRAND_HALL_IMAGE = '/images/grand-hall-reception-round-tables.jpg';
export const MEZZANINE_TABLES_IMAGE = '/images/mezzanine-tables.jpg';
export const WINE_BAR_IMAGE = '/images/wine-bar-shelves.jpg';
export const BREAKFAST_SPREAD_IMAGE = '/images/breakfast-table.jpg';

export const HOTLINK_MAIN_IMAGE = GRAND_HALL_IMAGE;

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 'starter-1',
    name: 'Artisanal Hearth Loaf & Morning Harvest',
    category: 'starters',
    frenchSubtitle: 'Pain au Levain Artisanal, Baies Sauvages & Beurre de Baratte',
    price: 26,
    description:
      'Warm wood-fired rustic sourdough slices, fresh mountain blackberries, raspberries, citrus reduction, and whipped cultured butter.',
    tags: ['Artisanal', 'House Specialty'],
    image: BREAKFAST_SPREAD_IMAGE,
    sommelierNote: 'Suggested pairing: Freshly pressed blood orange nectar or NV Grand Cru Brut Champagne',
  },
  {
    id: 'starter-2',
    name: 'Wagyu Beef Carpaccio',
    category: 'starters',
    frenchSubtitle: 'Carpaccio de Bœuf Wagyu A5 Miyazaki',
    price: 34,
    description:
      'A5 Miyazaki tenderloin, pickled shallots, caper emulsion, cured egg yolk, micro mustard greens.',
    tags: ['Signature', 'Gluten Free'],
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    sommelierNote: 'Suggested pairing: 2018 Barolo Monvigliero, Comm. G.B. Burlotto',
  },
  {
    id: 'starter-3',
    name: 'Hokkaido Scallop Crudo',
    category: 'starters',
    frenchSubtitle: 'Crudo de Saint-Jacques de Hokkaido',
    price: 32,
    description:
      'Blood orange ponzu, finger lime caviar, sea fennel, cold-pressed Sicilian olive nectar.',
    tags: ['Gluten Free', 'Raw Bar'],
    image:
      'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80',
    sommelierNote: 'Suggested pairing: NV Champagne Grand Cru Brut, Egly-Ouriet',
  },

  // Mains
  {
    id: 'main-1',
    name: 'Dry-Aged Duck Breast',
    category: 'mains',
    frenchSubtitle: 'Magret de Canard Affiné au Miel de Lavande',
    price: 54,
    description:
      'Lavender honey glaze, charred parsnip puree, spiced sour cherry jus, wilted chicory salad.',
    tags: ['Chef Special'],
    image:
      'https://images.unsplash.com/photo-1514944298352-f15598bbd469?auto=format&fit=crop&w=1200&q=80',
    sommelierNote: 'Suggested pairing: 2017 Vosne-Romanée, Domaine Dujac',
  },
  {
    id: 'main-2',
    name: 'Pan-Roasted Chilean Sea Bass',
    category: 'mains',
    frenchSubtitle: 'Bar du Chili Rôti au Fumée de Safran',
    price: 62,
    description:
      'Saffron fumet, tender baby leeks, Manila clams, Meyer lemon emulsion, sea beans.',
    tags: ['Signature', 'Gluten Free'],
    image:
      'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80',
    sommelierNote: 'Suggested pairing: 2019 Chassagne-Montrachet 1er Cru, Fontaine-Gagnard',
  },
  {
    id: 'main-3',
    name: 'Wild Morel Risotto',
    category: 'mains',
    frenchSubtitle: 'Risotto Carnaroli aux Morilles Sauvages',
    price: 44,
    description:
      'Acquerello carnaroli, 36-month aged Parmigiano-Reggiano, black garlic confit, fresh garden tarragon.',
    tags: ['Vegetarian', 'Vegan Option'],
    image:
      'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=1200&q=80',
    sommelierNote: 'Suggested pairing: 2016 Brunello di Montalcino, Biondi-Santi',
  },

  // Cocktails & Mixology
  {
    id: 'cocktail-1',
    name: 'The Reserve Cellar Highball',
    category: 'cocktails',
    frenchSubtitle: 'Highball Doré aux Rhums & Spiritueux Rares',
    price: 24,
    description:
      'Aged dark rum and rare Japanese whisky blend from our illuminated vault, roasted cedar smoke infusion, raw golden honey syrup, tonic sparkling pearl.',
    tags: ['Reserve Mixology', 'Backlit Vault'],
    image: WINE_BAR_IMAGE,
    sommelierNote: 'Crafted over hand-carved ice sphere with edible 24k gold leaf accent.',
  },
  {
    id: 'cocktail-2',
    name: 'Velvet Truffle Martini',
    category: 'cocktails',
    frenchSubtitle: 'Martini Velours aux Truffes Blanches',
    price: 26,
    description:
      'Grey Goose VX, dry vermouth washed with Alba white truffle oil, olive caviar spheres.',
    tags: ['Signature Cocktail'],
    image:
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
    sommelierNote: 'Served ice-cold in Austrian Riedel coupe crystal.',
  },
  {
    id: 'cocktail-3',
    name: 'Midnight Botanist Old Fashioned',
    category: 'cocktails',
    frenchSubtitle: 'Old Fashioned Nocturne au Fumé de Noyer',
    price: 25,
    description:
      'WhistlePig 10 Rye, toasted walnut bitters, charred demerara syrup, orange oils misted with peat.',
    tags: ['Smoked Tableside'],
    image:
      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1200&q=80',
    sommelierNote: 'Smoked under glass bell with Appalachian hickory.',
  },

  // Desserts
  {
    id: 'dessert-1',
    name: 'Valrhona Grand Cru Soufflé',
    category: 'desserts',
    frenchSubtitle: 'Soufflé Chaud au Chocolat Valrhona 70%',
    price: 22,
    description:
      '70% Guanaja dark chocolate molten core, chilled Madagascar bourbon vanilla bean gelato.',
    tags: ['Prepared to Order (15 min)'],
    image:
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=80',
    sommelierNote: 'Suggested pairing: 2015 Château Suduiraut Sauternes 1er Cru',
  },
  {
    id: 'dessert-2',
    name: 'Smoked Bergamot Tart',
    category: 'desserts',
    frenchSubtitle: 'Tartelette Bergamote Fumée & Meringue Flambée',
    price: 19,
    description:
      'Torched French meringue peaks, candied yuzu peel, flaky hazelnut shortcrust, 24k gold dust.',
    tags: ['Signature Sweet'],
    image:
      'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1200&q=80',
    sommelierNote: 'Suggested pairing: NV Moscato d’Asti, Vietti "Cascinetta"',
  },
];

export const DEGUSTATION_MENU = [
  { course: 'Course 1', title: 'Hokkaido Scallop Crudo', detail: 'Finger lime caviar, sea fennel, cold-pressed olive nectar' },
  { course: 'Course 2', title: 'Truffle Velouté & Chanterelles', detail: 'Winter black truffles, crème fraîche, chanterelle dust' },
  { course: 'Course 3', title: 'A5 Miyazaki Wagyu Tartlet', detail: 'Quail egg confit, smoked shallot marmalade' },
  { course: 'Course 4', title: 'Pan-Roasted Chilean Sea Bass', detail: 'Saffron fumet, baby leeks, clams, Meyer lemon' },
  { course: 'Course 5', title: 'Dry-Aged Moulard Duck Breast', detail: 'Lavender honey, charred parsnip puree, spiced cherry' },
  { course: 'Course 6', title: 'Pre-Dessert Palate Cleanser', detail: 'White peach granite, champagne foam, mint crystal' },
  { course: 'Course 7', title: 'Valrhona Grand Cru Soufflé', detail: 'Bourbon vanilla bean gelato, dark chocolate ganache' },
];

export const CELLAR_VAULT: WineItem[] = [
  {
    id: 'wine-1',
    name: 'Dom Pérignon Vintage Champagne',
    vintage: '2013',
    region: 'Épernay, Champagne',
    country: 'France',
    category: 'Champagne & Sparkling',
    notes: 'Smoky minerality, toasted brioche, white flowers, lemon curd with laser-focused tension.',
    priceBottle: 480,
    priceGlass: 85,
    featured: true,
  },
  {
    id: 'wine-2',
    name: 'Louis Roederer Cristal Brut',
    vintage: '2014',
    region: 'Montagne de Reims, Champagne',
    country: 'France',
    category: 'Champagne & Sparkling',
    notes: 'Crystalline texture, chalky limestone vibrancy, white peach, roasted almond nuance.',
    priceBottle: 620,
    featured: true,
  },
  {
    id: 'wine-3',
    name: 'Domaine Leflaive Puligny-Montrachet',
    vintage: '2020',
    region: 'Côte de Beaune, Burgundy',
    country: 'France',
    category: 'White',
    notes: 'Pure aristocracy. Ripe citrus, crushed oyster shells, flint, and silky hazelnut finish.',
    priceBottle: 390,
    priceGlass: 68,
    featured: true,
  },
  {
    id: 'wine-4',
    name: 'Château Margaux Premier Grand Cru',
    vintage: '2010',
    region: 'Margaux, Bordeaux',
    country: 'France',
    category: 'Red',
    notes: 'Legendary vintage. Violet florals, cassis, cedar box, graphite, and velvet-cloaked tannins.',
    priceBottle: 1450,
    featured: true,
  },
  {
    id: 'wine-5',
    name: 'Tenuta San Guido Sassicaia',
    vintage: '2018',
    region: 'Bolgheri, Tuscany',
    country: 'Italy',
    category: 'Red',
    notes: 'Wild blackberries, cypress, crushed stones, refined tobacco leaf, and vibrant Mediterranean acidity.',
    priceBottle: 520,
    priceGlass: 90,
    featured: true,
  },
  {
    id: 'wine-6',
    name: 'Château d’Yquem 1er Cru Supérieur',
    vintage: '2009',
    region: 'Sauternes, Bordeaux',
    country: 'France',
    category: 'Dessert & Port',
    notes: 'Saffron, candied apricots, honeycomb, Seville orange marmalade, infinite botrytis elegance.',
    priceBottle: 780,
    priceGlass: 110,
    featured: true,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Grand Hall Reception',
    subtitle: 'Grand Banquet Tables & Chandelier Colonnades',
    category: 'Architecture',
    image: GRAND_HALL_IMAGE,
    description:
      'High vaulted timber ceilings framed by suspended greenery chandeliers, glowing candelabras, and elegant round reception dining tables.',
  },
  {
    id: 'gal-2',
    title: 'The Mezzanine Balcony',
    subtitle: 'Sunlit Skylight & Private Dining Tables',
    category: 'Sanctuary',
    image: MEZZANINE_TABLES_IMAGE,
    description:
      'Contemporary sun-drenched sanctuary under arched glass skylights, featuring minimalist round dining tables, herringbone parquet floors, and curated tasting arrangements.',
  },
  {
    id: 'gal-3',
    title: 'Nocturnal Libations Bar',
    subtitle: 'Illuminated Bar Shelves & Rare Spirits',
    category: 'Mixology',
    image: WINE_BAR_IMAGE,
    description:
      'Warmly illuminated amber bar shelves showcasing rare Caribbean rums, small-batch liqueurs, and hand-crafted cocktail botanicals.',
  },
  {
    id: 'gal-4',
    title: 'Artisanal Hearth & Morning Brunch',
    subtitle: 'Fresh Sourdough, Orchard Berries & Elixirs',
    category: 'Cuisine',
    image: BREAKFAST_SPREAD_IMAGE,
    description:
      'Handcrafted breakfast and brunch spread featuring warm sliced rustic sourdough loaf, wild orchard blackberries and raspberries, fresh-squeezed citrus, and boutique roast coffee.',
  },
];
