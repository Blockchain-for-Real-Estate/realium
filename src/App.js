import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home } from "./home"
import { Marketplace } from "./marketplace"
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
				{/* <Route path="/tokenization">
					<Tokenization />
				</Route>
				<Route path="/invest">
					<Invest />
				</Route> */}
			</Switch>
			<div className="u-margin-top-quad"></div>
			<Footer />
		</Router>
	)
}

export default App
