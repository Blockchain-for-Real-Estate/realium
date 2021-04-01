import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ScrollToTop from "react-router-scroll-top"
import { Home } from "./home"
import { About } from "./about"
import { Marketplace } from "./marketplace"
import { HowItWorks } from "./howitworks"
import { Login } from "./login"
import { Dashboard } from "./home/dashboard"
import { Footer } from "./utilities/footer"
import { NavItems } from "./utilities/nav-items"
import { ListingDetails } from "./marketplace/listing-details"

function App() {
	return (
		<Router>
			<NavItems/>
			<ScrollToTop>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/marketplace" exact>
						<Marketplace />
					</Route>
					<Route path="/marketplace/:propertyId">
						<ListingDetails />
					</Route>
					<Route path="/howitworks" exact>
						<HowItWorks />
					</Route>
					<Route path="/about" component={About} />
					<Route path="/login" component={Login} />
					<Route path="/dashboard" component={Dashboard} />
				</Switch>
			</ScrollToTop>
			<Footer />
		</Router>
	)
}

export default App
