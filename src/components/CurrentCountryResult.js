import React from "react";
import { CurrentCountry } from "../components/CurrentCoutry";

export const CurrentCountryResult = ({countries , props}) => {
    
    return (
        <>
        <CurrentCountry  countries={countries} props={props}/>
        </>
    )
}