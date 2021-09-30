import React from "react";
import { useEffect, useState } from 'react';
import { CurrentCountryResult } from "../components/CurrentCountryResult";
import { Navigation } from "../components/Navigation";
import { Section } from "../components/Section";
import { CurrentCoutryGraphs } from '../components/CurrentCoutryGraphs';


export const DashboardCurrentCountry = (props) => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch("https://corona-api.com/countries")
      .then((res) => res.json())
      .then((res) => {
        setCountries(res.data)
      });
  }, [])
  return (
    <>
      <Navigation />
      <CurrentCountryResult countries={countries} props={props} />
      <Section countries={countries} props={props} />
      <CurrentCoutryGraphs countries={countries} props={props} />
    </>
  )
}