import React, { useState, useEffect, useRef } from "react";
import WeekView from "./components/WeekView";
import { saveWeekData, loadWeekData } from "./services/dataService";
import './App.css';
import barbellLogo from './assets/barbell-7834321_640.jpg';

// App.jsx
/* Days of the week used as keys in weekData */

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// State holds exercises for each day, initialized as empty arrays
const App = () => {
  const [weekData, setWeekData] = useState(
    days.reduce((acc, day) => {
      acc[day] = [];
      return acc;
    }, {})
  );

  // Resets the week data after confirmation, clears localStorage
  const resetWeek = () => {
    if(window.confirm("Are you sure you want to reset your week? All Data will be Lost!")){
      const clearedWeekData = days.reduce((acc, day) => {
      acc[day] = [];
      return acc;
    }, {});
    setWeekData(clearedWeekData);
    }
    localStorage.removeItem("weekData");

  }

  // On mount, load saved data from localStorage
  useEffect(() => {
    const saved = loadWeekData();
    if (saved){
       setWeekData(saved);
    }
  }, []);

  // Skip saving to localStorage on initial render
  const isFirstRender = useRef(true);

  // Save weekData to localStorage whenever it changes (except first render)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; 
    }
    saveWeekData(weekData);
  }, [weekData]);

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

        <button className="text-sm bg-red-500 text-white px-2 py-0.5 leading-none rounded-sm hover:bg-red-600" 
        onClick = {resetWeek}
        >
          Reset-Week
        </button> 
      </header>

      <WeekView weekData={weekData} setWeekData={setWeekData} />
    </div>
  );
}


export default App;