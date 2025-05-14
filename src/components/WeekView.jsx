const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function WeekView({ entries, onEdit }) {
  return (
    <div className="grid grid-cols-7 gap-2 p-4">
      {days.map((day) => (
        <div key={day} className="border rounded p-2 text-center">
          <div className="font-bold">{day}</div>
          <div className="text-sm">
            {entries[day]?.weight ?? '-'} kg
          </div>
          <button
            className="mt-1 text-xs text-blue-600 underline"
            onClick={() => onEdit(day)}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}