import React from 'react';
import '../styles/cardStyle.css'

function Card(props){
    return (
        <div className='card' onClick={props.clickFunc} id={props.id}>
            <img src={props.image} alt="" id={props.id}/>
            <p id={props.id}>{props.name}</p>
        </div>
    )
}

export default Card;