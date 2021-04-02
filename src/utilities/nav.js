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
                                    <div className="flex-shrink-0 text-indigo-900 bg-indigo-100 border-2 border-indigo-500 hover:bg-indigo-200 hover:shadow-lg font-bold uppercase text-sm p-2 rounded focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setCurrency(true)}>${(balance*avaxPrice).toFixed(2)} USD
                                    </div>
                                }
                                {currency===true &&
                                    <div className="flex-shrink-0 inline-flex text-indigo-900 bg-indigo-100 border-2 border-indigo-500 hover:bg-indigo-200 hover:shadow-lg font-bold uppercase text-sm p-2 rounded focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setCurrency(false)}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.99988 6C1.99988 5.46957 2.21059 4.96086 2.58566 4.58579C2.96074 4.21071 3.46944 4 3.99988 4H19.9999C20.5303 4 21.039 4.21071 21.4141 4.58579C21.7892 4.96086 21.9999 5.46957 21.9999 6V18C21.9999 18.5304 21.7892 19.0391 21.4141 19.4142C21.039 19.7893 20.5303 20 19.9999 20H3.99988C3.46944 20 2.96074 19.7893 2.58566 19.4142C2.21059 19.0391 1.99988 18.5304 1.99988 18V6Z" stroke="#312E81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M1.99988 8H21.9999" stroke="#312E81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M1.99988 12H8.99988C8.99988 13 9.59988 15 11.9999 15C14.3999 15 14.9999 13 14.9999 12H21.9999" stroke="#312E81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                                <div className="border-transparent text-indigo-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-decoration-none"
                                    type="button"
                                    onClick={() => setCurrency(true)}>${(balance*avaxPrice).toFixed(2)} USD
                                </div>
                            }
                            {currency===true &&
                                <div className="border-transparent inline-flex text-indigo-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-decoration-none"
                                    type="button"
                                    onClick={() => setCurrency(false)}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.99988 6C1.99988 5.46957 2.21059 4.96086 2.58566 4.58579C2.96074 4.21071 3.46944 4 3.99988 4H19.9999C20.5303 4 21.039 4.21071 21.4141 4.58579C21.7892 4.96086 21.9999 5.46957 21.9999 6V18C21.9999 18.5304 21.7892 19.0391 21.4141 19.4142C21.039 19.7893 20.5303 20 19.9999 20H3.99988C3.46944 20 2.96074 19.7893 2.58566 19.4142C2.21059 19.0391 1.99988 18.5304 1.99988 18V6Z" stroke="#312E81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M1.99988 8H21.9999" stroke="#312E81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M1.99988 12H8.99988C8.99988 13 9.59988 15 11.9999 15C14.3999 15 14.9999 13 14.9999 12H21.9999" stroke="#312E81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
