import React from "react"
import { useHistory, useParams } from "react-router-dom"
import { AppContainer } from "../utilities/app-container"
import { Commercial } from "./commercial"
import { ListingDetails } from "./listing-details"
import { Residential } from "./residential"

const LIST_TYPES = ['residential', 'commercial']

export function Explore(props) {
    let history = useHistory()
    let { listingType, id } = useParams()

    return (
        <AppContainer page="marketplace">
            {
                listingType && id ?
                <ListingDetails listingType={listingType} id={id} />
                : LIST_TYPES.includes(listingType) ?
                    <Explorer listingType={listingType} />
                    : history.push('/')
            }
        </AppContainer>
    )
}

// TODO: setup these controls below, even just dummy controls for show maybe
//perhaps move these components to the residential and commercial components
//and have prop to show or hide the controls
function Explorer(props) {
    return (
        <div>
            <ExplorerControls />
            {props.listingType === 'commercial' && <Commercial />}
            {props.listingType === 'residential' && <Residential />}
        </div>
    )
}

function ExplorerControls(props) {
    return (
        <>
            <ExplorerSearch />
            <ExplorerFilterSort />
        </>
    )
}

function ExplorerSearch(props) {
    return (
        <>Cool search component</>
    )
}

function ExplorerFilterSort(props) {
    return (
        <>Cool stuff to filter and sort with</>
    )
}
