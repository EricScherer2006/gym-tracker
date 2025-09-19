import React, { useState, useEffect, useRef,createContext, useContext } from "react";
import WeekView from "./components/WeekView";
import ThemeSwitch from "./components/ThemeSwitch"
import { saveWeekData, loadWeekData } from "./services/dataService";
import './App.css';
import barbellLogo from './assets/barbell-7834321_640.jpg';
import { FaGithub, FaMoon, FaSun } from "react-icons/fa";

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
  <div className="min-h-screen bg-[#1E1E3F] p-4">
    <header className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:gap-4 sm:px-2 min-h-[4rem] border-b-2 border-[#FF6EC7] pb-2">
      <div className="flex flex-col items-center sm:flex-row sm:items-center sm:gap-4">
        <img
          src={barbellLogo}
          alt="Barbell Logo"
          className="h-10 w-auto object-contain rounded-md"
        />

        <h1 className="text-[#00FFFF] text-3xl font-extrabold uppercase 
        tracking-wider whitespace-nowrap underline 
        text-center sm:text-left md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          Gym Tracker
        </h1>

        <ThemeSwitch/> 

        <a
          href="https://github.com/EricScherer2006/gym-tracker"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#111126] 
          text-[#00FFFF] rounded-lg hover:bg-[#FF00FF] hover:text-[#0D0D1A] transition-colors"
        >
          <span className="relative rounded-full border-2 border-gray-500 p-1 overflow-hidden">
            <FaGithub className="w-5 h-5 relative z-10" />
            <span className="absolute inset-0 animate-[shine_2s_linear_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
          </span>
          <span>View on GitHub</span>
          
        </a>

      </div>

      <div className="mt-2 sm:mt-0 w-full sm:w-auto">
        <button
          className="text-sm bg-[#FF00FF] text-[#0D0D1A] px-3 py-1 rounded-full 
          shadow-md hover:bg-[#FF6EC7] transition-colors block mx-auto sm:ml-[6px] md:mx-0 text-center"
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