import React from "react";

const SetRow = ({ reps, weight, onChange, onRemove }) => {
  return (
    <div className="flex flex-wrap gap-4 items-center mb-1 bg-orange-200 p-2 rounded">
      <label className="flex items-center gap-1">
        Reps:
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
          style={{ width: "60px" }}
        />
          <span className="w-16 min-w-0 border px-1 py-1 rounded"
        />
      </label>

      <label className="flex items-center gap-1">
        Weight:
        <div className="flex items-center">
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
            style={{ width: "60px" }}
          />
          <span className="ml-1 whitespace-nowrap">kg</span>
        </div>
      </label>

      <button
        onClick={onRemove}
        className="text-sm bg-red-500 text-white px-2 py-0.5 leading-none rounded-sm hover:bg-red-600"
      >
        X
      </button>
    </div>
  );
};


export default SetRow;