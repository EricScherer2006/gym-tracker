import React, { useState, useEffect, useRef } from "react";
import WeekView from "./components/WeekView";
import { saveWeekData, loadWeekData } from "./services/dataService";
import './App.css';
import barbellLogo from './assets/barbell-7834321_640.jpg';

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Backend End-Point
const BACKEND_URL = "http://127.0.0.1:8000/workouts/";

const App = () => {
  const [weekData, setWeekData] = useState(
    days.reduce((acc, day) => {
      acc[day] = [];
      return acc;
    }, {})
  );

  const isFirstRender = useRef(true);

  // Load data on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(BACKEND_URL);
        if (!response.ok) throw new Error("Failed to fetch backend data");
        const backendData = await response.json();

        // Transform backend workouts to weekData shape
        const transformed = days.reduce((acc, day) => {
          acc[day] = backendData.filter(w => w.day === day);
          return acc;
        }, {});

        // Merge backend data with localStorage as fallback
        const saved = loadWeekData();
        setWeekData(saved ? { ...transformed, ...saved } : transformed);

      } catch (err) {
        console.error("Backend fetch failed, using localStorage only", err);
        const saved = loadWeekData();
        if (saved) setWeekData(saved);
      }
    };

    loadData();
  }, []);

  // Save to localStorage and send updates to backend
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Save to localStorage
    saveWeekData(weekData);

    // Send updates to backend
    const postUpdates = async () => {
      try {
        for (const day of days) {
          for (const exercise of weekData[day]) {
            await fetch(`${BACKEND_URL}`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                user_name: exercise.user_name || "default", // fallback username
                exercise: exercise.name,
                weight: parseFloat(exercise.weight),
                reps: parseInt(exercise.reps),
                date: new Date().toISOString().split("T")[0],
                day,
              }),
            });
          }
        }
      } catch (err) {
        console.error("Failed to sync with backend", err);
      }
    };

    postUpdates();
  }, [weekData]);

  const resetWeek = () => {
    if (window.confirm("Are you sure you want to reset your week? All Data will be Lost!")) {
      const clearedWeekData = days.reduce((acc, day) => {
        acc[day] = [];
        return acc;
      }, {});
      setWeekData(clearedWeekData);
      localStorage.removeItem("weekData");
    }
  };

  return (
    <div className="min-h-screen bg-gray-600 p-4">
      <header className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-2 min-h-[4rem]">
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:gap-4">
          <img src={barbellLogo} alt="Barbell Logo" className="h-10 w-auto object-contain rounded-md" />
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
            onClick={resetWeek}
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