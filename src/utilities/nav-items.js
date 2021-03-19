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
                    <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" to="/">
                        Log in
                    </Link>
                </>
            :
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    <Link className="font-medium text-gray-500 hover:text-gray-900" to="/marketplace">
                        Marketplace
                    </Link>
                    <Link className="font-medium text-gray-500 hover:text-gray-900" to="/tokenization">
                        Tokenization
                    </Link>
                    <Link className="font-medium text-gray-500 hover:text-gray-900" to="/invest">
                        Invest
                    </Link>
                    <Link className="font-medium text-gray-500 hover:text-gray-900" to="/login">
                        Log in
                    </Link>
                </div>
            }

        </>
    )
}
