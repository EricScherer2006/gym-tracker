import { useState } from 'react';

export default function EntryForm({ day, currentWeight, onSave, onCancel }) {
  const [weight, setWeight] = useState(currentWeight ?? '');

  return (
    <div className="p-4 bg-white border rounded shadow max-w-sm mx-auto">
      <h2 className="text-lg font-semibold mb-2">Update Weight for {day}</h2>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="border p-2 w-full mb-2"
        placeholder="Enter weight (kg)"
      />
      <div className="flex justify-between">
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={() => onSave(day, weight)}
        >
          Save
        </button>
        <button className="text-gray-600 underline" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}