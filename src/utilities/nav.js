import React from "react"
import { Link, useLocation, useHistory } from "react-router-dom"
import logo from "../resources/images/logo.svg"
import { ApiBalanceService } from '../api/services/balance.service'
import { ApiAVAXService } from '../api/services/crypto.services'

export function Nav(props) {
    const [menuOpen, setMenuOpen] = React.useState(false)
    let location = useLocation()
    let route = location.pathname.split("/")[1]
    let history = useHistory();
    let [balance, setBalance] = React.useState()
    let [avaxPrice, setAvaxPrice] = React.useState()
    let [currency, setCurrency] = React.useState(true)

    function logout() {
        sessionStorage.clear()
        history.push("/")
        window.location.reload()
    }

    const initials = () => {
      let names = sessionStorage.getItem('user').split(' ')
      return names[0].split('')[0] + names[names.length-1].split('')[0]
    }

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

      const getCurrentAvaxPrice = async () => {
          try {
              let avaxService = new ApiAVAXService()
                await avaxService.getAvaxAmount().then(
                    (res) => {
                        setAvaxPrice(Number(res.data.AVAX.USD))
                    }
                )
          } catch{
              setAvaxPrice(null)
          }
      }

      fetchBalance()
      getCurrentAvaxPrice()
    }, [])

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
                        {sessionStorage.getItem('token') === null ?
                            <Link className="block px-3 py-2 ml-10 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 text-decoration-none" to="/login">
                                Sign in
                            </Link>
                            :
                            <>
                                <div className="flex-shrink-0 text-gray-900 bg-gray-100 border-2 border-gray-300 hover:bg-gray-200 hover:shadow-lg font-bold uppercase text-sm p-2 rounded focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => history.push("/dashboard")}>{initials() || "TW"}
                                </div>
                                {currency===false &&
                                    <div className="flex-shrink-0 inline-flex text-indigo-900 bg-indigo-100 border-2 border-indigo-500 hover:bg-indigo-200 hover:shadow-lg font-bold uppercase text-sm p-2 rounded focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setCurrency(true)}>
                                            <div className="pr-2">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 8C10.343 8 9 8.895 9 10C9 11.105 10.343 12 12 12C13.657 12 15 12.895 15 14C15 15.105 13.657 16 12 16M12 8V16M12 8C13.11 8 14.08 8.402 14.599 9L12 8ZM12 8V7M12 16V17M12 16C10.89 16 9.92 15.598 9.401 15L12 16ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#312E81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            </div>
                                            {(balance*avaxPrice).toFixed(2)} USD
                                    </div>
                                }
                                {currency===true &&
                                    <div className="flex-shrink-0 inline-flex text-indigo-900 bg-indigo-100 border-2 border-indigo-500 hover:bg-indigo-200 hover:shadow-lg font-bold uppercase text-sm p-2 rounded focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setCurrency(false)}>
                                            <svg width="20" height="20" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M153 76.5C153 118.75 118.75 153 76.5 153C34.2502 153 0 118.75 0 76.5C0 34.2502 34.2502 0 76.5 0C118.75 0 153 34.2502 153 76.5ZM72.2494 21.5512L22.6284 108.776C20.8649 111.876 23.1037 115.725 26.6701 115.725H57.7531C59.4209 115.725 60.961 114.832 61.7892 113.384L96.0274 53.5368C96.8467 52.1048 96.8458 50.3458 96.025 48.9145L80.325 21.5372C78.5347 18.4154 74.0289 18.4231 72.2494 21.5512ZM90.0853 115.95H126.325C130.017 115.95 132.327 111.956 130.486 108.756L112.443 77.3996C110.601 74.1984 105.985 74.1898 104.131 77.3843L85.9337 108.741C84.0767 111.941 86.3855 115.95 90.0853 115.95Z" fill="#4F46E5"/>
                                            </svg>
                                    <span className="pl-1.5">{balance} AVAX</span>
                                    </div>
                                }
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
                    {sessionStorage.getItem('token') === null ?
                        <Link className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-decoration-none" to="/login">
                            Sign in
                        </Link>
                        :
                        <>
                            <div className="border-transparent text-indigo-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-decoration-none"
                                type="button"
                                onClick={() => history.push("/dashboard")}>{initials() || "TW"}
                            </div>
                            {currency===false &&
                                <div className="border-transparent inline-flex text-indigo-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-decoration-none"
                                    type="button"
                                    onClick={() => setCurrency(true)}>
                                        <div className="pr-2">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 8C10.343 8 9 8.895 9 10C9 11.105 10.343 12 12 12C13.657 12 15 12.895 15 14C15 15.105 13.657 16 12 16M12 8V16M12 8C13.11 8 14.08 8.402 14.599 9L12 8ZM12 8V7M12 16V17M12 16C10.89 16 9.92 15.598 9.401 15L12 16ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#312E81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        </div>
                                        {(balance*avaxPrice).toFixed(2)} USD
                                </div>
                            }
                            {currency===true &&
                                <div className="border-transparent inline-flex text-indigo-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-decoration-none"
                                    type="button"
                                    onClick={() => setCurrency(false)}>
                                        <svg width="20" height="20" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M153 76.5C153 118.75 118.75 153 76.5 153C34.2502 153 0 118.75 0 76.5C0 34.2502 34.2502 0 76.5 0C118.75 0 153 34.2502 153 76.5ZM72.2494 21.5512L22.6284 108.776C20.8649 111.876 23.1037 115.725 26.6701 115.725H57.7531C59.4209 115.725 60.961 114.832 61.7892 113.384L96.0274 53.5368C96.8467 52.1048 96.8458 50.3458 96.025 48.9145L80.325 21.5372C78.5347 18.4154 74.0289 18.4231 72.2494 21.5512ZM90.0853 115.95H126.325C130.017 115.95 132.327 111.956 130.486 108.756L112.443 77.3996C110.601 74.1984 105.985 74.1898 104.131 77.3843L85.9337 108.741C84.0767 111.941 86.3855 115.95 90.0853 115.95Z" fill="#4F46E5"/>
                                        </svg>
                                    <span className="pl-1">{balance} AVAX</span>
                                </div>
                            }
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
