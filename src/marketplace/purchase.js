import React from "react"
import { NavItems } from "../utilities/nav-items"
import { Modal } from "../utilities/modal"

export function Purchase(props) {
    return (
        <>
            <div className="u-padding-top-double u-margin-bottom-quad">
                <NavItems />
                <Modal />
            </div>
        </>
    )
}