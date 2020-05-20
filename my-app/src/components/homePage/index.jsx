import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import "./style.css"
import LoginMenu from "../menuLogin"

export default function HomeAppBar() {
	const [loginTarget, setLoginTarget] = React.useState(null)

	function trowOfState() {
		setLoginTarget(null)
	}

	return (
		<div className="root">
			<AppBar position="fixed">
				<Toolbar>
					<IconButton
						edge="start"
						className="menuButton"
						color="inherit"
						aria-label="menu"
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className="title">
						EZphone
					</Typography>
					<IconButton color="inherit" onClick={(e) => setLoginTarget(e.target)}>
						<ExitToAppIcon />
					</IconButton>
				</Toolbar>
				<LoginMenu target={loginTarget} callBack={trowOfState} />
			</AppBar>
		</div>
	)
}
