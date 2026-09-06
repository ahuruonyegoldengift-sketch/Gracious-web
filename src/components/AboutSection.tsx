import React, { useState } from 'react';
import { MEZZANINE_TABLES_IMAGE } from '../data/restaurantData';
import { Star, ArrowRight, Award, Compass, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onOpenWineCellar: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenWineCellar }) => {
  const [activeLeader, setActiveLeader] = useState<'chef' | 'sommelier'>('chef');

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Image Showcase with Architectural Detail */}
        <div className="lg:col-span-6 relative">
          <div className="relative overflow-hidden rounded-xl lux-border-gold bg-[#1c1b1b] group shadow-2xl">
            <img
              id="about-architecture-img"
              alt="The Grand Mezzanine Dining Room"
              className="w-full h-[480px] sm:h-[540px] object-cover object-center filter contrast-110 group-hover:scale-105 transition-transform duration-700"
              src={MEZZANINE_TABLES_IMAGE}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent"></div>

            {/* Bottom floating atmospheric card */}
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#201f1f]/85 backdrop-blur-md rounded border border-[#4e4639] transition-all duration-300 group-hover:border-[#e9c176]/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-sans text-[11px] font-semibold text-[#e9c176] uppercase tracking-widest">
                    ESTABLISHED 2021
                  </p>
                  <p className="font-serif text-xl sm:text-2xl text-[#e5e2e1]">
                    The Grand Mezzanine &amp; Bar
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#e9c176]/10 border border-[#e9c176]/40 flex items-center justify-center">
                  <Star className="w-5 h-5 text-[#e9c176] fill-[#e9c176]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Editorial Text */}
        <div className="lg:col-span-6 flex flex-col justify-center lg:pl-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#e9c176]" />
            <p className="font-sans text-xs text-[#e9c176] uppercase tracking-[0.25em] font-semibold">
              Our Philosophy
            </p>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#e5e2e1] mb-6 font-normal leading-tight">
            An Architecture of Light, <br />
            <span className="italic text-[#e9c176] font-serif">Shadow &amp; Culinary Art</span>
          </h2>

          <p className="font-sans text-base text-[#d1c5b4] mb-6 leading-relaxed">
            At Éclat, dining transcends the plate. Nestled in a meticulously preserved historic
            landmark, our space marries soaring neo-classical colonnades with warm hanging amber
            lanterns and hand-carved mahogany balustrades.
          </p>

          <p className="font-sans text-base text-[#d1c5b4] mb-8 leading-relaxed">
            Every table is treated as an intimate sanctuary where our culinary brigade choreographs
            seasonally orchestrated multi-course tastings, punctuated by bespoke cellar selections
            poured with artisanal understanding.
          </p>

          {/* Leaders interactive cards */}
          <div className="grid grid-cols-2 gap-4 py-6 border-y border-[#4e4639] mb-8">
            <div
              onClick={() => setActiveLeader('chef')}
              className={`p-3 rounded transition-all cursor-pointer ${
                activeLeader === 'chef'
                  ? 'bg-[#201f1f] border border-[#e9c176]/40'
                  : 'hover:bg-[#1c1b1b]'
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <Award className="w-3.5 h-3.5 text-[#e9c176]" />
                <p className="font-serif text-lg text-[#e9c176] font-medium">Chef Émile Laurent</p>
              </div>
              <p className="font-sans text-xs text-[#c8c6c5]">
                Executive Chef &amp; Culinary Director
              </p>
              <p className="text-[11px] text-[#9a8f80] mt-1 font-light italic">
                3 Michelin Stars training, Paris &amp; Kyoto
              </p>
            </div>

            <div
              onClick={() => {
                setActiveLeader('sommelier');
                onOpenWineCellar();
              }}
              className={`p-3 rounded transition-all cursor-pointer ${
                activeLeader === 'sommelier'
                  ? 'bg-[#201f1f] border border-[#e9c176]/40'
                  : 'hover:bg-[#1c1b1b]'
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <Compass className="w-3.5 h-3.5 text-[#e9c176]" />
                <p className="font-serif text-lg text-[#e9c176] font-medium">Marcus Vance</p>
              </div>
              <p className="font-sans text-xs text-[#c8c6c5]">
                Master Sommelier &amp; Cellar Vault
              </p>
              <p className="text-[11px] text-[#9a8f80] mt-1 font-light italic">
                800+ Curated Terroirs &amp; Rare Vintages
              </p>
            </div>
          </div>

          {/* Navigation to gallery & atmosphere */}
          <div className="flex items-center gap-6">
            <a
              id="about-gallery-link"
              href="#gallery"
              className="inline-flex items-center gap-3 text-[#e9c176] hover:text-[#ffdea5] transition-colors font-sans text-xs uppercase tracking-widest font-semibold group"
            >
              <span>Discover The Atmosphere</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>

            <button
              onClick={onOpenWineCellar}
              className="text-[#9a8f80] hover:text-[#e9c176] transition-colors font-sans text-xs tracking-wider uppercase underline underline-offset-4 cursor-pointer"
            >
              Explore Cellar Vault
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
