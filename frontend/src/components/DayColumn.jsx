import React, { useState } from "react";
import EntryForm from "./EntryForm";
import ExerciseSection from "./ExcersiceSection";

// DayColumn.jsx
/* Displays one day's column with exercises and option to add new ones */

const DayColumn = ({ day, exercises, setWeekData }) => {
  const [newExerciseName, setNewExerciseName] = useState("");
  const [showInput, setShowInput] = useState(false);

   // Adds a new exercise to the day's list if name is not empty
  const addExercise = () => {
    if (!newExerciseName.trim()) return;

    setWeekData(prev => {
      const updated = [...prev[day]];
      updated.push({ name: newExerciseName, sets: [] });
      return { ...prev, [day]: updated };
    });
    setNewExerciseName("");
    setShowInput(false);
  };


  return (
    <div className= "border border-slate-400 rounded">

      <div>
        {exercises.map((exercise, index) => (
          <ExerciseSection
            key={index}
            exercise={exercise}
            exerciseIndex={index}
            day={day}
            setWeekData={setWeekData}
          />
        ))}
      </div>
      
      {/* Show input field for new exercise or Add button */}
      {showInput ? (
        <div className="flex flex-col gap-2 mt-2 xl:flex-col xl:gap-2 xl:mt-2">
          <input
            type="text"
            placeholder="Exercise name"
            className="border ml-1 mr-1 px-2 py-1 rounded text-sm w-full xl:w-auto"
            value={newExerciseName}
            onChange={(e) => setNewExerciseName(e.target.value)}
          />
          <div className="flex flex-col gap-2 xl:flex-row xl:gap-2">
            <button onClick={addExercise} className="text-xs xl:text-sm text-white px-2 py-1 ml-1  bg-slate-600 
            rounded-md hover:text-white hover:bg-green-500 border border-green-500 transition focus:outline-none mb-1">
              ✅ Add
            </button>
            <button onClick={() => { setShowInput(false); setNewExerciseName(""); }} className="text-xs xl:text-sm text-white px-2 py-1  
            rounded-md hover:text-white border border-red-500 bg-slate-600 hover:bg-red-500 transition focus:outline-none mb-1">
              <span className="text-red-500 mr-1">✕</span>
               Cancel
            </button>
          </div>
        </div>
      ) : (
        <button className="mt-2 ml-2 mb-2 rounded px-2 py-1 text-sm text-pink-200 hover:bg-pink-300 border border-pink-200 transition focus:outline-none" onClick={() => setShowInput(true)}>
          ➕ Add Exercise
        </button>
      )}
    </div>
  );
};

export default DayColumn;