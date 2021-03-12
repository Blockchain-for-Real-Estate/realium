import React from "react"
import { StaticNavBar } from "../utilities/static-nav-bar"

export function Purchase(props) {
    return (
        <>
            <div className="u-padding-top-double u-margin-bottom-quad">
                <StaticNavBar />
                <p>add purchase form here and hit POST api/transactions as well as post to the blockchain</p>
            </div>
        </>
    )
}