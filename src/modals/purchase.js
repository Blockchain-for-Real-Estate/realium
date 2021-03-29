import React, { useEffect, useState } from 'react'
import { ApiAssetService } from "../api/services/asset.service"
import { Confirmation } from './confirmation';

export function Purchase(props) {
    let [offers, setOffers] = useState('')

    useEffect(() => {
        const getOffers = async () => {
            let assetService = new ApiAssetService();
            await assetService.getAssetShareListings(props.id).then(
                (res) => {
                    const data = res.data.assets
                    setOffers(data)
                }
            ).catch(error => console.error(`Error: ${error}`))
        }

        getOffers();
    }, [props.id]);

    return (
        /* This example requires Tailwind CSS v2.0+ */
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="mb-3 mt-1 py-2 align-middle inline-block min-w-full sm:px-6 lg:px-12">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            From
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Quantity Listed
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Price Per Share
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Time
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                        </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {Object.keys(offers).map(key => (
                            <tr key={key}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                    <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=9RaZNtwCUv&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""/>
                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                    {offers[key].owner || "Anonymous"}
                                    </div>
                                </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{offers[key].share}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {offers[key].listedPrice}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                4 hours ago
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <Confirmation shares={offers[key].share} price={offers[key].listedPrice}>
                                    Buy
                                </Confirmation>
                            </td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
}