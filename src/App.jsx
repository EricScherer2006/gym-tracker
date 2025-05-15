import { useState } from 'react';
import WeekView from './components/WeekView';
import EntryForm from './components/EntryForm';

function App() {
  const [entries, setEntries] = useState({});
  const [editingDay, setEditingDay] = useState(null);

  const handleSave = (day, newEntry) => {
    setEntries((prev) => ({
      ...prev,
      [day]: [...(prev[day] || []), newEntry],
    }));
    setEditingDay(null);
  };

  return (
    <div className="fullscreen p-4">
      <h1 className="text-2xl font-bold text-center mb-4 mt-2 text-purple-600 uppercase">Gym Tracker</h1>
      <WeekView entries={entries} onEdit={setEditingDay} />
      {editingDay && (
        <EntryForm
          day={editingDay}
          onSave={handleSave}
          onCancel={() => setEditingDay(null)}
        />
      )}
    </div>
  );
}

export default App;