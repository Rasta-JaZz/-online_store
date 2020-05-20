import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { createMuiTheme, ThemeProvider } from "@material-ui/core"

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#26a69a",
		},
		secondary: {
			main: "#00bcd4",
		},
		error: {
			main: "#f44336",
		},
	},
})

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>,
	document.getElementById("root")
)
