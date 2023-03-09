import React from 'react';

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