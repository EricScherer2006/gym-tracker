from sqlalchemy import Column, Integer, String, Float, Date
from .database import Base

class Workout(Base):
    __tablename__ = "workouts"

    id = Column(Integer, primary_key=True, index=True)
    user_name = Column(String, index=True)
    exercise = Column(String)
    weight = Column(Float)
    reps = Column(Integer)
    date = Column(Date)