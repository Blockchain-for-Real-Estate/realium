import React from "react"
import { Link, useLocation, useHistory } from "react-router-dom"
import logo from "../resources/images/logo.svg"

export function Nav(props) {
    const [menuOpen, setMenuOpen] = React.useState(false)
    let location = useLocation()
    let history = useHistory()
    let route = location.pathname.split("/")[1]

    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        history.push("/")
        window.location.reload()
    }

    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto lg:px-8">
                <div className="flex justify-between lg:h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/">
                                <img className="hidden lg:block h-8 w-auto" src={logo} alt="realium"/>
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <Link to="/marketplace" className={`${route === "marketplace" ? "border-indigo-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium text-decoration-none`}>
                                Marketplace
                            </Link>
                            <Link to="/howitworks" className={`${route === "howitworks" ? "border-indigo-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium text-decoration-none`}>
                                How It Works
                            </Link>
                            <a href="https://docs.realium.io" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium text-decoration-none">
                                Docs
                            </a>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        {localStorage.getItem('token') === null ?
                            <Link className="block px-3 py-2 ml-10 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 text-decoration-none" to="/login">
                                Sign in
                            </Link>
                            :
                            <>
                                <Link className="flex-shrink-0 text-gray-900 bg-gray-100 border-2 border-gray-300 font-bold uppercase text-sm p-2 rounded focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-decoration-none" to="/dashboard">
                                    TW
                                </Link>
                                <Link  className="flex-shrink-0 text-gray-900 bg-indigo-100 border-2 border-indigo-500 font-bold uppercase text-sm p-2 rounded focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-decoration-none" to="/dashboard">
                                    128.00 AVAX
                                </Link>
                                <Link onClick={logout} className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 text-decoration-none" to="/">
                                    Sign out
                                </Link>
                            </>
                        }
                    </div>
                </div>
                <div className=" -mr-2 flex items-center sm:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                    <img className="block lg:hidden h-8 w-auto" src={logo} alt="realium"/>
                </div>
                </div>

            <div className={`${menuOpen ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
                <div className="pt-2 pb-3 space-y-1">
                    <Link to="/marketplace" className={`${route === "marketplace" ? "bg-indigo-50 border-indigo-500 text-indigo-700" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"} block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-decoration-none`}>
                        Marketplace
                    </Link>
                    <Link to="/howitworks" className={`${route === "howitworks" ? "bg-indigo-50 border-indigo-500 text-indigo-700" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"} block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-decoration-none`}>
                        How It Works
                    </Link>
                    <a href="https://docs.realium.io" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-decoration-none">
                        Docs
                    </a>
                </div>
                <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="space-y-1">
                    {localStorage.getItem('token') === null ?
                        <Link className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-decoration-none" to="/login">
                            Sign in
                        </Link>
                        :
                        <>
                            <Link className="border-transparent text-indigo-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-decoration-none" to="/dashboard">
                                TW
                            </Link>
                            <Link  className="border-transparent text-indigo-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-decoration-none" to="/dashboard">
                                128.00 AVAX
                            </Link>
                            <Link onClick={logout} className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-decoration-none" to="/">
                                Sign out
                            </Link>
                        </>
                    }
                </div>
                </div>
            </div>
        </nav>
    )
}