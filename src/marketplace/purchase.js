import React from "react"
import { NavItems } from "../utilities/nav-items"

export function Purchase(props) {
    return (
        <>
            <div className="u-padding-top-double u-margin-bottom-quad">
                <NavItems />
                <p>add purchase form here and hit POST api/transactions as well as post to the blockchain</p>
            </div>
        </>
    )
}