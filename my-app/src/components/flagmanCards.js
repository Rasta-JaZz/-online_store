import React from "react"
import { connect } from "react-redux"
import { pushBasket } from "@/AC"
import {
	Container,
	CardMedia,
	IconButton,
	Tooltip,
	Button,
} from "@material-ui/core"
import FavoriteIcon from "@material-ui/icons/Favorite"
import { useStyles } from "./style"
import { Zoom } from "@material-ui/core"

function FlagmanCards(props) {
	const classes = useStyles()

	const handleClick = (elem) => {
		props.pushBasket(elem)
	}

	const getBody = () => {
		return props.flagmans.map((elem) => (
			<Zoom in={true} unmountOnExit mountOnEnter key={elem.id}>
				<div className={classes.card}>
					<div style={{ marginBottom: 10 }}>{elem.name}</div>
					<CardMedia className={classes.image} image={elem.image} />
					<div style={{ float: "right", marginTop: 5 }}>
						{elem.price.toLocaleString()} &#8381;
					</div>
					<div className={classes.cardFooter}>
						<IconButton>
							<Tooltip title="В ИЗБРАННОЕ" placement="top">
								<FavoriteIcon className={classes.icon} />
							</Tooltip>
						</IconButton>
						<Button
							variant="outlined"
							color="primary"
							size="small"
							style={{ marginBottom: 8 }}
							onClick={() => handleClick(elem)}
						>
							добавить в корзину
						</Button>
					</div>
				</div>
			</Zoom>
		))
	}

	return <Container className={classes.root}>{getBody()}</Container>
}

export default connect(null, {
	pushBasket,
})(FlagmanCards)
