import React from "react"
import * as bs from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
//import { titleCase } from "title-case"
import NumberFormat from 'react-number-format'
import { commercialData } from "./commercial"
import res1 from "../resources/images/residential-1.jpg"

import typeIcon from "../resources/images/purple_prop_type.png"
import yearIcon from "../resources/images/purple_year_built_icon.png"
import sqFtIcon from "../resources/images/purple_sq_footage_icon.png"
import priceIcon from "../resources/images/purple_price_icon.png"
import { StaticNavBar } from "../utilities/static-nav-bar"
import { ApiAssetService } from "../api/services/asset.service"
import { ApiTransactionService } from "../api/services/transaction.service"

export function ListingDetails(props) {
    let history = useHistory()
    let { listingType, id } = useParams()
    let [listing, setListing] = React.useState()
    let [transactions, setTransactions] = React.useState();
    let assetViaApi = new ApiAssetService();
    let transactionViaApi = new ApiTransactionService();

    React.useEffect(() => {
        try {
            //if (listingType === 'residential') {
                assetViaApi.getAssetById("2").then(
                    res => {
                        const asset = res.data;
                        setListing(asset);
                    }
                )
                transactionViaApi.getTransactionsByAssetId("7").then(
                    res => {
                        const txs = res.data;
                        setTransactions(txs);
                    }
                )
            //} 
        } catch {
            setListing(commercialData[id])
        }
    }, [])

    return (
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
            <div className="u-margin-top-quad">
                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                    <ul className="divide-y divide-gray-200">
                {transactions ?
                    Object.keys(transactions).map(key => (
                        /*This example requires Tailwind CSS v2.0+*/
                            <li key={key}>
                            <a href="/" className="block hover:bg-gray-50">
                                <div className="flex items-center px-4 py-4 sm:px-6">
                                <div className="min-w-0 flex-1 flex items-center">
                                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                    <div>
                                        <p className="text-lg font-medium text-indigo-600 truncate">{transactions[key].transactionId}</p>
                                        <p className="mt-2 flex items-center text-sm text-gray-500">
                                        {/*Heroicon name: solid/mail*/}
                                        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                        <span className="truncate">Asset: {transactions[key].assetId}</span>
                                        </p>
                                    </div>
                                    <div className="hidden md:block">
                                        <div>
                                        <p className="text-sm text-gray-900">
                                            Transacted on
                                            <time> {transactions[key].transactionDateTime}</time>
                                        </p>
                                        <p className="mt-2 flex items-center text-sm text-gray-500">
                                            {/*Heroicon name: solid/check-circle*/}
                                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            Transaction validated on Avalanche blockchain
                                        </p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div>
                                    {/*Heroicon name: solid/chevron-right*/}
                                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                </div>
                            </a>
                            </li>
                        ))
                        :
                        <li>
                            <div className="flex items-center px-4 py-4">
                                <div className="flex items-center text-lg font-medium text-indigo-600 truncate">
                                    No Transactions Recorded as of March 12, 2021
                                </div>
                            </div>
                        </li>
                    }
                    </ul>
                </div>
            </div>
        </>
    </>
    )
}
