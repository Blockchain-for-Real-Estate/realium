import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home } from "./home"
import { Marketplace } from "./marketplace"
import { Explore } from "./marketplace/explore"
import { Purchase } from "./marketplace/purchase"
import { Footer } from "./utilities/footer"
import { TestContract} from "./marketplace/testcontract"

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
				<Route path="/marketplace/:listingType?/:id?/purchase">
					<Purchase />
				</Route>
				<Route path="/marketplace/:listingType?/:id?">
					<Explore />
				</Route>
				<Route path="/marketplace/testcontract" exact>
					<TestContract />
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
