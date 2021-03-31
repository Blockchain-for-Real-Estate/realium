import React from "react"
import { Hero } from "../utilities/hero"
import hero_img from "../resources/images/hero-blue.jpg"
import { Residential } from "./residential"
import { Commercial } from "./commercial"
import { CollapsableSection, FAQS } from "../utilities/collapsable-section"

export function Marketplace(props) {
    return (
        <>
            <Hero img={hero_img} page="marketplace"/>
            <Residential />
            <Commercial />
            {/* FAQs */}
            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                        <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Frequently asked questions
                        </h2>
                        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                            {FAQS.map(faq => (
                                <CollapsableSection
                                    title={faq.title}
                                    text={faq.text}
                                    key={faq.title}
                                />
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}
