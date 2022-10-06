import React, { useState, useEffect } from "react";

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
    setShakeLevel('shake')
}, [props.level]);

  return (
    <div id="score-area" className={props.className}>
      <h3 className={shakeLevel} key={props.level}>Level {props.level}</h3>
      <h2 id="current-score" className={shakeCurrent} key={props.current + '0'}>
        Score: {props.current}
      </h2>
      <h2 id="best-score" className={shakeBest} key={props.best}>Best Score: {props.best}</h2>
    </div>
  );
}

export default Score;
