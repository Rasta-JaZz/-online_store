import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import { connect } from "react-redux"
import { setActiveTabs } from "../../bll/ac"

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		marginTop: 65,
	},
})

function SecondPageTabs(props) {
	const classes = useStyles()
	const [value, setValue] = React.useState(0)

	const handleChange = (_, newValue) => {
		setValue(newValue)
	}

	return (
		<Paper className={classes.root}>
			<Tabs
				value={value}
				onClick={(e) => props.setActiveTabs(e.target.innerText.toLowerCase())}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
				centered
			>
				<Tab label="apple" />
				<Tab label="samsung" />
				<Tab label="huawei" />
				<Tab label="xiaomi" />
				<Tab label="oppo" />
			</Tabs>
		</Paper>
	)
}

export default connect(null, {
	setActiveTabs,
})(SecondPageTabs)
