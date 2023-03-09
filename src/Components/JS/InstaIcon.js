import React from 'react';
import "../CSS/InstaIcon.css";

export default function InstaIcon({size}) {

    return (
        <img
            style={{
                width:`${size}`, 
                height:`${size}`
            }}
            src={"/Instagram.svg"}
        />
    )
}