import React from "react"
import enText from './resources/docs/en.json';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home } from "./home"
import { About } from "./about"
import { Marketplace } from "./marketplace"
import { Tokenization } from "./tokenization"
import { Invest } from "./invest"
import { Explore } from "./marketplace/explore"
import { Purchase } from "./marketplace/purchase"
import { Footer } from "./utilities/footer"

import { TestContract} from "./marketplace/testcontract"

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home content={enText}/>
				</Route>
				<Route path="/marketplace" exact>
					<Marketplace />
				</Route>
				<Route path="/marketplace/:listingType?/:id?/purchase" exact>
					<Purchase />
				</Route>
				<Route path="/marketplace/:listingType?/:id?">
					<Explore />
				</Route>
				<Route path="/marketplace/testcontract" exact>
					<TestContract />
				</Route>
				<Route path="/tokenization" exact>
					<Tokenization content={enText}/>
				</Route>
				<Route path="/invest" exact>
					<Invest content={enText}/>
				</Route>
				<Route path="/about" component={About} />
			</Switch>
			<div className="u-margin-top-quad"></div>
			<Footer />
		</Router>
	)
}

export const page = JSON.stringify(enText);

export default App
