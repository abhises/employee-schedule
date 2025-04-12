import React from "react";
import MyCalendar from "./Calendar";

const SchedulePage = () => {
  return (
    <div>
      <div className="m-4">
        {" "}
        <h2 className="text-4xl ">Schedule</h2>
      </div>
      <MyCalendar />
    </div>
  );
};

export default SchedulePage;
