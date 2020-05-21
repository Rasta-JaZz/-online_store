import { createSelector } from "reselect"
import { products } from "../../db"
import { arrToMap } from "../../components/utils/arrToMap"

export const arrToProducts = (state) => Object.values(state.data)
export const allProducts = (state) => state.data
export const popularProducts = createSelector(arrToProducts, (products) => {
	const arr = []
	for (let i = 0; i < products.length; i++) {
		if (products[i].brand === "samsung") arr.push(products[i])
	}
	return arr
})
