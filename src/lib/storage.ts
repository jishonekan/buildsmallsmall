export interface MarketPrice {
  id: string;
  name: string;
  price: string;
  unit: string;
  lastUpdated: string;
}

export interface Plan {
  id: string;
  name: string;
  type: string;
  price: string;
  image: string;
  qsFile: string;
  beds: number;
  baths: number;
  area: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  status: 'Published' | 'Draft';
  excerpt: string;
}

export interface Partner {
  id: string;
  companyName: string;
  category: string;
  email: string;
  phone: string;
  address: string;
  description: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

const initialPrices: MarketPrice[] = [
  { id: '1', name: '6-inch Hollow Blocks', price: '450', unit: 'per unit', lastUpdated: '2025-11-20' },
  { id: '2', name: '9-inch Hollow Blocks', price: '550', unit: 'per unit', lastUpdated: '2025-11-20' },
  { id: '3', name: 'Cement (50kg)', price: '8500', unit: 'per bag', lastUpdated: '2025-11-21' },
  { id: '4', name: 'Sharp Sand', price: '45000', unit: 'per trip (20 tons)', lastUpdated: '2025-11-19' },
];

const initialPlans: Plan[] = [
  { 
    id: '1', 
    name: 'The Starter Bungalow', 
    type: '2-Bedroom Bungalow', 
    price: '15,000,000', 
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1000&auto=format&fit=crop',
    qsFile: 'starter_qs.pdf',
    beds: 2,
    baths: 2,
    area: '120 sqm'
  },
  { 
    id: '2', 
    name: 'Family Comfort', 
    type: '3-Bedroom Duplex', 
    price: '35,000,000', 
    image: 'https://images.unsplash.com/photo-1600596542815-2495db9dc2c3?q=80&w=1000&auto=format&fit=crop',
    qsFile: 'family_qs.pdf',
    beds: 3,
    baths: 3,
    area: '250 sqm'
  },
  { 
    id: '3', 
    name: 'The Executive', 
    type: '4-Bedroom Detached', 
    price: '55,000,000', 
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop',
    qsFile: 'executive_qs.pdf',
    beds: 4,
    baths: 4,
    area: '350 sqm'
  },
  { 
    id: '4', 
    name: 'Modern Compact', 
    type: '1-Bedroom Apartment', 
    price: '8,500,000', 
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop',
    qsFile: 'compact_qs.pdf',
    beds: 1,
    baths: 1,
    area: '75 sqm'
  }
];

const initialNews: NewsItem[] = [
  {
    id: '1',
    title: 'New Partnership with First Bank',
    date: '2025-11-20',
    status: 'Published',
    excerpt: "We're excited to announce a new financing partnership that brings lower interest rates to civil servants."
  },
  {
    id: '2',
    title: 'Cement Prices Update',
    date: '2025-11-15',
    status: 'Published',
    excerpt: 'Market analysis shows a slight dip in cement prices this week. Good time to stock up for your foundation.'
  },
  {
    id: '3',
    title: 'Platform Milestone: 500 Homes Completed',
    date: '2025-11-10',
    status: 'Published',
    excerpt: "We've hit a major milestone! 500 families have now moved into homes built through our platform."
  }
];

const initialPartners: Partner[] = [
  {
    id: '1',
    companyName: 'Dangote Cement',
    category: 'Material Supplier',
    email: 'sales@dangote.com',
    phone: '+2348000000001',
    address: 'Ikoyi, Lagos',
    description: 'Leading cement manufacturer in Nigeria.',
    status: 'Approved'
  }
];

const KEYS = {
  PRICES: 'bss_prices',
  PLANS: 'bss_plans',
  NEWS: 'bss_news',
  PARTNERS: 'bss_partners',
  AUTH: 'bss_auth_token',
  ROLE: 'bss_user_role'
};

export const storage = {
  // Prices
  getPrices: (): MarketPrice[] => {
    if (typeof window === 'undefined') return initialPrices;
    const stored = localStorage.getItem(KEYS.PRICES);
    if (!stored) {
      localStorage.setItem(KEYS.PRICES, JSON.stringify(initialPrices));
      return initialPrices;
    }
    return JSON.parse(stored);
  },
  savePrices: (prices: MarketPrice[]) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(KEYS.PRICES, JSON.stringify(prices));
  },

  // Plans
  getPlans: (): Plan[] => {
    if (typeof window === 'undefined') return initialPlans;
    const stored = localStorage.getItem(KEYS.PLANS);
    if (!stored) {
      localStorage.setItem(KEYS.PLANS, JSON.stringify(initialPlans));
      return initialPlans;
    }
    return JSON.parse(stored);
  },
  savePlans: (plans: Plan[]) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(KEYS.PLANS, JSON.stringify(plans));
  },

  // News
  getNews: (): NewsItem[] => {
    if (typeof window === 'undefined') return initialNews;
    const stored = localStorage.getItem(KEYS.NEWS);
    if (!stored) {
      localStorage.setItem(KEYS.NEWS, JSON.stringify(initialNews));
      return initialNews;
    }
    return JSON.parse(stored);
  },
  saveNews: (news: NewsItem[]) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(KEYS.NEWS, JSON.stringify(news));
  },

  // Partners
  getPartners: (): Partner[] => {
    if (typeof window === 'undefined') return initialPartners;
    const stored = localStorage.getItem(KEYS.PARTNERS);
    if (!stored) {
      localStorage.setItem(KEYS.PARTNERS, JSON.stringify(initialPartners));
      return initialPartners;
    }
    return JSON.parse(stored);
  },
  savePartners: (partners: Partner[]) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(KEYS.PARTNERS, JSON.stringify(partners));
  },
  
  // Auth
  login: (email: string, role: 'admin' | 'homeowner' | 'artisan' = 'homeowner') => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(KEYS.AUTH, email);
    localStorage.setItem(KEYS.ROLE, role);
  },
  logout: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(KEYS.AUTH);
    localStorage.removeItem(KEYS.ROLE);
  },
  isAuthenticated: () => {
    if (typeof window === 'undefined') return false;
    return !!localStorage.getItem(KEYS.AUTH);
  },
  getUserRole: () => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(KEYS.ROLE) as 'admin' | 'homeowner' | 'artisan' | null;
  }
};

