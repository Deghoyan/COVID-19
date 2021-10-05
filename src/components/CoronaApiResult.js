import React from 'react';
import { useEffect, useState } from 'react';
import { TotalResultCountries } from '../components/TotalResaltCountries';
import { TableOfCountries } from '../components/TableOfCountries';
import { Graph } from '../components/Graph';

export const CoronaApiResult = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
      setLoading(true)
        fetch("https://corona-api.com/countries")
       .then((res) => res.json())
       .then((res) => {
         setCountries(
          res.data
            .filter((el) => el.latest_data.confirmed > 0)
            .sort((a, b) =>
              a.latest_data.confirmed < b.latest_data.confirmed
                ? 1
                : b.latest_data.confirmed < a.latest_data.confirmed
                ? -1
                : 0
            )
        );
        setLoading(false)
       });
     }, [])
    return (
            <>
              <div className="header gradient">
                <div className='relative'> 
                    <div className='flex-container'>
                    <p className='uppercase'>ABOUT-CORONA.NET</p>
                    <h1 className='flex-container-heading'>Dashboard</h1>
                    </div>
                </div>   
                <div className='nav-header'></div>
              </div>
              {
              loading ? (
                <div className="spinner">
                  <div className="bounce1"></div>
                  <div className="bounce2"></div>
                  <div className="bounce3"></div>
                </div>
                        ) :
                        (
                      <>
                        <TotalResultCountries countries={countries}/>
                        <Graph/>
                        <TableOfCountries  countries={countries}/>
                      </>
                        )
                        }
              </>
              
            
        
    )
}