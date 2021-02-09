import React from "react"
import { Listing } from "./listing"

export function Residential(props) {
    return (
        <>
            <div className="font-weight-bold mb-2" style={{"fontSize": "1.3rem"}}>Residential Properties For Sale</div>
            <div className="text-muted mb-3">Create an investment portfolio that's diversified through real estate.</div>
            <Listing />
        </>
    )
}
