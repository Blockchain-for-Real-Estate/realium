import React from "react"
import { AppContainer } from "../utilities/app-container"
import { Residential } from "./residential"
import { Commercial } from "./commercial"

export function Marketplace(props) {
    return (
        <AppContainer page="marketplace">
            <div className="mb-5">
                <Residential />
            </div>
            <div>
                <Commercial />
            </div>
        </AppContainer>
    )
}
