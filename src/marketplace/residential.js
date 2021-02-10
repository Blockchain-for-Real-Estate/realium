import React from "react"
import { Listing } from "./listing"
import res1 from "../assets/images/residential-1.jpg"
import res2 from "../assets/images/residential-2.jpg"
import res3 from "../assets/images/residential-3.jpg"
import res4 from "../assets/images/residential-4.jpg"
import res5 from "../assets/images/residential-5.jpg"
import res6 from "../assets/images/residential-6.jpg"

export function Residential(props) {
    //load in residential stuff from server here, until then use dummy data below
    return (
        <>
            <div className="font-weight-bold mb-2" style={{"fontSize": "1.3rem"}}>{props.title || "Residential Properties For Sale"}</div>
            <div className="text-muted mb-3">Create an investment portfolio that's diversified through real estate.</div>
            <div className="l-grid l-grid--c3">
                {residentialData.map((property, idx) => (
                    <div className="l-grid__item">
                        <Listing listing={property}/>
                    </div>
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
        propertyType: 'singleFamily',
        image: res1
    },
    {
        streetAddress: '1300 E 120 N',
        city: 'Highland',
        state: 'UT',
        zip: 84003,
        price: 12000000.00,
        funded: 600000.00,
        listingType: 'residential',
        propertyType: 'singleFamily',
        image: res2
    },
    {
        streetAddress: '305 W 400 S',
        city: 'Orem',
        state: 'UT',
        zip: 84058,
        price: 330900.00,
        funded: 0.00,
        listingType: 'residential',
        propertyType: 'singleFamily',
        image: res3
    },
    {
        streetAddress: '800 E 400 S',
        city: 'Orem',
        state: 'UT',
        zip: 84058,
        price: 800000.00,
        funded: 0.00,
        listingType: 'residential',
        propertyType: 'singleFamily',
        image: res4
    },
    {
        streetAddress: '120 Transit Way',
        city: 'Lehi',
        state: 'UT',
        zip: 84043,
        price: 780000.00,
        funded: 0.00,
        listingType: 'residential',
        propertyType: 'singleFamily',
        image: res5
    },
    {
        streetAddress: '210 E 100 S',
        city: 'Provo',
        state: 'UT',
        zip: 84601,
        price: 499999.00,
        funded: 0.00,
        listingType: 'residential',
        propertyType: 'singleFamily',
        image: res6
    }
]
