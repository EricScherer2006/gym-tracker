import React from "react";
import SetRow from "./SetRow";

// EntryForm.jsx
/* Component for adding new workout entries (exercise name, sets, reps, weight) */

const EntryForm = ({ day, exerciseIndex, exercise, setWeekData }) => {
  // Adds a new empty set (0 reps, 0 weight) to the current exercise
  const addSet = () => {
  setWeekData(prev => {
    const updated = [...prev[day]];
    const currentExercise = updated[exerciseIndex];

    const currentSets = Array.isArray(currentExercise.sets) ? currentExercise.sets : [];

    const newSets = [...currentSets, { reps: 0, weight: 0 }];
    updated[exerciseIndex] = { ...currentExercise, sets: newSets };
    return { ...prev, [day]: updated };
  });
};
  // Updates a single set (identified by index) when reps or weight are changed
  const updateSet = (setIndex, key, value) => {
  setWeekData(prev => {
    const updated = [...prev[day]];
    const currentExercise = updated[exerciseIndex];

    const updatedSets = [...(currentExercise.sets || [])];
    updatedSets[setIndex] = { ...updatedSets[setIndex], [key]: Number(value) };

    updated[exerciseIndex] = { ...currentExercise, sets: updatedSets };
    return { ...prev, [day]: updated };
  });
};
  // Removes a specific set from the current exercise
  const removeSet = (setIndex) => {
  setWeekData(prev => {
    const updated = [...prev[day]];
    const currentExercise = updated[exerciseIndex];

    const filteredSets = (currentExercise.sets || []).filter((_, i) => i !== setIndex);

    updated[exerciseIndex] = { ...currentExercise, sets: filteredSets };
    return { ...prev, [day]: updated };
  });
};
  // JSX structure for displaying the exercise and its sets
  return (
    <div className="mb-4 p-4 rounded-lg bg-[#111126] border-2 border-[#FF00FF] shadow-md lg:mb-3">
      <div className="flex justify-end mb-2">
        <button
          className="text-sm text-[#FF6EC7] border border-[#FF6EC7] px-3 py-1 rounded-full hover:bg-[#FF00FF] hover:text-[#0D0D1A] transition"
          onClick={() => {
            setWeekData(prev => {
              const updated = prev[day].filter((_, i) => i !== exerciseIndex);
              return { ...prev, [day]: updated };
            });
          }}
        >
          🗑️ 
          <span className="fixWrapremoveButton:hidden">Remove Exercise</span>
        </button>
      </div>

      {(exercise.sets || []).map((set, i) => (
        <SetRow
          key={i}
          reps={set.reps}
          weight={set.weight}
          onChange={(key, value) => updateSet(i, key, value)}
          onRemove={() => removeSet(i)} 
        />
      ))}

      <button
        className="text-sm border border-[#00FFFF] text-[#00FFFF] px-3 py-1 rounded-full hover:bg-[#00FFFF] hover:text-[#0D0D1A] transition"
        onClick={addSet}
      >
        ➕ Add Set
      </button>
    </div>
  );
};

export default EntryForm;