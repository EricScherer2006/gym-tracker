import React from "react";
import DayColumn from "./DayColumn";

const WeekView = ({ weekData, setWeekData }) => {
  return (
    <div className="fullscreen flex space-x-4 text-blue-400">
  {Object.entries(weekData).map(([day, exercises]) => (
    <div key={day} className="flex-1 min-w-0">
      <DayColumn
        day={day}
        exercises={exercises}
        setWeekData={setWeekData}
      />
    </div>
  ))}
</div>
  );
};

export default WeekView;
