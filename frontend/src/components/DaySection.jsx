import { useState } from "react";
import DayColumn from "./DayColumn";

// DaySection.jsx
/* Displays one day's section with toggle to expand/collapse its exercises */
const DaySection = ({ day, exercises, setWeekData }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={`${expanded ? ' border-[#FF00FF]' : ''} rounded-xl bg-[#0D0D1A] p-2 mb-4 overflow-hidden shadow-lg`}>  {/*Aplly Border conditionally to remove border-bug */}
      <div
        className="flex justify-between items-center cursor-pointer select-none overflow-hidden border-b-2 border-[#00FFFF] pb-1"
        onClick={() => setExpanded((prev) => !prev)}
      >
        <h2 className="text-xl font-bold uppercase tracking-wider text-[#0FF]">{day}</h2>
        <button
          className="text-lg text-[#00FFFF] hover:text-[#0FF] focus:outline-none font-bold"
          aria-label={expanded ? "Collapse day" : "Expand day"}
        >
          {expanded ? "−" : "+"}
        </button>
      </div>

      {/* Collapsible content */}
      {expanded && (
        <div className="mt-2 border-l-2 border-[#00FFFF] pl-2">
          <DayColumn day={day} exercises={exercises} setWeekData={setWeekData} />
        </div>
      )}
    </div>
  );
};

export default DaySection;