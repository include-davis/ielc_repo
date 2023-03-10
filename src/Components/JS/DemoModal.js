import React from "react";
import { useState } from "react";
import "../CSS/DemoModal.css";

// define how much to shift the modal by
const SHIFT_AMOUNT = 100;

export default function DemoModal(props) {
  // grab parameters and assign them to variables (so we don't have to say props.buttonInfo, props.show, etc...)
  const { buttonInfo, show, setShow } = props;

  // create a state variable to keep track of how far we want to translate this moving modal
  const [translate, setTranslate] = useState(0);
  return (
    <div
      className={`modal-container ${show ? null : "hidden"}`}
      style={{ transform: `translateX(${translate}px)` }}
    >
      {/* the class name has a template literal so we can inject javascript commands into the string 
       the syntax within the injected javascript is a ternary operator, search it up
       ternary operator is basically an if statement in one line that evaluates to either the first or second argument */}
      <button
        onClick={() => {
          setShow(false);
        }}
        className="exit-button"
      >
        {/* We define the onClick handler to call the setShow function and set show to false
           Even though show is defined in the parent of this component, we can still edit it since
           we passed the setShow function in as a prop. */}
        x
        {/* this is just text to be displayed in the button, the x doesn't mean anything else */}
      </button>
      <h2>MENU</h2>
      {/* note that the menu is auto styled since it's an h2 tag */}
      <div className="buttons">
        {/* Remember the map function? this is why it's super important to React
           It basically allows you to generate a list of html/react components from a list of information */}
        {buttonInfo.map((button, index) => {
          return (
            // we need a key here just because React wants these components to be unique
            // the onClick is just taken from the onClick function that was passed into buttonInfo
            <button key={index} onClick={button.onClick}>
              {/* notice how it's class of p-small, this is defined in global css */}
              <p className="p-small">{button.name}</p>
            </button>
          );
        })}

        {/* put the left and right buttons in a seperate div so we can use display flex to place them next to each other */}
        <div className="movement-buttons">
          <button
            onClick={() => {
              setTranslate(translate - SHIFT_AMOUNT);
            }}
          >{`<--`}</button>
          <button
            onClick={() => {
              setTranslate(translate + SHIFT_AMOUNT);
            }}
          >{`-->`}</button>
        </div>
      </div>
    </div>
  );
}
