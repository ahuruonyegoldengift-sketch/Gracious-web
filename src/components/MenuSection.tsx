import React, { useState } from 'react';
import { MENU_ITEMS, DEGUSTATION_MENU } from '../data/restaurantData';
import { MenuItem } from '../types';
import { FileText, Eye, Sparkles, ChefHat } from 'lucide-react';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  onOpenReservation: () => void;
  onOpenPdfPreview: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectItem,
  onOpenReservation,
  onOpenPdfPreview,
}) => {
  const [activeTab, setActiveTab] = useState<'a-la-carte' | 'degustation'>('a-la-carte');

  const starters = MENU_ITEMS.filter((item) => item.category === 'starters');
  const mains = MENU_ITEMS.filter((item) => item.category === 'mains');
  const cocktails = MENU_ITEMS.filter((item) => item.category === 'cocktails');
  const desserts = MENU_ITEMS.filter((item) => item.category === 'desserts');

  return (
    <section id="menu" className="py-24 md:py-32 bg-[#F8F3EA] text-[#211A1C] transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="font-sans text-xs text-[#876A28] uppercase tracking-[0.25em] mb-2 font-bold flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            HAUTE CUISINE
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-[#211A1C] mb-4 font-normal">
            Curated Culinary Selection
          </h2>
          <div className="w-16 h-0.5 bg-[#876A28]/40 mx-auto mb-4"></div>
          <p className="font-sans text-base text-[#524447] italic">
            "Good food brings people together."
          </p>

          {/* Menu Type Selector Tabs */}
          <div className="inline-flex rounded border border-[#876A28]/30 bg-white/60 p-1 mt-6 shadow-sm">
            <button
              onClick={() => setActiveTab('a-la-carte')}
              className={`px-5 py-2 rounded text-xs font-sans uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                activeTab === 'a-la-carte'
                  ? 'bg-[#211A1C] text-[#F8F3EA] shadow'
                  : 'text-[#524447] hover:text-[#211A1C]'
              }`}
            >
              À La Carte Menu
            </button>
            <button
              onClick={() => setActiveTab('degustation')}
              className={`px-5 py-2 rounded text-xs font-sans uppercase tracking-wider font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'degustation'
                  ? 'bg-[#211A1C] text-[#F8F3EA] shadow'
                  : 'text-[#524447] hover:text-[#211A1C]'
              }`}
            >
              <ChefHat className="w-3.5 h-3.5 text-[#876A28]" />
              7-Course Tasting Menu ($195)
            </button>
          </div>
        </div>

        {activeTab === 'a-la-carte' ? (
          <>
            {/* Top Two Columns: Starters & Mains */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {/* Starters Column */}
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#211A1C]/20 mb-8">
                  <h3 className="font-serif text-2xl text-[#211A1C] uppercase tracking-wider font-normal">
                    Starters
                  </h3>
                  <span className="font-sans text-xs tracking-widest text-[#876A28] font-bold">
                    ENTRÉES
                  </span>
                </div>

                <div className="space-y-8">
                  {starters.map((item) => (
                    <div
                      key={item.id}
                      id={`menu-item-${item.id}`}
                      onClick={() => onSelectItem(item)}
                      className="group cursor-pointer p-2 -mx-2 rounded hover:bg-[#efe8dc]/50 transition-colors"
                    >
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-serif text-lg md:text-xl text-[#211A1C] font-semibold group-hover:text-[#876A28] transition-colors flex items-center gap-2">
                          {item.name}
                          <Eye className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#876A28] transition-opacity" />
                        </span>
                        <span className="flex-grow mx-3 border-b border-dotted border-[#211A1C]/30"></span>
                        <span className="font-serif text-lg text-[#876A28] font-semibold">
                          ${item.price}
                        </span>
                      </div>
                      <p className="font-sans text-sm text-[#524447] leading-relaxed">
                        {item.description}
                      </p>
                      {item.tags && item.tags.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] uppercase font-semibold text-[#876A28] border border-[#876A28]/40 px-2 py-0.5 rounded bg-[#876A28]/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Courses Column */}
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#211A1C]/20 mb-8">
                  <h3 className="font-serif text-2xl text-[#211A1C] uppercase tracking-wider font-normal">
                    Mains &amp; Grills
                  </h3>
                  <span className="font-sans text-xs tracking-widest text-[#876A28] font-bold">
                    PLATS PRINCIPAUX
                  </span>
                </div>

                <div className="space-y-8">
                  {mains.map((item) => (
                    <div
                      key={item.id}
                      id={`menu-item-${item.id}`}
                      onClick={() => onSelectItem(item)}
                      className="group cursor-pointer p-2 -mx-2 rounded hover:bg-[#efe8dc]/50 transition-colors"
                    >
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-serif text-lg md:text-xl text-[#211A1C] font-semibold group-hover:text-[#876A28] transition-colors flex items-center gap-2">
                          {item.name}
                          <Eye className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#876A28] transition-opacity" />
                        </span>
                        <span className="flex-grow mx-3 border-b border-dotted border-[#211A1C]/30"></span>
                        <span className="font-serif text-lg text-[#876A28] font-semibold">
                          ${item.price}
                        </span>
                      </div>
                      <p className="font-sans text-sm text-[#524447] leading-relaxed">
                        {item.description}
                      </p>
                      {item.tags && item.tags.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] uppercase font-semibold text-[#876A28] border border-[#876A28]/40 px-2 py-0.5 rounded bg-[#876A28]/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sommelier Wine & Cocktails Row */}
            <div className="mt-16 pt-12 border-t border-[#211A1C]/15 grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Cocktails */}
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#211A1C]/20 mb-6">
                  <h3 className="font-serif text-2xl text-[#211A1C] uppercase tracking-wider font-normal">
                    Cocktails
                  </h3>
                  <span className="font-sans text-xs tracking-widest text-[#876A28] font-bold">
                    MIXOLOGY
                  </span>
                </div>

                <div className="space-y-6">
                  {cocktails.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => onSelectItem(item)}
                      className="group cursor-pointer p-2 -mx-2 rounded hover:bg-[#efe8dc]/50 transition-colors"
                    >
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-serif text-lg text-[#211A1C] group-hover:text-[#876A28] transition-colors flex items-center gap-2">
                          {item.name}
                          <Eye className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#876A28] transition-opacity" />
                        </span>
                        <span className="flex-grow mx-3 border-b border-dotted border-[#211A1C]/30"></span>
                        <span className="font-serif text-base text-[#876A28] font-semibold">
                          ${item.price}
                        </span>
                      </div>
                      <p className="font-sans text-xs text-[#524447]">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desserts */}
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#211A1C]/20 mb-6">
                  <h3 className="font-serif text-2xl text-[#211A1C] uppercase tracking-wider font-normal">
                    Desserts
                  </h3>
                  <span className="font-sans text-xs tracking-widest text-[#876A28] font-bold">
                    SUCRÉ
                  </span>
                </div>

                <div className="space-y-6">
                  {desserts.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => onSelectItem(item)}
                      className="group cursor-pointer p-2 -mx-2 rounded hover:bg-[#efe8dc]/50 transition-colors"
                    >
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-serif text-lg text-[#211A1C] group-hover:text-[#876A28] transition-colors flex items-center gap-2">
                          {item.name}
                          <Eye className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#876A28] transition-opacity" />
                        </span>
                        <span className="flex-grow mx-3 border-b border-dotted border-[#211A1C]/30"></span>
                        <span className="font-serif text-base text-[#876A28] font-semibold">
                          ${item.price}
                        </span>
                      </div>
                      <p className="font-sans text-xs text-[#524447]">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Degustation 7-Course Tasting View */
          <div className="max-w-3xl mx-auto bg-white/70 border border-[#876A28]/30 rounded-xl p-8 md:p-12 shadow-md">
            <div className="text-center mb-8 pb-6 border-b border-[#211A1C]/15">
              <span className="font-sans text-xs text-[#876A28] uppercase tracking-[0.25em] font-bold">
                CHEF ÉMILE LAURENT'S SIGNATURE TASTING
              </span>
              <h3 className="font-serif text-3xl text-[#211A1C] mt-2 mb-2">
                Le Grand Voyage Gastronomique
              </h3>
              <p className="font-sans text-sm text-[#524447]">
                $195 per guest • Sommelier Grand Cru Wine Pairing +$145
              </p>
            </div>

            <div className="space-y-6">
              {DEGUSTATION_MENU.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-4 border-b border-[#211A1C]/10 last:border-0">
                  <div>
                    <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#876A28] block mb-0.5">
                      {item.course}
                    </span>
                    <h4 className="font-serif text-lg text-[#211A1C] font-semibold">{item.title}</h4>
                    <p className="font-sans text-xs text-[#524447] mt-0.5">{item.detail}</p>
                  </div>
                  <span className="font-serif text-xs text-[#876A28] italic whitespace-nowrap self-start sm:self-center">
                    Chef's Pairing
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#211A1C]/15 text-center">
              <button
                onClick={onOpenReservation}
                className="px-6 py-3 rounded bg-[#211A1C] text-[#F8F3EA] font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#876A28] transition-colors"
              >
                Reserve Tasting Experience
              </button>
            </div>
          </div>
        )}

        {/* Bottom CTA / Tasting Menu PDF button */}
        <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="download-menu-btn"
            onClick={onOpenPdfPreview}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-[#211A1C] text-[#F8F3EA] font-sans text-xs uppercase tracking-widest hover:bg-[#876A28] transition-colors shadow-lg cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#e9c176]" />
            <span>Download Tasting Menu (PDF)</span>
          </button>
          <span className="text-xs text-[#524447] italic">
            Click on any dish name to inspect photo &amp; sommelier pairing
          </span>
        </div>
      </div>
    </section>
  );
};
