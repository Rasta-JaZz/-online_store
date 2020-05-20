import React, { useEffect } from "react"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"

export default function LoginMenu(props) {
	const [anchorEl, setAnchorEl] = React.useState(null)

	useEffect(() => {
		setAnchorEl(props.target)
	}, [props.target])

	const handleClose = () => {
		setAnchorEl(null)
		props.callBack()
	}

	return (
		<div>
			<Menu
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem onClick={handleClose}>Вход</MenuItem>
				<MenuItem onClick={handleClose}>Регистрация</MenuItem>
			</Menu>
		</div>
	)
}
