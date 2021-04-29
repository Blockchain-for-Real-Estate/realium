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
import PropertyNotary from './abis/PropertyNotary.json'
import Web3 from "web3";

function App() {
	const [notify, setNotify] = React.useState({msg: 'Welcome to Realium! We are currently in testing mode so funds and properties are not real for now.',
												color: 'blue',
												show: true})
	const [avaxAccount, setAvaxAccount] = React.useState();
	const [balance, setBalance] = React.useState(0);

	React.useEffect(() => {
		const checkWeb3 = async () => {
			await loadWeb3();
			await loadBlockchainData();
		}
		checkWeb3();
	})

	async function loadWeb3() {
		if (window.ethereum) {
			window.web3 = new Web3(window.ethereum);
			await window.ethereum.enable();
		}
		else if (window.web3) {
			window.web3 = new Web3(window.web3.currentProvider);
		}
		else {
			window.alert('Non-Ethereum browser detected; consider using MetaMask.');
		}
	}

	async function loadBlockchainData() {
		const web3 = window.web3;
		//Load account
		const accounts = await web3.eth.getAccounts();
		await web3.eth.getBalance(accounts[0]).then(
			(res) => {
				setBalance(res/1000000000000000000);
			}
		)
		setAvaxAccount(accounts[0]);

		//THESE LINES WILL NEED TO CALL THE NETWORK TO GET THE ADDRESS WHERE THE CONTRACT IS DEPLOYED AND REPLACE THE HARD CODED ADDRESS
		const networkId = await web3.eth.net.getNetworkType();
		//const networkData = PropertyNotary.networks[networkId]
		if (networkId === "private") {
			const abi = PropertyNotary.abi;
			const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; //networkData.address;
			const smartContract = new web3.eth.Contract(abi, address);
			//view the smart contract in the console ready to call on
			console.log(smartContract)
		} else {
			window.alert("No smart contract detected on network - transactions are disabled. Make sure your MetaMask network is on Avalanche FUJI.");
		}
	}

	return (
		<Router>
			<Nav account={avaxAccount} balance={balance}/>
			<Notification notify={notify} setNotify={setNotify}/>
			<ScrollToTop>
				<Switch>
					<Route exact path="/">
						<Home setNotify={setNotify} />
					</Route>
					<Route path="/marketplace" exact>
						<Marketplace setNotify={setNotify} />
					</Route>
					<Route path="/marketplace/:propertyId">
						<ListingDetails setNotify={setNotify} />
					</Route>
					<Route path="/howitworks" exact>
						<HowItWorks setNotify={setNotify} />
					</Route>
					<Route path="/about">
						<About setNotify={setNotify} />
					</Route>
					<Route path="/login">
						<Login setNotify={setNotify} />
					</Route>
					<Route path="/dashboard">
						<Dashboard setNotify={setNotify} />
					</Route>
				</Switch>
			</ScrollToTop>
			<Footer />
		</Router>
	)
}

export default App
