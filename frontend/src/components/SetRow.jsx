import React from "react";

// SetRow.jsx
/* Renders a single set with weight and reps, including edit and delete options
   including validation and options to edit or delete the set. */

const SetRow = ({ reps, weight, onChange, onRemove }) => {
  return (
    <div className="flex flex-wrap gap-3 items-center mb-2 p-2 bg-[#111126] border-2 border-[#00FFFF] rounded-lg shadow-md">
      
      <label className="flex items-center gap-2 min-w-[140px]">
        <span className="w-[50px] text-sm text-[#FF6EC7] font-semibold">Reps:</span>
        <input
          type="number"
          min="0"
          step="1"
          value={Number.isNaN(reps) ? "" : reps}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "") {
              onChange("reps", NaN);
            } else {
              const parsed = parseInt(val, 10);
              if (!isNaN(parsed)) {
                onChange("reps", Math.max(0, parsed));
              }
            }
          }}
          onBlur={(e) => {
            if (e.target.value === "") {
              onChange("reps", 0);
            }
          }}
          className="w-[70px] px-2 py-1 border border-[#FF00FF] rounded bg-[#0D0D1A] text-[#00FFFF] text-center focus:outline-none focus:ring-2 focus:ring-[#FF00FF]"
        />
      </label>

      <button
        onClick={onRemove}
        aria-label="Remove set"
        className="text-xs text-[#0D0D1A] bg-[#FF00FF] px-2 py-1 rounded hover:bg-[#FF6EC7] transition-shadow shadow-sm"
      >
        X
      </button>

      <label className="flex items-center gap-1 min-w-[140px]">
        <span className="w-[50px] text-sm text-[#FF6EC7] font-semibold mr-1">Weight:</span>
        <input
          type="number"
          min="0"
          step="any"
          value={Number.isNaN(weight) ? "" : weight}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "") {
              onChange("weight", NaN);
            } else {
              onChange("weight", parseFloat(val));
            }
          }}
          onBlur={(e) => {
            if (e.target.value === "") {
              onChange("weight", 0);
            }
          }}
          className="w-[70px] px-2 py-1 border border-[#FF00FF] rounded bg-[#0D0D1A] text-[#00FFFF] text-center focus:outline-none focus:ring-2 focus:ring-[#FF00FF]"
        />
        <span className="text-xs ml-6 text-[#00FFFF] whitespace-nowrap ">kg</span>
      </label>
    </div>
  );
};

export default SetRow;