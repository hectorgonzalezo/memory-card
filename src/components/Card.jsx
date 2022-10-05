import React from 'react';
import '../styles/cardStyle.css'

function Card(props){
    return (
        <div className='card'>
            <p>{props.name}</p>
            <img src={props.image} alt="" />
        </div>
    )
}

export default Card;