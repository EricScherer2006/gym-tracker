import { useState } from 'react';
import WeekView from './components/WeekView';
import EntryForm from './components/EntryForm';

function App() {
  const [entries, setEntries] = useState({});
  const [editingDay, setEditingDay] = useState(null);

  const handleSave = (day, weight) => {
    setEntries((prev) => ({
      ...prev,
      [day]: { weight: parseFloat(weight) },
    }));
    setEditingDay(null);
  };

  return (
    <div className="className=fullscreen">
      <h1 className="text-2xl font-bold text-center mb-4">Gym Tracker</h1>
      <WeekView entries={entries} onEdit={setEditingDay} />
      {editingDay && (
        <EntryForm
          day={editingDay}
          currentWeight={entries[editingDay]?.weight}
          onSave={handleSave}
          onCancel={() => setEditingDay(null)}
        />
      )}
    </div>
  );
}

export default App;