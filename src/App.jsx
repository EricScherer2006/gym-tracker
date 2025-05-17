import React, { useState } from "react";
import WeekView from "./components/WeekView";
import './app.css';
import barbellLogo from './assets/barbell-7834321_640.jpg';

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const App = () => {
  const [weekData, setWeekData] = useState(
    days.reduce((acc, day) => {
      acc[day] = [];
      return acc;
    }, {})
  );

  return(
  <div className="min-h-screen bg-gray-600 p-4">
      <header className="relative flex items-center justify-between min-h-[4rem]">
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                      text-blue-400 text-3xl font-extrabold underline whitespace-nowrap">
          Gym Tracker
        </h1>
        <img
          src={barbellLogo}
          alt="Barbell Logo"
          className="relative ml-[calc(50%+7rem)] h-10 w-auto object-contain rounded-md"
        />

        <p className="text-right text-white text-xs">
          Contact:scherereric9@gmail.com
        </p>
      </header>

      <WeekView weekData={weekData} setWeekData={setWeekData} />
    </div>
  );
}

export default App;