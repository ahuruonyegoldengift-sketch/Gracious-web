import React, { useState } from 'react';
import { Shirt, Car, PhoneCall, CheckCircle2, Calendar, Clock, Users, MapPin, Sparkles } from 'lucide-react';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // tomorrow
    time: '8:15 PM (Prime Dinner)',
    guests: '2 Guests',
    seatingArea: 'Main Dining Room',
    notes: '',
  });

  const [confirmed, setConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = 'ECL-' + Math.floor(1000 + Math.random() * 9000);
    setBookingRef(randomRef);
    setConfirmed(true);
  };

  const handleReset = () => {
    setConfirmed(false);
  };

  return (
    <section id="reserve" className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Informational Column */}
        <div className="lg:col-span-5">
          <p className="font-sans text-xs text-[#e9c176] uppercase tracking-[0.2em] mb-2 font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            TABLE RESERVATION
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-[#e5e2e1] mb-6 font-normal">
            Experience Éclat
          </h2>
          <p className="font-sans text-base text-[#d1c5b4] mb-8 leading-relaxed">
            We welcome reservations up to 30 days in advance. For parties larger than 6 guests or
            private dining inquiries, our dedicated Maitre d’ is available via telephone.
          </p>

          <div className="space-y-6 pt-6 border-t border-[#4e4639]">
            {/* Dress Code */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#e9c176]/10 border border-[#e9c176]/30 flex items-center justify-center shrink-0">
                <Shirt className="w-5 h-5 text-[#e9c176]" />
              </div>
              <div>
                <p className="font-serif text-lg text-[#e5e2e1]">Dress Code</p>
                <p className="font-sans text-xs text-[#c8c6c5] mt-0.5 leading-relaxed">
                  Smart Elegant / Evening Attire encouraged. Athletic wear is strictly prohibited.
                </p>
              </div>
            </div>

            {/* Valet Parking */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#e9c176]/10 border border-[#e9c176]/30 flex items-center justify-center shrink-0">
                <Car className="w-5 h-5 text-[#e9c176]" />
              </div>
              <div>
                <p className="font-serif text-lg text-[#e5e2e1]">Valet Parking</p>
                <p className="font-sans text-xs text-[#c8c6c5] mt-0.5 leading-relaxed">
                  Complimentary curbside valet service beginning at 5:00 PM nightly.
                </p>
              </div>
            </div>

            {/* Concierge Line */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#e9c176]/10 border border-[#e9c176]/30 flex items-center justify-center shrink-0">
                <PhoneCall className="w-5 h-5 text-[#e9c176]" />
              </div>
              <div>
                <p className="font-serif text-lg text-[#e5e2e1]">Concierge Line</p>
                <p className="font-sans text-xs text-[#c8c6c5] mt-0.5">
                  +1 (212) 555-0194 • concierge@eclat-lounge.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form Card */}
        <div className="lg:col-span-7 mt-8 lg:mt-0">
          <div className="bg-[#201f1f] rounded-2xl p-8 md:p-10 border border-[#4e4639] gold-glow relative shadow-2xl">
            <h3 className="font-serif text-2xl text-[#e5e2e1] mb-6 flex items-center justify-between">
              <span>Request a Reservation</span>
              <span className="font-sans text-xs text-[#e9c176] uppercase tracking-wider font-semibold">
                Instant Confirmation
              </span>
            </h3>

            {!confirmed ? (
              <form id="reservation-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label className="block font-sans text-xs text-[#e9c176] uppercase tracking-wider font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      id="reserve-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Lord / Lady Vance"
                      className="w-full bg-[#1c1b1b] border-0 border-b border-[#e9c176]/40 focus:border-[#e9c176] focus:ring-0 text-[#e5e2e1] placeholder:text-[#9a8f80] text-sm py-2 px-1 transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block font-sans text-xs text-[#e9c176] uppercase tracking-wider font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      id="reserve-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vance@heritage.com"
                      className="w-full bg-[#1c1b1b] border-0 border-b border-[#e9c176]/40 focus:border-[#e9c176] focus:ring-0 text-[#e5e2e1] placeholder:text-[#9a8f80] text-sm py-2 px-1 transition-colors"
                    />
                  </div>

                  {/* Date Picker */}
                  <div>
                    <label className="block font-sans text-xs text-[#e9c176] uppercase tracking-wider font-semibold mb-2">
                      Date
                    </label>
                    <input
                      id="reserve-date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#1c1b1b] border-0 border-b border-[#e9c176]/40 focus:border-[#e9c176] focus:ring-0 text-[#e5e2e1] text-sm py-2 px-1 transition-colors"
                    />
                  </div>

                  {/* Time Selector */}
                  <div>
                    <label className="block font-sans text-xs text-[#e9c176] uppercase tracking-wider font-semibold mb-2">
                      Seating Time
                    </label>
                    <select
                      id="reserve-time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-[#1c1b1b] border-0 border-b border-[#e9c176]/40 focus:border-[#e9c176] focus:ring-0 text-[#e5e2e1] text-sm py-2 px-1 transition-colors"
                    >
                      <option value="5:30 PM (First Seating)">5:30 PM (First Seating)</option>
                      <option value="6:45 PM (Main Seating)">6:45 PM (Main Seating)</option>
                      <option value="8:15 PM (Prime Dinner)">8:15 PM (Prime Dinner)</option>
                      <option value="9:30 PM (Late Gastronomy)">9:30 PM (Late Gastronomy)</option>
                      <option value="10:15 PM (Cocktail &amp; Caviar)">10:15 PM (Cocktail &amp; Caviar)</option>
                    </select>
                  </div>

                  {/* Guests Selector */}
                  <div>
                    <label className="block font-sans text-xs text-[#e9c176] uppercase tracking-wider font-semibold mb-2">
                      Guests
                    </label>
                    <select
                      id="reserve-guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-[#1c1b1b] border-0 border-b border-[#e9c176]/40 focus:border-[#e9c176] focus:ring-0 text-[#e5e2e1] text-sm py-2 px-1 transition-colors"
                    >
                      <option value="2 Guests">2 Guests</option>
                      <option value="3 Guests">3 Guests</option>
                      <option value="4 Guests">4 Guests</option>
                      <option value="5 Guests">5 Guests</option>
                      <option value="6 Guests (Maximum Online)">6 Guests (Maximum Online)</option>
                    </select>
                  </div>

                  {/* Area Preference */}
                  <div>
                    <label className="block font-sans text-xs text-[#e9c176] uppercase tracking-wider font-semibold mb-2">
                      Seating Preference
                    </label>
                    <select
                      id="reserve-area"
                      value={formData.seatingArea}
                      onChange={(e) => setFormData({ ...formData, seatingArea: e.target.value })}
                      className="w-full bg-[#1c1b1b] border-0 border-b border-[#e9c176]/40 focus:border-[#e9c176] focus:ring-0 text-[#e5e2e1] text-sm py-2 px-1 transition-colors"
                    >
                      <option value="Main Dining Room">Main Dining Room</option>
                      <option value="The Mezzanine Balcony">The Mezzanine Balcony</option>
                      <option value="Sommelier Tasting Counter">Sommelier Tasting Counter</option>
                    </select>
                  </div>
                </div>

                {/* Dietary Requirements */}
                <div>
                  <label className="block font-sans text-xs text-[#e9c176] uppercase tracking-wider font-semibold mb-2">
                    Special Requests &amp; Dietary Notes
                  </label>
                  <textarea
                    id="reserve-notes"
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Anniversary celebration, seafood allergy, wine pairing interest..."
                    className="w-full bg-[#1c1b1b] border-0 border-b border-[#e9c176]/40 focus:border-[#e9c176] focus:ring-0 text-[#e5e2e1] placeholder:text-[#9a8f80] text-sm py-2 px-1 transition-colors"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  id="confirm-reservation-btn"
                  type="submit"
                  className="w-full py-4 rounded bg-[#e9c176] text-[#0e0e0e] font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#c5a059] transition-all duration-300 gold-glow cursor-pointer"
                >
                  Confirm Reservation Request
                </button>
              </form>
            ) : (
              /* Confirmation Screen */
              <div id="confirmation-msg" className="p-6 rounded-xl bg-[#2a2a2a] border border-[#e9c176] text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#e9c176]/20 border border-[#e9c176] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-[#e9c176]" />
                </div>
                <h4 className="font-serif text-2xl text-[#e9c176]">Reservation Request Confirmed</h4>
                <p className="font-sans text-xs text-[#d1c5b4] tracking-wider uppercase font-semibold">
                  Reference Code: <span className="text-[#e9c176] text-sm">{bookingRef}</span>
                </p>

                <div className="grid grid-cols-2 gap-3 max-w-md mx-auto text-left bg-[#1c1b1b] p-4 rounded border border-[#4e4639] text-xs">
                  <div>
                    <span className="text-[#9a8f80] block">Guest:</span>
                    <span className="text-[#e5e2e1] font-medium">{formData.name || 'Honored Guest'}</span>
                  </div>
                  <div>
                    <span className="text-[#9a8f80] block">Party:</span>
                    <span className="text-[#e5e2e1] font-medium">{formData.guests}</span>
                  </div>
                  <div>
                    <span className="text-[#9a8f80] block">Date:</span>
                    <span className="text-[#e5e2e1] font-medium">{formData.date}</span>
                  </div>
                  <div>
                    <span className="text-[#9a8f80] block">Time &amp; Area:</span>
                    <span className="text-[#e5e2e1] font-medium">{formData.time} • {formData.seatingArea}</span>
                  </div>
                </div>

                <p className="font-sans text-xs text-[#d1c5b4] mt-2">
                  Our Maitre d’ will verify cellar availability and dispatch a confirmation SMS to your device within 15 minutes.
                </p>

                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="text-xs font-sans text-[#e9c176] underline hover:text-[#ffdea5] uppercase tracking-wider"
                  >
                    Make Another Reservation
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
