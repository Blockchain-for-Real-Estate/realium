import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Listing } from "./listing"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { ApiAssetService } from "../api/services/asset.service"

import res1 from "../resources/images/residential-1.jpg"
import res2 from "../resources/images/residential-2.jpg"
import res3 from "../resources/images/residential-3.jpg"
import res4 from "../resources/images/residential-4.jpg"
import res5 from "../resources/images/residential-5.jpg"
import res6 from "../resources/images/residential-6.jpg"


// TODO: need to handle different number of listings loaded in
export function Residential(props) {
    //load in residential stuff from server here, until then use dummy data below
    let [listings, setListings] = useState('')
    let assetApiService = new ApiAssetService();

    useEffect(() => {
        const getAllProperties = async () => {
            await assetApiService.getAssets().then(
                (res) => {
                    const properties = res.data.assets
                    setListings(properties)
                }
            ).catch(error => console.error(`Error: ${error}`))
        }

        getAllProperties()
    }, []);

    //temporary preview array, once we get data loaded in from actual db we can query for just three properties
    let previewArr = []
    if (props.preview) {
        Object.keys(listings).forEach((key, idx) => {
            if (idx < 3) {
                previewArr.push(key)
            }
        })
    }

    return (
        <>
            {/* Explore Marketplace */}
            <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                <div className="absolute inset-0">
                    <div className="bg-white h-1/3 sm:h-2/3"/>
                </div>
                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                            Explore the Marketplace
                        </h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
                        </p>
                    </div>
                    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                        {props.preview ?
                            previewArr.map((key, idx) =>
                                <div key={key} className="l-grid__item">
                                    <Listing listing={listings[key]} index={idx}/>
                                </div>
                            )
                        :
                            Object.keys(listings).map((key, idx) => (
                                <div key={key} className="l-grid__item">
                                    <Listing listing={listings[key]} index={idx}/>
                                </div>
                            ))
                        }
                    </div>
                    <div className="float-right" style={{"fontSize": "0.9rem"}}>
                        <Link to="/marketplace/residential" className="text-decoration-none text-muted">
                            Explore <FontAwesomeIcon icon={faLongArrowAltRight}/>
                        </Link>
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
