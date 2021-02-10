import React from "react"
import * as bs from "react-bootstrap"
import { useHistory } from "react-router-dom";
import hero_img from "../assets/images/green-hero.jpg"

export function Hero(props) {
    let history = useHistory()

    return (
        <div className="u-margin-top-large">
            <bs.Jumbotron>
                <bs.Container>
                    <div className="l-grid l-grid--c2">
                        <div className="l-grid__item">
                            <h1>A Modern Real Estate Solution</h1>
                            <ul className="u-padding-top-double u-padding-bottom-double">
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
                            <bs.Button variant="success" onClick={() => history.push('/marketplace')}>
                                <b>Explore Marketplace</b>
                            </bs.Button>
                        </div>
                        <div className="l-grid__item">
                            <img src={hero_img} alt="green home"/>
                        </div>
                    </div>
                </bs.Container>
            </bs.Jumbotron>
        </div>
    )
}
