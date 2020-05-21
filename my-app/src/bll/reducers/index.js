import { combineReducers } from "redux"
import data from "./data"
import activeTab from "./activeTab"
import basket from "./basket"

const reducer = combineReducers({
	data,
	activeTab,
	basket,
})

export default reducer
