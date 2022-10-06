import React from 'react';
import '../styles/cardStyle.css'

function Card(props){
    return (
        <div className={props.className} onClick={props.clickFunc} data={props.data}>
            <img src={props.image} alt="" data={props.data}/>
            <p data={props.data}>{props.name}</p>
        </div>
    )
}

export default Card;