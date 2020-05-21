import { products } from "../../db"
import { produce } from "immer"
import arrToMap from "../../components/utils/arrToMap"

const stateProducts = arrToMap(products)

const data = (state = stateProducts, action) => {
	const { type, payload } = action

	return produce(state, (draft) => {
		switch (type) {
			default:
				return draft
		}
	})
}

export default data
