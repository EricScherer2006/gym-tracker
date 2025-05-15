import React from "react";
import EntryForm from "./EntryForm";

const DayColumn = ({ day, exercises, setWeekData }) => {
  const addExercise = () => {
    const name = prompt("Enter exercise name:");
    if (!name) return;
    setWeekData(prev => ({
      ...prev,
      [day]: [...prev[day], { name, sets: [] }]
    }));
  };

  return (
    <div className="border rounded-xl p-4 shadow-sm">
      <h2 className="text-lg font-semibold mb-2">{day}</h2>
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