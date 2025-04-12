"use client";

import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useEffect, useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
// Set up locales

// Localizer
const localizer = momentLocalizer(moment);

// Define event type (optional if using built-in)
interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
}

const data = [
  {
    title: "Initial Event",
    start: new Date(2025, 3, 12, 10, 0),
    end: new Date(2025, 3, 12, 17, 0),
  },
  {
    title: "Initial Event",
    start: new Date(2025, 3, 15, 10, 0),
    end: new Date(2025, 3, 15, 12, 0),
  },
  {
    title: "Initial Event",
    start: new Date(2025, 3, 15, 10, 0),
    end: new Date(2025, 3, 15, 12, 0),
  },
];

const MyCalendar = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  useEffect(() => {
    setEvents(data);
  }, []);

  return (
    <div className="p-4 h-[700px]">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default MyCalendar;
