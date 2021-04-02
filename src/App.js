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
import { Nav } from "./utilities/nav"
import { Notification } from "./utilities/notification"
import { ListingDetails } from "./marketplace/listing-details"

function App() {
	const [notify, setNotifiy] = React.useState({msg: 'Welcome to Realium!', color: 'blue', show: true})

	return (
		<Router>
			<Nav />
			<Notification notify={notify} setNotify={setNotifiy}/>
			<ScrollToTop>
				<Switch>
					<Route exact path="/">
						<Home setNotifiy={setNotifiy} />
					</Route>
					<Route path="/marketplace" exact>
						<Marketplace setNotifiy={setNotifiy} />
					</Route>
					<Route path="/marketplace/:propertyId">
						<ListingDetails setNotifiy={setNotifiy} />
					</Route>
					<Route path="/howitworks" exact>
						<HowItWorks setNotifiy={setNotifiy} />
					</Route>
					<Route path="/about">
						<About setNotifiy={setNotifiy} />
					</Route>
					<Route path="/login">
						<Login setNotifiy={setNotifiy} />
					</Route>
					<Route path="/dashboard">
						<Dashboard setNotifiy={setNotifiy} />
					</Route>
				</Switch>
			</ScrollToTop>
			<Footer />
		</Router>
	)
}

export default App
