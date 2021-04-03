import React, { useState } from 'react'
import TimeAgo from 'react-timeago'

import NumberFormat from "react-number-format"
import { ApiEventService } from "../api/services/event.service"
import { Confirmation } from './confirmation';
import avax_icon from "../resources/images/avax_icon.png"
import "./modal.css"

export function Purchase(props) {
    let [postings, setPostings] = useState('')
    const setNotify = props.setNotify
    const assetId = props.id

    React.useEffect(() => {
        const fetchPostings = async () => {
            try {
                let eventService = new ApiEventService()
                    await eventService.getListingsForAvaxAssetId(assetId).then(
                        res => {
                            setPostings(res.data)
                        }
                    )
            } catch(error) {
                setPostings(null)
                setNotify && setNotify({ msg: `There was an error getting listings for this property.`,
                                        color: 'red',
                                        show: true })
                console.error(error)
            }
        };

        fetchPostings()
    }, [assetId, setNotify])

    return (
        <>
        {postings &&
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
                            {Object.keys(postings).map(key => (
                            <tr key={key} className="m-4 border-b border-gray-200 sm:shadow">
                            <td className="p-3" data-label="From">{postings[key].tokenOwner.fullName || "Anonymous"}</td>
                            <td className="p-3" data-label="Quantity">
                            <NumberFormat
                                value={postings[key].quantity}
                                displayType={'text'}
                                thousandSeparator={true}
                            /></td>
                            <td className="p-3" data-label="Price">
                            <NumberFormat
                                value={postings[key].listedPrice}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={avax_icon}
                            /></td>
                            <td className="p-3" data-label="Time">
                                <TimeAgo date={postings[key].eventDateTime} locale="en-US"/>
                            </td>
                            <td className="p-3">
                                <Confirmation shares={postings[key].quantity} price={postings[key].listedPrice}>
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
        }
    </>
    )
}
