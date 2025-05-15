import React from "react";
import DayColumn from "./DayColumn";

const WeekView = ({ weekData, setWeekData }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {Object.entries(weekData).map(([day, exercises]) => (
        <DayColumn
          key={day}
          day={day}
          exercises={exercises}
          setWeekData={setWeekData}
        />
      ))}
    </div>
  );
};

export default WeekView;
