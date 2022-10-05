import React from 'react';
import '../styles/cardStyle.css'

function Card(props){
    return (
        <div className='card'>
            <img src={props.image} alt="" />
            <p>{props.name}</p>
        </div>
    )
}

export default Card;