import React from "react";
import { useHistory } from "react-router-dom"
import NumberFormat from "react-number-format"

export function Confirmation(props) {
    let history = useHistory();
    const [showModal, setShowModal] = React.useState(false);
    const [unconfirmed, setConfirmed] = React.useState(false);

  return (
        <>
        <button
            className="bg-indigo-500 text-white active:bg-indigo-500 font-bold uppercase text-sm w-full py-2 px-7 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
            onClick={() => {
                setShowModal(true)
                setConfirmed(false)
            }}
        >
        BUY
        </button>
        {showModal ?
        /* This example requires Tailwind CSS v2.0+ */
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            {/*
            Background overlay, show/hide based on modal state.

            Entering: "ease-out duration-300"
                From: "opacity-0"
                To: "opacity-100"
            Leaving: "ease-in duration-200"
                From: "opacity-100"
                To: "opacity-0"
            */}
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            {/*
            Modal panel, show/hide based on modal state.

            Entering: "ease-out duration-300"
                From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                To: "opacity-100 translate-y-0 sm:scale-100"
            Leaving: "ease-in duration-200"
                From: "opacity-100 translate-y-0 sm:scale-100"
                To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            */}
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-2 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                <div className="mx-auto flex items-right">
                <button
                        className="ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                    >
                        <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                        </span>
                    </button>
                </div>
                <div>
                    {!unconfirmed ?
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100">
                    {/* Heroicon name: outline/hazard */}
                    <svg className="h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    </div>
                    :
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    {/*Heroicon name: outline/check*/}
                    <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    </div>
                    }
                    <div className="mt-3 text-center sm:mt-5">
                    {!unconfirmed ?
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                        Purchase confirmation
                    </h3>
                    :
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                        Payment successful
                    </h3>
                    }
                    {!unconfirmed ?
<<<<<<< HEAD
                    <div class="mt-2">
                        <p class="text-sm text-gray-500" id="modalText">
                        Are you sure you want to purchase <span className="text-sm text-indigo-600 font-bold">
                            <NumberFormat
                                value={props.shares}
                                displayType={'text'}
                                thousandSeparator={true}
                            />
                        </span> shares for <span className="text-sm text-indigo-600 font-bold">$
                        <NumberFormat
                                value={props.price}
                                displayType={'text'}
                                thousandSeparator={true}
                            />
                        </span> per share?
=======
                    <div className="mt-2">
                        <p className="text-sm text-gray-500" id="modalText">
                        Are you sure you want to purchase <span className="text-sm text-indigo-600 font-bold">{props.shares}</span> shares for <span className="text-sm text-indigo-600 font-bold">${props.price}</span> per share?
>>>>>>> Add notification banners, add them to try catches, fix mobile menu
                        </p>
                    </div>
                    :
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">
                        Purchase confirmed for <span className="text-sm text-indigo-600 font-bold">{props.shares}</span> shares at <span className="text-sm text-indigo-600 font-bold">${props.price}</span> per share.
                        </p>
                    </div>
                    }
                    </div>
                </div>
                <div className="mt-5 sm:mt-6">
                    {!unconfirmed ?
                    <button type="button" id="modalButton" className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    onClick={() => {
                        sessionStorage.getItem('token') !== null ?
                            setConfirmed(true)
                        :
                        document.getElementById("modalText").innerHTML = "Please sign in to complete purchase."
                        document.getElementById("modalButton").innerHTML = "Sign In"
                        document.getElementById("modalButton").onclick = () => { history.push("/login")}
                    }}>
                        CONFIRM PURCHASE
                    </button>
                    :
                    <button type="button" className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    onClick={() => {
                        setShowModal(false)
                        history.push("/dashboard")
                        window.location.reload();
                    }}>
                        Return to Dashboard
                    </button>
                    }
                </div>
                </div>
            </div>
        </div>
       : null}
    </>
  )
}
