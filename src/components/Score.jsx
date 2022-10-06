import React, { useState, useEffect } from "react";
import uniquid from "uniquid";

function Score(props) {
  // This is used to shake the score when updating
  const [shakeCurrent, setShakeCurrent] = useState('');
  const [shakeBest, setShakeBest] = useState('');
  const [shakeLevel, setShakeLevel] = useState('');

  useEffect(() => {
        setShakeCurrent('shake')
  }, []);

  useEffect(() => {
        setShakeBest('shake')
  }, [props.best]);

  useEffect(() => {
    setShakeBest('shake')
}, [props.level]);

  return (
    <div id="score-area" key={uniquid()}>
      <h3 className={shakeLevel}>Level {props.level}</h3>
      <h2 id="current-score" className={shakeCurrent}>
        Score: {props.current}
      </h2>
      <h2 id="best-score" className={shakeBest}>Best Score: {props.best}</h2>
    </div>
  );
}

export default Score;
