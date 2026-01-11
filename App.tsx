
import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import DayCard from './components/DayCard';
import { ITINERARY_DATA, Icons } from './constants';
import { View } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<View>('welcome');

  if (view === 'welcome') {
    return <WelcomeScreen onEnter={() => setView('itinerary')} />;
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-20 relative overflow-x-hidden">
      {/* Background sketches - High Visibility Island Sketches */}
      <div className="fixed top-[5%] -left-12 opacity-40 pointer-events-none rotate-[15deg] scale-[4] mix-blend-multiply">
        <Icons.palm />
      </div>
      <div className="fixed top-[15%] -right-16 opacity-40 pointer-events-none rotate-[-10deg] scale-[5] mix-blend-multiply">
        <Icons.sun />
      </div>
      <div className="fixed top-[30%] -left-10 opacity-40 pointer-events-none rotate-[45deg] scale-[3.5] mix-blend-multiply">
        <Icons.coconut />
      </div>
      <div className="fixed top-[45%] -right-12 opacity-40 pointer-events-none rotate-[-20deg] scale-[4] mix-blend-multiply">
        <Icons.fish />
      </div>
      <div className="fixed top-[60%] -left-16 opacity-40 pointer-events-none rotate-[30deg] scale-[5] mix-blend-multiply">
        <Icons.waves />
      </div>
      <div className="fixed top-[75%] -right-14 opacity-40 pointer-events-none rotate-[-45deg] scale-[4.5] mix-blend-multiply">
        <Icons.seashell />
      </div>
      <div className="fixed bottom-[10%] -left-12 opacity-40 pointer-events-none rotate-[10deg] scale-[4] mix-blend-multiply">
        <Icons.boat />
      </div>
      
      {/* Scattered Secondary Elements */}
      <div className="fixed top-[10%] right-[15%] opacity-30 pointer-events-none rotate-[-12deg] scale-[3] mix-blend-multiply">
        <Icons.lotus />
      </div>
      <div className="fixed top-[25%] left-[10%] opacity-30 pointer-events-none rotate-[22deg] scale-[2.5] mix-blend-multiply">
        <Icons.waves />
      </div>
      <div className="fixed bottom-[20%] right-[10%] opacity-40 pointer-events-none rotate-[-30deg] scale-[5] mix-blend-multiply">
        <Icons.tuktuk />
      </div>
      <div className="fixed top-[55%] left-[5%] opacity-30 pointer-events-none rotate-[60deg] scale-[3.2] mix-blend-multiply">
        <Icons.buddha />
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="scale-50 -ml-4">
             <Icons.orchid />
          </div>
          <div>
            <h1 className="font-luxury text-xl text-slate-800">Heidi 7.0</h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">Thai Edition Keepsake</p>
          </div>
        </div>
        <button 
          onClick={() => setView('welcome')}
          className="text-slate-400 hover:text-slate-600 p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
      </header>

      {/* Hero Section */}
      <div className="px-6 py-12 text-center bg-gradient-to-b from-[#F4C2C2]/30 to-transparent relative z-10">
        <h2 className="font-sketch text-4xl text-amber-600 mb-2">Our Journey</h2>
        <p className="text-slate-600 font-medium text-sm italic">
          A family trip through the heart and islands of Thailand.
        </p>
      </div>

      {/* Timeline Section */}
      <main className="max-w-2xl mx-auto px-6 relative z-10">
        {/* Timeline vertical line */}
        <div className="absolute left-[30px] top-10 bottom-0 w-[2px] bg-slate-300 border-l border-dotted border-slate-400" />
        
        {ITINERARY_DATA.map((day) => (
          <DayCard key={day.date} day={day} />
        ))}

        <div className="text-center mt-24 relative pb-20">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-40 scale-[5] mix-blend-multiply">
            <Icons.lotus />
          </div>
          <div className="font-sketch text-4xl text-slate-500 mb-4 opacity-70">Happy 70th Birthday Heidi!</div>
          <p className="text-slate-400 text-xs uppercase tracking-tighter font-bold">Love from the whole family</p>
        </div>
      </main>

      {/* Decorative footer elements */}
      <div className="fixed bottom-4 right-4 pointer-events-none opacity-30 hidden md:block">
        <div className="transform rotate-12">
            <svg className="w-48 h-48 fill-rose-200" viewBox="0 0 200 200">
                <path d="M100 0C100 0 130 50 170 70C210 90 200 130 170 160C140 190 100 200 100 200C100 200 60 190 30 160C0 130 -10 90 30 70C70 50 100 0 100 0Z" />
            </svg>
        </div>
      </div>
    </div>
  );
};

export default App;
