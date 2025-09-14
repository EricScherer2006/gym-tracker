import React, { useState, useEffect, useRef } from "react";
import WeekView from "./components/WeekView";
import { saveWeekData, loadWeekData } from "./services/dataService";
import './App.css';
import barbellLogo from './assets/barbell-7834321_640.jpg';

// App.jsx
/* Days of the week used as keys in weekData */


const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Backend End-Point
// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL + "/workouts/";
// NOTE: Backend integration disabled – data is stored locally only.

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

  return (
  <div className="min-h-screen bg-gray-600 p-4">
    <header className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-2 min-h-[4rem]">
      <div className="flex flex-col items-center sm:flex-row sm:items-center sm:gap-4">
        <img
          src={barbellLogo}
          alt="Barbell Logo"
          className="h-10 w-auto object-contain rounded-md"
        />

        <h1 className="text-blue-400 text-3xl font-extrabold underline whitespace-nowrap
                       text-center sm:text-left md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          Gym Tracker
        </h1>

        <p className="text-white text-xs text-center mt-1 sm:mt-0 sm:text-left sm:ml-4 md:hidden">
          Contact: scherereric9@gmail.com
        </p>
      </div>

      <div className="mt-2 sm:mt-0 w-full sm:w-auto">
        <button
          className="text-sm bg-red-500 text-white px-3 py-1 rounded-full shadow-sm hover:bg-red-600 transition 
                    block mx-auto sm:ml-[6px] md:mx-0 text-center"
          onClick={() => {
             resetWeek();
            
          }}
        >
          🔁 Reset Week
        </button>

      </div>

      
      
    </header>

    <WeekView weekData={weekData} setWeekData={setWeekData} />
  </div>
  );
};

export default App;