import React from 'react';
import { useParams } from 'react-router-dom';
import "../CSS/Program.css"

export default function Program() {
    // Get the gradeLevel param from the URL.
    let { gradeLevel } = useParams();

    return (
        <div>{gradeLevel}</div>
    )
}