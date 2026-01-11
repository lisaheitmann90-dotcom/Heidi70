
import React, { useState, useEffect } from 'react';
import { Icons } from '../constants';

interface WelcomeScreenProps {
  onEnter: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onEnter }) => {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    // Trip starts on Saturday, Jan 17th, 2026
    const targetDate = new Date('2026-01-17T00:00:00');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-[#FAF9F6]">
      <div className="mb-8 opacity-90 animate-pulse">
        <Icons.orchid />
      </div>

      <h1 className="font-luxury text-4xl md:text-6xl text-slate-800 mb-2">Heidi 7.0</h1>
      <h2 className="font-sketch text-2xl md:text-3xl text-slate-600 mb-12">Thai Edition</h2>

      {timeLeft && (
        <div className="grid grid-cols-4 gap-4 mb-12 max-w-sm w-full">
          {[
            { label: 'Days', val: timeLeft.days },
            { label: 'Hrs', val: timeLeft.hours },
            { label: 'Mins', val: timeLeft.minutes },
            { label: 'Secs', val: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="bg-white/50 p-3 sketchbook-border shadow-sm border border-slate-100">
              <div className="font-luxury text-2xl text-amber-600">{item.val}</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500">{item.label}</div>
            </div>
          ))}
        </div>
      )}

      <p className="text-slate-400 font-light max-w-xs mb-12 italic">
        Eine unvergessliche Reise durch Thailand
      </p>

      <button
        onClick={onEnter}
        className="px-12 py-3 bg-[#F4C2C2] text-white font-luxury text-xl rounded-full shadow-lg hover:bg-[#efb1b1] transition-colors sketchbook-border"
      >
        Let's go
      </button>

      <div className="mt-20 text-slate-300 font-sketch text-xl">
        January 17th – February 7th, 2026
      </div>
    </div>
  );
};

export default WelcomeScreen;
