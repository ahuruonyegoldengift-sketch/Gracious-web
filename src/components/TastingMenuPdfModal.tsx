import React from 'react';
import { X, Printer, Download, Sparkles } from 'lucide-react';
import { MENU_ITEMS, DEGUSTATION_MENU } from '../data/restaurantData';

interface TastingMenuPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TastingMenuPdfModal: React.FC<TastingMenuPdfModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full max-h-[92vh] bg-[#F8F3EA] text-[#211A1C] rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-[#876A28]/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="p-4 px-6 bg-[#211A1C] text-[#F8F3EA] flex items-center justify-between border-b border-[#876A28]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#e9c176]" />
            <span className="font-serif text-lg tracking-wider text-[#e9c176]">
              Éclat • Official Tasting Card
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#e9c176] text-[#0e0e0e] text-xs font-sans font-semibold uppercase tracking-wider hover:bg-[#c5a059] transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="text-[#d1c5b4] hover:text-white transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper Menu Sheet (Printable format) */}
        <div className="p-8 sm:p-12 overflow-y-auto flex-1 space-y-8 print:p-0">
          {/* Header */}
          <div className="text-center pb-6 border-b border-[#211A1C]/20">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#876A28] font-bold">
              HAUTE GASTRONOMIE • NEW YORK
            </p>
            <h1 className="font-serif text-4xl text-[#211A1C] mt-2 mb-1 tracking-wider">
              ÉCLAT RESTAURANT
            </h1>
            <p className="font-serif italic text-sm text-[#524447]">
              Grand Dégustation Nocturne de Saison
            </p>
            <p className="text-[11px] font-sans uppercase tracking-widest text-[#876A28] mt-2">
              Chef Émile Laurent • Sommelier Marcus Vance
            </p>
          </div>

          {/* Tasting Courses */}
          <div className="space-y-6 max-w-xl mx-auto">
            {DEGUSTATION_MENU.map((item, idx) => (
              <div key={idx} className="text-center">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#876A28]">
                  {item.course}
                </span>
                <h3 className="font-serif text-lg text-[#211A1C] font-semibold">{item.title}</h3>
                <p className="font-serif text-xs text-[#524447] italic mt-0.5">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Pricing & Cellar */}
          <div className="pt-6 border-t border-[#211A1C]/20 text-center text-xs font-sans text-[#524447] space-y-1">
            <p className="font-serif text-base text-[#211A1C] font-semibold">
              Prix Fixe: $195 per guest
            </p>
            <p>Master Sommelier Cellar Vault Pairing: $145</p>
            <p className="text-[10px] text-[#876A28] uppercase tracking-wider pt-2">
              482 Lexington Avenue, Grand Suite, New York, NY 10017 • (212) 555-0194
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
