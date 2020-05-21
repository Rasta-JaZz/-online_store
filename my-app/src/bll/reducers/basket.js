import { produce } from "immer"
import { ADD_TO_BASKET } from "../constants"

const basketState = {}

const basket = (state = basketState, action) => {
	const { type, payload } = action

	return produce(state, (draft) => {
		switch (type) {
			case ADD_TO_BASKET:
				draft = { ...draft, [payload.elem.id]: { ...payload.elem } }
				return draft
			default:
				return draft
		}
	})
}

export default basket
