import React from "react"
import { Hero } from "../utilities/hero"
import { HowItWorks } from "../utilities/how-it-works"
import { AppContainer } from "../utilities/app-container"
import hero_img from "../resources/images/orange-hero.jpg"

export function Tokenization(props) {
    return (
        <Hero page={props.content.TOKENIZATION_HERO} image={hero_img}/>
    )
}
