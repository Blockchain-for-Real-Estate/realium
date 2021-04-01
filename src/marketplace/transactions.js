import React from "react"
import { titleCase } from "title-case"
import NumberFormat from "react-number-format"
import TimeAgo from "react-timeago"
import { ApiEventService } from "../api/services/event.service"
import link from "../resources/images/external_link.png"

export function Transactions(props) {
    let [transactions, setTransactions] = React.useState()

    React.useEffect(() => {
        try {
            let transactionViaApi = new ApiEventService()
            transactionViaApi.getFilteredTransactions(props.propertyId).then(
                res => {
                    const txs = res.data;
                    setTransactions(txs);
                }
            )
        } catch {
            setTransactions(null);
        }
    }, [props.assetId])

    return (
        /* Transactions Table */
        <div className="mt-20 mb-20">
            <div className="bg-white">
                <div className="sm:flex sm:flex-col sm:align-center mb-6">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-center">Chain History</h1>
                    <p className="mt-3 text-xl text-gray-500 sm:text-center">View recent blockchain transaction activity for {props.listing.propertyName}. Navigate to see transaction-specific details provided by Avaxscan.</p>

                </div>
                {transactions ?
                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
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
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {transactions.map(transaction => <TransactionRow key={transaction.eventId} transaction={transaction} />)}
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>
                :
                    <>Hello</>
                }
            </div>
        </div>
    )
}

function TransactionRow(props) {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {/* TODO: add icons here */}
                {titleCase(props.transaction.eventType.toLowerCase())}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
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
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {/* add username? */}
                {props.transaction.eventCreator}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {/* add username? */}
                {props.transaction.eventType !== 'LIST' && props.transaction.tokenOwner}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <TimeAgo date={props.transaction.eventDateTime}/>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {/* TODO: add link to avascan
                    // <a href={'https://testnet.avascan.info/blockchain/x/tx/' + transactions[key].txId} target="_blank" rel="noreferrer" className="block hover:bg-gray-50">
                */}
                {props.transaction.eventType === "SALE" && <a><img src={link} alt="link to avaxscan"/></a>}
            </td>
        </tr>
    )
}
