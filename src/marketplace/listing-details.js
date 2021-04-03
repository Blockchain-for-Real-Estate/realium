import React from "react"
import { useParams } from "react-router-dom"
import * as bs from "react-bootstrap"
import NumberFormat from "react-number-format"
import LoadingWave from "@bit/ngoue.playground.loading-wave"
import { Breadcrumbs } from "../utilities/breadcrumbs"
import { AppContainer } from "../utilities/app-container"
import { ApiPropertyService } from '../api/services/property.service'
import { ApiTokenService } from '../api/services/token.service'
import { ApiEventService } from "../api/services/event.service"
import { Transactions } from "./transactions"
import { BuyListOffer } from "./buy-list-offer"
import { DetailsTable } from "./details-table"

import res1 from "../resources/images/residential-1.jpg"
import res2 from "../resources/images/residential-2.jpg"
import res3 from "../resources/images/residential-3.jpg"
import res4 from "../resources/images/residential-4.jpg"
import res5 from "../resources/images/residential-5.jpg"
//import res6 from "../resources/images/residential-6.jpg"

export function ListingDetails(props) {
    let loading
    let imgs = {
        img1: res1,
        img2: res2,
        img3: res3,
        img4: res4,
        main: res5
    }

    const { propertyId } = useParams()
    const [carousel, setCarousel] = React.useState(imgs)
    const [listing, setListing] = React.useState()
    const [token, setToken] = React.useState()
    const [transactions, setTransactions] = React.useState()
    const setNotify = props.setNotify

    function changeImage(id) {
        let imgHolder = imgs[id]
        imgs[id] = imgs.main
        imgs.main = imgHolder
        setCarousel(imgs)
    }

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
                setNotify && setNotify({ msg: `There was an error loading data for this property.`,
                                        color: 'red',
                                        show: true })
            }
        };

        fetchData()
    }, [propertyId, setNotify])

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
                setNotify && setNotify({ msg: `There was an error loading token data for this property.`,
                                        color: 'red',
                                        show: true })
            }
        };

        fetchToken()
    }, [propertyId, listing, setNotify])

    React.useEffect(() => {
        try {
            let transactionViaApi = new ApiEventService()
            transactionViaApi.getFilteredTransactions(propertyId).then(
                res => {
                    const txs = res.data
                    setTransactions(txs)
                }
            )
        } catch {
            setTransactions(null)
            setNotify && setNotify({ msg: `There was an error loading transaction data for this property.`,
                                    color: 'red',
                                    show: true })
        }
    }, [propertyId, setNotify])

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
                            <div className="text-xs sm:text-base">
                                {listing.streetAddress} | {listing.city}, {listing.state} | {listing.zipCode}
                            </div>
                            <Breadcrumbs listing={listing} />
                        </bs.Row>
                    </div>
                    <bs.Row>
                        <bs.Col md={7}>
                            <div className="text-center mb-4">
                                <img src={carousel.main} alt={listing.propertyType} className="object-fill h-90 w-full"/>
                            </div>
                            <bs.Row className="text-center mb-5">
                                <bs.Col>
                                    <img src={carousel.img1} alt={listing.propertyType} className="object-fill h-30 w-full" onClick={() => changeImage('img1')} style={{ cursor: "pointer"}}/>
                                </bs.Col>
                                <bs.Col>
                                    <img src={carousel.img2} alt={listing.propertyType} className="object-fill h-30 w-full" onClick={() => changeImage('img2')} style={{ cursor: "pointer"}}/>
                                </bs.Col>
                                <bs.Col>
                                    <img src={carousel.img3} alt={listing.propertyType} className="object-fill h-30 w-full" onClick={() => changeImage('img3')} style={{ cursor: "pointer"}}/>
                                </bs.Col>
                                <bs.Col>
                                    <img src={carousel.img4} alt={listing.propertyType} className="object-fill h-30 w-full" onClick={() => changeImage('img4')} style={{ cursor: "pointer"}}/>
                                </bs.Col>
                            </bs.Row>
                            <div className="font-weight-bold" style={{"fontSize": "1.1rem"}}>Description</div>
                            <div className="mb-8">
                                Property is located in {listing.city}, {listing.state} for a steal at {<NumberFormat value={token.purchasedPrice} displayType={'text'} thousandSeparator={true} />}
                                <div className="h-4 inline-flex px-1">
                                <svg width="15" height="15" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M153 76.5C153 118.75 118.75 153 76.5 153C34.2502 153 0 118.75 0 76.5C0 34.2502 34.2502 0 76.5 0C118.75 0 153 34.2502 153 76.5ZM72.2494 21.5512L22.6284 108.776C20.8649 111.876 23.1037 115.725 26.6701 115.725H57.7531C59.4209 115.725 60.961 114.832 61.7892 113.384L96.0274 53.5368C96.8467 52.1048 96.8458 50.3458 96.025 48.9145L80.325 21.5372C78.5347 18.4154 74.0289 18.4231 72.2494 21.5512ZM90.0853 115.95H126.325C130.017 115.95 132.327 111.956 130.486 108.756L112.443 77.3996C110.601 74.1984 105.985 74.1898 104.131 77.3843L85.9337 108.741C84.0767 111.941 86.3855 115.95 90.0853 115.95Z" fill="#374151"/>
                                </svg>
                                </div>. {/*{listing.description}*/}
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                            </div>
                        </bs.Col>
                        <bs.Col md={1} />
                        <bs.Col md={4}>
                            <BuyListOffer />
                            <div style={{"fontSize": "0.9rem"}} className="text-muted m-2 pt-8">
                                *By purchasing shares of this asset,
                                you become a part owner of this property
                                and agree to Realium’s Terms of Use.
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
