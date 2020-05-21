import React from "react"
import "./App.css"
import HomePage from "./components/homePage"
import HomeContent from "./components/homePage/HomeContent"
import SecondPage from "./components/secondPage"

function App() {
	return (
		<div>
			<HomePage />
			<SecondPage />
			{/* <HomeContent /> */}
		</div>
	)
}

export default App
