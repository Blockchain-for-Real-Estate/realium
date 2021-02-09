import React from "react"
import { AppContainer } from "../utilities/app-container"
import { Residential } from "./residential"

export function Marketplace(props) {
    return (
        <AppContainer page="marketplace">
            <Residential />
        </AppContainer>
    )
}
