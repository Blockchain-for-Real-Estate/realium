import React from "react"
import { titleCase } from "title-case"
import NumberFormat from "react-number-format"
import TimeAgo from "react-timeago"
import { ApiEventService } from "../api/services/event.service"

export function Transactions(props) {
    let [transactions, setTransactions] = React.useState([])
    const setNotify = props.setNotify
    const listing = props.listing

    React.useEffect(() => {
        try {
            let transactionViaApi = new ApiEventService()
            transactionViaApi.getFilteredTransactions(listing.propertyId).then(
                res => {
                    const txs = res.data;
                    setTransactions(txs);
                }
            )
        } catch {
            setTransactions(null)
            setNotify && setNotify({ msg: `There was an error property data.`,
                                                color: 'red',
                                                show: true })
        }
    }, [listing, setNotify])

    return (
        /* Transactions Table */
        <div className="mt-4 max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <div className="bg-white">
                <div className="sm:flex sm:flex-col sm:align-center mb-6">
                    <h1 className="text-4xl font-extrabold text-gray-900 text-center">Chain History</h1>
                    <p className="mt-3 text-xl text-gray-500 text-center">View recent blockchain transaction activity for {props.listing.propertyName}. Navigate to see transaction-specific details provided by AvaxScan.</p>

                </div>
                {transactions &&
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-8 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mb-4">
                                {transactions.length > 0 ?
                                    <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Event
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Quantity Listed
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                From
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                To
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Time
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Tx
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y-2 divide-gray-300 sm:divide-y sm:divide-gray-200">
                                        {transactions.map(transaction => <TransactionRow key={transaction.eventId} transaction={transaction} />)}
                                    </tbody>
                                    </table>
                                :
                                    <div className="content-center flex flex-wrap font-medium h-24 justify-center text-gray-500">
                                        No history to show
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

function TransactionRow(props) {
    return (
        <tr className="mb-10">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" data-label="Event">
                {/* TODO: add icons here */}
                {titleCase(props.transaction.eventType.toLowerCase())}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" data-label="Quantity Listed">
                <NumberFormat
                    value={props.transaction.quantity}
                    displayType={'text'}
                    thousandSeparator={true}
                /> @ <NumberFormat
                        value={props.transaction.listedPrice}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                    />
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                {/* add username? */}
                {props.transaction.eventCreator.walletAddress}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                {/* add username? */}
                {props.transaction.eventType !== 'LIST' && props.transaction.tokenOwner.walletAddress}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" data-label="Time">
                <TimeAgo date={props.transaction.eventDateTime}/>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" data-label="TX">
                {/* TODO: add link to avascan (missing id)
                    // <a href={'https://testnet.avascan.info/blockchain/x/tx/' + transactions[key].txId} target="_blank" rel="noreferrer" className="block hover:bg-gray-50">
                */}
                {props.transaction.eventType === "SALE" && <a href={`https://testnet.avascan.info/blockchain/x/tx/${props.transaction.txNFTId}`} target="_blank" rel="noreferrer">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.3335 5.00016H5.00016C4.07969 5.00016 3.3335 5.74635 3.3335 6.66683V15.0002C3.3335 15.9206 4.07969 16.6668 5.00016 16.6668H13.3335C14.254 16.6668 15.0002 15.9206 15.0002 15.0002V11.6668M11.6668 3.3335H16.6668M16.6668 3.3335V8.3335M16.6668 3.3335L8.3335 11.6668" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>}
            </td>
        </tr>
    )
}
