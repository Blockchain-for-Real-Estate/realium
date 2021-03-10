import React from "react"
import * as bs from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { titleCase } from "title-case"
import NumberFormat from 'react-number-format'
import { commercialData } from "./commercial"
import { residentialData } from "./residential"

import typeIcon from "../resources/images/purple_prop_type.png"
import yearIcon from "../resources/images/purple_year_built_icon.png"
import sqFtIcon from "../resources/images/purple_sq_footage_icon.png"
import priceIcon from "../resources/images/purple_price_icon.png"

export function ListingDetails(props) {
    let history = useHistory()
    let { listingType, id } = useParams()
    let [listing, setListing] = React.useState()

    React.useEffect(() => {
        if (listingType === 'residential') {
            setListing(residentialData[id])

        } else {
            setListing(commercialData[id])
        }
    }, [id, listing, listingType])

    return (
        <>  {listing &&
            <>
                <div className="border-bottom mb-4">
                    <bs.Row className="mb-2">
                        <div style={{"fontSize": "1.3rem"}} className="font-weight-bold">{titleCase(listing.propertyType)} in {listing.city}, {listing.state}</div >
                    </bs.Row>
                    <bs.Row className="justify-content-between mb-4">
                        <div>
                            {listing.streetAddress} {listing.city}, {listing.state} {listing.zipCode}
                        </div>
                        <div>
                            Marketplace > {titleCase(listing.listingType)} Properties
                        </div>
                    </bs.Row>
                </div>
                <bs.Row>
                    <bs.Col md={8}>
                        <div className="text-center mb-2">
                            <img src={listing.image} alt={listing.propertyType}/>
                        </div>
                        <div className="font-weight-bold" style={{"fontSize": "1.1rem"}}>Description</div>
                        <div>
                            Property is located in {listing.city}, {listing.state} for a steal at {<NumberFormat value={listing.price} displayType={'text'} thousandSeparator={true} prefix={'$'}/>}.
                        </div>
                    </bs.Col>
                    <bs.Col md={4}>
                        <bs.ProgressBar className="mb-3" now={listing.funded/listing.price*100} style={{"height": "0.1rem"}}/>
                        <div className="mb-3">
                                <NumberFormat
                                    className="text-primary font-weight-bold"
                                    style={{"fontSize": "1.3rem"}}
                                    value={listing.funded}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                /> / <NumberFormat
                                        value={listing.price}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'$'}
                                    />
                        </div>
                        <div className="border-bottom mb-3" />
                        <div>
                            <bs.Table borderless size="sm" className="mb-3">
                                <tbody>
                                    <tr>
                                        <td>Forcasted Income: </td>
                                        <td>
                                            <NumberFormat
                                                value={listing.forcastedIncome}
                                                displayType={'text'}
                                                thousandSeparator={true}
                                                prefix={'$'}
                                            />/yr
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Minimum Investment: </td>
                                        <td>
                                            <NumberFormat
                                                value={listing.minInvestment}
                                                displayType={'text'}
                                                thousandSeparator={true}
                                                prefix={'$'}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Maximum Investment: </td>
                                        <td>
                                            <NumberFormat
                                                value={listing.maxInvestment}
                                                displayType={'text'}
                                                thousandSeparator={true}
                                                prefix={'$'}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </bs.Table>
                        </div>
                        <div className="border-bottom mb-3"/>
                        <div style={{"fontSize": "1.3rem"}} className="font-weight-bold mb-3">
                            Share Price:
                            <NumberFormat
                                value={listing.share}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                                suffix=" USD"
                                className="text-primary ml-1"
                            />
                        </div>
                        <div className="border-bottom mb-3"/>
                        <div className="d-flex mb-2">
                            <bs.Table borderless>
                                <tbody>
                                    <tr>
                                        <td style={{"fontWeight": "500"}}>
                                            <img src={typeIcon} alt="property type" className="pl-2 mr-2"/> Type:
                                        </td>
                                        <td>
                                            {titleCase(listing.propertyType)}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{"fontWeight": "500"}}>
                                            <img src={yearIcon} alt="year built" className="pl-2 mr-2"/> Year:
                                        </td>
                                        <td>
                                            {listing.yearBuilt}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{"fontWeight": "500"}}>
                                            <img src={sqFtIcon} alt="lot size" className="pl-2 mr-2"/> Lot:
                                        </td>
                                        <td>
                                            {listing.acerage}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{"fontWeight": "500"}}>
                                            <img src={priceIcon} alt="price" className="pl-2 mr-2"/> Price:
                                        </td>
                                        <td>
                                            <NumberFormat
                                                value={listing.price}
                                                displayType={'text'}
                                                thousandSeparator={true}
                                                prefix={'$'}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </bs.Table>
                        </div>
                        <div className="border-bottom mb-4"/>
                        <bs.Button block className="font-weight-bold mb-3" onClick={
                            () => history.push(`/marketplace/${listing.listingType}/${listing.id}/purchase`)
                        }>
                            PURCHASE SHARES
                        </bs.Button>
                        <div style={{"fontSize": "0.9rem"}} className="text-muted">
                            *By purchasing shares of this asset,
                            you become a part owner of this property
                            and agree to Realium’s Terms of Use
                        </div>
                    </bs.Col>
                </bs.Row>
            </>
            }
        </>
    )
}
