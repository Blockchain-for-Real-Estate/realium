import React from "react"
import * as bs from "react-bootstrap"
import { useHistory } from "react-router-dom"
import NumberFormat from 'react-number-format'

import comingSoon from "../assets/images/coming-soon.jpg"

export function Listing(props) {
    let history = useHistory()
    const fundingPercent = props.listing.funded/props.listing.price*100

    return (
        <bs.Card className="border-0 shadow" onClick={() => history.push(`/marketplace/${props.listing.listingType}/${props.listing.id}`)}>
            <bs.CardImg src={props.listing.image || comingSoon} alt={props.listing.streetAddress} />
            <bs.Card.Body>
                <bs.Row className="justify-content-around mb-3">
                    <div>
                        <div className="font-weight-bold" style={{"fontSize": "0.9rem"}}>{props.listing.streetAddress}</div>
                        <div className="text-muted" style={{"fontSize": "0.7rem"}}>{`${props.listing.city}, ${props.listing.state}`}</div>
                    </div>
                    <div>
                        <div className="font-weight-bold text-right" style={{"fontSize": "0.9rem"}}>
                            <NumberFormat
                                value={props.listing.price}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                            />
                        </div>
                        <div className="text-muted text-right" style={{"fontSize": "0.7rem"}}>List Price</div>
                    </div>
                </bs.Row>
                <div className="px-3">
                    <bs.ProgressBar className="mb-1" now={fundingPercent} style={{"height": "0.1rem"}}/>
                    <div style={{"fontSize": "0.7rem"}} className="text-primary px-1">{fundingPercent}% funded</div>
                </div>
            </bs.Card.Body>
        </bs.Card>
    )
}
