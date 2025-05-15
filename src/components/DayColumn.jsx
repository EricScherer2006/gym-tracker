import React from "react";
import EntryForm from "./EntryForm";

const DayColumn = ({ day, exercises, setWeekData }) => {
  const addExercise = () => {
  const name = prompt("Enter exercise name:");
  if (!name) return;

  setWeekData(prev => {
    const updated = [...prev[day]];
    updated.push({ name, sets: [] });  // <-- Always start with empty sets
    return { ...prev, [day]: updated };
  });
};

  return (
    <div className="border rounded-xl p-4 shadow-sm">
      <h2 className="w-24 font-bold border-b-4 border-purple-600 pb-2 text-center">{day}</h2>
      {exercises.map((exercise, i) => (
        <EntryForm
          key={i}
          day={day}
          exerciseIndex={i}
          exercise={exercise}
          setWeekData={setWeekData}
        />
      ))}
      <button className="mt-2 text-sm text-blue-600" onClick={addExercise}>
        ➕ Add Exercise
      </button>
    </div>
  );
};

export default DayColumn;