import React from "react";
import { Navigation } from '../components/Navigation';
import { AboutCorona } from '../components/AboutCorona';
import { OurDataSources } from '../components/OurDataSources';




export const Overveiw = () => {
    return (
        <>
            <Navigation />
            <AboutCorona />
            <OurDataSources />
        </>
    )
}