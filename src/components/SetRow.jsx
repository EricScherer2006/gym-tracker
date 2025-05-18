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
          value={reps}
          onChange={e => onChange("reps", e.target.value)}
          className="w-16 min-w-0 border px-1 py-1 rounded"
        />
      </label>

      <label className="flex items-center gap-1">
        Weight:
        <div className="flex items-center">
          <input
            type="number"
            min="0"
            step="any"
            value={weight}
            onChange={e => onChange("weight", e.target.value)}
            className="w-20 min-w-0 border px-1 py-1 rounded"
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