import React from "react"
import * as bs from "react-bootstrap"
import { useHistory } from "react-router-dom"
//import { titleCase } from "title-case"
import NumberFormat from 'react-number-format'
import { ApiAssetService } from '../api/services/asset.service'
import { StaticNavBar } from '../utilities/static-nav-bar'
import res1 from "../resources/images/residential-1.jpg"
import { Transactions } from "./transactions"

import typeIcon from "../resources/images/purple_prop_type.png"
import yearIcon from "../resources/images/purple_year_built_icon.png"
import sqFtIcon from "../resources/images/purple_sq_footage_icon.png"
import priceIcon from "../resources/images/purple_price_icon.png"

export function ListingDetails(props) {
    let history = useHistory()
    let loading = false;
    let [listing, setListing] = React.useState()
    let assetViaApi = new ApiAssetService();

    const assetId = "30bb28e6-7b16-4d01-8e55-4be1c0f551ce";

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                await assetViaApi.getAssetById(assetId).then(
                    res => {
                        const asset = res.data;
                        setListing(asset);
                    }
                )
            } catch {
                setListing(residentialData)
            }
        };

        fetchData();
    }, []);

    return (
        <>
        {!loading ? 
            <>
                <div className="u-padding-top-double u-margin-bottom-quad">
                    <StaticNavBar />
                </div>
            <>  {listing &&
                <>
                    <div className="border-bottom mb-4">
                        <bs.Row className="mb-2">
                            <div style={{"fontSize": "1.3rem"}} className="font-weight-bold">{listing.propertyType} in {listing.city}, {listing.state}</div >
                        </bs.Row>
                        <bs.Row className="justify-content-between mb-4">
                            <div>
                                {listing.streetAddress} {listing.city}, {listing.state} {listing.zipCode}
                            </div>
                            <div>
                                Marketplace > {listing.listingType} Properties
                            </div>
                        </bs.Row>
                    </div>
                    <bs.Row>
                        <bs.Col md={8}>
                            <div className="text-center mb-2">
                                <img src={res1} alt={listing.propertyType}/>
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
                                                {listing.propertyType}
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
                {listing &&
                    <Transactions listing={listing} assetId={assetId}/>
                }
            </>
        </>
        :
            <h1>Loading...</h1>
        }
    </>
    )
}

const residentialData = {
    id: 1,
    streetAddress: '445 W 400 N',
    city: 'Provo',
    state: 'UT',
    zipCode: 84601,
    price: 500400.00,
    funded: 375300.00,
    listingType: 'Residential',
    propertyType: 'Single Family Home',
    image: res1,
    forcastedIncome: 8000,
    minInvestment: 1000,
    maxInvestment: 100000,
    share: 20,
    yearBuilt: 1998,
    acerage: 0.42
}