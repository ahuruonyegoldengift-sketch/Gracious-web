import React from 'react';
import { WINE_BAR_IMAGE } from '../data/restaurantData';
import { Wine, Clock, Percent, Sparkles, ArrowUpRight } from 'lucide-react';

interface HappyHourSectionProps {
  onOpenWineCellar: () => void;
}

export const HappyHourSection: React.FC<HappyHourSectionProps> = ({ onOpenWineCellar }) => {
  return (
    <section className="py-16 md:py-20 bg-[#0e0e0e] border-y border-[#4e4639]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Happy Hour Card (2 Columns) */}
          <div
            id="happy-hour-card"
            className="md:col-span-2 relative p-8 md:p-12 rounded-xl bg-[#201f1f] border border-[#4e4639] flex flex-col justify-between overflow-hidden shadow-xl"
          >
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="font-sans text-xs text-[#e9c176] px-3.5 py-1 rounded bg-[#e9c176]/10 border border-[#e9c176]/30 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  Signature Apéritif Hour
                </span>
                <p className="font-sans text-xs text-[#d1c5b4] flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#e9c176]" />
                  Wednesday – Friday: 5:00 PM – 7:00 PM
                </p>
              </div>

              <h3 className="font-serif text-3xl md:text-4xl text-[#e5e2e1] mb-4 font-normal">
                Happy Hour <span className="italic text-[#e9c176] font-serif">at Éclat</span>
              </h3>

              <p className="font-sans text-sm md:text-base text-[#d1c5b4] max-w-xl mb-6 leading-relaxed">
                Indulge in half-priced artisanal small bites, craft botanical infusions, and reserve
                pours from our sommelier’s open bottles every Wednesday, Thursday, and Friday.
              </p>

              <div className="inline-flex items-baseline gap-3 bg-[#2a2a2a] px-5 py-3 rounded border border-[#4e4639] mb-6">
                <div className="flex items-center gap-2">
                  <Percent className="w-4 h-4 text-[#e9c176]" />
                  <span className="font-serif text-2xl md:text-3xl text-[#e9c176] font-medium">
                    50% off
                  </span>
                </div>
                <span className="font-sans text-xs text-[#d1c5b4] uppercase tracking-wider">
                  Select Food &amp; Signature Drinks
                </span>
              </div>
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-6 text-xs font-sans text-[#c8c6c5] pt-4 border-t border-[#4e4639]/50">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e9c176]"></span>
                Handcrafted Libations
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e9c176]"></span>
                Truffle Gougères
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e9c176]"></span>
                Freshly Shucked Oysters
              </span>
            </div>
          </div>

          {/* Wine with Understanding Card (1 Column) */}
          <div
            id="wine-note-card"
            className="relative p-8 md:p-10 rounded-xl overflow-hidden border border-[#4e4639] flex flex-col justify-between shadow-xl group bg-[#1c1b1b]"
          >
            <img
              src={WINE_BAR_IMAGE}
              alt="Reserve Bar Shelves"
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.22] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/70 to-[#131313]/60"></div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-lg bg-[#e9c176]/10 border border-[#e9c176]/30 flex items-center justify-center mb-6">
                <Wine className="w-6 h-6 text-[#e9c176]" />
              </div>
              <p className="font-sans text-[11px] font-semibold text-[#e9c176] uppercase tracking-widest mb-2">
                SOMMELIER'S NOTE
              </p>
              <h4 className="font-serif text-2xl text-[#e5e2e1] mb-3">Wine with Understanding</h4>
              <p className="font-sans text-sm text-[#d1c5b4] mb-6 leading-relaxed">
                Acidity, terroir, and vintage balance. We demystify reserve bottles so every sip enhances
                your dining companion’s selection.
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-[#4e4639]/60">
              <p className="font-serif text-sm italic text-[#d1c5b4] mb-4">
                "Taste deeper. Enjoy better."
              </p>
              <button
                id="view-wine-list-btn"
                onClick={onOpenWineCellar}
                className="font-sans text-xs uppercase tracking-wider font-semibold text-[#e9c176] hover:text-[#ffdea5] flex items-center gap-1.5 group cursor-pointer"
              >
                <span>View Wine List &amp; Cellar</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
