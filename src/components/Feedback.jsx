/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const Feedback = ({
  good,
  setGood,
  neutral,
  setNeutral,
  bad,
  setBad,
  all,
  setAll,
  average,
  setAverage,
  positive,
  setPositive,
}) => {
  const handleClickGood = () => {
    setGood(good++);
    setAll(all++);
    setAverage((average = good + neutral + bad / 3));
    setPositive((positive = (good / all) * 100));
  };

  const handleClickNeutral = () => {
    setNeutral(neutral++);
    setAll(all++);
    setAverage((average = good + neutral + bad / 3));
    setPositive((positive = (good / all) * 100));
  };

  const handleClickBad = () => {
    setBad(bad++);
    setAll(all++);
    setAverage((average = good + neutral + bad / 3));
    setPositive((positive = (good / all) * 100));
  };
  return (
    <div className="feedback-section">
      <h1>Give Feedback</h1>
      <div className="btn-container">
        <button onClick={handleClickGood}>Good</button>
        <button onClick={handleClickNeutral}>Neutral</button>
        <button onClick={handleClickBad}>Bad</button>
      </div>
    </div>
  );
};

export default Feedback;
