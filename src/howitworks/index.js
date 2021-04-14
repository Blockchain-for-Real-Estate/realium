import React from "react"
import { Hero } from "../utilities/hero"
import hero_img from "../resources/images/hero-blue.jpg"
import res from "../resources/images/residential_capital_stack.svg"
import asset_table from "../resources/images/asset_table.svg"

export function HowItWorks() {
    return (
        <>
            <Hero img={hero_img} page="howitworks" />
            <div className="bg-gray-100 lg:px-8 px-4 py-10 sm:px-6">
                <div className="sm:flex sm:flex-col sm:align-center">
                    <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">Converting the asset</h1>
                    <p className="mt-3 text-xl text-gray-500 sm:text-center">
                        Realium uses blockchain technology to represent the real tangible asset as a security.
                        <br/>
                        This allows for the property to be traded the same way stocks and bonds are traded on exchanges.
                    </p>
                    <div className="my-6">
                        <img src={asset_table} alt="asset table" className="flex-1"/>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-2">
                    <div className="flex-1">
                        <img src={res} alt="Residential"/>
                    </div>
                    <div className="flex-1">
                        <h1 className="text-5xl font-extrabold text-gray-900">Expanding the capital stack</h1>
                        <p className="mt-3 text-xl text-gray-500">
                            Property owners are provided with a way to unlock more capital from their asset through tokenization.
                            Since only a portion of the asset is tokenized, Realium users are part-owners that do not carry any voting rights.
                        </p>
                        <div className="mt-3 space-y-4 sm:mt-16 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 grid grid-cols-3">
                            <div className="flex-1 mt-0">
                                <div className="text-3xl leading-9 font-extrabold text-indigo-500">
                                    20%
                                </div>
                                <div className="text-base leading-6 font-medium text-gray-500 mb-12">
                                    Increase in
                                    <br/>
                                    asset liquidty
                                </div>
                            </div>
                            <div className="flex-1 mt-0">
                                <div className="text-3xl leading-9 font-extrabold text-indigo-500">
                                    12
                                </div>
                                <div className="text-base leading-6 font-medium text-gray-500 mb-12">
                                    Properties
                                    <br/>
                                    tokenized
                                </div>
                            </div>
                            <div className="flex-1 mt-0">
                                <div className="text-3xl leading-9 font-extrabold text-indigo-500">
                                    1
                                </div>
                                <div className="text-base leading-6 font-medium text-gray-500 mb-12">
                                Cap table
                                <br/>
                                line item
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
