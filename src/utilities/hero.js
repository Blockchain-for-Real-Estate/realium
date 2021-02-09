import React from "react"
import * as bs from "react-bootstrap"

export function Hero(props) {

    return (
        <div class="u-margin-top-large">
            <bs.Jumbotron>
                <bs.Container>
                        <h1>A Modern Real Estate Solution</h1>
                        <ul class="u-padding-top-double u-padding-bottom-double">
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
                        <bs.Button variant="success">
                            <b>Explore Marketplace</b>
                        </bs.Button>
                </bs.Container>
            </bs.Jumbotron>
        </div>
    )
}