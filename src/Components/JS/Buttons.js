import React from 'react';
import "../CSS/Buttons.css"

export default function Buttons(props) {

    return (
        <button className={`${props.size} ${props.type}`} style={{width:`${props.width}`}}>{props.text}</button>
    )
}