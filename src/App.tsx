import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { HappyHourSection } from './components/HappyHourSection';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { ReservationSection } from './components/ReservationSection';
import { Footer } from './components/Footer';
import { DishDetailModal } from './components/DishDetailModal';
import { WineCellarModal } from './components/WineCellarModal';
import { PrivateEventsModal } from './components/PrivateEventsModal';
import { TastingMenuPdfModal } from './components/TastingMenuPdfModal';
import { MenuItem } from './types';

export default function App() {
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [wineCellarOpen, setWineCellarOpen] = useState(false);
  const [privateEventsOpen, setPrivateEventsOpen] = useState(false);
  const [pdfPreviewOpen, setPdfPreviewOpen] = useState(false);

  const scrollToReservation = () => {
    const el = document.getElementById('reserve');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] font-sans antialiased selection:bg-[#e9c176] selection:text-[#0e0e0e]">
      {/* Top Navbar */}
      <Navbar
        onOpenReservation={scrollToReservation}
        onOpenWineCellar={() => setWineCellarOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenReservation={scrollToReservation}
          onOpenWineCellar={() => setWineCellarOpen(true)}
        />

        {/* Atmospheric Gold Hairline Divider */}
        <div className="lux-divider w-full"></div>

        {/* About & Philosophy Section */}
        <AboutSection onOpenWineCellar={() => setWineCellarOpen(true)} />

        {/* Atmospheric Gold Hairline Divider */}
        <div className="lux-divider w-full"></div>

        {/* Happy Hour & Sommelier Note Section */}
        <HappyHourSection onOpenWineCellar={() => setWineCellarOpen(true)} />

        {/* Atmospheric Gold Hairline Divider */}
        <div className="lux-divider w-full"></div>

        {/* Curated Haute Cuisine Menu Section (Warm Cream Luxury Editorial Style) */}
        <MenuSection
          onSelectItem={(item) => setSelectedDish(item)}
          onOpenReservation={scrollToReservation}
          onOpenPdfPreview={() => setPdfPreviewOpen(true)}
        />

        {/* Atmospheric Gold Hairline Divider */}
        <div className="lux-divider w-full"></div>

        {/* Visual Gallery Section */}
        <GallerySection onOpenPrivateEvents={() => setPrivateEventsOpen(true)} />

        {/* Atmospheric Gold Hairline Divider */}
        <div className="lux-divider w-full"></div>

        {/* Table Reservation Module Section */}
        <ReservationSection />
      </main>

      {/* Atmospheric Gold Hairline Divider */}
      <div className="lux-divider w-full"></div>

      {/* Footer Section */}
      <Footer
        onOpenWineCellar={() => setWineCellarOpen(true)}
        onOpenReservation={scrollToReservation}
      />

      {/* Interactive Modals */}
      {/* 1. Realistic Dish Inspection Modal */}
      <DishDetailModal
        item={selectedDish}
        onClose={() => setSelectedDish(null)}
        onReserve={scrollToReservation}
      />

      {/* 2. Sommelier 800+ Rare Labels Cellar Vault */}
      <WineCellarModal
        isOpen={wineCellarOpen}
        onClose={() => setWineCellarOpen(false)}
        onReserve={scrollToReservation}
      />

      {/* 3. Private Receptions & Sanctuary Buyout Inquiry */}
      <PrivateEventsModal
        isOpen={privateEventsOpen}
        onClose={() => setPrivateEventsOpen(false)}
      />

      {/* 4. Tasting Menu Printable PDF Preview */}
      <TastingMenuPdfModal
        isOpen={pdfPreviewOpen}
        onClose={() => setPdfPreviewOpen(false)}
      />
    </div>
  );
}
