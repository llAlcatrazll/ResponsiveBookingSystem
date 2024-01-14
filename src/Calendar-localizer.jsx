import { Calendar, globalizeLocalizer } from "react-big-calendar";
import globalize from "globalize";
import "./Big-Calendar/react-big-calendar.css";
// import './src/calendar-localizer.css'
import "./react-big-calendar.css";

// 'C:\Users\alexi\CCIS-BookingSystem\src\calendar-localizer.css

const createCalendar = (events) => {
  const localizer = globalizeLocalizer(globalize);

  const MyCalendar = () => (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );

  return MyCalendar;
};

export default createCalendar;
