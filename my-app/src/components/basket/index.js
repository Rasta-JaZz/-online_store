import React from "react"
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from "@material-ui/icons/Delete"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import CounterFunction from "../../counterFunction"
// import Modal from "../modal"
import { makeStyles } from "@material-ui/core"
import { Avatar, Tooltip, Box, Zoom } from "@material-ui/core"
import { connect } from "react-redux"
import getTotal from "../utils/getTotal"
import { basketSelector } from "../../bll/selectors"

const useStyles = makeStyles({
	wrapper: {
		display: "flex",
		justifyContent: "center",
		height: "100%",
		paddingBottom: 200,
	},
	container: {
		marginTop: 160,
		width: "auto",
	},
	table: {
		width: 950,
	},
	img: {
		"& img": {
			width: "auto",
		},
	},
	footer: {
		padding: 20,
	},
})

function ProductTable(props) {
	const classes = useStyles()

	const getBody = () => {
		return props.basket.map((elem, i) => (
			<Zoom in={true} unmountOnExit mountOnEnter key={elem.id}>
				<TableRow>
					<TableCell component="th" scope="row">
						<Avatar className={classes.img} src={elem.image} variant="square" />
						{elem.name}
					</TableCell>
					<TableCell align="right">{elem.price}</TableCell>
					<TableCell align="right">
						<CounterFunction
							amount={elem.amount}
							max={elem.rest}
							min={1}
							// change={(amount) => onChange(amount, i)}
						/>
					</TableCell>

					<TableCell align="right">
						<div
							style={{
								backgroundColor: elem.color,
								width: 40,
								height: 40,
								float: "right",
								borderRadius: 4,
								border: "1px #e8e8e8 solid",
								opacity: 0.7,
							}}
						></div>
					</TableCell>
					<TableCell align="right">{elem.amount * elem.price}</TableCell>
					<TableCell>
						<Tooltip title="удалить" placement="right">
							<IconButton aria-label="delete">
								<DeleteIcon />
							</IconButton>
						</Tooltip>
					</TableCell>
				</TableRow>
			</Zoom>
		))
	}

	return (
		<div className={classes.wrapper}>
			<TableContainer
				component={Paper}
				aria-label="simple table"
				className={classes.container}
			>
				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							<TableCell>Товары</TableCell>
							<TableCell align="right">Цена</TableCell>
							<TableCell align="right">Количество</TableCell>
							<TableCell align="right">Цвет</TableCell>
							<TableCell align="right">Сумма</TableCell>
							<TableCell />
						</TableRow>
					</TableHead>
					<TableBody>{getBody()}</TableBody>
				</Table>
				<Box align="right" className={classes.footer}>
					{`Всего: ${getTotal(props.basket).toLocaleString()} `} &#8381;
				</Box>
			</TableContainer>
		</div>
	)
}

export default connect(
	(state) => ({
		basket: basketSelector(state),
	}),
	{}
)(ProductTable)
