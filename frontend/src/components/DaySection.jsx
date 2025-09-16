import { useState } from "react";
import DayColumn from "./DayColumn";

// DaySection.jsx
/* Displays one day's section with toggle to expand/collapse its exercises */
const DaySection = ({ day, exercises, setWeekData }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={`${expanded ? 'border border-gray-900' : ''} rounded bg-gray-800 p-2 mb-4 overflow-hidden`}>  {/*Aplly Border conditionally to remove border-bug */}
      <div
        className="flex justify-between items-center cursor-pointer select-none overflow-hidden"
        onClick={() => setExpanded((prev) => !prev)}
      >
        <h2 className="text-xl font-semibold uppercase tracking-wide text-blue-300">{day}</h2>
        <button
          className="text-lg text-blue-400 hover:text-blue-600 focus:outline-none"
          aria-label={expanded ? "Collapse day" : "Expand day"}
        >
          {expanded ? "−" : "+"}
        </button>
      </div>

      {/* Collapsible content */}
      {expanded && (
        <div className="mt-2">
          <DayColumn day={day} exercises={exercises} setWeekData={setWeekData} />
        </div>
      )}
    </div>
  );
};

export default DaySection;