import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap-4-react';

export const Section = ({ countries, props }) => {
    const ChangeSelectValue = (event) => {
        props.history.push(event.target.value)
        console.log(props)
    }

    return (
        <>
            <div className='select-container'>
                <div className='back-dashboard'>
                    <Link to='/dashboard' className='dashboard-back'>Back to Dashboard</Link>
                </div>
                <div className="form-group">
                    <select className="form-control" id="exampleFormControlSelect1" value={props.match.params.name} onChange={ChangeSelectValue}>
                        {countries.map(country => {
                            return (<option key={country.code} value={country.code} >{country.name}</option>)
                        })}
                    </select>
                </div>
            </div>
        </>
    )
}