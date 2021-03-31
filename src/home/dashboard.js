import React from "react"
import { Hero } from "../utilities/hero"
import hero_img from "../resources/images/hero-red.jpg"

export function Dashboard(props) {
    return (
        <>
            <Hero img={hero_img} page="dashboard"/>
        </>
    )
}
