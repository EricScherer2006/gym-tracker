import React from "react";
import SetRow from "./SetRow";

const EntryForm = ({ day, exerciseIndex, exercise, setWeekData }) => {
  const addSet = () => {
    setWeekData(prev => {
      const updated = [...prev[day]];
      const newSets = [...exercise.sets, { reps: 0, weight: 0 }];
      updated[exerciseIndex] = { ...exercise, sets: newSets };
      return { ...prev, [day]: updated };
    });
  };

  const updateSet = (setIndex, key, value) => {
    setWeekData(prev => {
      const updated = [...prev[day]];
      const updatedSets = [...exercise.sets];
      updatedSets[setIndex] = { ...updatedSets[setIndex], [key]: Number(value) };
      updated[exerciseIndex] = { ...exercise, sets: updatedSets };
      return { ...prev, [day]: updated };
    });
  };

  return (
    <div className="mb-4">
      <h3 className="font-semibold">{exercise.name}</h3>
      {exercise.sets.map((set, i) => (
        <SetRow
          key={i}
          reps={set.reps}
          weight={set.weight}
          onChange={(key, value) => updateSet(i, key, value)}
        />
      ))}
      <button className="mt-1 text-sm text-green-600" onClick={addSet}>
        ➕ Add Set
      </button>
    </div>
  );
};

export default EntryForm;