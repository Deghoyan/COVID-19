import React from 'react';
import { Table } from 'bootstrap-4-react/lib/components';
import { TableLegend } from '../components/TableLegend'
import { Link } from 'react-router-dom';

export const TableOfCountries = ({ countries }) => {

    return (
        <div className='table-contaioner'>
            <TableLegend />
            <Table hover bordered table-border>
                <thead>
                    <tr>
                        <th>Territory</th>
                        <th>Total Cases</th>
                        <th>New Cases</th>
                        <th>Total Deaths</th>
                        <th>New Deaths</th>
                        <th>Total Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        countries.map(country => {
                            return (
                                <>
                                    <tr>
                                        <td className='table-td'><Link to={`/dashboard/${country.code}`} className='country-style'>

                                            {country.name}</Link></td>
                                        <td>{country.latest_data.confirmed}</td>
                                        <td className={
                                            (
                                                (country.today.deaths * 100) /
                                                country.latest_data.confirmed
                                            ).toFixed(2) >= 0.2 &&
                                                (
                                                    (country.today.deaths * 100) /
                                                    country.latest_data.confirmed
                                                ).toFixed(2) < 0.5
                                                ? "bg-gray-200"
                                                : (
                                                    (country.today.deaths * 100) /
                                                    country.latest_data.confirmed
                                                ).toFixed(2) >= 0.5 &&
                                                    (
                                                        (country.today.deaths * 100) /
                                                        country.latest_data.confirmed
                                                    ).toFixed(2) < 0.75
                                                    ? "bg-gray-400"
                                                    : (
                                                        (country.today.deaths * 100) /
                                                        country.latest_data.confirmed
                                                    ).toFixed(2) >= 0.75
                                                        ? "bg-gray-800"
                                                        : "font-bold"
                                        }>
                                            {country.today.confirmed ? (<> + {country.today.confirmed} <small>({Number((country.today.confirmed * 100) / country.latest_data.confirmed).toFixed(2)}%)</small></>
                                            ) : (
                                                <>
                                                    0
                                                </>
                                            )}
                                        </td>
                                        <td className="font-bold">
                                            {country.latest_data.deaths ? (<> + {country.latest_data.deaths} <small>({Number((country.latest_data.deaths * 100) / country.latest_data.confirmed).toFixed(2)}%)</small></>
                                            ) : (
                                                <>
                                                    0
                                                </>
                                            )}
                                        </td>
                                        <td className={
                                            (
                                                (country.today.deaths * 100) /
                                                country.latest_data.confirmed
                                            ).toFixed(2) >= 0.2 &&
                                                (
                                                    (country.today.deaths * 100) /
                                                    country.latest_data.confirmed
                                                ).toFixed(2) < 0.5
                                                ? "bg-red-200"
                                                : (
                                                    (country.today.deaths * 100) /
                                                    country.latest_data.confirmed
                                                ).toFixed(2) >= 0.5 &&
                                                    (
                                                        (country.today.deaths * 100) /
                                                        country.latest_data.confirmed
                                                    ).toFixed(2) < 0.75
                                                    ? "bg-red-400"
                                                    : (
                                                        (country.today.deaths * 100) /
                                                        country.latest_data.confirmed
                                                    ).toFixed(2) >= 0.75
                                                        ? "bg-red-800"
                                                        : "font-bold"
                                        }>
                                            {country.today.deaths ? (<> + {country.today.deaths} <small>({Number((country.today.deaths * 100) / country.latest_data.confirmed).toFixed(2)}%)</small></>
                                            ) : (
                                                <>
                                                    0
                                                </>
                                            )}
                                        </td>
                                        <td className="font-bold">
                                            {country.latest_data.recovered ? (<> + {country.latest_data.recovered} <small>({Number((country.latest_data.recovered * 100) / country.latest_data.confirmed).toFixed(2)}%)</small></>
                                            ) : (
                                                <>
                                                    0
                                                </>
                                            )}
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }

                </tbody>
            </Table>
        </div>
    )
}
