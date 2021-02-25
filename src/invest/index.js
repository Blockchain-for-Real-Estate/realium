import React from "react"
import { Hero } from "../utilities/hero"
import { HowItWorks } from "../utilities/how-it-works"
import { AppContainer } from "../utilities/app-container"
import hero_img from "../assets/images/yellow-hero.jpg"

export function Invest(props) {
    return (
        <AppContainer page="invest">
            <Hero page={props.content.INVEST_HERO} image={hero_img}/>
            <HowItWorks page={props.content.INVEST_HOW_IT_WORKS}/>
        </AppContainer>
    )
}
