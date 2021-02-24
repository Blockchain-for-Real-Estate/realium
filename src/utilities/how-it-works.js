import React from "react"
import * as bs from "react-bootstrap"
import group_img from "../assets/images/Group 71.svg"

export function HowItWorks(props) {

    return (
        <div className="u-margin-top-large u-padding-top-large">
            <bs.Container>
                <h2 style={{textAlign: "center"}}>{props.page.title}</h2>
                <div className="u-padding-bottom"></div>
                <div className="l-grid l-grid--c4">
                    <div className="l-grid__item">
                        <img src={group_img} alt="how-it-works"/>
                    </div>
                    {/* </div>
                    <div className="l-grid__item">
                        <img src={hero_img} alt="green home"/>
                    </div>
                    <div className="l-grid__item">
                        <img src={hero_img} alt="green home"/>
                    </div>
                    <div className="l-grid__item">
                        <img src={hero_img} alt="green home"/>
                    </div> */}
                </div>
            </bs.Container>
        </div>
    );
}