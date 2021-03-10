import React from "react"
import { Hero } from "../utilities/hero"
import hero_img from "../resources/images/blue-hero.jpg"
import { Residential } from "./residential"
import { Commercial } from "./commercial"

export function Marketplace(props) {
    return (
        <>
            <Hero image={hero_img} />
            <Residential />
            <Commercial />
        </>
    )
}
