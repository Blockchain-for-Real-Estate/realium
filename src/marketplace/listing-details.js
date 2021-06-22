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
import Realium from '../abis/RealiumERC20.json'
import Web3 from "web3";

import res1 from "../resources/images/residential/residential-1.jpg"
import res1a from "../resources/images/residential/residential-1a.jpg"
import res1b from "../resources/images/residential/residential-1b.jpg"
import res1c from "../resources/images/residential/residential-1c.jpg"
import res1d from "../resources/images/residential/residential-1d.jpg"
import res2 from "../resources/images/residential/residential-2.jpg"
import res2a from "../resources/images/residential/residential-2a.jpg"
import res2b from "../resources/images/residential/residential-2b.jpg"
import res2c from "../resources/images/residential/residential-2c.jpg"
import res2d from "../resources/images/residential/residential-2d.jpg"
import res3 from "../resources/images/residential/residential-3.jpg"
import res3a from "../resources/images/residential/residential-3a.jpg"
import res3b from "../resources/images/residential/residential-3b.jpg"
import res3c from "../resources/images/residential/residential-3c.jpg"
import res3d from "../resources/images/residential/residential-3d.jpg"
import res4 from "../resources/images/residential/residential-4.jpg"
import res4a from "../resources/images/residential/residential-4a.jpg"
import res4b from "../resources/images/residential/residential-4b.jpg"
import res4c from "../resources/images/residential/residential-4c.jpg"
import res4d from "../resources/images/residential/residential-4d.jpg"
import res5 from "../resources/images/residential/residential-5.jpg"
import res5a from "../resources/images/residential/residential-5a.jpg"
import res5b from "../resources/images/residential/residential-5b.jpg"
import res5c from "../resources/images/residential/residential-5c.jpg"
import res5d from "../resources/images/residential/residential-5d.jpg"
import res6 from "../resources/images/residential/residential-6.jpg"
import res6a from "../resources/images/residential/residential-6a.jpg"
import res6b from "../resources/images/residential/residential-6b.jpg"
import res6c from "../resources/images/residential/residential-6c.jpg"
import res6d from "../resources/images/residential/residential-6d.jpg"

export function ListingDetails(props) {
    let imgPackages = {
        1: {
            img1: res1a,
            img2: res1b,
            img3: res1c,
            img4: res1d,
            main: res1
        },
        2: {
            img1: res2a,
            img2: res2b,
            img3: res2c,
            img4: res2d,
            main: res2
        },
        3: {
            img1: res3a,
            img2: res3b,
            img3: res3c,
            img4: res3d,
            main: res3
        },
        4: {
            img1: res4a,
            img2: res4b,
            img3: res4c,
            img4: res4d,
            main: res4
        },
        5: {
            img1: res5a,
            img2: res5b,
            img3: res5c,
            img4: res5d,
            main: res5
        },
        6: {
            img1: res6a,
            img2: res6b,
            img3: res6c,
            img4: res6d,
            main: res6
        }
    }

    const { propertyId } = useParams()
    const [listing, setListing] = React.useState()
    // const [token, setToken] = React.useState()
    const [transactions, setTransactions] = React.useState()
    const [smartContractAddress, setSmartContractAddress] = React.useState('')
    const [carousel, setCarousel] = React.useState(imgPackages[propertyId])
    const setNotify = props.setNotify
    const [avaxAccount, setAvaxAccount] = React.useState();
	const [balance, setBalance] = React.useState(0);
	const [contract, setContract] = React.useState();
    const [listingsForSale, setListingsForSale] = React.useState([])

    function changeImage(id) {
        let imgHolder = {...carousel}
        let idHolder = imgHolder[id]
        imgHolder[id] = carousel.main
        imgHolder.main = idHolder
        setCarousel(imgHolder)
    }

    // React.useEffect(() => {
	// 	const checkWeb3 = async () => {
	// 		await loadWeb3();
	// 		await loadBlockchainData();
	// 	}
	// 	checkWeb3();
	// }, []);

	async function loadWeb3() {
		if (window.ethereum) {
			window.web3 = new Web3(window.ethereum);
			await window.ethereum.enable();
		}
		else if (window.web3) {
			window.web3 = new Web3(window.web3.currentProvider);
		}
		else {
			window.alert('Non-Ethereum browser detected; consider using MetaMask.');
		}
	}

    const checkWeb3 = async () => {
        await loadWeb3();
        await loadBlockchainData();
    }

    const fetchData = async () => {
        try {
            let assetViaApi = new ApiPropertyService()
            await assetViaApi.getAssetById(propertyId).then(
                res => {
                    setListing(res.data[0])
                    setSmartContractAddress(res.data[0].smartContract)
                }
            )
        } catch {
            setNotify && setNotify({ msg: `There was an error loading data for this property.`,
                                    color: 'red',
                                    show: true })
        }
    };

    React.useEffect(() => {

        fetchData();
        checkWeb3()
    }, [propertyId, setNotify])

    async function loadBlockchainData() {
		const web3 = window.web3;
		//Load account
		const accounts = await web3.eth.getAccounts();
		await web3.eth.getBalance(accounts[0]).then(
			(res) => {
				setBalance(res/1000000000000000000);
			}
		)
		setAvaxAccount(accounts[0]);

		//THESE LINES WILL NEED TO CALL THE NETWORK TO GET THE ADDRESS WHERE THE CONTRACT IS DEPLOYED AND REPLACE THE HARD CODED ADDRESS
		const networkId = await web3.eth.net.getNetworkType();
		//const networkData = PropertyNotary.networks[networkId]
		if (networkId === "private") {
			const abi = Realium.abi;
            // const address = smartContractAddress;
            const address = '0xdf525FA1d9A0A74d501f386804aFEF86a2593550';
			const smartContract = new web3.eth.Contract(abi, address);
			// console.log(smartContract)
			// console.log(await smartContract.methods.totalSupply().call())
			// // console.log(await smartContract.methods.listProperty(1,1).send({from:accounts[0]}))
			window.setTimeout(setListingsForSale(await smartContract.methods.getListings().call()),100000)
			// console.log(accounts)
			// console.log(await smartContract.methods.buyPropertyToken('0x8302b71882F2Ee96Ac20Ecf83926E6c9B7A530E4').send({from:accounts[0]}))

			//https://web3js.readthedocs.io/en/v1.2.0/web3-eth-contract.html#contract-send
		} else {
			window.alert("No smart contract detected on network - transactions are disabled. Make sure your MetaMask network is on Avalanche FUJI.");
		}
    }

    //TODO: Figure out how to show transactions


    return (
        <>
        {/* {listing && token && transactions && carousel ? */}
        {listing && carousel?
        <>
            <AppContainer>
                <>
                    {console.log(listingsForSale)}
                    <div className="mt-12 mb-12">
                        <div className="border-bottom mb-4 m-4">
                            <bs.Row className="mb-2">
                                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-center">{listing.propertyName || "Valley Ridge"}</h1>
                            </bs.Row>
                            <bs.Row className="mb-2 text-base sm:text-xl">
                                <div className="font-weight-bold">{listing.propertyType} in {listing.city}, {listing.state}</div >
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
                                    {Object.keys(carousel).map(key =>
                                        key !== 'main' &&  <bs.Col key={key}>
                                                                <img src={carousel[key]} alt={listing.propertyType} className="object-fill h-30 w-full" onClick={() => changeImage(key)} style={{ cursor: "pointer"}}/>
                                                            </bs.Col>
                                    )}
                                </bs.Row>
                                <div className="font-weight-bold" style={{"fontSize": "1.1rem"}}>Description</div>
                                <div className="mb-8">
                                    {/* {listing.propertyName} is located in {listing.city}, {listing.state} for a steal at {<NumberFormat value={token.purchasedPrice} displayType={'text'} thousandSeparator={true} />} */}
                                    {listing.propertyName} is located in {listing.city}, {listing.state} for a steal at {<NumberFormat value={20} displayType={'text'} thousandSeparator={true} />}
                                    <div className="h-4 inline-flex px-1">
                                    <svg width="15" height="15" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M153 76.5C153 118.75 118.75 153 76.5 153C34.2502 153 0 118.75 0 76.5C0 34.2502 34.2502 0 76.5 0C118.75 0 153 34.2502 153 76.5ZM72.2494 21.5512L22.6284 108.776C20.8649 111.876 23.1037 115.725 26.6701 115.725H57.7531C59.4209 115.725 60.961 114.832 61.7892 113.384L96.0274 53.5368C96.8467 52.1048 96.8458 50.3458 96.025 48.9145L80.325 21.5372C78.5347 18.4154 74.0289 18.4231 72.2494 21.5512ZM90.0853 115.95H126.325C130.017 115.95 132.327 111.956 130.486 108.756L112.443 77.3996C110.601 74.1984 105.985 74.1898 104.131 77.3843L85.9337 108.741C84.0767 111.941 86.3855 115.95 90.0853 115.95Z" fill="#374151"/>
                                    </svg>
                                    </div>. {listing.details.description}
                                    </div>
                            </bs.Col>
                            <bs.Col md={1} />
                            <bs.Col md={4}>
                                <BuyListOffer setNotify={props.setNotify} smartContract={listing.smartContract} propertyId={listing.propertyId} listings={listingsForSale}/>
                                <div style={{"fontSize": "0.9rem"}} className="text-muted m-2 pt-8">
                                    *By purchasing shares of this asset,
                                    you become a part owner of this property
                                    and agree to Realium’s Terms of Use.
                                </div>
                            </bs.Col>
                        </bs.Row>
                    </div>
                </>
        </AppContainer>
        {/* <DetailsTable listing={listing} token={token} event={transactions}/> */}
        {/* <Transactions listing={listing} setNotify={props.setNotify}/> */}
    </>
    :
        <div className="content-center flex flex-wrap justify-center py-72">
            <LoadingWave primaryColor="#5C6BF6" secondaryColor="#ABABAB"/>
        </div>
    }
    </>
    )
}

// const hardToken = {
//     "tokenId": 1,
//     "purchasedPrice": "800000.00",
//     "listedPrice": "50000.00",
//     "listed": true,
//     "property": 1,
//     "owner": 1
// }
