import React from "react";

const daysOfWeek = ['15', '16', '17', '18', '19', '20', '21'];
const events = [
    { day: '16', message: 'Meeting at 10 AM' },
    { day: '18', message: 'Project deadline' },
    { day: '19', message: 'Team lunch' }
  ];

export default function Feed() {
    const today = new Date().getDay();

    return (
        <div className="flex w-11/12 flex-col gap-1 mt-1 ">
            {daysOfWeek.map((day, index) => {
            const event = events.find(event => event.day === day);
            const isToday = today === index;
        
            return (
                <div key={day} className={`flex flex-col gap-1 ${isToday ? 'bg-[var(--calendar)]' : 'bg-transparent'}`}>
                    <div className="flex px-1 gap-1 font-semibold text-sm items-center after:w-full after:bg-[var(--color-details)] after:h-[2px] text-[var(--color-details)]">
                        {day}
                    </div>
                    <div className={`flex w-3/4 rounded-lg p-1 text-sm h-10 ml-14 text-[var(--text-color)] ${event ? 'bg-[var(--primary-shawdon)]' : 'bg-transparent'}`}>
                        {event ? event.message : ''}
                    </div>
                </div>
            );
            })}
        </div>
    )
}