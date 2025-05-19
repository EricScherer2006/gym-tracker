export const saveWeekData = (weekData) => {
  localStorage.setItem("weekData", JSON.stringify(weekData));
};

export const loadWeekData = () => {
  const saved = localStorage.getItem("weekData");
  return saved ? JSON.parse(saved) : null;
};