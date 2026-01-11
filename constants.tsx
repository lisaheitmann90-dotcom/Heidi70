
import React from 'react';
import { Day } from './types';

export const ITINERARY_DATA: Day[] = [
  {
    date: '2026-01-17',
    displayDate: 'Saturday, Jan 17',
    location: 'Bangkok',
    activities: [
      { description: 'Arrival Team MUC 15:20', icon: 'plane' },
      { description: 'Arrival Team HH 18:20', icon: 'plane' }
    ],
    dinner: { 
      location: 'Above Eleven Rooftop', 
      details: 'Stunning city views',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Above+Eleven+Bangkok'
    },
    accommodation: 'Samala Hotel Bangkok',
    accommodationMapUrl: 'https://www.google.com/maps/search/?api=1&query=Samala+Hotel+Bangkok'
  },
  {
    date: '2026-01-18',
    displayDate: 'Sunday, Jan 18',
    location: 'Bangkok',
    activities: [
      { 
        time: '10:30', 
        description: 'Old City Walk (Self Guided)', 
        icon: 'lotus',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Grand+Palace+Bangkok'
      },
      { time: '17:00', description: 'Afternoon Massage', icon: 'massage' }
    ],
    dinner: { 
      location: 'Food Market: Jodd Fairs (Rama 9)', 
      details: 'Local street food vibe',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Jodd+Fairs+Rama+9'
    },
    accommodation: 'Samala Hotel Bangkok',
    accommodationMapUrl: 'https://www.google.com/maps/search/?api=1&query=Samala+Hotel+Bangkok'
  },
  {
    date: '2026-01-19',
    displayDate: 'Monday, Jan 19',
    location: 'Bangkok',
    activities: [
      { 
        time: '10:30', 
        description: 'Boat Cruise / Tuk Tuk Food Tour', 
        icon: 'tuktuk',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Chao+Phraya+River+Pier'
      }
    ],
    dinner: { location: 'Local Pad Thai Special', details: 'Authentic flavors' },
    accommodation: 'Samala Hotel Bangkok',
    accommodationMapUrl: 'https://www.google.com/maps/search/?api=1&query=Samala+Hotel+Bangkok'
  },
  {
    date: '2026-01-20',
    displayDate: 'Tuesday, Jan 20',
    location: 'Bangkok',
    activities: [
      { 
        time: '10:30', 
        description: 'Temple Walk (Self Guided)', 
        icon: 'buddha',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Wat+Arun+Temple'
      },
      { 
        description: 'MBK Shopping Exploration', 
        icon: 'market',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=MBK+Center+Bangkok'
      }
    ],
    dinner: { 
      location: 'Sirocco Rooftop Bar', 
      details: 'Luxury dining experience',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sirocco+Rooftop+Bar+Bangkok'
    },
    accommodation: 'Samala Hotel Bangkok',
    accommodationMapUrl: 'https://www.google.com/maps/search/?api=1&query=Samala+Hotel+Bangkok'
  },
  {
    date: '2026-01-21',
    displayDate: 'Wednesday, Jan 21',
    location: 'Bangkok / Day Trip',
    activities: [
      { 
        description: 'Maeklong Railway Market', 
        icon: 'market',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Maeklong+Railway+Market'
      },
      { 
        description: 'Damnoen Saduak Floating Market', 
        icon: 'boat',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Damnoen+Saduak+Floating+Market'
      }
    ],
    dinner: { 
      location: 'Issaya Siamese Club', 
      details: '20:00 - High-end Thai dining in a historic villa',
      mapUrl: 'https://maps.app.goo.gl/r8uddQn5QxvmzYAZA'
    },
    accommodation: 'Samala Hotel Bangkok',
    accommodationMapUrl: 'https://www.google.com/maps/search/?api=1&query=Samala+Hotel+Bangkok'
  },
  {
    date: '2026-01-22',
    displayDate: 'Thursday, Jan 22',
    location: 'Koh Samui',
    activities: [
      { time: '11:15', description: 'Flight to Koh Samui (Arrival 12:50)', icon: 'plane' },
      { description: 'Hotel Check-in & Relaxation', icon: 'palm' }
    ],
    dinner: { 
      location: 'Krua Samui', 
      details: 'Beachside dining',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Krua+Samui+Restaurant'
    },
    accommodation: 'Coral Cliff',
    accommodationMapUrl: 'https://www.google.com/maps/search/?api=1&query=Coral+Cliff+Beach+Resort+Koh+Samui'
  },
  {
    date: '2026-01-23',
    displayDate: 'Friday, Jan 23',
    location: 'Koh Samui',
    activities: [
      { description: 'Beach Day & Leisure', icon: 'sun' },
      { description: 'Relaxing Thai Massage', icon: 'massage' }
    ],
    dinner: { location: 'Beachfront BBQ', details: 'Fresh seafood' },
    accommodation: 'Coral Cliff',
    accommodationMapUrl: 'https://www.google.com/maps/search/?api=1&query=Coral+Cliff+Beach+Resort+Koh+Samui'
  },
  {
    date: '2026-01-24',
    displayDate: 'Saturday, Jan 24',
    location: 'Koh Samui',
    activities: [
      { 
        description: 'Optional: Elephant Sanctuary Visit', 
        icon: 'elephant',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Samui+Elephant+Sanctuary'
      }
    ],
    dinner: { 
      location: 'Dinner at Sabienglae', 
      details: 'Local island specialty',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sabienglae+Restaurant+Koh+Samui'
    },
    accommodation: 'Coral Cliff',
    accommodationMapUrl: 'https://www.google.com/maps/search/?api=1&query=Coral+Cliff+Beach+Resort+Koh+Samui'
  },
  {
    date: '2026-01-25',
    displayDate: 'Sunday, Jan 25',
    location: 'Koh Samui',
    activities: [
      { 
        description: 'Ang Thong National Park Day Trip', 
        icon: 'island',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ang+Thong+National+Marine+Park'
      }
    ],
    dinner: { location: 'Island Lounge', details: 'Cocktails and tapas' },
    accommodation: 'Coral Cliff',
    accommodationMapUrl: 'https://www.google.com/maps/search/?api=1&query=Coral+Cliff+Beach+Resort+Koh+Samui'
  },
  {
    date: '2026-01-26',
    displayDate: 'Monday, Jan 26',
    location: 'Koh Samui',
    activities: [
      { 
        description: 'Fishermans Village Exploration', 
        icon: 'market',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Fishermans+Village+Koh+Samui'
      },
      { 
        description: 'Visit to Big Buddha', 
        icon: 'buddha',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Big+Buddha+Temple+Koh+Samui'
      }
    ],
    dinner: { 
      location: 'Pizzeria Sorte', 
      details: 'Change of flavors',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Pizzeria+Sorte+Koh+Samui'
    },
    accommodation: 'Coral Cliff',
    accommodationMapUrl: 'https://www.google.com/maps/search/?api=1&query=Coral+Cliff+Beach+Resort+Koh+Samui'
  },
  {
    date: '2026-01-27',
    displayDate: 'Tuesday, Jan 27',
    location: 'Koh Phangan',
    activities: [
      { description: 'Ferry to Koh Phangan', icon: 'boat' },
      { description: 'Settling into Island Life', icon: 'beach' }
    ],
    dinner: { location: 'Sea Escape Sunset', details: 'Magical views' },
    accommodation: 'Sea Escape Resort',
    accommodationMapUrl: 'https://www.google.com/maps/search/?api=1&query=Sea+Escape+Resort+Koh+Phangan'
  },
  {
    date: '2026-01-28',
    displayDate: 'Wednesday, Jan 28',
    location: 'Koh Phangan',
    activities: [
      { 
        description: 'Bottle Beach Day', 
        icon: 'sun',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Bottle+Beach+Koh+Phangan'
      },
      { 
        description: 'Phasawan Viewpoint', 
        icon: 'island',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Phaeng+Waterfall+Viewpoint+Koh+Phangan'
      }
    ],
    dinner: { location: 'Local Thai Kitchen', details: 'Warm hospitality' },
    accommodation: 'Sea Escape Resort',
    accommodationMapUrl: 'https://www.google.com/maps/search/?api=1&query=Sea+Escape+Resort+Koh+Phangan'
  },
  {
    date: '2026-01-29',
    displayDate: 'Thursday, Jan 29',
    location: 'Koh Phangan',
    activities: [
      { 
        description: 'Mae Haad Beach & Sandbar', 
        icon: 'beach',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Mae+Haad+Beach+Koh+Phangan'
      },
      { 
        description: 'Salad Beach Relaxation', 
        icon: 'lotus',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Haad+Salad+Beach+Koh+Phangan'
      }
    ],
    dinner: { location: 'Beachside Grill', details: 'Casual vibes' },
    accommodation: 'Sea Escape Resort',
    accommodationMapUrl: 'https://www.google.com/maps/search/?api=1&query=Sea+Escape+Resort+Koh+Phangan'
  },
  {
    date: '2026-01-30',
    displayDate: 'Friday, Jan 30',
    location: 'Koh Phangan',
    activities: [
      { 
        description: 'Leela Beach Visit', 
        icon: 'palm',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Leela+Beach+Koh+Phangan'
      },
      { 
        description: 'Night Market Exploration', 
        icon: 'market',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Phantip+Night+Market+Koh+Phangan'
      }
    ],
    dinner: { location: 'Cafe Vintage', details: 'Eclectic menu' },
    accommodation: 'Sea Escape Resort',
    accommodationMapUrl: 'https://www.google.com/maps/search/?api=1&query=Sea+Escape+Resort+Koh+Phangan'
  },
  {
    date: '2026-01-31',
    displayDate: 'Saturday, Jan 31',
    location: 'Koh Phangan / Koh Tao',
    activities: [
      { 
        description: 'Thong Sala Market (Saturday)', 
        icon: 'market',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Thong+Sala+Market+Koh+Phangan'
      },
      { description: 'Ferry to Koh Tao', icon: 'boat' }
    ],
    dinner: { 
      location: 'Famoso Homemade', 
      details: 'Comforting meals',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Famoso+Homemade+Koh+Tao'
    },
    accommodation: 'Cape Shark Villa',
    accommodationMapUrl: 'https://www.google.com/maps/search/?api=1&query=Cape+Shark+Villa+Koh+Tao'
  },
  {
    date: '2026-02-01',
    displayDate: 'Sunday, Feb 1',
    location: 'Koh Tao',
    activities: [
      { description: 'Exploring the Hidden Coves', icon: 'boat' },
      { description: 'Relaxing Villa Time', icon: 'sun' }
    ],
    dinner: { location: 'Private Villa Chef', details: 'Luxury dining' },
    accommodation: 'Cape Shark Villa',
    accommodationMapUrl: 'https://www.google.com/maps/search/?api=1&query=Cape+Shark+Villa+Koh+Tao'
  },
  {
    date: '2026-02-02',
    displayDate: 'Monday, Feb 2',
    location: 'Koh Tao',
    activities: [
      { 
        description: 'Ao Leuk Snorkeling', 
        icon: 'snorkeling',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ao+Leuk+Beach+Koh+Tao'
      },
      { 
        description: 'Secret Bar Sunset', 
        icon: 'cocktail',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Secret+Bar+Koh+Tao'
      }
    ],
    dinner: { 
      location: 'Blue Chair', 
      details: 'Ocean breeze dining',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Blue+Chair+Restaurant+Koh+Tao'
    },
    accommodation: 'Cape Shark Villa',
    accommodationMapUrl: 'https://www.google.com/maps/search/?api=1&query=Cape+Shark+Villa+Koh+Tao'
  },
  {
    date: '2026-02-03',
    displayDate: 'Tuesday, Feb 3',
    location: 'Koh Tao',
    activities: [
      { description: 'North Island Excursion', icon: 'island' },
      { 
        description: 'Koh Nang Yuan Viewpoint', 
        icon: 'palm',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Koh+Nang+Yuan+Viewpoint'
      }
    ],
    dinner: { location: 'Sky Terrace', details: 'Panoramic vistas' },
    accommodation: 'Cape Shark Villa',
    accommodationMapUrl: 'https://www.google.com/maps/search/?api=1&query=Cape+Shark+Villa+Koh+Tao'
  },
  {
    date: '2026-02-04',
    displayDate: 'Wednesday, Feb 4',
    location: 'Koh Tao',
    activities: [
      { 
        description: 'Coconut Monkey Breakfast', 
        icon: 'noodles',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Coconut+Monkey+Koh+Tao'
      },
      { description: 'Leisure Day & Preparation', icon: 'sun' }
    ],
    dinner: { location: 'Roasted Duck Specialist', details: 'Signature dish' },
    accommodation: 'Cape Shark Villa',
    accommodationMapUrl: 'https://www.google.com/maps/search/?api=1&query=Cape+Shark+Villa+Koh+Tao'
  },
  {
    date: '2026-02-05',
    displayDate: 'Thursday, Feb 5',
    location: 'Koh Tao',
    isBirthday: true,
    activities: [
      { description: 'The Big Celebration: Birthday Surprise', icon: 'celebration' },
      { description: 'Family Celebration Lunch', icon: 'food' }
    ],
    dinner: { 
      location: 'Heidi\'s 70th Gala Dinner', 
      details: 'The Main Event',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Cape+Shark+Villa+Koh+Tao'
    },
    accommodation: 'Cape Shark Villa',
    accommodationMapUrl: 'https://www.google.com/maps/search/?api=1&query=Cape+Shark+Villa+Koh+Tao'
  },
  {
    date: '2026-02-06',
    displayDate: 'Friday, Feb 6',
    location: 'Departure',
    activities: [
      { description: 'Ferry back to Koh Samui', icon: 'boat' },
      { time: '20:40', description: 'Flight to Bangkok (Arrival 21:50)', icon: 'plane' }
    ],
    dinner: { location: 'Airport Lounge', details: 'Travel snacks' },
    accommodation: 'Divalux Resort',
    accommodationMapUrl: 'https://www.google.com/maps/search/?api=1&query=Divalux+Resort+and+Spa+Bangkok'
  },
  {
    date: '2026-02-07',
    displayDate: 'Saturday, Feb 7',
    location: 'Flight Home',
    activities: [
      { description: 'International Flight Departure', icon: 'plane' }
    ],
    accommodation: 'Traveling Home'
  }
];

export const Icons = {
  tuktuk: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg className={`w-6 h-6 stroke-slate-500 fill-[#E5E7EB]/20 ${props?.className}`} viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M3 10h18v8H3v-8zM7 18v2m10-2v2M5 10V8a2 2 0 012-2h10a2 2 0 012 2v2M12 10V6" />
      <circle cx="7" cy="18" r="2" strokeWidth="1.2" />
      <circle cx="17" cy="18" r="2" strokeWidth="1.2" />
    </svg>
  ),
  temple: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg className={`w-6 h-6 stroke-slate-500 fill-[#E5E7EB]/20 ${props?.className}`} viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 3l7 7h-2v11H7V10H5l7-7zM12 7v4m-3 2h6" />
    </svg>
  ),
  buddha: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg className={`w-6 h-6 stroke-amber-500/80 fill-amber-100/30 ${props?.className}`} viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 4a4 4 0 014 4c0 1.5-.8 2.8-2 3.5v1.5h-4v-1.5c-1.2-.7-2-2-2-3.5a4 4 0 014-4zM8 15h8l1 3H7l1-3zM6 20h12" />
    </svg>
  ),
  lotus: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg className={`w-6 h-6 stroke-rose-300 fill-rose-100/40 ${props?.className}`} viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 21c-2-2-5-3-5-7s2-5 5-9c3 4 5 5 5 9s-3 5-5 7z" />
    </svg>
  ),
  snorkeling: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg className={`w-6 h-6 stroke-slate-400 fill-[#F1F5F9]/30 ${props?.className}`} viewBox="0 0 24 24" {...props}>
      <rect x="6" y="8" width="12" height="6" rx="3" strokeWidth="1.2" />
    </svg>
  ),
  noodles: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg className={`w-6 h-6 stroke-orange-400 fill-orange-50/40 ${props?.className}`} viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M4 10a8 8 0 0016 0H4zM6 10v1" />
    </svg>
  ),
  palm: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg className={`w-6 h-6 stroke-emerald-400 fill-emerald-50/40 ${props?.className}`} viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 20s-1-6-1-10c0-4 3-7 3-7s-3 1-5 4c-2 3-2 6-2 6s3-1 5 1z" />
    </svg>
  ),
  cocktail: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg className={`w-6 h-6 stroke-rose-300 fill-rose-50/40 ${props?.className}`} viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M5 5l7 7 7-7H5zM12 12v7m-4 0h8" />
    </svg>
  ),
  sun: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg className={`w-6 h-6 stroke-amber-400 fill-amber-50/50 ${props?.className}`} viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="4" strokeWidth="1.2" />
      <path strokeLinecap="round" d="M12 5V3m0 18v-2M5 12H3m18 0h-2" strokeWidth="1.2" />
    </svg>
  ),
  coconut: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg className={`w-6 h-6 stroke-emerald-500 fill-emerald-100/30 ${props?.className}`} viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="14" r="6" strokeWidth="1.2" />
      <path d="M12 8V4l4-1" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  seashell: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg className={`w-6 h-6 stroke-rose-200 fill-rose-50/50 ${props?.className}`} viewBox="0 0 24 24" {...props}>
      <path d="M12 4c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7z" strokeWidth="1.2" />
    </svg>
  ),
  fish: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg className={`w-6 h-6 stroke-sky-300 fill-sky-50/40 ${props?.className}`} viewBox="0 0 24 24" {...props}>
      <path d="M2 12s4-5 10-5 10 5 10 5-4 5-10 5S2 12 2 12z" strokeWidth="1.2" />
      <path d="M18 12l4 3v-6l-4 3z" strokeWidth="1.2" />
    </svg>
  ),
  waves: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg className={`w-6 h-6 stroke-sky-200 fill-none ${props?.className}`} viewBox="0 0 24 24" {...props}>
      <path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M2 16c2-2 4-2 6 0s4 2 6 0 4-2 6 0" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    </svg>
  ),
  boat: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg className={`w-6 h-6 stroke-slate-500 fill-[#E5E7EB]/20 ${props?.className}`} viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M3 12h18l-2 6H5l-2-6zM12 4v8" />
    </svg>
  ),
  market: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg className={`w-6 h-6 stroke-slate-500 fill-[#E5E7EB]/10 ${props?.className}`} viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M3 6h18M3 10h18M4 10v11h16V10" />
    </svg>
  ),
  bar: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg className={`w-6 h-6 stroke-slate-500 fill-[#E5E7EB]/10 ${props?.className}`} viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M18 5l-6 6-6-6M12 11v8" />
    </svg>
  ),
  massage: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg className={`w-6 h-6 stroke-slate-500 fill-[#E5E7EB]/10 ${props?.className}`} viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  ),
  beach: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg className={`w-6 h-6 stroke-slate-500 fill-none ${props?.className}`} viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M2 20c5 0 5-2 10-2s5 2 10 2M12 10a4 4 0 100-8" />
    </svg>
  ),
  elephant: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg className={`w-6 h-6 stroke-slate-500 fill-[#E5E7EB]/10 ${props?.className}`} viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M21 12c0-4-4-7-9-7S3 8 3 12s2 7 7 7h1c4 0 4-3 10-3" />
    </svg>
  ),
  island: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg className={`w-6 h-6 stroke-slate-500 fill-[#E5E7EB]/10 ${props?.className}`} viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 2a10 10 0 00-10 10c0 5.523 4.477 10 10 10s10-4.477 10-10A10 10 0 0012 2z" />
    </svg>
  ),
  celebration: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg className={`w-6 h-6 stroke-amber-500 fill-amber-100/40 ${props?.className}`} viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3l4 4m6 0l4-4M12 12l-3-3m6 0l-3 3M12 12v9m-7-5h14" />
    </svg>
  ),
  plane: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg className={`w-6 h-6 stroke-slate-500 fill-[#E5E7EB]/10 ${props?.className}`} viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M3 15l4-4 10 3 4-4" />
    </svg>
  ),
  food: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg className={`w-6 h-6 stroke-rose-400 fill-rose-100/30 ${props?.className}`} viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 2v20m-8-8a8 8 0 0116 0" />
    </svg>
  ),
  plateChopsticks: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg className={`w-5 h-5 stroke-rose-400 fill-none ${props?.className}`} viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="8" strokeWidth="1.2" />
      <path d="M16 4l-4 16M19 4l-4 16" strokeLinecap="round" strokeWidth="1.2" />
    </svg>
  ),
  mapPin: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg className={`w-4 h-4 stroke-slate-400 fill-none ${props?.className}`} viewBox="0 0 24 24" {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="1.5" />
      <circle cx="12" cy="10" r="3" strokeWidth="1.5" />
    </svg>
  ),
  orchid: (props?: React.SVGProps<SVGSVGElement>) => (
    <svg className={`w-24 h-24 stroke-rose-200 fill-rose-50 ${props?.className}`} viewBox="0 0 24 24" {...props}>
      <path d="M12 22s8-4 8-10c0-4.418-3.582-8-8-8s-8 3.582-8 8c0 6 8 10 8 10z" />
      <path d="M12 6c-3 0-5 2-5 5s2 5 5 5 5-2 5-5-2-5-5-5z" opacity="0.5" />
      <circle cx="12" cy="11" r="2" fill="#F4C2C2" />
    </svg>
  )
};
