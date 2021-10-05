import React from "react";
import { Navigation } from '../components/Navigation';
import { CoronaApiResult } from '../components/CoronaApiResult'

export const Dashboard = () => {
    return (
        <>
            <Navigation />
            <CoronaApiResult />
        </>
    )
}