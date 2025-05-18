import React, { useState } from "react";
import EntryForm from "./EntryForm";

const DayColumn = ({ day, exercises, setWeekData }) => {
  const [newExerciseName, setNewExerciseName] = useState("");
  const [showInput, setShowInput] = useState(false);

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
    <div className="border rounded-xl p-4 shadow-sm">
      <h2 className="w-24 font-bold pb-2 text-center text-pink-200 underline text-lg">{day}</h2>

      {exercises.map((exercise, i) => (
        <EntryForm
          key={i}
          day={day}
          exerciseIndex={i}
          exercise={exercise}
          setWeekData={setWeekData}
        />
      ))}

      {showInput ? (
        <div className="flex flex-col gap-2 mt-2">
          <input
            type="text"
            placeholder="Exercise name"
            className="border px-2 py-1 rounded text-sm"
            value={newExerciseName}
            onChange={(e) => setNewExerciseName(e.target.value)}
          />
          <div className="flex gap-2">
            <button onClick={addExercise} className="text-sm bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">
              ✅ Add
            </button>
            <button onClick={() => { setShowInput(false); setNewExerciseName(""); }} className="text-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
              ❌ Cancel
            </button>
          </div>
        </div>
      ) : (
        <button className="mt-2 text-sm text-white-100" onClick={() => setShowInput(true)}>
          ➕ Add Exercise
        </button>
      )}
    </div>
  );
};

export default DayColumn;