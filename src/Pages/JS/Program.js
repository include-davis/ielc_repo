import React from 'react';
import { useParams } from 'react-router-dom';

export default function Program() {
    // Get the gradeLevel param from the URL.
    let { gradeLevel } = useParams();

    return (
        <div>{gradeLevel}</div>
    )
}