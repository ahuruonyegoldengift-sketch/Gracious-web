import React, { useState } from 'react';
import { GALLERY_ITEMS, HOTLINK_MAIN_IMAGE } from '../data/restaurantData';
import { GalleryItem } from '../types';
import { Sparkles, Music, Wine, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GallerySectionProps {
  onOpenPrivateEvents: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenPrivateEvents }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = GALLERY_ITEMS.findIndex((i) => i.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    setSelectedImage(GALLERY_ITEMS[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedImage) return;
    const currentIndex = GALLERY_ITEMS.findIndex((i) => i.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setSelectedImage(GALLERY_ITEMS[prevIndex]);
  };

  return (
    <section id="gallery" className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <p className="font-sans text-xs text-[#e9c176] uppercase tracking-[0.2em] mb-2 font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            IMMERSIVE SPACES
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-[#e5e2e1] font-normal">
            Moments of Éclat
          </h2>
        </div>
        <p className="font-sans text-sm md:text-base text-[#d1c5b4] max-w-md mt-4 md:mt-0 font-light leading-relaxed">
          A visual journey through our multi-tiered mezzanine, illuminated cocktail salon, and secluded
          dining enclaves.
        </p>
      </div>

      {/* Asymmetrical Editorial Gallery Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Big Feature Image (Grand Hall) */}
        <div
          id="gallery-grand-hall"
          onClick={() => openLightbox(GALLERY_ITEMS[0])}
          className="md:col-span-8 relative rounded-xl overflow-hidden lux-border-gold min-h-[420px] group cursor-pointer shadow-xl"
        >
          <img
            alt="The Grand Hall Reception & Dining Tables"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
            src={GALLERY_ITEMS[0].image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent"></div>
          <div className="absolute top-4 right-4 bg-[#131313]/60 backdrop-blur-md p-2 rounded text-[#e9c176] opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="w-4 h-4" />
          </div>
          <div className="absolute bottom-6 left-6 right-6">
            <p className="font-sans text-[11px] font-semibold text-[#e9c176] uppercase tracking-widest mb-1">
              THE GRAND HALL
            </p>
            <h3 className="font-serif text-2xl text-[#e5e2e1]">
              Grand Banquet Tables &amp; Chandelier Colonnades
            </h3>
            <p className="font-sans text-xs text-[#d1c5b4] mt-1 line-clamp-2">
              High vaulted timber ceilings framed by suspended greenery chandeliers, glowing candelabras, and elegant round reception dining tables.
            </p>
          </div>
        </div>

        {/* Accent Image Card (Mezzanine Balcony) */}
        <div
          id="gallery-mezzanine"
          onClick={() => openLightbox(GALLERY_ITEMS[1])}
          className="md:col-span-4 relative rounded-xl overflow-hidden lux-border-gold min-h-[420px] group cursor-pointer shadow-xl"
        >
          <img
            alt="The Mezzanine Balcony Skylight Dining Tables"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
            src={GALLERY_ITEMS[1].image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/30 to-transparent"></div>
          <div className="absolute top-4 right-4 bg-[#131313]/60 backdrop-blur-md p-2 rounded text-[#e9c176] opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="w-4 h-4" />
          </div>
          <div className="absolute bottom-6 left-6 right-6">
            <p className="font-sans text-[11px] font-semibold text-[#e9c176] uppercase tracking-widest mb-1">
              THE MEZZANINE BALCONY
            </p>
            <h3 className="font-serif text-2xl text-[#e5e2e1]">
              Sunlit Skylight &amp; Private Tables
            </h3>
            <p className="font-sans text-xs text-[#d1c5b4] mt-1 line-clamp-2">
              Contemporary sun-drenched sanctuary under arched glass skylights with round dining tables and parquet floors.
            </p>
          </div>
        </div>

        {/* Left Bottom Card (Nocturnal Libations Bar) */}
        <div
          id="gallery-cocktail-lounge"
          onClick={() => openLightbox(GALLERY_ITEMS[2])}
          className="md:col-span-6 relative rounded-xl overflow-hidden lux-border-gold min-h-[360px] group cursor-pointer shadow-xl"
        >
          <img
            alt="Nocturnal Libations Bar Shelves"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
            src={GALLERY_ITEMS[2].image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/30 to-transparent"></div>
          <div className="absolute top-4 right-4 bg-[#131313]/60 backdrop-blur-md p-2 rounded text-[#e9c176] opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="w-4 h-4" />
          </div>
          <div className="absolute bottom-6 left-6 right-6">
            <p className="font-sans text-[11px] font-semibold text-[#e9c176] uppercase tracking-widest mb-1">
              NOCTURNAL LIBATIONS
            </p>
            <h3 className="font-serif text-2xl text-[#e5e2e1]">
              Illuminated Bar Shelves &amp; Spirits
            </h3>
            <p className="font-sans text-xs text-[#d1c5b4] mt-1 line-clamp-2">
              Warmly illuminated amber bar shelves showcasing rare rums, small-batch liqueurs, and hand-crafted cocktail botanicals.
            </p>
          </div>
        </div>

        {/* Right Bottom Card (Artisanal Hearth & Morning Brunch) */}
        <div
          id="gallery-hearth-brunch"
          onClick={() => openLightbox(GALLERY_ITEMS[3])}
          className="md:col-span-6 relative rounded-xl overflow-hidden lux-border-gold min-h-[360px] group cursor-pointer shadow-xl"
        >
          <img
            alt="Artisanal Hearth & Morning Brunch Table Spread"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
            src={GALLERY_ITEMS[3].image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/30 to-transparent"></div>
          <div className="absolute top-4 right-4 bg-[#131313]/60 backdrop-blur-md p-2 rounded text-[#e9c176] opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="w-4 h-4" />
          </div>
          <div className="absolute bottom-6 left-6 right-6">
            <p className="font-sans text-[11px] font-semibold text-[#e9c176] uppercase tracking-widest mb-1">
              ARTISANAL HEARTH &amp; BRUNCH
            </p>
            <h3 className="font-serif text-2xl text-[#e5e2e1]">
              Fresh Sourdough, Berries &amp; Elixirs
            </h3>
            <p className="font-sans text-xs text-[#d1c5b4] mt-1 line-clamp-2">
              Daily rustic sourdough bread, fresh orchard fruit bowls, citrus juices, and single-origin roast coffee.
            </p>
          </div>
        </div>

        {/* Full Width Banner (Private Receptions) */}
        <div
          id="gallery-private-receptions"
          className="md:col-span-12 relative rounded-xl overflow-hidden lux-border-gold min-h-[220px] group shadow-xl"
        >
          <img
            alt="Lounge Lighting & Texture"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.5]"
            src={HOTLINK_MAIN_IMAGE}
          />
          <div className="absolute inset-0 bg-[#0e0e0e]/60 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 flex flex-col sm:flex-row items-start sm:items-center justify-between p-8 gap-4">
            <div className="max-w-xl">
              <p className="font-sans text-[11px] font-semibold text-[#e9c176] uppercase tracking-widest mb-2">
                EXCLUSIVE PRIVATE RECEPTIONS
              </p>
              <h4 className="font-serif text-2xl md:text-3xl text-[#e5e2e1]">
                Reserve the Entire Sanctuary
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#d1c5b4] max-w-lg mt-2 leading-relaxed">
                Custom tasting menus tailored directly by Executive Chef Émile Laurent for premier
                events, galas, and celebrations with seating for up to 200 guests.
              </p>
            </div>
            <button
              id="gallery-inquire-btn"
              onClick={onOpenPrivateEvents}
              className="px-6 py-3 rounded bg-[#e9c176] text-[#0e0e0e] font-sans text-xs uppercase font-semibold hover:bg-[#c5a059] transition-all gold-glow cursor-pointer whitespace-nowrap"
            >
              Inquire Now
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#1c1b1b] rounded-xl overflow-hidden border border-[#4e4639]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-[#e5e2e1] hover:text-[#e9c176] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/60 text-[#e5e2e1] hover:text-[#e9c176] transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/60 text-[#e5e2e1] hover:text-[#e9c176] transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[70vh] object-cover"
            />

            <div className="p-6 bg-[#131313]">
              <span className="text-[11px] font-sans font-semibold text-[#e9c176] uppercase tracking-widest">
                {selectedImage.category}
              </span>
              <h3 className="font-serif text-2xl text-[#e5e2e1] mt-1">{selectedImage.title}</h3>
              <p className="font-sans text-sm text-[#d1c5b4] mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
