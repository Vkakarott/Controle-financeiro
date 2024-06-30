import React from "react";
import './Calendar.css';

function Calendar() {
  const date = new Date();
  const month_name = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
  const month = date.getMonth();
  const dayWeek = date.toLocaleString('pt-BR', { weekday: 'long' });
  const day = date.getDate();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    
  return (
    <main className="calendar">
      <h1>{month_name[month]}</h1>
      <section className="month">
        <ul className="weeks">
          <li>Dom</li>
          <li>Seg</li>
          <li>Ter</li>
          <li>Qua</li>
          <li>Qui</li>
          <li>Sex</li>
          <li>Sab</li>
        </ul>
        <ul className="days">
        {[...Array(firstDay).keys()].map((emptyDay) => (
            <li key={`empty-${emptyDay}`}></li>
          ))}
          {[...Array(lastDay).keys()].map((dayNumber) => (
            <li 
              key={dayNumber + 1} 
              className={dayNumber + 1 === day ? 'current-day' : ''}
            >
              {dayNumber + 1}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Calendar;