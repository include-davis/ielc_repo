import React from 'react';
import "../CSS/MailIcon.css";

export default function InstaIcon({size}) {

    return (
        <img
            style={{
                width:`${size}`, 
                height:`${size}`
            }}
            src={"/Mail.svg"}
        />
    )
}