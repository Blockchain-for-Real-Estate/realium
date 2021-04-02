import React, { useEffect, useState } from "react"
import { Listing } from "./listing"
import { SearchForm } from "./property-search-form"
import { ApiPropertyService } from "../api/services/property.service"

import res1 from "../resources/images/residential-1.jpg"
import res2 from "../resources/images/residential-2.jpg"
import res3 from "../resources/images/residential-3.jpg"
import res4 from "../resources/images/residential-4.jpg"
import res5 from "../resources/images/residential-5.jpg"
import res6 from "../resources/images/residential-6.jpg"


// TODO: need to handle different number of listings loaded in
export function Residential(props) {
    //load in residential stuff from server here, until then use dummy data below
    const [listings, setListings] = useState('')
    const [reloadAll, setReload] = useState(0)
    const setNotify = props.setNotify

    useEffect(() => {
        const getAllProperties = async () => {
            let assetApiService = new ApiPropertyService();
            await assetApiService.getAssets().then(
                (res) => {
                    const properties = res.data
                    setListings(properties)
                }
            ).catch(error => {
                setNotify && setNotify({ msg: `There was an error property data.`,
                                        color: 'red',
                                        show: true })
                console.error(`Error: ${error}`)
            })
        }

        getAllProperties()
    }, [setNotify, reloadAll])

    return (
        <>
            {/* Explore Marketplace */}
            <div className="relative">
                <div className="absolute inset-0">
                    <div className="bg-white h-1/3 sm:h-2/3"/>
                </div>
                <div className="relative max-w-7xl mx-auto">
                    <div className="bg-white">
                        <div className="max-w-7xl mx-auto sm:pb-1.5 sm:py-24">
                            <div className="text-center">
                                <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                                    Explore the marketplace
                                </p>
                                <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                                    Start trading real estate to diversify your investment portfolio.
                                </p>
                                <SearchForm setListings={setListings} setNotify={props.setNotify} searchService={"propertyService"} reset={setReload} reloadAll={reloadAll}/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                        {Object.keys(listings).map((key, idx) => (
                                <div key={key} className="l-grid__item">
                                    <Listing listing={listings[key]} index={listings[key].propertyId - 1}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
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
        zipCode: 84601,
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
        acerage: 0.42
    },
    2: {
        id: 2,
        streetAddress: '1300 E 120 N',
        city: 'Highland',
        state: 'UT',
        zipCode: 84003,
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
        acerage: 0.42
    },
    3: {
        id: 3,
        streetAddress: '305 W 400 S',
        city: 'Orem',
        state: 'UT',
        zipCode: 84058,
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
        acerage: 0.42
    },
    4: {
        id: 4,
        streetAddress: '800 E 400 S',
        city: 'Orem',
        state: 'UT',
        zipCode: 84058,
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
        acerage: 0.42
    },
    5: {
        id: 5,
        streetAddress: '120 Transit Way',
        city: 'Lehi',
        state: 'UT',
        zipCode: 84043,
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
        acerage: 0.42
    },
    6: {
        id: 6,
        streetAddress: '210 E 100 S',
        city: 'Provo',
        state: 'UT',
        zipCode: 84601,
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
        acerage: 0.42
    }
}
