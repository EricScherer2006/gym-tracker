import React from "react";

const SetRow = ({ reps, weight, onChange }) => {
  return (
    <div className="flex gap-2 items-center mb-1">
      <label>
        Reps:
        <input
          type="number"
          value={reps}
          onChange={e => onChange("reps", e.target.value)}
          className="ml-1 w-16 border px-1 rounded"
        />
      </label>
      <label>
        Weight:
        <input
          type="number"
          value={weight}
          onChange={e => onChange("weight", e.target.value)}
          className="ml-1 w-20 border px-1 rounded"
        /> kg
      </label>
    </div>
  );
};

export default SetRow;