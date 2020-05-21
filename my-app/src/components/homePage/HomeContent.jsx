import React from "react"
// import PropTypes from "prop-types"
import AnimatedText from "./animatedText"
import "./style.css"
import { Button } from "@material-ui/core"
import { NavLink } from "react-router-dom"

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
				<NavLink to="/popular">
					<Button color="primary" variant="contained">
						Каталог
					</Button>
				</NavLink>
			</div>
		</div>
	)
}

export default HomeContent
