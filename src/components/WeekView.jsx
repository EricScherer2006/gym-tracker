const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function WeekView({ entries, onEdit }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
      {days.map((day) => (
        <div key={day} className="border p-4 rounded shadow">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-bold">{day}</h3>
            <button
              onClick={() => onEdit(day)}
              className="bg-green-500 text-white px-2 py-1 rounded"
            >
              Add
            </button>
          </div>
          {entries[day]?.length > 0 ? (
            <ul className="list-disc pl-4 space-y-1">
              {entries[day].map((entry, index) => (
                <li key={index}>
                  {entry.name}: {entry.weight} kg
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No entries yet.</p>
          )}
        </div>
      ))}
    </div>
  );
}