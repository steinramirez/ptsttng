import React, { useState } from 'react';
import Calendar from 'react-calendar';
import style from '../app/MyCalendar.module.css'

function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  return (
    <>
      <h1>Tu agendamiento será para el día {selectedDate.toLocaleDateString()}.</h1>
      <Calendar className={style.calendar} onChange={handleDateChange} value={selectedDate} />
      <button>Aceptar agendamiento</button>
    </>
  );
}

export default MyCalendar;