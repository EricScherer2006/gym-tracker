import React, { useState } from "react";
import WeekView from "./components/WeekView";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const App = () => {
  const [weekData, setWeekData] = useState(
    days.reduce((acc, day) => {
      acc[day] = [];
      return acc;
    }, {})
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Gym Tracker</h1>
      <WeekView weekData={weekData} setWeekData={setWeekData} />
    </div>
  );
};

export default App;