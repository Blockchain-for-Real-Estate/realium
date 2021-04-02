import React from "react"
import { useHistory } from "react-router-dom"
import NumberFormat from "react-number-format"

import comingSoon from "../resources/images/coming-soon.jpg"
import res1 from "../resources/images/residential-1.jpg"
import res2 from "../resources/images/residential-2.jpg"
import res3 from "../resources/images/residential-3.jpg"
import res4 from "../resources/images/residential-4.jpg"
import res5 from "../resources/images/residential-5.jpg"
import res6 from "../resources/images/residential-6.jpg"
import com1 from "../resources/images/commercial-1.jpg"
import com2 from "../resources/images/commercial-2.jpg"
import com3 from "../resources/images/commercial-3.jpg"
import com4 from "../resources/images/commercial-4.jpg"
import com5 from "../resources/images/commercial-5.jpg"
import com6 from "../resources/images/commercial-6.jpg"

export function Listing(props) {
    let history = useHistory()
    const residentialImages = [
        res1, res2, res3, res4, res5, res6
    ]
    const commercialImages = [
        com1, com2, com3, com4, com5, com6
    ]

    return (
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden" style={{cursor: "pointer"}} onClick={() => props.listing.listingType === "Residential" ? history.push(`/marketplace/${props.listing.propertyId}`) : null}>
            <div className="flex-shrink-0">
                {props.listing.listingType === "Residential" ?
                    <div className="relative">
                        <img className="h-48 w-full object-cover" src={residentialImages[props.index - 1] || comingSoon} alt={props.listing.streetAddress} />
                        <span className="absolute right-1 top-3 px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-indigo-600 rounded-full">NEW</span>
                    </div>
                    :
                    <div className="relative">
                        <img className="opacity-40 h-48 w-full object-cover" src={commercialImages[props.index - 1] || comingSoon} alt={props.listing.streetAddress} />
                        <span className="absolute right-1 top-3 px-2 px-2 py-1 mr-2 text-xs font-semibold leading-none text-white bg-green-400 rounded-full">COMING SOON</span>
                    </div>
                }
                </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    {props.listing.listingType === "Residential" ?
                    <p className="text-sm font-medium text-indigo-600">
                    {props.listing.listingType}
                    </p>
                    :
                    <p className="text-sm font-medium text-green-500">
                    {props.listing.listingType}
                    </p>
                    }
                    <p className="text-xl font-semibold text-gray-900">
                        {`${props.listing.city}, ${props.listing.state}`}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                        {`This property is a ${props.listing.propertyType} located in ${props.listing.city}, ${props.listing.state}.`}
                    </p>
                    {props.listing.listingType === "Residential" ?
                    <p className="mt-3 text-sm font-medium text-indigo-600">
                        <NumberFormat
                            value={props.listing.seriesCount}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'Share Price: $'}
                        />
                    </p>
                    :
                    <p className="mt-3 text-sm font-medium text-green-500">
                        <NumberFormat
                            value={props.listing.seriesCount}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'Share Price: $'}
                        />
                    </p>
                    }
                </div>
            </div>
        </div>
    )
}
