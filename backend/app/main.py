from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
# from .database import engine, Base, SessionLocal
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

 # Base.metadata.create_all(bind=engine) # DB creation disabled

# Allow frontend access

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000", "http://frontend:80"],  # local dev and containerized frontend
    allow_methods=["*"],
    allow_headers=["*"],
)


# End-Point
@app.post("/workouts/")
async def add_workout(entry: dict):
     # Dummy response, data not stored
    return {"message": "Demo only – data not stored", "entry": entry}

@app.get("/workouts/")
def list_workouts():
    # Dummy data
    return [{"exercise": "Bench Press", "weight": 100, "reps": 10, "day": "Monday"}]

@app.get("/")
def read_root():
    return {"message": "Gym Tracker API placeholder - no data stored"}