import DaySection from "./DaySection";

// WeekView
/* Displays the full week view with all days and their exercises */
const WeekView = ({ weekData, setWeekData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-7 gap-4">
      {Object.entries(weekData).map(([day, exercises]) => (
        <div key={day} className="min-w-0">
          <DaySection day={day} exercises={exercises} setWeekData={setWeekData} />
        </div>
      ))}
    </div>
  );
};


export default WeekView;
