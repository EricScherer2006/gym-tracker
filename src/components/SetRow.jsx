import React from "react";

// SetRow.jsx
/* Renders a single set with weight and reps, including edit and delete options
   including validation and options to edit or delete the set. */

const SetRow = ({ reps, weight, onChange, onRemove }) => {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-1 items-center mb-1 bg-orange-200 p-2 rounded">
      
      <label className="flex items-center gap-1 min-w-[130px]">
        <span className="w-[50px] text-sm">Reps:</span>
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
          className="w-[60px] px-1 py-0.5 border rounded text-right text-sm max1773:w-[54px] max1773:text-xs"
        />
      </label>

      <button
        onClick={onRemove}
        aria-label="Remove set"
        className="text-xs bg-red-500 text-white px-1.5 py-0.5 leading-none rounded-sm hover:bg-red-600 mt-[1px]"
      >
        X
      </button>

      <label className="flex items-center gap-1 min-w-[130px]">
        <span className="w-[50px] text-sm">Weight:</span>
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
          className="w-[60px] px-1 py-0.5 border rounded text-right text-sm max1773:w-[54px] max1773:text-xs"
        />
        <span className="text-xs ml-2 max1773:ml-0.5 min1774:ml-5 whitespace-nowrap">kg</span>
      </label>
    </div>
  );
};

export default SetRow