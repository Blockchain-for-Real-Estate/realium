import React from "react";
import { CreateAccountForm } from "../login/create";
import { Purchase } from "./purchase"

export function Modal(props) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      {props.page === "create" ?
        <button
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-300 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        type="button"
        onClick={() => setShowModal(true)}
      >
      {props.buttonText}
      </button>
      :
      <button
        className="bg-indigo-600 text-white active:bg-indigo-500 font-bold uppercase text-sm w-full py-3 mb-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
       {props.buttonText}
      </button>
      }
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-8xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                {props.page === "create" ?
                <></>:
                <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {props.buttonText}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
              }
                {/*body*/}
                {props.page === "create" ?
                <div className="relative p-6 flex-auto">
                  {/* PLACE LOGIN FORM HERE */}
                  <CreateAccountForm id={props.id}/>
              </div>
                :
                <div className="relative p-6 flex-auto">
                  <Purchase id={props.id}/>
                </div>
                }
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}