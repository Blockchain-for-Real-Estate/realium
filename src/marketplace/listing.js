import React from "react"
import { useHistory } from "react-router-dom"
import NumberFormat from "react-number-format"

import comingSoon from "../resources/images/coming-soon.jpg"
import newBadge from "../resources/images/new-badge.png"
import csBadge from "../resources/images/coming-soon-badge.png"
import res1 from "../resources/images/residential/residential-1.jpg"
import res2 from "../resources/images/residential/residential-2.jpg"
import res3 from "../resources/images/residential/residential-3.jpg"
import res4 from "../resources/images/residential/residential-4.jpg"
import res5 from "../resources/images/residential/residential-5.jpg"
import res6 from "../resources/images/residential/residential-6.jpg"
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
        <div className="flex flex-col rounded-lg shadow-md overflow-hidden" style={{cursor: "pointer"}} onClick={() => props.listing.listingType === "Residential" ? history.push(`/marketplace/${props.listing.propertyId}`) : null}>
            <div className="flex-shrink-0">
                {props.listing.listingType === "Residential" ?
                    <div className="relative">
                        <img className="h-48 w-full object-cover" src={residentialImages[props.index] || comingSoon} alt={props.listing.streetAddress} />
                        <img src={newBadge} alt="NEW" className="absolute right-1 top-3 px-2 py-1 mr-2 h-7"/>
                    </div>
                    :
                    <div className="relative">
                        <img className="opacity-40 h-48 w-full object-cover" src={commercialImages[props.index] || comingSoon} alt={props.listing.streetAddress} />
                        <img src={csBadge} alt="COMING SOON" className="absolute right-1 top-3 px-2 py-1 mr-2 h-7"/>
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
                        {props.listing.propertyName}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                        {`This property is a ${props.listing.propertyType} located in ${props.listing.city}, ${props.listing.state}.`}
                    </p>
                    {props.listing.listingType === "Residential" ?
                    <div className="mt-3 text-sm font-medium text-indigo-600">
                        <NumberFormat
                            value={props.listing.seriesCount}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'Share Price: '}
                        />
                        <div className="h-4 inline-flex px-1">
                        <svg width="12" height="12" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M153 76.5C153 118.75 118.75 153 76.5 153C34.2502 153 0 118.75 0 76.5C0 34.2502 34.2502 0 76.5 0C118.75 0 153 34.2502 153 76.5ZM72.2494 21.5512L22.6284 108.776C20.8649 111.876 23.1037 115.725 26.6701 115.725H57.7531C59.4209 115.725 60.961 114.832 61.7892 113.384L96.0274 53.5368C96.8467 52.1048 96.8458 50.3458 96.025 48.9145L80.325 21.5372C78.5347 18.4154 74.0289 18.4231 72.2494 21.5512ZM90.0853 115.95H126.325C130.017 115.95 132.327 111.956 130.486 108.756L112.443 77.3996C110.601 74.1984 105.985 74.1898 104.131 77.3843L85.9337 108.741C84.0767 111.941 86.3855 115.95 90.0853 115.95Z" fill="#4F46E5"/>
                        </svg>
                        </div>
                    </div>
                    :
                    <p className="mt-3 text-sm font-medium text-green-500">
                        <NumberFormat
                            value={props.listing.sharePrice}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'Share Price: '}
                        />
                        <div className="h-4 inline-flex px-1">
                        <svg width="12" height="12" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M153 76.5C153 118.75 118.75 153 76.5 153C34.2502 153 0 118.75 0 76.5C0 34.2502 34.2502 0 76.5 0C118.75 0 153 34.2502 153 76.5ZM72.2494 21.5512L22.6284 108.776C20.8649 111.876 23.1037 115.725 26.6701 115.725H57.7531C59.4209 115.725 60.961 114.832 61.7892 113.384L96.0274 53.5368C96.8467 52.1048 96.8458 50.3458 96.025 48.9145L80.325 21.5372C78.5347 18.4154 74.0289 18.4231 72.2494 21.5512ZM90.0853 115.95H126.325C130.017 115.95 132.327 111.956 130.486 108.756L112.443 77.3996C110.601 74.1984 105.985 74.1898 104.131 77.3843L85.9337 108.741C84.0767 111.941 86.3855 115.95 90.0853 115.95Z" fill="#34D399"/>
                        </svg>
                        </div>
                    </p>
                    }
                </div>
            </div>
        </div>
    )
}
