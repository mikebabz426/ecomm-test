import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Home from "../components/Home";
import Checkout from "../components/Checkout";
import Login from "../components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "../firebase";
import { useStateValue } from "./../StateProvider";

function App() {
	const [, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log("THE USER IS: ", authUser);

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
