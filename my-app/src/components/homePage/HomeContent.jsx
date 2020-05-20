import React from "react"
// import PropTypes from "prop-types"
import AnimatedText from "./animatedText"
import "./style.css"
import { Button } from "@material-ui/core"

// HomeContent.propTypes = {}

function HomeContent(props) {
	return (
		<div className="container">
			<div className="content">
				<div>
					<AnimatedText />
				</div>
				<div className="content__right-box"></div>
			</div>
			<div className="content__button">
				<Button color="primary" variant="contained">
					Каталог
				</Button>
			</div>
		</div>
	)
}

export default HomeContent
