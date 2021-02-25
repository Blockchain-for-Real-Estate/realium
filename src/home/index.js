import React from "react"
import enText from '../assets/docs/en.json';
import { AppContainer } from "../utilities/app-container"
import { Hero } from "../utilities/hero"
import { Residential } from "../marketplace/residential"
import hero_img from "../assets/images/green-hero.jpg"

export function Home(props) {
    return (
        <AppContainer>
            <Hero page={props.content.HOME_HERO} image={hero_img}/>
            <div className="u-margin-top-quad"></div>
            <Residential title="Realium Properties on the Market"/>
        </AppContainer>
    )
}

export const page = JSON.stringify(enText);