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
    <div className= " bg-[#0D0D1A] p-2">

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
        <div className="flex flex-col gap-2 mt-2 xl:flex-col xl:gap-2 xl:mt-2 border-l-2 border-[#00FFFF] pl-2">
          <input
            type="text"
            placeholder="Exercise name"
            className="border border-[#00FFFF] ml-1 mr-1 px-2 py-1 rounded text-sm w-full xl:w-auto bg-[#111126] text-[#00FFFF] placeholder-[#00FFFF] focus:outline-none focus:ring-2 focus:ring-[#FF00FF]"
            value={newExerciseName}
            onChange={(e) => setNewExerciseName(e.target.value)}
          />
          <div className="flex flex-col gap-2 xl:flex-row xl:gap-2">
            <button onClick={addExercise} className="text-xs xl:text-sm text-[#00FFFF] px-2 py-1 ml-1 bg-[#111126] rounded-md hover:text-[#0FF] hover:bg-[#FF00FF] border border-[#00FFFF] transition focus:outline-none mb-1">
              ✅ Add
            </button>
            <button onClick={() => { setShowInput(false); setNewExerciseName(""); }} className="text-xs xl:text-sm text-[#FF00FF] px-2 py-1 rounded-md hover:text-[#FF6EC7] border border-[#FF00FF] bg-[#111126] hover:bg-[#FF00FF] transition focus:outline-none mb-1">
              <span className="ttext-[#FF00FF] mr-1">✕</span>
               Cancel
            </button>
          </div>
        </div>
      ) : (
        <button className="mt-2 ml-2 mb-2 rounded px-2 py-1 text-sm text-[#FF6EC7] hover:bg-[#FF00FF] border border-[#FF6EC7] transition focus:outline-none" onClick={() => setShowInput(true)}>
          ➕ Add Exercise
        </button>
      )}
    </div>
  );
};

export default DayColumn;