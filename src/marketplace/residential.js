import React from "react"
import { Listing } from "./listing"

export function Residential(props) {
    //load in residential stuff from server here, until then use dummy data below
    return (
        <>
            <div className="font-weight-bold mb-2" style={{"fontSize": "1.3rem"}}>Residential Properties For Sale</div>
            <div className="text-muted mb-3">Create an investment portfolio that's diversified through real estate.</div>
            <div>
                {residentialData.map((property, idx) => (
                    console.log(idx)
                ))}
            </div>
        </>
    )
}


const residentialData = [
    {
        streetAddress: '445 W 400 N',
        city: 'Provo',
        state: 'UT',
        zip: 84601,
        price: 500400.00,
        funded: 375300.00,
        listingType: 'residential',
        propertyType: 'singleFamily'
    },
    {
        streetAddress: '1300 E 120 N',
        city: 'Highland',
        state: 'UT',
        zip: 84003,
        price: 12000000.00,
        funded: 600000.00,
        listingType: 'residential',
        propertyType: 'singleFamily'
    },
    {
        streetAddress: '305 W 400 S',
        city: 'Orem',
        state: 'UT',
        zip: 84058,
        price: 330900.00,
        funded: 0.00,
        listingType: 'residential',
        propertyType: 'singleFamily'
    },
    {
        streetAddress: '800 E 400 S',
        city: 'Orem',
        state: 'UT',
        zip: 84058,
        price: 800000.00,
        funded: 0.00,
        listingType: 'residential',
        propertyType: 'singleFamily'
    },
    {
        streetAddress: '120 Transit Way',
        city: 'Lehi',
        state: 'UT',
        zip: 84043,
        price: 780000.00,
        funded: 0.00,
        listingType: 'residential',
        propertyType: 'singleFamily'
    },
    {
        streetAddress: '210 E 100 S',
        city: 'Provo',
        state: 'UT',
        zip: 84601,
        price: 499999.00,
        funded: 0.00,
        listingType: 'residential',
        propertyType: 'singleFamily'
    }
]
