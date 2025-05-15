function WeekView({ entries, onEdit }) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="overflow-x-auto">
      <div className="grid grid-cols-7 gap-4 mb-4 min-w-[700px] text-purple-400 text-lg">
        {days.map((day) => (
          <div
            key={day}
            className="border p-2 rounded shadow text-sm bg-white flex flex-col justify-between"
          >
            <div className="font-bold text-center mb-1 underline">{day}</div>
            {entries[day] && entries[day].length > 0 ? (
              <ul className="text-center space-y-1">
                {entries[day].map((entry, index) => (
                  <li key={index} className="text-gray-700">
                    {entry.exercise} – {entry.weight} kg
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center text-gray-400 italic text-xs">No entries yet</div>
            )}
            <button
              onClick={() => onEdit(day)}
              className="mt-2 text-blue-500 hover:underline text-xs"
            >
              {entries[day] && entries[day].length > 0 ? 'Add More' : 'Add'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeekView;
