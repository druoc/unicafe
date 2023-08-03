const Statistics = ({ good, neutral, bad }) => {
  return (
    <div className="statistics-section">
      <h1>Statistics</h1>
      <ul>
        <li>Good - {good}</li>
        <li>Neutral - {neutral}</li>
        <li>Bad - {bad}</li>
      </ul>
    </div>
  );
};

export default Statistics;
