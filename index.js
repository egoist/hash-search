module.exports = function (hash) {
	hash = hash || location.hash
	var whereIsQuerstionMark = hash ? hash.indexOf('?') : -1
	if (whereIsQuerstionMark > 0) {
		return {
			hash: hash.substring(0, whereIsQuerstionMark),
			search: hash.substring(whereIsQuerstionMark)
		}
	}
	return {
		hash: hash,
		search: ''
	}
}
