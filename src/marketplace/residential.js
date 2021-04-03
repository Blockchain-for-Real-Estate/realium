import React, { useEffect, useState } from "react"
import { Listing } from "./listing"
import { SearchForm } from "./search-form"
import { ApiPropertyService } from "../api/services/property.service"


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
            <div className="relative mb-24">
                <div className="absolute inset-0">
                    <div className="bg-white h-1/3 sm:h-2/3"/>
                </div>
                <div className="relative max-w-7xl mx-auto">
                    <div className="bg-white">
                        <div className="max-w-7xl mx-auto py-12 sm:pb-1.5 sm:py-24">
                            <div className="text-center">
                                <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                                    Explore the marketplace
                                </p>
                                <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                                    Start trading real estate to diversify your investment portfolio.
                                </p>
                                <SearchForm resultsSetter={setListings} setNotify={props.setNotify} searchService={"propertyService"} reset={setReload} reloadAll={reloadAll}/>
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
