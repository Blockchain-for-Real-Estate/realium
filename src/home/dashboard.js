import React from "react"
import TimeAgo from 'react-timeago'
import "../modals/modal.css"
import NumberFormat from "react-number-format"
import LoadingWave from "@bit/ngoue.playground.loading-wave"
import { ApiTokenService } from "../api/services/token.service"
import { ApiEventService } from "../api/services/event.service"
import { SearchForm } from "../marketplace/search-form"

import res1 from "../resources/images/residential/residential-1.jpg"
import res2 from "../resources/images/residential/residential-2.jpg"
import res3 from "../resources/images/residential/residential-3.jpg"
import res4 from "../resources/images/residential/residential-4.jpg"
import res5 from "../resources/images/residential/residential-5.jpg"
import res6 from "../resources/images/residential/residential-6.jpg"
import { FaucetPopOut } from "../utilities/faucet-pop-out"

export function Dashboard(props) {
    let id = sessionStorage.getItem('id')
    let walletAdress = sessionStorage.getItem('avax')
    const [tokens, setTokens] = React.useState()
    const [events, setEvents] = React.useState()
    const [reloadAll, setReload] = React.useState(0)

    const residentialImages = [
        res1, res2, res3, res4, res5, res6
    ]

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                let tokenService = new ApiTokenService()
                await tokenService.getUserTokens(id.toString()).then(
                    res => {
                        setTokens(res.data)
                    }
                )
            } catch {
                setTokens(null)
            }
        };

        fetchData()
    }, [id, reloadAll])

    React.useEffect(() => {
        const fetchEvents = async () => {
            try {
                let eventService = new ApiEventService()
                await eventService.getEventsByUserId(id.toString()).then(
                    res => {
                        setEvents(res.data)
                    }
                )
            } catch {
                setEvents(null)
            }
        };

        fetchEvents()
    }, [id])

    return (
        <>{tokens && events ?
            <div className="py-12 bg-gray-50 overflow-hidden sm:pb-12 lg:py-18">
            <div className="max-w-xl mx-auto px-8 sm:px-6 lg:px-8 lg:max-w-7xl">
                <svg className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1" width="404" height="684" fill="none" viewBox="0 0 404 784" aria-hidden="true">
                <defs>
                    <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                    </pattern>
                </defs>
                <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
                </svg>
                    <div className="max-w-7xl mx-auto sm:pb-1.5 sm:py-4">
                        <div className="text-left">
                            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                                Dashboard
                            </p>
                        </div>
                    </div>
                <div className="sm:flex sm:space-x-4 sm:space-y-0 space-y-4 pb-10">
                    <h4 className="inline-block mb-0 align-baseline text-lg font-extrabold text-indigo-700 tracking-tight sm:text-xl">
                    While Realium is in beta, access the Avalanche test faucet for funds.
                    </h4>
                    <div className="text-left">
                        <FaucetPopOut wallet={walletAdress}/>
                    </div>
                </div>
                <div className="relative mt-2 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-top">
                <div className="relative">
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                    Your Portfolio
                    </h3>
                    <p className="mt-3 text-md text-gray-500">
                    View your purchased Realium assets. Manage your shares and sell the assets you no longer wish to hold.
                    </p>
                    <div>
                        <SearchForm resultsSetter={setTokens} setNotify={props.setNotify} searchService={"tokenService"} reset={setReload} reloadAll={reloadAll}/>
                    </div>
                    <dl className="mt-10 space-y-10">
                        <div className="grid grid-cols-1 gap-6">
                        {Object.keys(tokens).map((key) => (
                        <div key={key} className="relative rounded-lg border border-gray-300 bg-white shadow-md flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <div className="grid grid-cols-1 sm:flex sm:flex-cols items-center">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-fill rounded-t-md sm:w-48 sm:h-full sm:object-fill sm:rounded-l-sm sm:rounded-tr-none" src={residentialImages[tokens[key].property.propertyId-1]} alt=""/>
                            </div>
                            <div className="flex-1 min-w-0 space-x-2 pt-2 pb-2 pl-2">
                                <div className="grid grid-cols-1 sm:grid-cols-3 sm:align-middle sm:items-center">
                                    <div className="font-semibold grid grid-cols-2 mr-8 sm:mr-1 text-center sm:text-left sm:grid-cols-1 sm:m-2">
                                        Address
                                        <p className="text-xs text-gray-500 pt-1 text-center sm:text-left mb-0">
                                            {tokens[key].property.streetAddress}
                                            <br/>
                                            {tokens[key].property.city}, {tokens[key].property.state}
                                        </p>
                                    </div>
                                    <div className="font-semibold grid grid-cols-2 mr-8 sm:mr-1 text-center sm:text-left sm:grid-cols-1 sm:m-2">
                                        Shares
                                        <p className="text-xs text-gray-500 pt-1 text-center sm:text-left mb-0">
                                            <NumberFormat
                                                value={tokens[key].property.seriesCount}
                                                displayType={'text'}
                                                thousandSeparator={true}
                                                suffix={' total shares'}
                                                /> @
                                            <NumberFormat
                                                value={tokens[key].property.listedPrice}
                                                displayType={'text'}
                                                thousandSeparator={true}
                                                prefix={' '}
                                                suffix={'% est. appreciation'}
                                                />
                                        </p>
                                    </div>
                                    <div className="space-y-2 text-center sm:m-1 sm:items-center">
                                        <button className="bg-indigo-500 text-white active:bg-indigo-500 text-xs w-4/5 py-2 px-2 rounded shadow-sm hover:shadow-lg hover:bg-indigo-700 outline-none focus:outline-none ease-linear transition-all duration-150" type="button"
                                            onClick={() => {
                                            }}
                                        >
                                        Sell Shares
                                        </button>
                                        <button className="bg-indigo-200 text-indigo-600 active:bg-indigo-500 text-xs w-4/5 py-2 px-2 rounded shadow-sm hover:shadow-lg hover:bg-indigo-300 outline-none focus:outline-none ease-linear transition-all duration-150" type="button"
                                            onClick={() => {
                                            }}
                                        >
                                        View Offers
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        ))}
                        </div>
                    </dl>
                </div>
                <div className="mt-16 sm:mt-8 -mx-4 relative lg:mt-0" aria-hidden="true">
                <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-1 lg:gap-8 lg:items-top">
                    <div className="mx-3 lg:col-start-2">
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                        Recent Transactions
                    </h3>
                    <p className="mt-3 text-md text-gray-500">
                        View your activity across the Realium platform.</p>
                    <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="sm:shadow-md overflow-hidden sm:rounded-lg">
                            <table className="border-2 border-gray-100 m-0 p-0 min-w-full">
                            <thead className="bg-gray-100 border-1 border-gray-700 divide-y p-3 uppercase text-md">
                                <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Time
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Event
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Quantity
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Asset
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Tx
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(events).map((key) => (
                                <tr key={key} className="bg-white m-4 border-b border-gray-200 shadow-md rounded-md">
                                <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-900" data-label="Time">
                                    <TimeAgo date={events[key].eventDateTime} locale="en-US"/>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500" data-label="Event">
                                    {events[key].eventType}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap flex items-center text-xs text-gray-500" data-label="Quantity">
                                    <NumberFormat
                                        value={events[key].quantity}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                    />
                                    <div className="px-1">@</div>
                                    <NumberFormat
                                            value={events[key].listedPrice}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                    />
                                    <div className="h-4 inline-flex px-1">
                                        <svg width="15" height="15" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M153 76.5C153 118.75 118.75 153 76.5 153C34.2502 153 0 118.75 0 76.5C0 34.2502 34.2502 0 76.5 0C118.75 0 153 34.2502 153 76.5ZM72.2494 21.5512L22.6284 108.776C20.8649 111.876 23.1037 115.725 26.6701 115.725H57.7531C59.4209 115.725 60.961 114.832 61.7892 113.384L96.0274 53.5368C96.8467 52.1048 96.8458 50.3458 96.025 48.9145L80.325 21.5372C78.5347 18.4154 74.0289 18.4231 72.2494 21.5512ZM90.0853 115.95H126.325C130.017 115.95 132.327 111.956 130.486 108.756L112.443 77.3996C110.601 74.1984 105.985 74.1898 104.131 77.3843L85.9337 108.741C84.0767 111.941 86.3855 115.95 90.0853 115.95Z" fill="#374151"/>
                                        </svg>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500" data-label="Asset">
                                    {events[key].property.streetAddress}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs font-medium justify-end" data-label="Tx">
                                    <div className="object-right">
                                    <a href="/" className="text-indigo-600 hover:text-indigo-900">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.3335 5.00016H5.00016C4.07969 5.00016 3.3335 5.74635 3.3335 6.66683V15.0002C3.3335 15.9206 4.07969 16.6668 5.00016 16.6668H13.3335C14.254 16.6668 15.0002 15.9206 15.0002 15.0002V11.6668M11.6668 3.3335H16.6668M16.6668 3.3335V8.3335M16.6668 3.3335L8.3335 11.6668" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    </a>
                                    </div>
                                </td>
                                </tr>
                                ))}
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {tokens.length === 0 && events.length === 0 ?
            <div className="py-16 mx-3">
                <h3 className="text-center text-xl font-extrabold text-gray-500 tracking-tight sm:text-2xl">
                Nothing to show here yet...
                </h3>
                <p className="text-center text-sm text-gray-400">
                    Request some funds and start transacting for activity to show up here.
                </p>
            </div>
            : null
            }
            </div>
        
        :
        <div className="content-center flex flex-wrap justify-center py-72">
            <LoadingWave primaryColor="#5C6BF6" secondaryColor="#ABABAB"/>
        </div>
    }
    </>
    )
}
