import React from "react";

// SetRow.jsx
/* Renders a single set with weight and reps, including edit and delete options
   including validation and options to edit or delete the set. */

const SetRow = ({ reps, weight, onChange, onRemove }) => {
  return (
    <div className="flex flex-wrap gap-4 items-center mb-1 bg-orange-200 p-2 rounded">

      <label className="flex items-center gap-1">
        <span className="w-12">Reps:</span>   
        <input
          type="number"
          min="0"
          step="1"
          value={Number.isNaN(reps) ? "" : reps} // Show empty input if reps is NaN
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
          className="w-14 px-1 py-0.5 border rounded text-right text-sm ml-1.5 "
        />
      </label>
      {/* Button to remove the entire set */}
      <button
        onClick={onRemove}
        className="text-xs bg-red-500 text-white px-1.5 py-0.5 leading-none rounded-sm hover:bg-red-600"
      >
        X
      </button>

      <label className="flex items-center gap-1">
        <span className ="">Weight:</span>
        <input
            type="number"
            min="0"
            step="any"
            value={Number.isNaN(weight) ? "" : weight} // Show empty if NaN
            onChange={(e) => {
              const val = e.target.value;
              if (val === "") {
                onChange("weight", NaN); // Temporarily unset
              } else {
                onChange("weight", parseFloat(val));
              }
            }}
            onBlur={(e) => {
              if (e.target.value === "") {
                onChange("weight", 0); // Restore 0 if left empty
              }
            }}
            className="w-14 px-1 py-0.5 border rounded text-right text-sm"
          />
          <span className="whitespace-nowrap text-xs ml-4">kg</span>
      </label>

    </div>
  );
};

export default SetRow;