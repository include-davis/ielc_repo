import React from 'react';
import { useParams } from 'react-router-dom';

export default function Program() {
    // Get the userId param from the URL.
    let { gradeLevel } = useParams();
    console.log(gradeLevel)
    return <div>hello</div>
}