import React from "react"
import { AppContainer } from "../utilities/app-container"
import { Residential } from "./residential"

export function Marketplace(props) {
    return (
        <AppContainer page="marketplace">
            <Residential />
        </AppContainer>
    )
}

const commercialData = [
    {
        streetAddress: '333 Tech Ave',
        city: 'Provo',
        state: 'UT',
        zip: 84601,
        price: 3100000.00,
        funded: 465000.00,
        listingType: 'commercial',
        propertyType: 'office'
    },
    {
        streetAddress: '4200 Silk Road',
        city: 'Springville',
        state: 'UT',
        zip: 84663,
        price: 1100000.00,
        funded: 825000.00,
        listingType: 'commercial',
        propertyType: 'office'
    },
    {
        streetAddress: '100 Silicon Slopes',
        city: 'Lehi',
        state: 'UT',
        zip: 84043,
        price: 10100000.00,
        funded: 0.00,
        listingType: 'commercial',
        propertyType: 'office'
    },
    {
        streetAddress: '200 Silicon Slopes',
        city: 'Lehi',
        state: 'UT',
        zip: 84043,
        price: 90000000.00,
        funded: 0.00,
        listingType: 'commercial',
        propertyType: 'office'
    },
    {
        streetAddress: '111 Temple Way',
        city: 'Salt Lake City',
        state: 'UT',
        zip: 84101,
        price: 109100000.00,
        funded: 0.00,
        listingType: 'commercial',
        propertyType: 'office'
    },
    {
        streetAddress: '120 Main Street',
        city: 'Salt Lake City',
        state: 'UT',
        zip: 84101,
        price: 60300000.00,
        funded: 0.00,
        listingType: 'commercial',
        propertyType: 'office'
    }
]
