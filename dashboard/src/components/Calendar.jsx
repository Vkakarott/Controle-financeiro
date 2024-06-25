import React from "react";

function Calendar() {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    
  return (
    <div className="calendar">
      <h3>{month}</h3>
      <div className="month">
        
      </div>
    </div>
  );
}

export default Calendar;