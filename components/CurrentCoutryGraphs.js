import React from 'react';
import { useState, useEffect } from 'react';
import { TotalGraph } from './TotalGraph';
import { DailyGraph } from './DailyGraph';

export const CurrentCoutryGraphs = ({ props }) => {
    const [graphCode, setGraphCode] = useState([])

    useEffect(() => {
        fetch(`https://corona-api.com/countries/${props.match.params.name}`)
            .then((res) => res.json())
            .then((res) => {
                setGraphCode(res.data);
            });
    }, [props.match.params.name])


    return (
        <div className='country-graphs'>
            <TotalGraph graphCode={graphCode} props={props} />
            <DailyGraph graphCode={graphCode} props={props} />
        </div>
    )
}