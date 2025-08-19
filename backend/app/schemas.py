from pydantic import BaseModel
from typing import Optional

class EntryCreate(BaseModel):
    user_name: Optional[str] = None
    exercise: Optional[str] = None
    weight: Optional[float] = None
    reps: Optional[int] = None
    date: Optional[str] = None

class EntryRead(EntryCreate):
    id: int