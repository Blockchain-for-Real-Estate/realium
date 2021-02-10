import React from "react"
import * as bs from "react-bootstrap"
import logo from "../assets/images/logo.svg"

export function Footer(props) {

    return (
        <div style={{"backgroundColor": "#e3e3e3"}}>
            <hr/>
            <div className="container u-margin-top-double">
                <div className="row">
                    <div className="col">
                        <img src={logo} alt="logo" style={{"width": "12rem", "height": "5rem"}} className="u-margin-right-quad"/>
                        <p style={{"fontSize": "small"}}>
                            Realium is a financial techonology company that assists in purchase, sale, and legal compliance of tokenized real estate assets.
                        </p>
                    </div>
                    <div className="u-margin-left-double"></div>
                    <div className="col u-padding-top-double">
                        <h4>PRODUCTS</h4>
                        <ul className="list-unstyled u-padding-top">
                            <li>Marketplace</li>
                            <li>Tokenization</li>
                            <li>Invest</li>
                        </ul>
                    </div>
                    <div className="col u-padding-top-double">
                        <h4>ABOUT US</h4>
                        <ul className="list-unstyled u-padding-top">
                            <li>Disclaimer</li>
                            <li>Privacy Policy</li>
                            <li>Terms and Conditions</li>
                        </ul>
                    </div>
                    <div className="col u-padding-top-double">
                        <h4>RESOURCES</h4>
                        <ul className="list-unstyled u-padding-top">
                            <li>White Paper</li>
                            <li>Help Center</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="col u-padding-top-double">
                        <h4>CONTACT</h4>
                        <ul className="list-unstyled u-padding-top">
                            <li>Provo, Utah</li>
                            <li>801-422-2222</li>
                            <li>info@realium.io</li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className="row  u-padding-bottom-double">
                    <div className="u-padding-left-quad">
                        <bs.Button variant="primary">
                            GET STARTED
                        </bs.Button>
                    </div>
                    <p className="col-sm" style={{"textAlign": "right"}}>
                        &copy;{new Date().getFullYear()} Realium, LLC | All rights reserved |
                    </p>
                </div>
            </div>
        </div>
    )
}
