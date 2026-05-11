import { useState } from "react";

function ActivityForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    activity: "",
    hours: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.activity || !formData.hours) {
      setError("All fields are required");
      return;
    }

    if (formData.hours <= 0) {
      setError("Hours must be greater than 0");
      return;
    }

    setError("");
    onAdd(formData);

    setFormData({
      name: "",
      activity: "",
      hours: "",
    });
  };

  return (
    <div className="card">
      <h2>Add Activity</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="activity"
          placeholder="Activity"
          value={formData.activity}
          onChange={handleChange}
        />

        <input
          type="number"
          name="hours"
          placeholder="Hours"
          value={formData.hours}
          onChange={handleChange}
        />

        <button className="save_btn" type="submit">Add Activity</button>
      </form>
    </div>
  );
}

export default ActivityForm;
