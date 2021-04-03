import React from 'react'
import { Modal } from "../modals/modal"
import { ApiBalanceService } from "../api/services/balance.service"

export function BuyListOffer(props) {
    let [currentTab, setCurrentTab] = React.useState(0)
    let [balance, setBalance] = React.useState()

    React.useEffect(() => {
        let wallet = sessionStorage.getItem('avax')
        const fetchBalance = async () => {
            try {
              let balanceService = new ApiBalanceService()
                await balanceService.getBalance(wallet).then(
                    (res) => {
                        setBalance(Number(res.data.result.balance)/1000000000) //AVAX uses a demonination of 9
                    }
                )
            } catch {
                setBalance(null)
            }
        };

        fetchBalance()
    }, [])

    const [values, setValues] = React.useState({
        shares:'',
        price:''
    })
    
    const values_handler = (e) => {
        let name= e.target.name;
        let value= e.target.value;
        const newValues = {
            ...values,
            [name]: value
        } 
        setValues(newValues)
        calc_total(newValues) 
    }
    
    const [total, setTotal]= React.useState(0);
    
    const calc_total = (newValues) => {
        const { shares, price} = newValues;
        const newTotal = Number(shares) * Number(price)
        setTotal(newTotal)
    }

    return(

        <div class="bg-white">
            <div>
                <div class="relative">
                <div>
                 
                <div>
                <div>
                <nav class="rounded-t-lg flex divide-x divide-gray-200 shadow">
                <div onClick={() => setCurrentTab(0)} style={{cursor: "pointer"}} class={`${currentTab === 0 ? "bg-white text-gray-700" : "bg-gray-100"} rounded-tl-lg text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden py-3 px-4 text-base font-medium text-center hover:bg-gray-50 focus:z-10`}>
                <span>Buy</span>
                <span class={`${currentTab === 0 ? "bg-indigo-600" : "bg-transparent"} absolute inset-x-0 bottom-0 h-0.5`}></span>
                </div>

                <div onClick={() => setCurrentTab(1)} style={{cursor: "pointer"}} class={`${currentTab === 1 ? "bg-white text-gray-700" : "bg-gray-100"} text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden py-3 px-4 text-base font-medium text-center hover:bg-gray-50 focus:z-10`}>
                <span>List</span>
                <span class={`${currentTab === 1 ? "bg-indigo-600" : "bg-transparent"} absolute inset-x-0 bottom-0 h-0.5`}></span>
                </div>

                <div onClick={() => setCurrentTab(2)} style={{cursor: "pointer"}} class={`${currentTab === 2 ? "bg-white text-gray-700" : "bg-gray-100"} rounded-tr-lg text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden py-3 px-4 text-base font-medium text-center hover:bg-gray-50 focus:z-10`}>
                <span>Offer</span>
                <span class={`${currentTab === 2 ? "bg-indigo-600" : "bg-transparent"} absolute inset-x-0 bottom-0 h-0.5`}></span>
                </div>
                </nav>
                </div>
                </div>
                {/* BUY */}
                {currentTab === 0 &&
                    <div class="border-t-2 border-gray-100 rounded-b-lg pt-8 pb-1 px-6 bg-white shadow-lg sm:px-10 sm:py-10">
                        <div className="m-2">
                            <h4 className="font-semibold text-lg">Buying shares</h4>
                            <p className="text-sm">
                                Interested in the property? Purchase some of the shares of the property to become a part owner. Select your shares from the list of sellers and become an owner of real estate in minutes.
                            </p>
                        </div>
                        <div className="mt-16 mb-4 mx-4 flex">
                            <div className="flex-1 text-left">
                                Average Price
                            </div>
                            <div className="flex-1 text-right text-indigo-500">
                                $5.00/share
                            </div>
                        </div>
                        <div className="mt-4 mb-16 mx-4 flex">
                            <div className="flex-1 text-left">
                                Average Hold
                            </div>
                            <div className="flex-1 text-right text-indigo-500">
                                12 days
                            </div>
                        </div>
                        <Modal buttonText="PURCHASE SHARES" id={1} setNotify={true}/>
                        <div className="flex">
                            <p className="flex-1 text-left text-gray-400 text-xs">
                                Realium balance
                            </p>
                            <p className="flex-1 text-right text-indigo-500 text-xs">
                                {balance || 0} AVAX
                            </p>
                        </div>
                    </div>
                    }
                    {/* LIST */}
                    {currentTab === 1 &&
                    <div class="border-t-2 border-gray-100 rounded-b-lg pt-8 pb-1 px-6 bg-white shadow-lg sm:px-10 sm:py-10">
                        <div className="m-2">
                            <h4 className="font-semibold text-lg">Listing your current shares</h4>
                            <p className="text-sm">
                                List your shares on the Realium marketplace. The listing will show up when someone selects to purchase more shares. Once your shares are listed, they are locked at their current price.
                            </p>
                        </div>
                        <div className="mt-12 mb-2 mx-2">
                        <fieldset>
                            <div class="mt-1 bg-white rounded-md shadow-md -space-y-px w-full">
                            <div class="flex -space-x-px border rounded-t border-gray-900">
                                <div class="w-1/2 flex-1 min-w-0">
                                <input type="text" readonly class="rounded-tl focus:ring-white-500 focus:border-white-500 relative block w-full rounded-none bg-transparent focus:z-10 sm:text-sm border-white text-white text-shadow" placeholder="Shares"/>
                                </div>
                                <div class="flex-1 min-w-0">
                                <input name="shares" type="text" class="rounded-tr focus:ring-white-500 focus:border-white-500 text-right relative block w-full rounded-none bg-transparent focus:z-10 sm:text-sm border-l-white border-white" placeholder="100" onChange={values_handler}/>
                                </div>
                            </div>
                            <div class="flex -space-x-px border rounded-b border-gray-900">
                            <div class="w-1/2 flex-1 min-w-0">
                                <input type="text" readonly class="rounded-bl focus:ring-white-500 focus:border-white-500 relative block w-full rounded-none bg-transparent focus:z-10 sm:text-sm border-white text-white text-shadow" placeholder="Share price"/>
                                </div>
                                <div class="flex-1 min-w-0">
                                <input name="price" type="text" class="rounded-br focus:ring-white-500 focus:border-white-500 text-right relative block w-full rounded-none bg-transparent focus:z-10 sm:text-sm border-l-white border-white" placeholder="0.38" onChange={values_handler}/>
                                </div>
                            </div>
                            </div>
                        </fieldset>
                        </div>
                        <div className="mb-8 mx-2 text-right text-xs text-gray-300">
                            Total: ${total.toFixed(2)}
                        </div>
                        <div className="my-4 space-y-3 text-center sm:m-1 sm:items-center">
                            <button className="bg-indigo-500 text-white active:bg-indigo-500 text-xs w-full py-2 px-2 rounded shadow-sm hover:shadow-lg hover:bg-indigo-700 outline-none focus:outline-none ease-linear transition-all duration-150" type="button"
                                onClick={() => {
                                }}
                            >
                            Sell Shares
                            </button>
                            <button className="bg-indigo-200 text-indigo-600 active:bg-indigo-500 text-xs w-full py-2 px-2 rounded shadow-sm hover:shadow-lg hover:bg-indigo-300 outline-none focus:outline-none ease-linear transition-all duration-150" type="button"
                                onClick={() => {
                                }}
                            >
                            View Offers
                            </button>
                        </div>
                        <div className="flex">
                            <p className="flex-1 text-left text-gray-400 text-xs">
                                Realium balance
                            </p>
                            <p className="flex-1 text-right text-indigo-500 text-xs">
                                {balance || 0} AVAX
                            </p>
                        </div>
                    </div>
                    }
                    {/* OFFER */}
                    {currentTab === 2 &&
                    <div class="border-t-2 border-gray-100 rounded-b-lg pt-8 pb-1 px-6 bg-white shadow-lg sm:px-10 sm:py-10">
                        <div className="m-2">
                            <h4 className="font-semibold text-lg">Submitting an offer</h4>
                            <p className="text-sm">
                                Not seeing your desired price? Set your own price with an offer. Offers are binding unless canceled. Sellers will be able to see these prices and can decide to execute a transaction.
                            </p>
                        </div>
                        <div className="mt-12 mb-2 mx-2">
                        <fieldset>
                            <div class="mt-1 bg-white rounded-md shadow-md -space-y-px w-full">
                            <div class="flex -space-x-px border rounded-t border-gray-900">
                                <div class="w-1/2 flex-1 min-w-0">
                                <input type="text" readonly class="rounded-tl focus:ring-white-500 focus:border-white-500 relative block w-full rounded-none bg-transparent focus:z-10 sm:text-sm border-white text-white text-shadow" placeholder="Shares"/>
                                </div>
                                <div class="flex-1 min-w-0">
                                <input name="shares" type="text" class="rounded-tr focus:ring-white-500 focus:border-white-500 text-right relative block w-full rounded-none bg-transparent focus:z-10 sm:text-sm border-l-white border-white" placeholder="100" onChange={values_handler}/>
                                </div>
                            </div>
                            <div class="flex -space-x-px border rounded-b border-gray-900">
                            <div class="w-1/2 flex-1 min-w-0">
                                <input type="text" readonly class="rounded-bl focus:ring-white-500 focus:border-white-500 relative block w-full rounded-none bg-transparent focus:z-10 sm:text-sm border-white text-white text-shadow" placeholder="Share price"/>
                                </div>
                                <div class="flex-1 min-w-0">
                                <input name="price" type="text" class="rounded-br focus:ring-white-500 focus:border-white-500 text-right relative block w-full rounded-none bg-transparent focus:z-10 sm:text-sm border-l-white border-white" placeholder="0.38" onChange={values_handler}/>
                                </div>
                            </div>
                            </div>
                        </fieldset>
                        </div>
                        <div className="mb-8 mx-2 text-right text-xs text-gray-300">
                            Total: ${total.toFixed(2)}
                        </div>
                        <div className="my-4 space-y-3 text-center sm:m-1 sm:items-center">
                            <button className="bg-indigo-500 text-white active:bg-indigo-500 text-xs w-full py-2 px-2 rounded shadow-sm hover:shadow-lg hover:bg-indigo-700 outline-none focus:outline-none ease-linear transition-all duration-150" type="button"
                                onClick={() => {
                                }}
                            >
                            Sell Shares
                            </button>
                            <button className="bg-indigo-200 text-indigo-600 active:bg-indigo-500 text-xs w-full py-2 px-2 rounded shadow-sm hover:shadow-lg hover:bg-indigo-300 outline-none focus:outline-none ease-linear transition-all duration-150" type="button"
                                onClick={() => {
                                }}
                            >
                            View Offers
                            </button>
                        </div>
                        <div className="flex">
                            <p className="flex-1 text-left text-gray-400 text-xs">
                                Realium balance
                            </p>
                            <p className="flex-1 text-right text-indigo-500 text-xs">
                                {balance || 0} AVAX
                            </p>
                        </div>
                    </div>
                    }
                </div>               
                </div>
            </div>
        </div>
    )
}