import React from "react"
import Tabs from "./tabs"
import { Typography } from "@material-ui/core"
import MediaCard from "../card/card"
import "./style.css"

function SecondPage(props) {
	return (
		<div>
			<Tabs />
			<div className="second-page__container">
				<div className="second-page__content">
					<div className="second-page__header">
						<Typography
							gutterBottom
							variant="h4"
							component="h2"
							color="textSecondary"
						>
							ПОПУЛЯРНОЕ
						</Typography>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							flexWrap: "wrap",
							justifyContent: "space-between",
						}}
					>
						<MediaCard />
					</div>
				</div>
			</div>
		</div>
	)
}

export default SecondPage
