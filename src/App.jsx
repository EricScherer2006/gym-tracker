import React, { useState } from "react";
import WeekView from "./components/WeekView";
import './app.css';


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
      <h1 className="text-purple-700 text-center underline mt-8 mb-4 text-3xl font-semibold">Gym Tracker</h1>
      <WeekView weekData={weekData} setWeekData={setWeekData} />
    </div>
  );
};

export default App;