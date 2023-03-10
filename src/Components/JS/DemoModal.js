import React from 'react';
import "../CSS/DemoModal.css"

export default function DemoModal(props) {
    const { buttonInfo } = props;
    return (
        <div className='modal-container'>
            <button className='exit-button'>x</button>
            <h2>MENU</h2>
            <div className='buttons'>
                {
                    buttonInfo.map((button, index) => {
                        return (
                            <button 
                                key={index}
                                onClick={button.onClick}>
                                    <p className='p-small'>{button.name}</p>
                            </button>)
                    })
                }
                <div className='movement-buttons'>
                    <button>{`<--`}</button>
                    <button>{`-->`}</button>
                </div>
            </div>
        </div>
    )
}