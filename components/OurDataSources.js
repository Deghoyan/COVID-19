import React from 'react';

export const OurDataSources = () => {
    return(
        <div className='data-sources-container'>
            <div className='white-container'> 
            <h1>Our Data Sources</h1>
                <div className='data-sources-flex'>
                    <div className='data-sources-center'>
                        <h3 className='data-heading'>World Health Organization Situation Reports</h3>
                        <p className='data-sources-paragraph'>The WHO is providing a situation report once a day with critical information about the COVID-2019 case.
                        <br/>
                        <br/>
                        <br/>
                        Source:&nbsp; 
                        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports" className='data-full'>WHO Situation Reports</a>
                        </p>    
                    </div>
                    <div className='data'>
                        <img className='data-img' alt='Corona' src='https://about-corona.net/_nuxt/img/reports.d8df6e8.svg'/>
                    </div>
                </div>
            </div>
        </div>
    )
}