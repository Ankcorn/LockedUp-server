const Document = require('camo').Document

class Lock extends Document {
	constructor() {
		super()
		this.name = String
		this.type = { type: String, choices: ['Door', 'Window'] }
		this.description = String
		this.locked = Boolean
	}
}

module.exports = Lock
