from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from .database import engine, Base, SessionLocal
from fastapi.middleware.cors import CORSMiddleware
from . import models, schemas
from .schemas import EntryCreate

app = FastAPI()

Base.metadata.create_all(bind=engine)

# Allow frontend access

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000", "http://frontend:80"],  # local dev and containerized frontend
    allow_methods=["*"],
    allow_headers=["*"],
)
# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# End-Point
@app.post("/workouts/")
async def add_workout(entry: EntryCreate, db: Session = Depends(get_db)):
    from datetime import datetime
    workout = models.Workout(
        user_name=entry.user_name,
        exercise=entry.exercise,
        weight=entry.weight,
        reps=entry.reps,
        date=datetime.strptime(entry.date, "%Y-%m-%d").date()
    )
    db.add(workout)
    db.commit()
    db.refresh(workout)
    return workout

@app.get("/workouts/")
def list_workouts(db: Session = Depends(get_db)):
    return db.query(models.Workout).all()

@app.get("/")
def read_root():
    return {"message": "Gym Tracker API is running"}