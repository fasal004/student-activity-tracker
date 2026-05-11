# Student Activity Tracker

A mini full-stack web application built using React and FastAPI to track student activities and summarize participation data.

## Features

- Add student activities
- View activity list
- View summary statistics
- Delete activity
- REST API integration
- Input validation
- Responsive modern UI
- SQLite database support

---

## Tech Stack

### Frontend
- React
- Axios
- CSS

### Backend
- FastAPI
- SQLite
- SQLAlchemy

---

## API Endpoints

### Add Activity
POST `/activities`

### Get Activities
GET `/activities`

### Get Summary
GET `/summary`

### Delete Activity
DELETE `/activities/{id}`

---

## Setup Instructions

### Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload
```

---

### Frontend

```bash
cd frontend

npm install

npm start
```

---

## Project Structure

```text
student-activity-tracker/
│
├── backend/
├── frontend/
└── README.md
```

---

## Bonus Features Implemented

- SQLite Database
- Delete Functionality
- Loading States
- Responsive UI
- Error Handling

---

## Author

Fasal K
