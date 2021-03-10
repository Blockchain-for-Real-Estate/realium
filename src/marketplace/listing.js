import React from "react"
import { useHistory } from "react-router-dom"
import { titleCase } from "title-case"
import NumberFormat from "react-number-format"

import comingSoon from "../resources/images/coming-soon.jpg"

export function Listing(props) {
    let history = useHistory()

    return (
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden" onClick={() => history.push(`/marketplace/${props.listing.listingType}/${props.listing.id}`)}>
            <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={props.listing.image || comingSoon} alt={props.listing.streetAddress} />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                    {titleCase(props.listing.listingType)}
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
            </div>
        </div>
    )
}
