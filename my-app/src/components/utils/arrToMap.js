function arrToMap(arr) {
	return arr.reduce(
		(acc, elem) => ({
			...acc,
			[elem.id]: elem,
		}),
		{}
	)
}

export default arrToMap
