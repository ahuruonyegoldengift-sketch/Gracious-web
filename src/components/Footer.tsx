import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  onOpenWineCellar: () => void;
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWineCellar, onOpenReservation }) => {
  return (
    <footer id="contact" className="w-full py-20 md:py-28 bg-[#0e0e0e] border-t border-[#4e4639] text-[#e5e2e1]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-16 max-w-7xl mx-auto">
        {/* Brand & Mission Column */}
        <div className="space-y-4">
          <a href="#home" className="font-serif text-3xl text-[#e9c176] uppercase tracking-widest block">
            Éclat
          </a>
          <p className="font-sans text-sm text-[#d1c5b4] leading-relaxed">
            A nocturnal celebration of culinary artistry, vintage terroirs, and grand architecture.
            Designed for lingering conversation and unforgettable evenings.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenReservation}
              className="text-xs font-sans text-[#e9c176] uppercase tracking-wider font-semibold hover:underline"
            >
              Book a Table →
            </button>
          </div>
          <p className="font-sans text-xs text-[#9a8f80] pt-2">
            &copy; {new Date().getFullYear()} Éclat Restaurant &amp; Lounge. All rights reserved.
          </p>
        </div>

        {/* Hours Column */}
        <div>
          <h4 className="font-sans text-xs text-[#e9c176] uppercase tracking-widest font-semibold mb-4 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            Hours of Service
          </h4>
          <ul className="font-sans text-sm text-[#d1c5b4] space-y-2.5">
            <li>
              <strong className="text-[#e5e2e1] font-medium">Mon – Thu:</strong> 5:00 PM – 11:00 PM
            </li>
            <li>
              <strong className="text-[#e5e2e1] font-medium">Fri – Sat:</strong> 5:00 PM – 1:00 AM
            </li>
            <li>
              <strong className="text-[#e5e2e1] font-medium">Sunday:</strong> 4:00 PM – 10:00 PM
            </li>
            <li className="pt-2 text-xs text-[#e9c176] italic">
              *Cocktail Lounge open until 2:00 AM on weekends.
            </li>
          </ul>
        </div>

        {/* Location & Contact */}
        <div>
          <h4 className="font-sans text-xs text-[#e9c176] uppercase tracking-widest font-semibold mb-4 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            Sanctuary Location
          </h4>
          <div className="font-sans text-sm text-[#d1c5b4] space-y-2.5">
            <p>482 Lexington Avenue, Grand Suite</p>
            <p>New York, NY 10017</p>
            <p className="pt-2 text-[#e9c176] flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              Tel: +1 (212) 555-0194
            </p>
            <p className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              concierge@eclat-lounge.com
            </p>
            <button
              onClick={onOpenWineCellar}
              className="text-xs text-[#d1c5b4] hover:text-[#e9c176] underline block pt-1"
            >
              Sommelier Cellar Allocations
            </button>
          </div>
        </div>

        {/* Legal & Company Links */}
        <div>
          <h4 className="font-sans text-xs text-[#e9c176] uppercase tracking-widest font-semibold mb-4">
            Company &amp; Legal
          </h4>
          <ul className="space-y-3 font-sans text-sm text-[#d1c5b4]">
            <li>
              <a href="#" className="hover:text-[#e9c176] underline transition-all opacity-80 hover:opacity-100">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e9c176] underline transition-all opacity-80 hover:opacity-100">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e9c176] underline transition-all opacity-80 hover:opacity-100">
                Press Kit &amp; Media
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e9c176] underline transition-all opacity-80 hover:opacity-100">
                Careers &amp; Sommelier Guild
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
