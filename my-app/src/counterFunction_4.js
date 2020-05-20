import React from "react"
import PropTypes from "prop-types"
import { useState, useEffect } from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import { connect } from "react-redux"
import { amountProducts } from "@/AC"

const useStyles = makeStyles({
	container: {
		display: "flex",
		flexDirection: "column",
	},
	root: {
		width: 10,
		minWidth: 5,
		height: 40,
	},
	feel: {
		width: 45,
	},
})

CounterFunction.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number,
	change: PropTypes.func,
}

function CounterFunction(props) {
	const classes = useStyles()
	const [count, setCount] = useState(1)
	const [isError, setIsError] = useState(false)
	useEffect(() => void props.amountProducts(props.id, count))

	function handleBlur() {
		props.amountProducts(props.id, count)
		setIsError(false)
	}

	return (
		<div className={classes.container}>
			<div>
				<Button
					className={classes.root}
					onClick={() => (props.min <= count ? setCount(count - 1) : null)}
				>
					{"-"}
				</Button>
				<TextField
					className={classes.feel}
					size="small"
					error={isError}
					variant="outlined"
					value={count}
					onBlur={handleBlur}
					onChange={(e) => {
						e.target.value < props.max &&
							(isNaN(parseInt(e.target.value))
								? setIsError(true)
								: setCount(parseInt(e.target.value)))
					}}
				/>
				<Button
					className={classes.root}
					onClick={() => (props.max >= count ? setCount(count + 1) : null)}
				>
					+
				</Button>
			</div>
		</div>
	)
}

export default connect(null, {
	amountProducts,
})(CounterFunction)
