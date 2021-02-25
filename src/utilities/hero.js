import React from "react"
import * as bs from "react-bootstrap"
import { useHistory } from "react-router-dom";

export function Hero(props) {
    let history = useHistory()

    return (
        <div className="u-margin-top-large u-margin-bottom-large">
            <bs.Jumbotron>
                <bs.Container>
                    <div className="l-grid l-grid--c2">
                        <div className="l-grid__item">
                            <h1>{props.page.title}</h1>
                            <ul className="u-padding-top-double u-padding-bottom-double">
                                <li>
                                    {props.page.bullet_one}
                                </li>
                                <li>
                                    {props.page.bullet_two}
                                </li>
                                <li>
                                    {props.page.bullet_three}
                                </li>
                                <li>
                                    {props.page.bullet_four}
                                </li>
                            </ul>
                            <bs.Button variant="success" onClick={() => history.push('/marketplace')}>
                                <b>{props.page.button_text}</b>
                            </bs.Button>
                        </div>
                        <div className="l-grid__item">
                            <img src={props.image} alt="hero"/>
                        </div>
                    </div>
                </bs.Container>
            </bs.Jumbotron>
        </div>
    )
}
