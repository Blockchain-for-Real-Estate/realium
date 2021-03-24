import React from 'react'
import { Link } from "react-router-dom"

export function NavItems(props) {
    return (
        <>
            {props.mobile ?
                <>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" to="/marketplace">
                            Marketplace
                        </Link>
                        <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" to="/tokenization">
                            Tokenization
                        </Link>
                        <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" to="/invest">
                            Invest
                        </Link>
                    </div>
                    {localStorage.getItem('token') === null ? 
                        <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" to="/login">
                            Sign in
                        </Link>
                        :
                        <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" to="/">
                            Sign out
                        </Link>
                    }
                </>
            :
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-6">
                    <Link className="font-medium text-gray-500 hover:text-gray-900" to="/marketplace">
                        Marketplace
                    </Link>
                    <Link className="font-medium text-gray-500 hover:text-gray-900" to="/tokenization">
                        Tokenization
                    </Link>
                    <Link className="font-medium text-gray-500 hover:text-gray-900" to="/invest">
                        Invest
                    </Link>
                    {localStorage.getItem('token') === null ? 
                    <Link className="font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 md:py-3 md:text-md md:px-4" to="/login">
                        Sign in
                    </Link>
                    :
                    <Link className="font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 md:py-3 md:text-md md:px-4" to="/" onClick={() => localStorage.removeItem('token')}>
                        Sign out
                    </Link>}
                </div>
            }
        </>
    )
}