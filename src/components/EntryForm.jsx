import React from "react";
import SetRow from "./SetRow";

const EntryForm = ({ day, exerciseIndex, exercise, setWeekData }) => {

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

  const removeSet = (setIndex) => {
  setWeekData(prev => {
    const updated = [...prev[day]];
    const currentExercise = updated[exerciseIndex];

    const filteredSets = (currentExercise.sets || []).filter((_, i) => i !== setIndex);

    updated[exerciseIndex] = { ...currentExercise, sets: filteredSets };
    return { ...prev, [day]: updated };
  });
};

  return (
    <div className="mb-4 border p-2 rounded bg-gray-600">
      <div className="flex justify-between items-center">
        {/*<h3 className="font-semibold text-pink-200 text-sm underline">{exercise.name}</h3>*/}
        <button
          className="text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
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

      <button className="text-sm bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600" onClick={addSet}>
        +Add Set
      </button>
    </div>
  );
};

export default EntryForm;