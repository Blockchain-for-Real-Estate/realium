import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home } from "./home"
import { About } from "./about"
import { Marketplace } from "./marketplace"
import { HowItWorks } from "./howitworks"
import { Login } from "./login"
import { Dashboard } from "./home/dashboard"
import { Explore } from "./marketplace/explore"
import { Footer } from "./utilities/footer"

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/marketplace" exact>
					<Marketplace />
				</Route>
				<Route path="/marketplace/:listingType?/:id?">
					<Explore />
				</Route>
				<Route path="/howitworks" exact>
					<HowItWorks />
				</Route>
				<Route path="/about" component={About} />
				<Route path="/login" component={Login} />
				<Route path="/dashboard" component={Dashboard} />
			</Switch>
			<Footer />
		</Router>
	)
}

export default App
