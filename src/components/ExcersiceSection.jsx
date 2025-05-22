import { useState } from "react";
import EntryForm from "./EntryForm";

const ExerciseSection = ({ exercise, exerciseIndex, day, setWeekData }) => {
  const [expanded, setExpanded] = useState(true);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <div className={
      "border-gray-600 rounded bg-gray-600 p-2 mb-3 overflow-hidden box-border"  // Remover borders after collapsing
       }
    >
      <div
        className="flex justify-between items-center cursor-pointer select-none"
        onClick={toggleExpanded}
      >
        <h3 className="font-semibold text-pink-300 text-sm underline">{exercise.name}</h3>
        <button
          className="text-sm text-pink-400 hover:text-pink-600 focus:outline-none"
          aria-label={expanded ? "Collapse exercise" : "Expand exercise"}
        >
          {expanded ? "−" : "+"}
        </button>
      </div>

      {expanded && (
        <div className="mt-2">
          <EntryForm
            day={day}
            exerciseIndex={exerciseIndex}
            exercise={exercise}
            setWeekData={setWeekData}
          />
        </div>
      )}
    </div>
    
  );
};

export default ExerciseSection;