import React from "react"
import * as bs from "react-bootstrap"
import { Link } from "react-router-dom"

import logo from "../assets/images/logo.svg"

export function AppContainer(props) {
    let location = window.location.pathname.split('/').filter(path => path)[0]

    return (
        <bs.Container>
            <bs.Navbar>
                <bs.NavbarBrand as="div">
                    <Link to="/">
                        <img src={logo} alt="realium logo" width="150"/>
                    </Link>
                </bs.NavbarBrand>
                <bs.Nav>
                    <bs.NavItem>
                        <bs.NavLink as="div">
                            <Link className={`text-decoration-none ${location === 'marketplace' ? 'text-primary' : 'text-muted' }`} to="/marketplace">
                                Marketplace
                            </Link>
                        </bs.NavLink>
                    </bs.NavItem>
                    <bs.NavItem>
                        <bs.NavLink as="div">
                            <Link className={`text-decoration-none ${location === 'tokenization' ? 'text-primary' : 'text-muted' }`} to="/tokenization">
                                Tokenization
                            </Link>
                        </bs.NavLink>
                    </bs.NavItem>
                    <bs.NavItem>
                        <bs.NavLink as="div">
                            <Link className={`text-decoration-none ${location === 'invest' ? 'text-primary' : 'text-muted' }`} to="/invest">
                                Invest
                            </Link>
                        </bs.NavLink>
                    </bs.NavItem>
                </bs.Nav>
            </bs.Navbar>
            <div className="px-5">
                {props.children}
            </div>
        </bs.Container>
    )
}
