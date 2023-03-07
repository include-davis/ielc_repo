import React from 'react';
import { useParams } from 'react-router-dom';

import programInfo from '../../data/programInfo'


export default function Program() {
    // Get the gradeLevel param from the URL.
    let { gradeLevel } = useParams();

    const data = programInfo[gradeLevel - 1];

    return (
        <div>{JSON.stringify(data)}</div>
    )
}