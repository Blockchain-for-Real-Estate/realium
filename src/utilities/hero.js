import React from "react"
import * as bs from "react-bootstrap"
import hero_img from "../assets/images/green-hero.jpg"

export function Hero(props) {

    return (
<<<<<<< HEAD
        <div className="u-margin-top-large">
            <bs.Jumbotron>
                <bs.Container>
                    <div className="l-grid l-grid--c2">
                        <div className="l-grid__item">
                            <h1>A Modern Real Estate Solution</h1>
                            <ul className="u-padding-top-double u-padding-bottom-double">
=======
        <div class="u-margin-top-large">
            <bs.Jumbotron>
                <bs.Container>
                    <div class="l-grid l-grid--c2">
                        <div class="l-grid__item">
                            <h1>A Modern Real Estate Solution</h1>
                            <ul class="u-padding-top-double u-padding-bottom-double">
>>>>>>> 2300fea913534a240fc6f289e12302b02f54a0b9
                                <li>
                                    Worldwide Liquidity | Tap into a global customer base
                                </li>
                                <li>
                                    Fractional Tokenization | Sell a small piece of your equity
                                </li>
                                <li>
                                    Create Liquidity | Sell your assets on your schedule
                                </li>
                                <li>
                                    Fully Transparent | View comprehensive ownership history
                                </li>
                            </ul>
                            <bs.Button variant="success" href="/marketplace">
                                <b>Explore Marketplace</b>
                            </bs.Button>
                        </div>
<<<<<<< HEAD
                        <div className="l-grid__item">
=======
                        <div class="l-grid__item">
>>>>>>> 2300fea913534a240fc6f289e12302b02f54a0b9
                            <img src={hero_img} alt="green home"/>
                        </div>
                    </div>
                </bs.Container>
            </bs.Jumbotron>
        </div>
    )
}