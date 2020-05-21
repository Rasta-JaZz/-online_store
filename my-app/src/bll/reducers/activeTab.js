import { produce } from "immer"
import { SET_ACTIVE_TAB } from "../constants"

const defaultTab = "apple"

const activeTab = (state = defaultTab, action) => {
	const { type, payload } = action

	return produce(state, (draft) => {
		switch (type) {
			case SET_ACTIVE_TAB:
				return payload.value
			default:
				return state
		}
	})
}
export default activeTab
