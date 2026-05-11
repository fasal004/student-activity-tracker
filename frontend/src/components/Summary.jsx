function Summary({ summary }) {
  return (
    <div className="card">
  <h2>Summary</h2>

  <div className="summary-grid">
    <div className="summary-card">
      <h3>Total Entries</h3>
      <p>{summary.total_entries}</p>
    </div>

    <div className="summary-card">
      <h3>Total Hours</h3>
      <p>{summary.total_hours}</p>
    </div>

    <div className="summary-card">
      <h3>Most Active User</h3>
      <p>{summary.most_active_user || "N/A"}</p>
    </div>
  </div>
</div>
  );
}

export default Summary;
