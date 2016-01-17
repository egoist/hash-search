module.exports = function (hash) {
	hash = hash || location.hash
	var whereIsQuestionMark = hash ? hash.indexOf('?') : -1
	if (whereIsQuestionMark > 0) {
		return {
			hash: hash.substring(0, whereIsQuestionMark),
			search: hash.substring(whereIsQuestionMark)
		}
	}
	return {
		hash: hash,
		search: ''
	}
}
