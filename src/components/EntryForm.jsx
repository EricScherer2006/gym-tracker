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
    <div className="mb-4 border p-2 rounded bg-gray-600 lg:mb-3 ">
      <div className="flex justify-between items-center">
        {/*<h3 className="font-semibold text-pink-200 text-sm underline">{exercise.name}</h3>*/}
        <button
          className="text-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 "
          onClick={() => {
            setWeekData(prev => {
              const updated = prev[day].filter((_, i) => i !== exerciseIndex);
              return { ...prev, [day]: updated };
            });
          }}
        >
          X Remove Exercise
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

      <button className="text-sm bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 " onClick={addSet}>
        +Add Set
      </button>
    </div>
  );
};

export default EntryForm;