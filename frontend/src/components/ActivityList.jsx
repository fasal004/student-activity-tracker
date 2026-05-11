function ActivityList({ activities, onDelete }) {
  return (
    <div className="card">
      <h2>Activities</h2>

      {activities.length === 0 ? (
        <p>No activities found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Activity</th>
              <th>Hours</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {activities.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.activity}</td>
                <td>{item.hours}</td>

                <td>
                  <button className="dlt_btn" onClick={() => onDelete(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ActivityList;
