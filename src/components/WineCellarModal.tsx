import React, { useState } from 'react';
import { CELLAR_VAULT, WINE_BAR_IMAGE } from '../data/restaurantData';
import { WineItem } from '../types';
import { X, Wine, Sparkles, Compass, Search } from 'lucide-react';

interface WineCellarModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReserve: () => void;
}

export const WineCellarModal: React.FC<WineCellarModalProps> = ({ isOpen, onClose, onReserve }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const categories = ['All', 'Champagne & Sparkling', 'White', 'Red', 'Dessert & Port'];

  const filteredWines = CELLAR_VAULT.filter((wine) => {
    const matchesCategory = selectedCategory === 'All' || wine.category === selectedCategory;
    const matchesSearch =
      wine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      wine.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      wine.vintage.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] bg-[#1c1b1b] rounded-2xl overflow-hidden border border-[#4e4639] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Sommelier branding */}
        <div className="p-6 md:p-8 bg-[#131313] border-b border-[#4e4639] relative overflow-hidden">
          <img
            src={WINE_BAR_IMAGE}
            alt="Wine Cellar Vault Shelves"
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#131313] via-[#131313]/90 to-[#131313]/80"></div>

          <div className="relative z-10">
            <button
              onClick={onClose}
              className="absolute top-0 right-0 text-[#9a8f80] hover:text-[#e9c176] transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-[#e9c176]" />
            <span className="font-sans text-xs text-[#e9c176] uppercase tracking-[0.25em] font-semibold">
              Master Sommelier Marcus Vance
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#e5e2e1]">
            The Reserve Cellar Vault
          </h2>
          <p className="font-sans text-sm text-[#d1c5b4] mt-2 max-w-2xl leading-relaxed">
            Over 800 climate-controlled rare labels representing the greatest terroirs of Bordeaux,
            Burgundy, Champagne, Tuscany, and Napa Valley.
          </p>

          {/* Search & Category filter */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded text-xs font-sans uppercase tracking-wider transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#e9c176] text-[#0e0e0e] font-semibold'
                      : 'bg-[#201f1f] text-[#d1c5b4] hover:text-[#e9c176] border border-[#4e4639]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-[#9a8f80] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search vintage or château..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-[#201f1f] border border-[#4e4639] rounded text-xs text-[#e5e2e1] pl-9 pr-3 py-1.5 focus:border-[#e9c176] focus:outline-none w-full sm:w-56 placeholder:text-[#9a8f80]"
              />
            </div>
          </div>
        </div>
      </div>

        {/* Wine list scrollable body */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-4">
          {filteredWines.map((wine) => (
            <div
              key={wine.id}
              className="p-5 rounded-xl bg-[#201f1f] border border-[#4e4639] hover:border-[#e9c176]/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-[11px] font-bold text-[#e9c176] px-2 py-0.5 rounded bg-[#e9c176]/10 border border-[#e9c176]/30 uppercase">
                    {wine.vintage}
                  </span>
                  <span className="font-sans text-xs text-[#9a8f80] tracking-wider uppercase">
                    {wine.region}, {wine.country}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#e5e2e1] mt-1.5 font-medium">{wine.name}</h3>
                <p className="font-sans text-xs text-[#d1c5b4] mt-1 leading-relaxed">{wine.notes}</p>
              </div>

              <div className="flex items-center justify-between md:flex-col md:items-end gap-2 shrink-0 border-t md:border-t-0 pt-3 md:pt-0 border-[#4e4639]">
                <div className="text-right">
                  <p className="font-serif text-2xl text-[#e9c176] font-semibold">
                    ${wine.priceBottle}
                    <span className="text-xs font-sans text-[#9a8f80] font-normal ml-1">bottle</span>
                  </p>
                  {wine.priceGlass && (
                    <p className="text-xs font-sans text-[#d1c5b4]">
                      ${wine.priceGlass} by the glass
                    </p>
                  )}
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onReserve();
                  }}
                  className="px-3.5 py-1.5 rounded bg-[#131313] border border-[#e9c176]/40 hover:bg-[#e9c176] hover:text-[#0e0e0e] text-xs font-sans uppercase tracking-wider text-[#e9c176] transition-colors cursor-pointer"
                >
                  Reserve Bottle
                </button>
              </div>
            </div>
          ))}

          {filteredWines.length === 0 && (
            <div className="text-center py-12 text-[#9a8f80]">
              <Wine className="w-10 h-10 mx-auto text-[#4e4639] mb-3" />
              <p className="font-serif text-lg text-[#e5e2e1]">No vintages found</p>
              <p className="font-sans text-xs mt-1">Try adjusting your filter or search criteria.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 px-8 bg-[#131313] border-t border-[#4e4639] flex items-center justify-between text-xs text-[#9a8f80]">
          <span>Sommelier Consultation Available for Private Cellar Sourcing</span>
          <button
            onClick={() => {
              onClose();
              onReserve();
            }}
            className="text-[#e9c176] font-sans uppercase tracking-wider font-semibold hover:underline"
          >
            Book Sommelier Counter →
          </button>
        </div>
      </div>
    </div>
  );
};
