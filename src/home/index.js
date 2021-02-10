import React from "react"
import { AppContainer } from "../utilities/app-container"
import { Hero } from "../utilities/hero"
import { Residential } from "../marketplace/residential"

export function Home(props) {
    return (
        <AppContainer>
            <Hero />
            <div className="u-margin-top-quad"></div>
            <Residential title="Realium Properties on the Market"/>
        </AppContainer>
    )
}
