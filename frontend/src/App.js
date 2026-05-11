import { useEffect, useState } from "react";
import API from "./api";

import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";
import Summary from "./components/Summary";
import Loader from "./components/Loader";

import "./index.css";

function App() {
  const [activities, setActivities] = useState([]);
  const [summary, setSummary] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchActivities = async () => {
    try {
      setLoading(true);

      const activityRes = await API.get("/activities");
      const summaryRes = await API.get("/summary");

      setActivities(activityRes.data);
      setSummary(summaryRes.data);

    } catch (error) {
      console.log(error);

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  const addActivity = async (data) => {
    try {
      await API.post("/activities", {
        ...data,
        hours: Number(data.hours),
      });

      fetchActivities();

    } catch (error) {
      alert("Failed to add activity");
    }
  };

  const deleteActivity = async (id) => {
    try {
      await API.delete(`/activities/${id}`);
      fetchActivities();

    } catch (error) {
      alert("Delete failed");
    }
  };

  return (
    <div className="container">
      <h1>Student Activity Tracker</h1>

      <ActivityForm onAdd={addActivity} />

      {loading ? (
        <Loader />
      ) : (
        <>
          <Summary summary={summary} />
          <ActivityList
            activities={activities}
            onDelete={deleteActivity}
          />
        </>
      )}
    </div>
  );
}

export default App;
