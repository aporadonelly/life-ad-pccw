import { isRegExp, escapeRegExp, isString, flatten } from 'lodash'

function replaceString(str, match, fn) {
	let curCharStart = 0
	let curCharLen = 0

	if (str === '') {
		return str
	} else if (!str || !isString(str)) {
		throw new TypeError(
			'First argument to react-string-replace#replaceString must be a string'
		)
	}

	let re = match

	if (!isRegExp(re)) {
		re = new RegExp('(' + escapeRegExp(re) + ')', 'gi')
	}

	let result = str.split(re)

	// Apply fn to all odd elements
	for (let i = 1, length = result.length; i < length; i += 2) {
		curCharLen = result[i].length
		curCharStart += result[i - 1].length
		result[i] = fn(result[i], i, curCharStart)
		curCharStart += curCharLen
	}

	return result
}

function reactStringReplace(source, match, fn) {
	if (!Array.isArray(source)) source = [source]

	return flatten(
		source.map(function (x) {
			return isString(x) ? replaceString(x, match, fn) : x
		})
	)
}

export default reactStringReplace
