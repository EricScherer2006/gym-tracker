export const saveWeekData = (weekData) => {
  try {
    console.log("Saving weekData:", weekData);
    localStorage.setItem("weekData", JSON.stringify(weekData));
  } catch (error) {
    console.error("Failed to save week data:", error);
  }
};

export const loadWeekData = () => {
  try {
    const saved = localStorage.getItem("weekData");
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.error("Failed to load week data:", error);
    return null;
  }
};