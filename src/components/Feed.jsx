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
        <div className="flex flex-col gap-1">
            {daysOfWeek.map((day, index) => {
            const event = events.find(event => event.day === day);
            const isToday = today === index;
        
            return (
                <div key={day} className={`flex flex-col gap-1 ${isToday ? '' : 'bg-white'}`}>
                    <div className="flex px-1 gap-1 font-semibold text-sm items-center after:w-full after:bg-black after:h-[2px]">
                        {day}
                    </div>
                    <div className={`flex w-3/4 rounded-lg p-1 text-sm h-10 ml-14 ${event ? 'bg-red-400' : 'bg-transparent'}`}>
                        {event ? event.message : ''}
                    </div>
                </div>
            );
            })}
        </div>
    )
}