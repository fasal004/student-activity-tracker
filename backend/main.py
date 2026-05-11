from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

import models
import schemas
import crud

from database import engine, SessionLocal

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# DB Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Home
@app.get("/")
def home():
    return {"message": "Student Activity Tracker API"}

# Add activity
@app.post("/activities", response_model=schemas.ActivityResponse, status_code=201)
def add_activity(
    activity: schemas.ActivityCreate,
    db: Session = Depends(get_db)
):
    return crud.create_activity(db, activity)

# Get activities
@app.get("/activities")
def get_activities(db: Session = Depends(get_db)):
    return crud.get_activities(db)

# Delete activity (BONUS)
@app.delete("/activities/{activity_id}")
def delete_activity(activity_id: int, db: Session = Depends(get_db)):
    activity = crud.delete_activity(db, activity_id)

    if not activity:
        raise HTTPException(status_code=404, detail="Activity not found")

    return {"message": "Activity deleted successfully"}

# Summary
@app.get("/summary")
def get_summary(db: Session = Depends(get_db)):
    activities = crud.get_activities(db)

    total_entries = len(activities)
    total_hours = sum(a.hours for a in activities)

    user_hours = {}

    for activity in activities:
        user_hours[activity.name] = user_hours.get(activity.name, 0) + activity.hours

    most_active_user = max(user_hours, key=user_hours.get) if user_hours else None

    return {
        "total_entries": total_entries,
        "total_hours": total_hours,
        "most_active_user": most_active_user
    }
