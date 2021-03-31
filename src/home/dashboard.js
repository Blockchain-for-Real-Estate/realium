import React from "react"

export function Dashboard(props) {
    return (
        <>
            <div className="py-16 bg-gray-50 overflow-hidden lg:py-18">
            <div className="max-w-xl mx-auto px-8 sm:px-6 lg:px-8 lg:max-w-7xl">
                <svg className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1" width="404" height="684" fill="none" viewBox="0 0 404 784" aria-hidden="true">
                <defs>
                    <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                    </pattern>
                </defs>
                <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
                </svg>

                <div className="relative mt-2 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                <div className="relative">
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                    Your Portfolio
                    </h3>
                    <p className="mt-3 text-md text-gray-500">
                    View your purchased Realium assets. Manage your shares and sell the assets you no longer wish to hold.
                    </p>
                    {/*
                    This example requires Tailwind CSS v2.0+ 
                    
                    This example requires some changes to your config:
                    
                    ```
                    // tailwind.config.js
                    module.exports = {
                        // ...
                        plugins: [
                        // ...
                        require('@tailwindcss/forms'),
                        ]
                    }
                    ```
                */}
                    <div>
                    <div className="mt-1">
                        <input type="text" name="email" id="email" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md" placeholder="Search by name, city, or state" />
                    </div>
                    </div>
                    <dl className="mt-10 space-y-10">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1">
                        <div className="relative rounded-lg border border-gray-300 bg-white shadow-md flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                                <img className="w-48 h-full object-fill" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=9RaZNtwCUv&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt=""/>
                            </div>
                            <div className="flex-1 min-w-0 px-4 pt-3 pb-2">
                                <div className="grid grid-cols-3 gap-1">
                                    <div className="font-semibold">
                                        Address
                                        <p className="text-xs text-gray-500 pt-1">
                                            445 W 400 N 
                                            Provo, UT 84601
                                        </p>
                                    </div>
                                    <div className="font-semibold">
                                        Shares
                                        <p className="text-xs text-gray-500 pt-1">
                                            10,000 shares
                                            1,000 for sale
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <button className="bg-indigo-500 text-white active:bg-indigo-500 text-xs w-4/5 py-2 px-2 rounded shadow-sm hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                                            onClick={() => {
                                            }}
                                        >
                                        Sell Shares
                                        </button>
                                        <button className="bg-indigo-200 text-indigo-600 active:bg-indigo-500 text-xs w-4/5 py-2 px-2 rounded shadow-sm hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                                            onClick={() => {
                                            }}
                                        >
                                        View Offers
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative rounded-lg border border-gray-300 bg-white shadow-md flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                                <img className="w-48 h-full object-fill" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=9RaZNtwCUv&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt=""/>
                            </div>
                            <div className="flex-1 min-w-0 px-4 pt-3 pb-2">
                                <div className="grid grid-cols-3 gap-1">
                                    <div className="font-semibold">
                                        Address
                                        <p className="text-xs text-gray-500 pt-1">
                                            445 W 400 N 
                                            Provo, UT 84601
                                        </p>
                                    </div>
                                    <div className="font-semibold">
                                        Shares
                                        <p className="text-xs text-gray-500 pt-1">
                                            10,000 shares
                                            1,000 for sale
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <button className="bg-indigo-500 text-white active:bg-indigo-500 text-xs w-4/5 py-2 px-2 rounded shadow-sm hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                                            onClick={() => {
                                            }}
                                        >
                                        Sell Shares
                                        </button>
                                        <button className="bg-indigo-200 text-indigo-600 active:bg-indigo-500 text-xs w-4/5 py-2 px-2 rounded shadow-sm hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                                            onClick={() => {
                                            }}
                                        >
                                        View Offers
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative rounded-lg border border-gray-300 bg-white shadow-md flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <div className="flex-shrink-0">
                                <img className="w-48 h-full object-fill" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=9RaZNtwCUv&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt=""/>
                            </div>
                            <div className="flex-1 min-w-0 px-4 pt-3 pb-2">
                                <div className="grid grid-cols-3 gap-1">
                                    <div className="font-semibold">
                                        Address
                                        <p className="text-xs text-gray-500 pt-1">
                                            445 W 400 N 
                                            Provo, UT 84601
                                        </p>
                                    </div>
                                    <div className="font-semibold">
                                        Shares
                                        <p className="text-xs text-gray-500 pt-1">
                                            10,000 shares
                                            1,000 for sale
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <button className="bg-indigo-500 text-white active:bg-indigo-500 text-xs w-4/5 py-2 px-2 rounded shadow-sm hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                                            onClick={() => {
                                            }}
                                        >
                                        Sell Shares
                                        </button>
                                        <button className="bg-indigo-200 text-indigo-600 active:bg-indigo-500 text-xs w-4/5 py-2 px-2 rounded shadow-sm hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
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
                    </dl>
                </div>

                <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-1 lg:gap-8 lg:items-center">
                    <div className="lg:col-start-2">
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                        Recent Transactions
                    </h3>
                    <p className="mt-3 text-md text-gray-500">
                        View your activity across the Realium platform.</p>
                    <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mb-4">
                            <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Time
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Event
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Asset
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Tx
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white">
                                <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-900">
                                    1 hour ago
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                                    List ssss
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                                    30,000 @ $8.80
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                                    4738 E Woodbridge Way
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs font-medium">
                                    <a href="/" className="text-indigo-600 hover:text-indigo-900">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.3335 5.00016H5.00016C4.07969 5.00016 3.3335 5.74635 3.3335 6.66683V15.0002C3.3335 15.9206 4.07969 16.6668 5.00016 16.6668H13.3335C14.254 16.6668 15.0002 15.9206 15.0002 15.0002V11.6668M11.6668 3.3335H16.6668M16.6668 3.3335V8.3335M16.6668 3.3335L8.3335 11.6668" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    </a>
                                </td>
                                </tr>
                                <tr className="bg-white">
                                <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-900">
                                    1 hour ago
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                                    List ssss
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                                    30,000 @ $8.80
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                                    4738 E Woodbridge Way
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-xs font-medium">
                                    <a href="/" className="text-indigo-600 hover:text-indigo-900">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.3335 5.00016H5.00016C4.07969 5.00016 3.3335 5.74635 3.3335 6.66683V15.0002C3.3335 15.9206 4.07969 16.6668 5.00016 16.6668H13.3335C14.254 16.6668 15.0002 15.9206 15.0002 15.0002V11.6668M11.6668 3.3335H16.6668M16.6668 3.3335V8.3335M16.6668 3.3335L8.3335 11.6668" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    </a>
                                </td>
                                </tr>
                                <tr className="bg-white">
                                <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-900">
                                    1 hour ago
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                                    List ssss
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                                    30,000 @ $8.80
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                                    4738 E Woodbridge Way
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-xs font-medium">
                                    <a href="/" className="text-indigo-600 hover:text-indigo-900">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.3335 5.00016H5.00016C4.07969 5.00016 3.3335 5.74635 3.3335 6.66683V15.0002C3.3335 15.9206 4.07969 16.6668 5.00016 16.6668H13.3335C14.254 16.6668 15.0002 15.9206 15.0002 15.0002V11.6668M11.6668 3.3335H16.6668M16.6668 3.3335V8.3335M16.6668 3.3335L8.3335 11.6668" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    </a>
                                </td>
                                </tr>
                                <tr className="bg-white">
                                <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-900">
                                    1 hour ago
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                                    List ssss
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                                    30,000 @ $8.80
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                                    4738 E Woodbridge Way
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs font-medium">
                                    <a href="/" className="text-indigo-600 hover:text-indigo-900">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.3335 5.00016H5.00016C4.07969 5.00016 3.3335 5.74635 3.3335 6.66683V15.0002C3.3335 15.9206 4.07969 16.6668 5.00016 16.6668H13.3335C14.254 16.6668 15.0002 15.9206 15.0002 15.0002V11.6668M11.6668 3.3335H16.6668M16.6668 3.3335V8.3335M16.6668 3.3335L8.3335 11.6668" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    </a>
                                </td>
                                </tr>
                                <tr className="bg-white">
                                <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-900">
                                    1 hour ago
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                                    List ssss
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                                    30,000 @ $8.80
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                                    4738 E Woodbridge Way
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-xs font-medium">
                                    <a href="/" className="text-indigo-600 hover:text-indigo-900">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.3335 5.00016H5.00016C4.07969 5.00016 3.3335 5.74635 3.3335 6.66683V15.0002C3.3335 15.9206 4.07969 16.6668 5.00016 16.6668H13.3335C14.254 16.6668 15.0002 15.9206 15.0002 15.0002V11.6668M11.6668 3.3335H16.6668M16.6668 3.3335V8.3335M16.6668 3.3335L8.3335 11.6668" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    </a>
                                </td>
                                </tr>
                                <tr className="bg-white">
                                <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-900">
                                    1 hour ago
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                                    List ssss
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                                    30,000 @ $8.80
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                                    4738 E Woodbridge Way
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-xs font-medium">
                                    <a href="/" className="text-indigo-600 hover:text-indigo-900">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.3335 5.00016H5.00016C4.07969 5.00016 3.3335 5.74635 3.3335 6.66683V15.0002C3.3335 15.9206 4.07969 16.6668 5.00016 16.6668H13.3335C14.254 16.6668 15.0002 15.9206 15.0002 15.0002V11.6668M11.6668 3.3335H16.6668M16.6668 3.3335V8.3335M16.6668 3.3335L8.3335 11.6668" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    </a>
                                </td>
                                </tr>
                                <tr className="bg-white">
                                <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-900">
                                    1 hour ago
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                                    List ssss
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                                    30,000 @ $8.80
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                                    4738 E Woodbridge Way
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-xs font-medium">
                                    <a href="/" className="text-indigo-600 hover:text-indigo-900">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.3335 5.00016H5.00016C4.07969 5.00016 3.3335 5.74635 3.3335 6.66683V15.0002C3.3335 15.9206 4.07969 16.6668 5.00016 16.6668H13.3335C14.254 16.6668 15.0002 15.9206 15.0002 15.0002V11.6668M11.6668 3.3335H16.6668M16.6668 3.3335V8.3335M16.6668 3.3335L8.3335 11.6668" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    </a>
                                </td>
                                </tr>
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
            </div> 
        </>
    )
}
