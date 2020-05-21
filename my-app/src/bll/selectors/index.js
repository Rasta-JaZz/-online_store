import { createSelector } from "reselect"

export const basketSelector = (state) => Object.values(state.basket)

export const arrToProducts = (state) => Object.values(state.data)

export const tabSelector = (state) => state.activeTab

export const secondPageSelector = createSelector(
	arrToProducts,
	tabSelector,
	(products, tab) => {
		let arr = []
		for (let i = 0; i < products.length; i++) {
			if (products[i].brand === tab) arr.push(products[i])
		}
		return arr
	}
)
