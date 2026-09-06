export type MenuCategory = 'all' | 'starters' | 'mains' | 'cocktails' | 'desserts' | 'degustation';

export interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'mains' | 'cocktails' | 'desserts';
  price: number;
  description: string;
  tags?: string[];
  image: string;
  sommelierNote?: string;
  frenchSubtitle?: string;
}

export interface WineItem {
  id: string;
  name: string;
  vintage: string;
  region: string;
  country: string;
  category: 'Champagne & Sparkling' | 'White' | 'Red' | 'Dessert & Port';
  notes: string;
  priceBottle: number;
  priceGlass?: number;
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  description: string;
}

export interface ReservationState {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  seatingArea: string;
  specialRequests: string;
  isConfirmed: boolean;
  confirmationCode?: string;
}
