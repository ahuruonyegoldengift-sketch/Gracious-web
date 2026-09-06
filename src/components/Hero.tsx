import React from 'react';
import { HOTLINK_MAIN_IMAGE } from '../data/restaurantData';
import { Sparkles, ArrowRight, UtensilsCrossed } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
  onOpenWineCellar: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onOpenWineCellar }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Atmospheric Background Image with Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          id="hero-background-img"
          alt="Éclat Lounge Dining View"
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-125 scale-105 transition-transform duration-1000 ease-out"
          src={HOTLINK_MAIN_IMAGE}
        />
        {/* Cinematic gradient overlays matching HTML design */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#131313]/85 via-transparent to-[#131313]/85"></div>
      </div>

      {/* Editorial Centerpiece Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-16 text-center py-24">
        {/* Subtle pill badge */}
        <div
          id="hero-experience-badge"
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#e9c176]/30 bg-[#1c1b1b]/70 backdrop-blur-md mb-8 animate-fade-in"
        >
          <span className="w-2 h-2 rounded-full bg-[#e9c176] animate-pulse"></span>
          <p className="font-sans text-xs tracking-[0.2em] text-[#e9c176] uppercase font-semibold">
            An Elevated Dining Experience
          </p>
        </div>

        {/* Display Headline */}
        <h1
          id="hero-headline"
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#e5e2e1] font-normal tracking-tight mb-8 max-w-4xl mx-auto leading-[1.15]"
        >
          Where Exceptional Food Meets{' '}
          <span className="italic text-[#e9c176] font-serif font-normal">Unforgettable</span> Moments
        </h1>

        {/* Description */}
        <p
          id="hero-subtitle"
          className="font-sans text-base sm:text-lg text-[#d1c5b4] max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Curated nightfall gastronomy, rare vintage cellars, and a theatrical architectural lounge
          designed for those who appreciate sensory mastery.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            id="hero-reserve-cta-btn"
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-4 rounded bg-[#e9c176] text-[#0e0e0e] font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#c5a059] transition-all duration-300 gold-glow cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Reserve a Table</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            id="hero-menu-cta-btn"
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 rounded border border-[#9a8f80] hover:border-[#e9c176] text-[#e5e2e1] hover:text-[#e9c176] font-sans text-xs uppercase tracking-wider transition-all duration-300 backdrop-blur-sm bg-[#0e0e0e]/40 flex items-center justify-center gap-2"
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>Explore Menu</span>
          </a>
        </div>

        {/* Quick Feature Pill Highlights */}
        <div
          id="hero-highlights-grid"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 pt-8 border-t border-[#4e4639]/40 max-w-4xl mx-auto"
        >
          <div className="text-left border-l border-[#e9c176]/30 pl-4 py-1">
            <p className="font-sans text-[11px] font-semibold text-[#e9c176] tracking-wider mb-1">
              MICHELIN
            </p>
            <p className="font-serif text-sm text-[#e5e2e1]">Curated Pairings</p>
          </div>

          <div className="text-left border-l border-[#e9c176]/30 pl-4 py-1">
            <p className="font-sans text-[11px] font-semibold text-[#e9c176] tracking-wider mb-1">
              ATMOSPHERE
            </p>
            <p className="font-serif text-sm text-[#e5e2e1]">Nocturnal Luxury</p>
          </div>

          <button
            onClick={onOpenWineCellar}
            className="text-left border-l border-[#e9c176]/30 pl-4 py-1 hover:bg-[#201f1f]/40 transition-colors group cursor-pointer"
          >
            <p className="font-sans text-[11px] font-semibold text-[#e9c176] tracking-wider mb-1 group-hover:underline">
              CELLAR ↗
            </p>
            <p className="font-serif text-sm text-[#e5e2e1]">800+ Rare Labels</p>
          </button>

          <div className="text-left border-l border-[#e9c176]/30 pl-4 py-1">
            <p className="font-sans text-[11px] font-semibold text-[#e9c176] tracking-wider mb-1">
              VALET
            </p>
            <p className="font-serif text-sm text-[#e5e2e1]">Complimentary</p>
          </div>
        </div>
      </div>
    </section>
  );
};
