import { useState } from "react";
import './EightBall.css';

const EightBall = ({ answers }) => {
    const [message, setMessage] = useState("Think of a Question");
    const [color, setColor] = useState("black");
    const [counts, setCounts] = useState({ green: 0, goldenrod: 0, red: 0 });

  const handleClick = () => {
    const randomIdx = Math.floor(Math.random() * answers.length);
    const { msg, color } = answers[randomIdx];
    setMessage(msg);
    setColor(color);
    setCounts(prevCounts => ({...prevCounts, [color]: prevCounts[color] + 1}));
  };

  const resetBall = () => {
    setMessage("Think of a Question");
    setColor("black");
    setCounts({ green: 0, goldenrod: 0, red: 0 });
  };

  return (
    <div className="eight-ball-container">
      <div className="eight-ball" style={{ backgroundColor: color }} onClick={handleClick}>
        {message}
      </div>
      <button onClick={resetBall}>Reset</button>
      <div className="color-counts">
        <p>Green: {counts.green}</p>
        <p>Goldenrod: {counts.goldenrod}</p>
        <p>Red: {counts.red}</p>
      </div>
    </div>
  );
};

export default EightBall;