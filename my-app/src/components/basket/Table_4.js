import React from "react"
import { useState } from "react"
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from "@material-ui/icons/Delete"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import CounterFunction from "../counterFunction"
import Modal from "../modal"
import { useStyles } from "./style"
import { Avatar, Tooltip, Box, Zoom } from "@material-ui/core"
import Slide from "@material-ui/core/Slide"
import { basketSelector } from "../../BLL/selectors"
import { connect } from "react-redux"

function ProductTable(props) {
	function onChange(value, i) {
		const products = [...productState]
		products[i] = { ...products[i], amount: value }
		setProduct(products)
	}

	function handleDelete(index) {
		const products = [...productState].filter((_, i) => i !== index)
		products[index] = { ...products[index], check: false }
		setProduct(products)
	}

	function getTotal() {
		return props.basket.reduce(
			(acc, elem) => (acc += elem.prise * elem.amount),
			0
		)
	}
	const classes = useStyles()

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
			}}
		>
			<TableContainer
				component={Paper}
				aria-label="simple table"
				className={classes.container}
			>
				<Table className={classes.table}>
					<TableHead className={classes.head}>
						<TableRow>
							<TableCell>Товары</TableCell>
							<TableCell align="right">Цена</TableCell>
							<TableCell align="right">Количество</TableCell>
							<TableCell align="right">Остаток</TableCell>
							<TableCell align="right">Цвет</TableCell>
							<TableCell align="right">Сумма</TableCell>
							<TableCell />
						</TableRow>
					</TableHead>
					<TableBody>
						{props.basket.map((elem, i) => (
							<Zoom in={elem.check} unmountOnExit mountOnEnter key={elem.id}>
								<TableRow>
									<TableCell component="th" scope="row">
										<Avatar src={elem.avatar} />
										{elem.name}
									</TableCell>
									<TableCell align="right">{elem.prise}</TableCell>
									<TableCell align="right">
										<CounterFunction
											amount={elem.amount}
											max={elem.rest}
											min={1}
											change={(amount) => onChange(amount, i)}
										/>
									</TableCell>
									<TableCell align="right">
										{elem.rest ? elem.rest : <i>нет в наличии</i>}
									</TableCell>
									<TableCell align="right">{elem.color}</TableCell>
									<TableCell align="right">
										{elem.amount * elem.prise}
									</TableCell>
									<TableCell>
										<Tooltip title="удалить" placement="right">
											<IconButton
												onClick={() => handleDelete(i)}
												aria-label="delete"
											>
												<DeleteIcon />
											</IconButton>
										</Tooltip>
									</TableCell>
								</TableRow>
							</Zoom>
						))}
					</TableBody>
				</Table>
				<Box className={classes.modalDiv}>
					<Modal products={props.basket} />
					<Box fontWeight={500}>
						<p className={classes.modalDiv.p}>
							{`Всего: ${getTotal()} `} &#8381;
						</p>
					</Box>
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
