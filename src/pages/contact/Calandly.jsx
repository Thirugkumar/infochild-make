import React from "react";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";

const Calendar = () => {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
  });

  return (
    <div className="App">
      <InlineWidget url="https://calendly.com/thirugkumar14" />
    </div>
  );
};

export default Calendar;
