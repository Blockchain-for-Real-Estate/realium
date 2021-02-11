import React from "react"
import { Link } from "react-router-dom"
import { Listing } from "./listing"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

import res1 from "../assets/images/residential-1.jpg"
import res2 from "../assets/images/residential-2.jpg"
import res3 from "../assets/images/residential-3.jpg"
import res4 from "../assets/images/residential-4.jpg"
import res5 from "../assets/images/residential-5.jpg"
import res6 from "../assets/images/residential-6.jpg"


// TODO: need to handle different number of listings loaded in
export function Residential(props) {
    //load in residential stuff from server here, until then use dummy data below
    return (
        <>
            <div className="font-weight-bold mb-2" style={{"fontSize": "1.3rem"}}>Residential Properties For Sale</div>
            <div className="text-muted mb-3">Create an investment portfolio that's diversified residential real estate.</div>
            <div className="l-grid l-grid--c3">
                {Object.keys(residentialData).map(key => (
                    <div key={key} className="l-grid__item">
                        <Listing listing={residentialData[key]}/>
                    </div>
                ))}
            </div>
            <div className="float-right" style={{"fontSize": "0.9rem"}}>
                <Link to="/marketplace/residential" className="text-decoration-none text-muted">
                    Explore <FontAwesomeIcon icon={faLongArrowAltRight}/>
                </Link>
            </div>
        </>
    )
}


export const residentialData = {
    1: {
        id: 1,
        streetAddress: '445 W 400 N',
        city: 'Provo',
        state: 'UT',
        zip: 84601,
        price: 500400.00,
        funded: 375300.00,
        listingType: 'residential',
        propertyType: 'single family home',
        image: res1,
        forcastedIncome: 8000,
        minInvestment: 1000,
        maxInvestment: 100000,
        share: 20,
        yearBuilt: 1998,
        lotSize: 0.42
    },
    2: {
        id: 2,
        streetAddress: '1300 E 120 N',
        city: 'Highland',
        state: 'UT',
        zip: 84003,
        price: 12000000.00,
        funded: 600000.00,
        listingType: 'residential',
        propertyType: 'single family home',
        image: res2,
        forcastedIncome: 16000,
        minInvestment: 1000,
        maxInvestment: 100000,
        share: 20,
        yearBuilt: 1998,
        lotSize: 0.42
    },
    3: {
        id: 3,
        streetAddress: '305 W 400 S',
        city: 'Orem',
        state: 'UT',
        zip: 84058,
        price: 330900.00,
        funded: 0.00,
        listingType: 'residential',
        propertyType: 'single family home',
        image: res3,
        forcastedIncome: 8000,
        minInvestment: 1000,
        maxInvestment: 100000,
        share: 20,
        yearBuilt: 1998,
        lotSize: 0.42
    },
    4: {
        id: 4,
        streetAddress: '800 E 400 S',
        city: 'Orem',
        state: 'UT',
        zip: 84058,
        price: 800000.00,
        funded: 0.00,
        listingType: 'residential',
        propertyType: 'single family home',
        image: res4,
        forcastedIncome: 8000,
        minInvestment: 1000,
        maxInvestment: 100000,
        share: 20,
        yearBuilt: 1998,
        lotSize: 0.42
    },
    5: {
        id: 5,
        streetAddress: '120 Transit Way',
        city: 'Lehi',
        state: 'UT',
        zip: 84043,
        price: 780000.00,
        funded: 0.00,
        listingType: 'residential',
        propertyType: 'single family home',
        image: res5,
        forcastedIncome: 8000,
        minInvestment: 1000,
        maxInvestment: 100000,
        share: 20,
        yearBuilt: 1998,
        lotSize: 0.42
    },
    6: {
        id: 6,
        streetAddress: '210 E 100 S',
        city: 'Provo',
        state: 'UT',
        zip: 84601,
        price: 499999.00,
        funded: 0.00,
        listingType: 'residential',
        propertyType: 'single family home',
        image: res6,
        forcastedIncome: 8000,
        minInvestment: 1000,
        maxInvestment: 100000,
        share: 20,
        yearBuilt: 1998,
        lotSize: 0.42
    }
}
