import React from 'react';
import "../CSS/Components.css"
import DemoModal from '../../Components/JS/DemoModal';

const buttons = [
    {
        name: 'button 1',
        onClick: () => {alert(`clicked button 1!`)},
    },
    {
        name: 'button 2',
        onClick: () => {alert(`clicked button 2!`)},
    },    
    {
        name: 'button 3',
        onClick: () => {alert(`clicked button 3!`)},
    }
]
export default function Components() {
    return (
        <div className='container'>
            <h1>Components</h1>
            <DemoModal buttonInfo={buttons}></DemoModal>
        </div>
    )
}