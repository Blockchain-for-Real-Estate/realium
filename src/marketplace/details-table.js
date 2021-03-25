import React from 'react'

export function DetailsTable(props) {
    return (
        /*This example requires Tailwind CSS v2.0+*/
        <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-4 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full">
                    <tbody>
                    <tr>
                    <td>
                    <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                        <th colSpan="2" scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Property Details
                        </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Location
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                South Jordan, UT
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Type
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                Single family Home
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Bedrooms
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                4
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Bathrooms
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                2.5
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Area
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                1,300 sqft
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Lot
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                5,500 sqft
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Parking
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                2 spaces
                            </td>
                        </tr>
                    </tbody>
                    </table>
                    </td>
                    <td>
                    <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                        <th colSpan="2" scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Investment Details
                        </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Investment
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                Equity
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Total Capitalization
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                $100,000
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Net Operation Income
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                $29,000 / yr
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Estimated Appreciation
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                4.6%
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Management Team
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                Rocky Ridge
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                NFT Token
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                Rexor
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Investment Window Deadline
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                April 30, 2021
                            </td>
                        </tr>
                    </tbody>
                    </table>
                    </td>
                    <td>
                    <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                        <th colSpan="2" scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Activity Details
                        </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Total Shares
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                1,200 shares
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Demand
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                60% Buy, 40% Sell
                            </td>
                            
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Lowest Ask
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                200 @ $5 / share
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Last Sale
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                10,000 @ $5 / share
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Week High
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                $7.60 / share
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Trading Range
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                $4.23 - $7.80
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Volatility
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                3%
                            </td>
                        </tr>
                    </tbody>
                    </table>
                    </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
    )
}