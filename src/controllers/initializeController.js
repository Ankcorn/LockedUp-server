exports.getInitialize = function(req, res) {
	res.send({ title: '', message: '' })
}

exports.setup = function(req, res) {
	const form = req.body.form
}
