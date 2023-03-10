import React from "react";
import { useState } from "react";
import "../CSS/Components.css";
import DemoModal from "../../Components/JS/DemoModal";

const buttons = [
  {
    name: "button 1",
    onClick: () => {
      alert(`clicked button 1!`);
    },
  },
  {
    name: "button 2",
    onClick: () => {
      alert(`clicked button 2!`);
    },
  },
  {
    name: "button 3",
    onClick: () => {
      alert(`clicked button 3!`);
    },
  },
];

export default function Components() {
  // created a state variable to determine if we want the modal to show or not
  // we pass this into the Modal as a prop along with the function to edit the
  // state so the component itself has control over this state variable
  const [show, setShow] = useState(false);

  // function to toggle the show
  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className="container">
      <h1>Components</h1>

      <button onClick={toggleShow}>toggle</button>
      <DemoModal buttonInfo={buttons} show={show} setShow={setShow}></DemoModal>
    </div>
  );
}
