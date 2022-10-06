import React from 'react';

function Score(props){

    return (
        <div id='score-area'>
            <h2>Score: {props.current}</h2>
            <h2>Best Score: {props.best}</h2>
        </div>
    )
}

export default Score