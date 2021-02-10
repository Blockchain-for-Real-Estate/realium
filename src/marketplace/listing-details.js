import React from "react"
import * as bs from "react-bootstrap"
import { AppContainer } from "../utilities/app-container"
import commercialData from "./commercial"
import residentialData from "./residential"

export function ListingDetails(props) {
    return (
        <div>
            listing details here for property {props.id}
        </div>
    )
}
