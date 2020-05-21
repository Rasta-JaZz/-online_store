import { SET_ACTIVE_TAB, ADD_TO_BASKET } from "../constants"

export function setActiveTabs(value) {
	return {
		type: SET_ACTIVE_TAB,
		payload: { value },
	}
}

export function addToBasket(elem) {
	return {
		type: ADD_TO_BASKET,
		payload: { elem },
	}
}
