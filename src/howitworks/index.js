import React from "react"
import { Hero } from "../utilities/hero"
import hero_img from "../resources/images/orange-hero.jpg"
import res from "../resources/images/residential-model.svg"
import com from "../resources/images/commercial-model.svg"
import inv from "../resources/images/invest-model.svg"

export function HowItWorks() {
    return (
        <>
        <Hero img={hero_img} page="howitworks" />
        <div className="max-w-7xl mx-auto mt-20 py-10 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">Breakdown</h1>
            <p className="mt-3 text-xl text-gray-500 sm:text-center">Residential, commercial, and investment properties require differing tokenization principles. To make it clear where you can earn the most, the following models break down property percentages.</p> 
        </div>
        <div className="mt-4 p-8 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
            <img src={res} alt="Residential" className="flex-1"/>
            <img src={com} alt="Commerical" className="flex-1"/>
            <img src={inv} alt="Invest" className="flex-1" />
        </div>
        </div>
        </>
    )
}
