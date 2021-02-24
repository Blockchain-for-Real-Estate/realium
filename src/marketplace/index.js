import React from "react"
import { AppContainer } from "../utilities/app-container"
import { Residential } from "./residential"
import { Commercial } from "./commercial"
import { TestContract } from "./testcontract"

export function Marketplace(props) {
    return (
        <AppContainer page="marketplace">
            <div className="mb-5">
                <Residential />
            </div>
            <div>
                <Commercial />
            </div>
            <div>
                <TestContract/>
            </div>
        </AppContainer>
    )
}
