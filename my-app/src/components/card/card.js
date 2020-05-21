import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { CardHeader, IconButton } from "@material-ui/core"
import { Zoom } from "@material-ui/core"
import { connect } from "react-redux"
import { secondPageSelector } from "../../bll/selectors/index"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import { addToBasket } from "../../bll/ac"

const useStyles = makeStyles({
	root: {
		width: 330,
		minHeight: 550,
	},
	media: {
		backgroundSize: "auto 350px",
		minHeight: 350,
	},
	container: {
		margin: 20,
		"&:hover": {
			boxShadow: "10px 10px 20px #9cfcca",
			transform: "scale(1.01)",
		},
	},
})

function MediaCard(props) {
	const classes = useStyles()
	console.log("render :>> ")

	const getbody = () => {
		return props.products.map((elem) => (
			<div className={classes.container} key={elem.id}>
				<Zoom in={true} unmountOnExit mountOnEnter>
					<Card className={classes.root}>
						<CardHeader title={elem.name} />
						<CardMedia className={classes.media} image={elem.image} />
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="h2"
								align="right"
							>
								{elem.price.toLocaleString()} &#8381;
							</Typography>
						</CardContent>
						<CardActions style={{ justifyContent: "space-around" }}>
							<IconButton align="right">
								<FavoriteBorderIcon />
							</IconButton>
							<Button onClick={() => props.addToBasket(elem)} color="secondary">
								Добавить в корзину
							</Button>
						</CardActions>
					</Card>
				</Zoom>
			</div>
		))
	}

	return getbody()
}

export default connect(
	(state) => ({
		products: secondPageSelector(state),
	}),
	{ addToBasket }
)(MediaCard)
