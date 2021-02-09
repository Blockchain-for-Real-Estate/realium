import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home } from "./home"
import { Marketplace } from "./marketplace"

function App() {
	return (
		<Router>

			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/marketplace/:id?">
					<Marketplace />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
