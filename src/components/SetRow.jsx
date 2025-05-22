import React from "react";

const SetRow = ({ reps, weight, onChange, onRemove }) => {
  return (
    <div className="flex flex-wrap gap-4 items-center mb-1 bg-orange-200 p-2 rounded">

      <label className="flex items-center gap-1">
        <span className="w-12">Reps:</span>   
        <input
          type="number"
          min="0"
          step="1"
          value={Number.isNaN(reps) ? "" : reps}
          onChange={(e) => {
            const val = e.target.value;

            if (val === "") {
              onChange("reps", NaN); // Temporarily empty
            } else {
              const parsed = parseInt(val, 10);
              if (!isNaN(parsed)) {
                onChange("reps", Math.max(0, parsed)); // Ensure positive integer
              }
            }
          }}
          onBlur={(e) => {
            if (e.target.value === "") {
              onChange("reps", 0); // Restore 0 if left empty
            }
          }}
          className="w-14 px-1 py-0.5 border rounded text-right text-sm ml-1.5"
        />
      </label>
      
      <button
        onClick={onRemove}
        className="text-xs bg-red-500 text-white px-1.5 py-0.5 leading-none rounded-sm hover:bg-red-600"
      >
        X
      </button>

      <label className="flex items-center gap-1">
        <span >Weight:</span>
        <input
            type="number"
            min="0"
            step="any"
            value={Number.isNaN(weight) ? "" : weight}
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
          <span className="whitespace-nowrap text-xs ml-2">kg</span>
      </label>

    </div>
  );
};


export default SetRow;