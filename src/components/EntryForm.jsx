import { useState } from 'react';

function EntryForm({ day, onSave, onCancel }) {
  const [exercise, setExercise] = useState('');
  const [weight, setWeight] = useState('');

  const handleAdd = () => {
    if (!exercise.trim()) {
      alert('Please enter an exercise name.');
      return;
    }
    if (isNaN(parseFloat(weight))) {
      alert('Please enter a valid number for weight.');
      return;
    }

    const entry = {
      exercise,
      weight: parseFloat(weight),
    };

    onSave(day, entry);
    setExercise('');
    setWeight('');
  };

  return (
    <div className="p-4 bg-white border rounded shadow mb-4 max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-2 text-center">Add Entry for {day}</h2>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Exercise name"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          className="border p-2 rounded"
          pattern="[A-Za-z\s]+"
          title="Only letters and spaces allowed"
        />
        <input
          type="number"
          step="0.1"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="border p-2 rounded"
        />
        <div className="flex gap-2 justify-center mt-2">
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default EntryForm;