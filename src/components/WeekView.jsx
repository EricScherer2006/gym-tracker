import DaySection from "./DaySection";

// WeekView
/* Displays the full week view with all days and their exercises */
const WeekView = ({ weekData, setWeekData }) => {
  return (
    <div className="fullscreen flex space-x-4 ">
      {Object.entries(weekData).map(([day, exercises]) => (
        <div key={day} className="flex-1 min-w-0">
          <DaySection day={day} exercises={exercises} setWeekData={setWeekData} />
        </div>
      ))}
    </div>
  );
};

export default WeekView;
