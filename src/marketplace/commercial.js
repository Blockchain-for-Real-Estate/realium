import React from "react"
import { Link } from "react-router-dom"
import { Listing } from "./listing"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

import com1 from "../assets/images/commercial-1.jpg"
import com2 from "../assets/images/commercial-2.jpg"
import com3 from "../assets/images/commercial-3.jpg"
import com4 from "../assets/images/commercial-4.jpg"
import com5 from "../assets/images/commercial-5.jpg"
import com6 from "../assets/images/commercial-6.jpg"


// TODO: need to handle different number of listings loaded in
export function Commercial(props) {
    //load in commercial stuff from server here, until then use dummy data below
    return (
        <>
            <div className="font-weight-bold mb-2" style={{"fontSize": "1.3rem"}}>Commercial Properties For Sale</div>
            <div className="text-muted mb-3">Create an investment portfolio that's diversified through commercial real estate.</div>
            <div className="l-grid l-grid--c3">
                {Object.keys(commercialData).map(key => (
                    <div key={key} className="l-grid__item">
                        <Listing listing={commercialData[key]}/>
                    </div>
                ))}
            </div>
            <div className="float-right" style={{"fontSize": "0.9rem"}}>
                <Link to="/marketplace/commercial" className="text-decoration-none text-muted">
                    Explore <FontAwesomeIcon icon={faLongArrowAltRight}/>
                </Link>
            </div>
        </>
    )
}


export const commercialData = {
    7: {
        id: 7,
        streetAddress: '333 Tech Ave',
        city: 'Provo',
        state: 'UT',
        zipCode: 84601,
        price: 3100000.00,
        funded: 465000.00,
        listingType: 'commercial',
        propertyType: 'office',
        image: com1,
        forcastedIncome: 8000,
        minInvestment: 1000,
        maxInvestment: 100000,
        share: 20,
        yearBuilt: 1998,
        acerage: 0.42
    },
    8: {
        id: 8,
        streetAddress: '4200 Silk Road',
        city: 'Springville',
        state: 'UT',
        zipCode: 84663,
        price: 1100000.00,
        funded: 825000.00,
        listingType: 'commercial',
        propertyType: 'office',
        image: com2,
        forcastedIncome: 8000,
        minInvestment: 1000,
        maxInvestment: 100000,
        share: 20,
        yearBuilt: 1998,
        acerage: 0.42
    },
    9: {
        id: 9,
        streetAddress: '100 Silicon Slopes',
        city: 'Lehi',
        state: 'UT',
        zipCode: 84043,
        price: 10100000.00,
        funded: 0.00,
        listingType: 'commercial',
        propertyType: 'office',
        image: com3,
        forcastedIncome: 8000,
        minInvestment: 1000,
        maxInvestment: 100000,
        share: 20,
        yearBuilt: 1998,
        acerage: 0.42
    },
    10: {
        id: 10,
        streetAddress: '200 Silicon Slopes',
        city: 'Lehi',
        state: 'UT',
        zipCode: 84043,
        price: 90000000.00,
        funded: 0.00,
        listingType: 'commercial',
        propertyType: 'office',
        image: com4,
        forcastedIncome: 8000,
        minInvestment: 1000,
        maxInvestment: 100000,
        share: 20,
        yearBuilt: 1998,
        acerage: 0.42
    },
    11: {
        id: 11,
        streetAddress: '111 Temple Way',
        city: 'Salt Lake City',
        state: 'UT',
        zipCode: 84101,
        price: 109100000.00,
        funded: 0.00,
        listingType: 'commercial',
        propertyType: 'office',
        image: com5,
        forcastedIncome: 8000,
        minInvestment: 1000,
        maxInvestment: 100000,
        share: 20,
        yearBuilt: 1998,
        acerage: 0.42
    },
    12: {
        id: 12,
        streetAddress: '120 Main Street',
        city: 'Salt Lake City',
        state: 'UT',
        zipCode: 84101,
        price: 60300000.00,
        funded: 0.00,
        listingType: 'commercial',
        propertyType: 'office',
        image: com6,
        forcastedIncome: 8000,
        minInvestment: 1000,
        maxInvestment: 100000,
        share: 20,
        yearBuilt: 1998,
        acerage: 0.42
    }
}
