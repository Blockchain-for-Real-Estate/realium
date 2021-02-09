import React from "react"
import * as bs from "react-bootstrap"

import comingSoon from "../assets/images/coming-soon.jpg"

export function Listing(props) {
    const fundingPercent = props.funded/props.price || 75
    return (
        <bs.Card className="border-0 shadow" style={{"width": "28%", "height": "25rem"}}>
            <bs.CardImg src={props.image || comingSoon} alt={props.streetAddress || ""} />
            <bs.Card.Body>
                <bs.Row className="justify-content-around mb-3">
                    <div>
                        <div className="font-weight-bold" style={{"fontSize": "0.9rem"}}>{props.streetAddress || "445 W 400 N"}</div>
                        <div className="text-muted" style={{"fontSize": "0.7rem"}}>{`${props.city || "Provo"}, ${props.state || "UT"}`}</div>
                    </div>
                    <div>
                        <div className="font-weight-bold text-right" style={{"fontSize": "0.9rem"}}>${props.price || "500,400"}</div>
                        <div className="text-muted text-right" style={{"fontSize": "0.7rem"}}>List Price</div>
                    </div>
                </bs.Row>
                <div className="px-2">
                    <bs.ProgressBar className="mb-1" now={fundingPercent} style={{"height": "0.2rem"}}/>
                    <div style={{"fontSize": "0.7rem"}} className="text-primary px-1">{fundingPercent}% funded</div>
                </div>
            </bs.Card.Body>
        </bs.Card>
    )
}
