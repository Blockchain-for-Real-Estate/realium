import React from "react"
import { useHistory } from "react-router-dom"
import NumberFormat from "react-number-format"

import comingSoon from "../resources/images/coming-soon.jpg"

export function Listing(props) {
    let history = useHistory()

    return (
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden" onClick={() => history.push(`/marketplace/${props.listing.listingType}/${props.listing.assetId}`)}>
            <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={props.listing.image || comingSoon} alt={props.listing.streetAddress} />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                    {props.listing.listingType}
                    </p>
                    <p className="text-xl font-semibold text-gray-900">
                        {`${props.listing.city}, ${props.listing.state}`}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                        {`This property is a ${props.listing.propertyType} located in ${props.listing.city}, ${props.listing.state}.`}
                    </p>
                    <p className="mt-3 text-sm font-medium text-indigo-600">
                        <NumberFormat
                            value={props.listing.share}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'Share Price: $'}
                        />
                    </p>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <a href="/">
                            <span className="sr-only">Roel Aufderehar</span>
                            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=9RaZNtwCUv&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </a>
                    </div>
                    <div className="ml-3">
                        <a href="/" className="hover:underline text-gray-800 text-sm">
                        Roel Aufderehar
                        </a>
                        <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime="2020-03-16">
                            March 10, 2021
                            </time>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
