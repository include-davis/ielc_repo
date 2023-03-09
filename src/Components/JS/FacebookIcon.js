import React from 'react';
import "../CSS/FacebookIcon.css";

export default function FacebookIcon({size}) {

    return (
        <img
            style={{
                width:`${size}`, 
                height:`${size}`
            }}
            src={"/Facebook.svg"}
        />
    )
}