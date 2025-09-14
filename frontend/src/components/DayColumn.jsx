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
    <div className="border rounded-xl p-2">

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
            className="border px-2 py-1 rounded text-sm w-full xl:w-auto"
            value={newExerciseName}
            onChange={(e) => setNewExerciseName(e.target.value)}
          />
          <div className="flex flex-col gap-2 xl:flex-row xl:gap-2">
            <button onClick={addExercise} className="text-xs xl:text-sm bg-green-500 text-white px-2 py-1  rounded hover:bg-green-600 focus:outline-none">
              ✅ Add
            </button>
            <button onClick={() => { setShowInput(false); setNewExerciseName(""); }} className="text-xs xl:text-sm bg-red-500 text-white px-2 py-1  rounded hover:bg-red-600 focus:outline-none">
              ❌ Cancel
            </button>
          </div>
        </div>
      ) : (
        <button className="mt-2 text-sm text-pink-200 focus:outline-none" onClick={() => setShowInput(true)}>
          ➕ Add Exercise
        </button>
      )}
    </div>
  );
};

export default DayColumn;