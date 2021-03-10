import React from "react"
import * as bs from "react-bootstrap"
import { Link } from "react-router-dom"

import logo from "../resources/images/logo.svg"

export function AppContainer(props) {
    let location = window.location.pathname.split('/').filter(path => path)[0]

    return (
        <bs.Container>
            {props.children}
        </bs.Container>
    )
}
