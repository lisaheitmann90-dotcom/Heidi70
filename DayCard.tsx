
import React from 'react';
import { Day, Activity } from '../types';
import { Icons } from '../constants';

interface DayCardProps {
  day: Day;
}

const DayCard: React.FC<DayCardProps> = ({ day }) => {
  return (
    <div className={`relative mb-12 pl-8 timeline-dot transition-all duration-500`}>
      <div className={`p-6 bg-white shadow-sm border border-slate-100 sketchbook-border relative group
        ${day.isBirthday ? 'ring-4 ring-amber-100 border-amber-400' : ''}`}>
        
        {day.isBirthday && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-white px-6 py-1 rounded-full font-luxury text-sm shadow-md">
            The Big Celebration
          </div>
        )}

        <div className="mb-4">
          <span className="font-luxury text-amber-600/70 text-sm tracking-wide block uppercase">
            {day.displayDate}
          </span>
          <h3 className="font-luxury text-xl text-slate-800">
            {day.location}
          </h3>
        </div>

        <div className="space-y-4 mb-6">
          {day.activities.map((activity, idx) => {
            const Icon = Icons[activity.icon];
            return (
              <div key={idx} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 opacity-80 group-hover:scale-110 transition-transform">
                  <Icon />
                </div>
                <div className="flex-grow">
                  {activity.time && <span className="font-semibold text-xs text-slate-400 block mb-0.5">{activity.time}</span>}
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-slate-600 leading-snug">{activity.description}</p>
                    {activity.mapUrl && (
                      <a 
                        href={activity.mapUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-slate-300 hover:text-amber-500 transition-colors"
                        title="View on Map"
                      >
                        <Icons.mapPin />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {day.dinner && (
          <div className="mt-6 pt-6 border-t border-dotted border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <Icons.plateChopsticks />
              <span className="font-luxury text-rose-400 text-sm italic tracking-wide">Dinner Plans</span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-slate-700 font-medium text-sm">{day.dinner.location}</p>
              {day.dinner.mapUrl && (
                <a 
                  href={day.dinner.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-300 hover:text-rose-400 transition-colors"
                  title="View Restaurant Location"
                >
                  <Icons.mapPin className="w-4 h-4" />
                </a>
              )}
            </div>
            {day.dinner.details && <p className="text-xs text-slate-400 italic mt-1">{day.dinner.details}</p>}
          </div>
        )}

        <div className="mt-6 bg-slate-50/50 -mx-6 -mb-6 p-4 rounded-b-lg border-t border-slate-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-slate-400 tracking-widest font-bold">Accommodation</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-sketch text-slate-600 text-lg">
                {day.accommodationMapUrl ? (
                  <a href={day.accommodationMapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors underline decoration-dotted decoration-slate-300">
                    {day.accommodation}
                  </a>
                ) : day.accommodation}
              </span>
            </div>
          </div>
          <div className="text-slate-300 opacity-30 select-none">
            <Icons.orchid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayCard;
