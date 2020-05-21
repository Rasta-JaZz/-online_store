function getTotal(arr) {
	return arr.reduce((acc, elem) => (acc += elem.price * elem.amount), 0)
}
export default getTotal
