const Document = require('camo').Document

class Locks extends Document {
	constructor() {
		super()
		this.locks = [Lock]
	}
}

module.exports = Locks
