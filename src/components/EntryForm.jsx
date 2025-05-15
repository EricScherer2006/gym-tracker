import { useState } from 'react';

export default function EntryForm({ day, currentWeight, onSave, onCancel }) {
  const [name, setname] = useState('');
  const [weight, setWeight] = useState(currentWeight ?? '');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || weight === '') return;
    onSave(day, name, weight);
    setName('');
    setWeight('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-4 py-3 mb-4 max-w-md mx-auto"
    >
      <h2 className="text-xl font-semibold mb-2">Add Exercise for {day}</h2>
      <div className="mb-2">
        <label className="block mb-1">Exercise Name</label>
        <input
          className="border rounded w-full p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Bench Press"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Weight (kg)</label>
        <input
          className="border rounded w-full p-2"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="e.g., 60"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 px-3 py-1 rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Save
        </button>
      </div>
    </form>
  );
}