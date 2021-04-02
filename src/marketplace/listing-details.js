import React from "react"
import { useParams } from "react-router-dom"
import * as bs from "react-bootstrap"
import NumberFormat from "react-number-format"
import LoadingWave from "@bit/ngoue.playground.loading-wave"
import { AppContainer } from "../utilities/app-container"
import { ApiPropertyService } from '../api/services/property.service'
import { ApiTokenService } from '../api/services/token.service'
import { ApiEventService } from "../api/services/event.service"
import { Transactions } from "./transactions"
import { Modal } from "../modals/modal"

import typeIcon from "../resources/images/purple_prop_type.png"
import yearIcon from "../resources/images/purple_year_built_icon.png"
import sqFtIcon from "../resources/images/purple_sq_footage_icon.png"
import priceIcon from "../resources/images/purple_price_icon.png"
import { DetailsTable } from "./details-table"
import styled from 'styled-components'

import res1 from "../resources/images/residential-1.jpg"
import res2 from "../resources/images/residential-2.jpg"
import res3 from "../resources/images/residential-3.jpg"
import res4 from "../resources/images/residential-4.jpg"
import res5 from "../resources/images/residential-5.jpg"
import res6 from "../resources/images/residential-6.jpg"

export function ListingDetails(props) {
    let loading;
    let { propertyId } = useParams()
    let [listing, setListing] = React.useState()
    let [token, setToken] = React.useState()
    let [transactions, setTransactions] = React.useState()
    const residentialImages = [res1, res2, res3, res4, res5, res6]

    const Image = styled.img`
        border:1px solid grey;
    `

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                let assetViaApi = new ApiPropertyService()
                await assetViaApi.getAssetById(propertyId).then(
                    res => {
                        setListing(res.data[0])
                    }
                )
            } catch {
                props.setNotify && props.setNotify({ msg: `There was an error loading data for this property.`,
                                                    color: 'red',
                                                    show: true })
            }
        };

        fetchData()
    }, [propertyId])

    React.useEffect(() => {
        const fetchToken = async () => {
            try {
                let tokenViaApi = new ApiTokenService()
                    await tokenViaApi.getPropertyTokens(propertyId).then(
                        res => {
                            setToken(res.data[0])
                        }
                    )
            } catch {
                setToken(hardToken)
                props.setNotify && props.setNotify({ msg: `There was an error loading token data for this property.`,
                                                    color: 'red',
                                                    show: true })
            }
        };

        fetchToken()
    }, [propertyId, listing]);

    React.useEffect(() => {
        try {
            let transactionViaApi = new ApiEventService()
            transactionViaApi.getFilteredTransactions(propertyId).then(
                res => {
                    const txs = res.data;
                    setTransactions(txs);
                }
            )
        } catch {
            setTransactions(null)
            props.setNotify && props.setNotify({ msg: `There was an error loading transaction data for this property.`,
                                                    color: 'red',
                                                    show: true })
        }
    }, [propertyId])

    return (
        <AppContainer page="marketplace">
        {!loading ?
            <>  {listing && token && transactions &&
                <div className="mt-12 mb-12">
                    <div className="border-bottom mb-4 m-4">
                        <bs.Row className="mb-2">
                            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">{listing.propertyName || "Valley Ridge"}</h1>
                        </bs.Row>
                        <bs.Row className="mb-2">
                            <div style={{"fontSize": "1.3rem"}} className="font-weight-bold">{listing.propertyType} in {listing.city}, {listing.state}</div >
                        </bs.Row>
                        <bs.Row className="justify-content-between mb-4">
                            <div>
                                {listing.streetAddress} | {listing.city}, {listing.state} | {listing.zipCode}
                            </div>
                            <div>
                                Marketplace > {listing.listingType} Properties
                            </div>
                        </bs.Row>
                    </div>
                    <bs.Row>
                        <bs.Col md={7}>
                            <div className="text-center mb-4">
                                <Image src={residentialImages[propertyId - 1]} alt={listing.propertyType} className="object-fill h-90 w-full"/>
                            </div>
                            <bs.Row className="text-center mb-5">
                                <bs.Col>
                                    <Image src={residentialImages[propertyId - 1]} alt={listing.propertyType} className="object-fill h-30 w-full"/>
                                </bs.Col>
                                <bs.Col>
                                    <Image src={residentialImages[propertyId - 1]} alt={listing.propertyType} className="object-fill h-30 w-full"/>
                                </bs.Col>
                                <bs.Col>
                                    <Image src={residentialImages[propertyId - 1]} alt={listing.propertyType} className="object-fill h-30 w-full"/>
                                </bs.Col>
                                <bs.Col>
                                    <Image src={residentialImages[propertyId - 1]} alt={listing.propertyType} className="object-fill h-30 w-full"/>
                                </bs.Col>
                            </bs.Row>
                            <div className="font-weight-bold" style={{"fontSize": "1.1rem"}}>Description</div>
                            <div className="mb-8">
                                Property is located in {listing.city}, {listing.state} for a steal at {<NumberFormat value={token.purchasedPrice} displayType={'text'} thousandSeparator={true} prefix={'$'}/>}. {/*{listing.description}*/}
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                            </div>
                        </bs.Col>
                        <bs.Col md={1} />
                        <bs.Col md={4}>
                            <bs.ProgressBar className="mb-3" now={token.listedPrice/token.purchasedPrice*100} style={{"height": "0.1rem"}}/>
                            <div className="mb-3">
                                    <NumberFormat
                                        className="text-primary font-weight-bold"
                                        style={{"fontSize": "1.3rem"}}
                                        value={token.listedPrice}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'$'}
                                    /> / <NumberFormat
                                            value={token.purchasedPrice}
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
                                            <td>Forecasted Income: </td>
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
                                    value={Math.round(token.listedPrice / listing.seriesCount)}
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
                                                    value={token.purchasedPrice}
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
                                <Modal buttonText="PURCHASE SHARES" id={listing.avalancheAssetId} setNotify={props.setNotify}/>
                            <div style={{"fontSize": "0.9rem"}} className="text-muted">
                                *By purchasing shares of this asset,
                                you become a part owner of this property
                                and agree to Realium’s Terms of Use
                            </div>
                        </bs.Col>
                    </bs.Row>
                </div>
                }
                <div className="mb-8">
                    {listing && token && transactions &&
                        <DetailsTable listing={listing} token={token} event={transactions}/>
                    }
                    {listing &&
                        <Transactions listing={listing} setNotify={props.setNotify}/>
                    }
                </div>
            </>
        :
        <div className="content-center flex flex-wrap justify-center py-72">
            <LoadingWave primaryColor="#5C6BF6" secondaryColor="#ABABAB"/>
        </div>
        }
    </AppContainer>
    )
}

const hardToken = {
    "tokenId": 1,
    "purchasedPrice": "800000.00",
    "listedPrice": "50000.00",
    "listed": true,
    "property": 1,
    "owner": 1
}
