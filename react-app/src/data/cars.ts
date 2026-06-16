import type { Car, TabDefinition } from '../types';

export const tabs: TabDefinition[] = [
  { id: 'retro', label: 'Retro Cars' },
  { id: 'trucks', label: 'Trucks' },
  { id: 'suv', label: 'Crossovers & SUVs' },
  { id: 'electro', label: 'Electrified' },
];

export const cars: Car[] = [
  { id: 'retro-1', title: 'Aston Martin 1963', image: '/images/choose-1.jpg', startingPrice: 39900, monthlyPrice: 650, category: 'retro' },
  { id: 'retro-2', title: 'Volvo P1800 1969', image: '/images/choose-2.jpg', startingPrice: 62450, monthlyPrice: 450, category: 'retro' },
  { id: 'retro-3', title: 'VW Beetle 1975', image: '/images/choose-3.jpg', startingPrice: 27900, monthlyPrice: 400, category: 'retro' },
  { id: 'retro-4', title: 'Ford Thunderbird 1967', image: '/images/choose-4.jpg', startingPrice: 39900, monthlyPrice: 1013, category: 'retro' },
  { id: 'retro-5', title: 'Lamborghini 1966', image: '/images/choose-5.jpg', startingPrice: 39900, monthlyPrice: 739, category: 'retro' },
  { id: 'retro-6', title: 'Jaguar E-Type 1960', image: '/images/choose-6.jpg', startingPrice: 62260, monthlyPrice: 554, category: 'retro' },
  { id: 'retro-7', title: 'Chevrolet 1970', image: '/images/choose-7.jpg', startingPrice: 35650, monthlyPrice: 1032, category: 'retro' },
  { id: 'retro-8', title: 'Mercedes 300 1954', image: '/images/choose-8.jpg', startingPrice: 31885, monthlyPrice: 997, category: 'retro' },
  { id: 'retro-9', title: 'Porsche 356 1959', image: '/images/choose-9.jpg', startingPrice: 32600, monthlyPrice: 471, category: 'retro' },
  { id: 'retro-10', title: 'Pontiac GTO 1966', image: '/images/choose-10.jpg', startingPrice: 60000, monthlyPrice: 528, category: 'retro' },
  { id: 'retro-11', title: 'Triumph TR6 1974', image: '/images/choose-11.jpg', startingPrice: 31885, monthlyPrice: 591, category: 'retro' },
  { id: 'retro-12', title: 'Volkswagen 1966', image: '/images/choose-12.jpg', startingPrice: 28430, monthlyPrice: 750, category: 'retro' },

  { id: 'truck-1', title: 'Aston Martin 1963', image: '/images/truck-1.jpg', startingPrice: 39900, monthlyPrice: 650, category: 'trucks' },
  { id: 'truck-2', title: 'Ford 2024', image: '/images/truck-2.jpg', startingPrice: 62450, monthlyPrice: 1450, category: 'trucks' },
  { id: 'truck-3', title: 'Ford 1990', image: '/images/truck-3.jpg', startingPrice: 27900, monthlyPrice: 400, category: 'trucks' },
  { id: 'truck-4', title: 'Ford Thunderbird 2010', image: '/images/truck-4.jpg', startingPrice: 39900, monthlyPrice: 1013, category: 'trucks' },
  { id: 'truck-5', title: 'Ford Thunderbird 2010', image: '/images/truck-5.jpg', startingPrice: 39900, monthlyPrice: 1013, category: 'trucks' },

  { id: 'suv-1', title: 'Ford 2021', image: '/images/suv-1.jpg', startingPrice: 99900, monthlyPrice: 1650, category: 'suv' },
  { id: 'suv-2', title: 'Volvo P1800 2016', image: '/images/suv-2.jpg', startingPrice: 62450, monthlyPrice: 1250, category: 'suv' },
  { id: 'suv-3', title: 'VW Beetle 2000', image: '/images/suv-3.jpg', startingPrice: 27900, monthlyPrice: 1400, category: 'suv' },
  { id: 'suv-4', title: 'Ford Thunderbird 1967', image: '/images/suv-4.jpg', startingPrice: 39900, monthlyPrice: 1013, category: 'suv' },

  { id: 'electro-1', title: 'Tesla 2015', image: '/images/electro-1.jpg', startingPrice: 99900, monthlyPrice: 2650, category: 'electro' },
  { id: 'electro-2', title: 'Bentley 1969', image: '/images/electro-2.jpg', startingPrice: 62450, monthlyPrice: 850, category: 'electro' },
  { id: 'electro-3', title: 'VW Beetle 1975', image: '/images/electro-3.jpg', startingPrice: 27900, monthlyPrice: 400, category: 'electro' },
];

export const blogArticles = [
  { id: 'blog-1', image: '/images/blog-1.png', title: 'An easier way to buy your next Toyota' },
  { id: 'blog-2', image: '/images/blog-2.png', title: 'A Guide to Road-Tripping With Pets' },
];

export const sliderImages = [
  '/images/slider-1.jpg',
  '/images/slider-2.jpg',
  '/images/slider-3.jpg',
  '/images/slider-4.jpg',
];

export const whyLeaseItems = [
  { id: 1, icon: '/images/why-lease-1.svg', title: 'Top Dealers', text: 'TrueCar Certified Dealers compete for your business by providing discounted pricing on in-stock inventory.' },
  { id: 2, icon: '/images/why-lease-2.svg', title: 'Discounted Pricing', text: 'View local inventory from the comfort of home and get access to guaranteed savings on the car of your choice.' },
  { id: 3, icon: '/images/why-lease-3.svg', title: 'Lower Payments', text: 'Get discounted pricing when you shop for a car or truck using TrueCar and save on your lease payment.' },
  { id: 4, icon: '/images/why-lease-4.svg', title: 'Easy Upgrade', text: 'Easy to upgrade to the newest vehicle model every few years if you would like to be modern and comfortable' },
];

export const importantThings = [
  { id: 1, icon: '/images/important-1.png', text: 'Monthly payments on leases are generally 20% - 30% cheaper than loans' },
  { id: 2, icon: '/images/important-2.png', text: 'You may be eligible for a tax break if you use the leased vehicle for business purposes' },
  { id: 3, icon: '/images/important-3.png', text: 'Easy to upgrade to the newest vehicle model every few years' },
  { id: 4, icon: '/images/important-4.png', text: "There are often fees charged if you drive more than your lease's mileage allowance" },
];
