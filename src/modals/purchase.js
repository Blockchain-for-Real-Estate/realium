import React, { useEffect, useState } from 'react'
import { ApiPropertyService } from "../api/services/property.service"
import { Confirmation } from './confirmation';
import "./modal.css"

export function Purchase(props) {
    let [offers, setOffers] = useState('')

    useEffect(() => {
        const getOffers = async () => {
            let assetService = new ApiPropertyService();
            await assetService.getAssetShareListings(props.id).then(
                (res) => {
                    const data = res.data
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
                <div className="mb-4 mt-4 align-middle inline-block min-w-full sm:px-6 lg:px-12">
                <div className="overflow-hidden sm:rounded-lg">
                    <table className="border-2 border-gray-100 m-0 p-0 min-w-full">
                        <thead className="bg-gray-100 border-1 border-gray-700 divide-y p-3 uppercase text-md">
                            <tr>
                            <th className="p-3">From</th>
                            <th className="p-3">Quantity Listed</th>
                            <th className="p-3">Price Per Share</th>
                            <th className="p-3">Time</th>
                            <th className="p-3"></th>
                            </tr>
                        </thead>
                        <tbody className="bg-white border-1 border-gray-700 divide-y">
                            {Object.keys(offers).map(key => (
                            <tr key={key} className="m-4 border-b border-gray-200 sm:shadow">
                            <td className="p-3" data-label="From">{offers[key].owner || "Anonymous"}</td>
                            <td className="p-3" data-label="Quantity">{offers[key].share}</td>
                            <td className="p-3" data-label="Price">{offers[key].listedPrice}</td>
                            <td className="p-3" data-label="Time">4 hours ago</td>
                            <td className="p-3">
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