from sqlalchemy.orm import Session
from models import Activity

def create_activity(db: Session, activity_data):
    activity = Activity(**activity_data.dict())
    db.add(activity)
    db.commit()
    db.refresh(activity)
    return activity

def get_activities(db: Session):
    return db.query(Activity).all()

def delete_activity(db: Session, activity_id: int):
    activity = db.query(Activity).filter(Activity.id == activity_id).first()

    if activity:
        db.delete(activity)
        db.commit()

    return activity

