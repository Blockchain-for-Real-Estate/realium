import React from "react"
import { ApiTransactionService } from "../api/services/transaction.service"

export function Transactions(props) {
    let [transactions, setTransactions] = React.useState()

    React.useEffect(() => {
        try {
            let transactionViaApi = new ApiTransactionService()
            transactionViaApi.getFilteredTransactions(`?assetId=${props.assetId}`).then(
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
        <div className="u-margin-top-quad">
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
            {transactions ?
                Object.keys(transactions).map(key => (
                    /*This example requires Tailwind CSS v2.0+*/
                        <li key={key}>
                        <a href={'https://etherscan.io/tx/' + transactions[key].transactionId} target="_blank" rel="noreferrer" className="block hover:bg-gray-50">
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
                                    <span className="truncate">{props.listing.assetName} - {props.listing.propertyType}</span>
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
    )
}
