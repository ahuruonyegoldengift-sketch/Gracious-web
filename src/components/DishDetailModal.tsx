import React from 'react';
import { MenuItem } from '../types';
import { X, Wine, Sparkles, ChefHat } from 'lucide-react';

interface DishDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onReserve: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({ item, onClose, onReserve }) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#1c1b1b] rounded-2xl overflow-hidden border border-[#4e4639] shadow-2xl animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 text-[#e5e2e1] hover:text-[#e9c176] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Realistic High-Res Food Photography */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover filter brightness-95 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b] via-transparent to-black/30"></div>
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <span className="font-sans text-[11px] font-bold text-[#e9c176] uppercase tracking-[0.2em] bg-[#131313]/80 px-2.5 py-1 rounded backdrop-blur-sm border border-[#e9c176]/30">
                {item.category.toUpperCase()}
              </span>
              {item.frenchSubtitle && (
                <p className="font-serif italic text-sm text-[#d1c5b4] mt-2 text-shadow">
                  {item.frenchSubtitle}
                </p>
              )}
            </div>
            <span className="font-serif text-3xl text-[#e9c176] font-semibold bg-[#131313]/90 px-3 py-1 rounded border border-[#e9c176]/40">
              ${item.price}
            </span>
          </div>
        </div>

        {/* Modal Details */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#e5e2e1] font-normal mb-2">
              {item.name}
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#d1c5b4] leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Tags */}
          {item.tags && (
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-xs uppercase tracking-wider text-[#e9c176] border border-[#e9c176]/40 px-2.5 py-1 rounded bg-[#e9c176]/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Sommelier Pairing Note */}
          {item.sommelierNote && (
            <div className="p-4 rounded-xl bg-[#201f1f] border border-[#4e4639] flex items-start gap-3">
              <div className="w-8 h-8 rounded bg-[#e9c176]/10 border border-[#e9c176]/30 flex items-center justify-center shrink-0 mt-0.5">
                <Wine className="w-4 h-4 text-[#e9c176]" />
              </div>
              <div>
                <p className="font-sans text-[11px] font-bold text-[#e9c176] uppercase tracking-wider">
                  Sommelier Pairing Suggestion
                </p>
                <p className="font-serif text-sm text-[#e5e2e1] mt-0.5 italic">
                  {item.sommelierNote}
                </p>
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-2 flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="text-xs font-sans text-[#9a8f80] hover:text-[#e5e2e1] uppercase tracking-wider"
            >
              Close Details
            </button>

            <button
              onClick={() => {
                onClose();
                onReserve();
              }}
              className="px-6 py-3 rounded bg-[#e9c176] text-[#0e0e0e] font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#c5a059] transition-colors gold-glow cursor-pointer"
            >
              Reserve Table For This Dish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
