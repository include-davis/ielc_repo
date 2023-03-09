import React from 'react';
import "../CSS/Components.css"
import Buttons from '../../Components/JS/Buttons';

export default function Components() {

    return (
        <div className='container'>
            <h1>Components</h1>
            <Buttons size="large" text="howdy" type="tertiary" width='300px'></Buttons>
        </div>
    )
}