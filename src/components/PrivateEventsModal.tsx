import React, { useState } from 'react';
import { GRAND_HALL_IMAGE } from '../data/restaurantData';
import { X, CheckCircle2, Sparkles, Building2, Users, Calendar } from 'lucide-react';

interface PrivateEventsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivateEventsModal: React.FC<PrivateEventsModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [inquiry, setInquiry] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    guestCount: '25-40 Guests (The Mezzanine Balcony)',
    eventType: 'Cocktail Reception & Tasting',
    preferredDate: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#1c1b1b] rounded-2xl overflow-hidden border border-[#4e4639] shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Visual Banner */}
        <div className="relative h-40 sm:h-48 w-full overflow-hidden shrink-0">
          <img
            src={GRAND_HALL_IMAGE}
            alt="The Grand Hall Reception Banquet"
            className="w-full h-full object-cover filter brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b] via-[#1c1b1b]/60 to-transparent"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#131313]/80 border border-[#4e4639] flex items-center justify-center text-[#9a8f80] hover:text-[#e9c176] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#e9c176]" />
              <span className="font-sans text-[11px] text-[#e9c176] uppercase tracking-[0.25em] font-semibold">
                Private Dining &amp; Galas
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#e5e2e1]">
              Reserve the Entire Sanctuary
            </h3>
          </div>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto">
          <p className="font-sans text-xs sm:text-sm text-[#d1c5b4] mb-6 leading-relaxed">
            From secluded Mezzanine dinners for 40 to complete sanctuary buyouts with bespoke multi-course menus designed directly by Chef Émile Laurent.
          </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-wider text-[#e9c176] font-semibold mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={inquiry.name}
                  onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
                  placeholder="Count Alexander"
                  className="w-full bg-[#131313] border border-[#4e4639] rounded text-sm text-[#e5e2e1] px-3 py-2 focus:border-[#e9c176] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-wider text-[#e9c176] font-semibold mb-1">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={inquiry.company}
                  onChange={(e) => setInquiry({ ...inquiry, company: e.target.value })}
                  placeholder="Optional"
                  className="w-full bg-[#131313] border border-[#4e4639] rounded text-sm text-[#e5e2e1] px-3 py-2 focus:border-[#e9c176] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-wider text-[#e9c176] font-semibold mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={inquiry.email}
                  onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
                  placeholder="alexander@domain.com"
                  className="w-full bg-[#131313] border border-[#4e4639] rounded text-sm text-[#e5e2e1] px-3 py-2 focus:border-[#e9c176] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-wider text-[#e9c176] font-semibold mb-1">
                  Direct Telephone
                </label>
                <input
                  type="tel"
                  required
                  value={inquiry.phone}
                  onChange={(e) => setInquiry({ ...inquiry, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-[#131313] border border-[#4e4639] rounded text-sm text-[#e5e2e1] px-3 py-2 focus:border-[#e9c176] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-wider text-[#e9c176] font-semibold mb-1">
                  Space &amp; Guest Count
                </label>
                <select
                  value={inquiry.guestCount}
                  onChange={(e) => setInquiry({ ...inquiry, guestCount: e.target.value })}
                  className="w-full bg-[#131313] border border-[#4e4639] rounded text-sm text-[#e5e2e1] px-3 py-2 focus:border-[#e9c176] focus:outline-none"
                >
                  <option value="12-20 Guests (Intimate Sommelier Salon)">12-20 Guests (Intimate Sommelier Salon)</option>
                  <option value="25-40 Guests (The Mezzanine Balcony)">25-40 Guests (The Mezzanine Balcony)</option>
                  <option value="50-120 Guests (Full Sanctuary Buyout)">50-120 Guests (Full Sanctuary Buyout)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-wider text-[#e9c176] font-semibold mb-1">
                  Target Event Date
                </label>
                <input
                  type="date"
                  required
                  value={inquiry.preferredDate}
                  onChange={(e) => setInquiry({ ...inquiry, preferredDate: e.target.value })}
                  className="w-full bg-[#131313] border border-[#4e4639] rounded text-sm text-[#e5e2e1] px-3 py-2 focus:border-[#e9c176] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-sans uppercase tracking-wider text-[#e9c176] font-semibold mb-1">
                Event Overview &amp; Special Desires
              </label>
              <textarea
                rows={3}
                value={inquiry.notes}
                onChange={(e) => setInquiry({ ...inquiry, notes: e.target.value })}
                placeholder="Details regarding wine pairings, live vinyl acoustic requests, or dietary restrictions..."
                className="w-full bg-[#131313] border border-[#4e4639] rounded text-sm text-[#e5e2e1] p-3 focus:border-[#e9c176] focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded bg-[#e9c176] text-[#0e0e0e] font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#c5a059] transition-colors gold-glow cursor-pointer"
            >
              Submit Sanctuary Inquiry
            </button>
          </form>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#e9c176]/20 border border-[#e9c176] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-[#e9c176]" />
            </div>
            <h4 className="font-serif text-2xl text-[#e9c176]">Inquiry Received</h4>
            <p className="font-sans text-sm text-[#d1c5b4] max-w-md mx-auto leading-relaxed">
              Our Director of Private Dining will reach out within 2 hours to curate your customized culinary itinerary and discuss cellar allocations.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded bg-[#131313] border border-[#e9c176] text-[#e9c176] font-sans text-xs uppercase tracking-wider hover:bg-[#e9c176] hover:text-[#0e0e0e] transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
  );
};
