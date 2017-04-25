const Promise = require('bluebird')

function chain (...handlers) {
	return function chainHandler (...args) {
		return Promise.reduce(
			handlers,
			(res, handler) => Promise.resolve(handler(...args)),
			null
		)
	}
}

module.exports = chain
