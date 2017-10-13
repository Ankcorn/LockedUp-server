const Document = require('camo').Document

class AccessRequest extends Document {
	constructor() {
		super()
		this.name = String
		this.email = String //TODO email validation
		this.secret = String
		this.date = Date

		this.timeout()
	}

	timeout() {
		setTimeout(() => {
			this.delete()
		}, 30 * 60 * 1000)
	}
}

module.exports = AccessRequest
