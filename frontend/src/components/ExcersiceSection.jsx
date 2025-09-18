import { useState } from "react";
import EntryForm from "./EntryForm";

//ExcersiceSection.jsx
/* ExerciseSection component displays a single exercise with
   the ability to toggle showing/hiding its details (EntryForm).*/

const ExerciseSection = ({ exercise, exerciseIndex, day, setWeekData }) => {
  
  const [expanded, setExpanded] = useState(true);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <div className={  "border border-[#FF00FF] rounded-xl bg-[#0D0D1A] p-2 mb-3 overflow-hidden box-border shadow-lg"
       }
    >
      <div
        className="flex justify-between items-center cursor-pointer select-none border-b border-[#00FFFF] pb-1"
        onClick={toggleExpanded}
      >
        <h3 className="font-bold text-[#FF6EC7] text-md tracking-wider">{exercise.name}</h3>
        <button
          className="text-sm text-[#00FFFF] hover:text-[#0FF] focus:outline-none font-bold"
          aria-label={expanded ? "Collapse exercise" : "Expand exercise"}
        >
          {expanded ? "−" : "+"}
        </button>
      </div>

      {expanded && (
        <div className="mt-2 ">
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