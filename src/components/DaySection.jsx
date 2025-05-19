import { useState } from "react";
import DayColumn from "./DayColumn";

const DaySection = ({ day, exercises, setWeekData }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="border rounded bg-gray-700 p-2 mb-4 overflow-hidden">
      <div
        className="flex justify-between items-center cursor-pointer select-none overflow-hidden"
        onClick={() => setExpanded((prev) => !prev)}
      >
        <h2 className="text-lg font-semibold text-blue-300">{day}</h2>
        <button
          className="text-sm text-blue-400 hover:text-blue-600"
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