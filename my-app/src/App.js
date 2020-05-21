import React from "react"
import "./App.css"
import HomePage from "./components/homePage"
import HomeContent from "./components/homePage/HomeContent"
import SecondPage from "./components/secondPage"
import BasketTable from "./components/basket"
import { Route, BrowserRouter as Router } from "react-router-dom"

function App() {
	return (
		<div>
			<Router>
				<HomePage />
				<Route exact path="/" component={HomeContent} />
				<Route exact path="/basket" component={BasketTable} />
				<Route exact path="/popular" component={SecondPage} />
			</Router>
		</div>
	)
}

export default App
