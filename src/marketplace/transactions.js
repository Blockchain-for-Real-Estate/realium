import React from "react"
import { ApiTransactionService } from "../api/services/transaction.service"

export function Transactions(props) {
    let [transactions, setTransactions] = React.useState()

    React.useEffect(() => {
        try {
            let transactionViaApi = new ApiTransactionService()
            transactionViaApi.getFilteredTransactions(props.assetId).then(
                res => {
                    const txs = res.data.transactions;
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
            <div class="sm:flex sm:flex-col sm:align-center mb-6">
            <h1 class="text-5xl font-extrabold text-gray-900 sm:text-center">Chain History</h1>
            <p class="mt-3 text-xl text-gray-500 sm:text-center">View recent blockchain transaction activity for {props.listing.assetName}. Navigate to see transaction-specific details provided by Avaxscan.</p>
            
            </div>
            {transactions ?
            <ul className="divide-y divide-gray-200 mb-0 shadow overflow-hidden sm:rounded-md">
                {Object.keys(transactions).map(key => (
                    /*This example requires Tailwind CSS v2.0+*/
                        <li key={key}>
                        <a href={'https://testnet.avascan.info/blockchain/x/tx/' + transactions[key].txId} target="_blank" rel="noreferrer" className="block hover:bg-gray-50">
                            <div className="flex items-center px-4 py-4 sm:px-6">
                            <div className="min-w-0 flex-1 flex items-center">
                                <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                <div>
                                    <p className="text-lg font-medium text-indigo-600 truncate">{transactions[key].txId}</p>
                                    <p className="mt-2 flex items-center text-sm text-gray-500">
                                    {/*Heroicon name: solid/house*/}
                                    {props.listing.listingType === "Residential" ? 
                                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                    </svg>
                                    :
                                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                                    </svg>
                                    }
                                    <span className="truncate">{props.listing.assetName} - {props.listing.propertyType}</span>
                                    </p>
                                </div>
                                <div className="hidden md:block">
                                    <div>
                                    <p className="text-sm text-gray-900">
                                        Transacted on
                                        <time> {transactions[key].txDateTime}</time>
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
                    ))}
                </ul>
                :
                <ul className="divide-y divide-gray-200 mb-0 shadow overflow-hidden sm:rounded-md">
                    <li key="no-transactions">
                            <div className="flex items-center px-4 py-4 sm:px-6">
                            <div className="min-w-0 flex-1 flex items-center">
                                <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                <div>
                                    <p className="text-lg font-medium text-indigo-600 truncate">No Posted Transactions for {props.listing.AssetName}</p>
                                    <p className="mt-2 flex items-center text-sm text-gray-500">
                                    {/*Heroicon name: solid/house*/}
                                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                                    </svg>
                                    <span className="truncate">{props.listing.assetName} - {props.listing.propertyType}</span>
                                    </p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </li>
                </ul>
                }
            </div>
        </div>
    )
}
