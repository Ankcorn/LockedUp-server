const Document = require('camo').Document

class User extends Document {
	constructor() {
		super()
		this.name = String
		this.lastUsed = Date
		this.key = ByteString
	}
}

module.exports = Users
