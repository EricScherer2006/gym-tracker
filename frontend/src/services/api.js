const BASE_URL = "http://127.0.0.1:8000";

// Fetch all workouts
export const getWorkouts = async () => {
  try {
    const res = await fetch(`${BASE_URL}/workouts/`);
    if (!res.ok) throw new Error("Failed to fetch workouts");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Add a new workout
export const addWorkout = async (workout) => {
  try {
    const query = new URLSearchParams(workout).toString();
    const res = await fetch(`${BASE_URL}/workouts/?${query}`, {
      method: "POST",
      headers: { "accept": "application/json" },
    });
    if (!res.ok) throw new Error("Failed to add workout");
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};