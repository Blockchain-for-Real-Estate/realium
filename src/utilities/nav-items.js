import React from 'react'
import { Link } from "react-router-dom"
import { Modal } from "../modals/modal"
import { useHistory } from "react-router-dom"
import logo from "../resources/images/logo.svg"

export function NavItems(props) {
    let history = useHistory();

    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        history.push("/")
        window.location.reload()
    }

    return (
        <>
            {props.mobile ?
                <>
                    <div className="px-2 pt-2 pb-3 space-y-1 ml-8">
                        <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" to="/marketplace">
                            Marketplace
                        </Link>
                        <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" to="/howitworks">
                            How It Works
                        </Link>
                    </div>
                    {localStorage.getItem('token') === null ?
                        <Link className="block px-3 py-2 ml-10 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" to="/login">
                            Sign in
                        </Link>
                        :
                        <Link className="block px-3 py-2 ml-10 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" to="/">
                            Sign out
                        </Link>
                    }
                </>
            :
            /* This example requires Tailwind CSS v2.0+ */
            <nav className="bg-white shadow">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  <div className="flex">
                    <div className="-ml-2 mr-2 flex items-center md:hidden">
                      {/* Mobile menu button */}
                      <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        {/*
                          Icon when menu is closed.
            
                          Heroicon name: outline/menu
            
                          Menu open: "hidden", Menu closed: "block"
                        */}
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        {/*
                          Icon when menu is open.
            
                          Heroicon name: outline/x
            
                          Menu open: "block", Menu closed: "hidden"
                        */}
                        <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/">
                            <img className="h-12 pt-1" src={logo} alt="Realium"/>
                        </Link>
                    </div>
                    <div className="hidden md:ml-6 md:flex md:space-x-8">
                      {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                      <Link to="/marketplace" style={{ textDecoration: 'none' }} className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                        Marketplace
                      </Link>
                      <Link to="/howitworks" style={{ textDecoration: 'none' }} className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                        How It Works
                      </Link>
                      <a href="https://docs.realium.io" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }} className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                        Docs
                      </a>
                    </div>
                  </div>
                {localStorage.getItem('token') === null ?
                <div className="flex items-center">
                    <div className="hidden md:ml-6 md:flex md:space-x-8 pr-8">
                        <Link to="/login" style={{ textDecoration: 'none' }} className="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            Sign In
                        </Link>
                    </div>
                    <div className="flex-shrink-0">
                        <Modal buttonText="Sign Up" page="create"/>
                    </div>
                </div>
                :
                <div className="flex items-center space-x-4">
                    <div className="hidden md:ml-6 md:flex md:space-x-8 pr-8">
                        <Link onClick={logout} to="/" style={{ textDecoration: 'none' }} className="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            Sign Out
                        </Link>
                    </div>
                    <div className="flex-shrink-0 text-gray-900 bg-gray-100 border-2 border-gray-300 font-bold uppercase text-sm p-2 rounded focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button">TW
                    </div>
                    <div className="flex-shrink-0 text-gray-900 bg-indigo-100 border-2 border-indigo-500 font-bold uppercase text-sm p-2 rounded focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button">128.00 AVAX
                    </div>
                </div>
                }
              </div>
            </div>
        </nav>
        }
        </>
    )
}
