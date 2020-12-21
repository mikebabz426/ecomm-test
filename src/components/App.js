import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Home from "../components/Home";
import Checkout from "../components/Checkout";
import Login from "../components/Login";
import Payment from "../components/Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "../firebase";
import { useStateValue } from "./../StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
	"pk_test_51I0vTKI0lzgCVifPzT22esO6pcfbYhgoK3EB5Bs5hpCt6idRF8JVJSKOPzHR7S3am4xqFjGnAMbFlgaSca1pUeSj007VDlxGBi"
);

function App() {
	const [, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({ type: "SET_USER", user: authUser });
			} else {
				dispatch({ type: "SET_USER", user: null });
			}
		});
	}, []);

	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/checkout">
						<Navbar />
						<Checkout />
					</Route>
					<Route path="/payment">
						<Navbar />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path="/">
						<Navbar />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
