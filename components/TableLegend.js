import React from "react";

export const TableLegend = () => {

    return (
        <>
            <div className='legend-container'>
                <div className="align-center">
                    <span className="font-bold">Table Legend</span>
                </div>
                <div className="align-center p-1">
                    <span className="mr-4 font-bold">New Cases:</span>
                    <div className="bg-gray-200 bg-style">&nbsp;</div>
                    <span className="mr-2">≥ 2.5% and &lt; 5%</span>
                    <div className="bg-gray-400 bg-style">&nbsp;</div>
                    <span className="mr-2">≥ 5% and &lt; 5.0%</span>
                    <div className="bg-gray-800 bg-style">&nbsp;</div>
                    <span >≥ 5%</span>
                </div>
                <div className="align-center p-1">
                    <span className="mr-4 font-bold">New Deaths:</span>
                    <div className="bg-red-200 bg-style">&nbsp;</div>
                    <span className="mr-2">≥ 2.5% and &lt; 5%</span>
                    <div className="bg-red-400 bg-style">&nbsp;</div>
                    <span className="mr-2">≥ 5% and &lt; 5.0%</span>
                    <div className="bg-red-800 bg-style">&nbsp;</div>
                    <span>≥ 5%</span>
                </div>
            </div>
        </>
    )
}