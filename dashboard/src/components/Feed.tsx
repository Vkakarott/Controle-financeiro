import React from "react";

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

interface Event {
    day: string;
    message: string;
}

export default function Feed({ events }: { events: Event[] }) {
    const today = new Date();

    return (
        <div className="flex flex-col w-11/12 gap-1 mt-1">
            {daysOfWeek.map((day, index) => {
                const currentDate = new Date(today);
                currentDate.setDate(today.getDate() - today.getDay() + index);
                const currentDay = currentDate.getDate();
                const event = events.find(event => event.day === currentDay.toString());
                const isToday = today.getDay() === index;
        
                return (
                    <div key={day} className={`flex flex-col rounded-md gap-1 ${isToday ? 'bg-[var(--calendar)]' : 'bg-transparent'}`}>
                        <div className="flex px-1 gap-1 font-semibold text-sm items-center after:w-full after:bg-[var(--color-details)] after:h-[2px] text-[var(--color-details)] z-30">
                            {currentDay}
                        </div>
                        <div className="flex text-xs absolute z-0 p-9 text-zinc-800">
                            {day}
                        </div>
                        <div className={`flex w-3/4 rounded-lg p-1 z-20 text-sm h-10 ml-14 text-[var(--text-color)] ${event ? 'bg-[var(--primary-shadow)]' : 'bg-transparent'}`}>
                            {event ? event.message : ''}
                        </div>
                    </div>
                );
            })}
        </div>
    )
}