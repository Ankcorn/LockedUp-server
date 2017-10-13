const initializeRouter = require('express').Router()

const getInitializeController = require('./controllers/initializeController')

module.exports = function(app) {
	initializeRouter.route('/').get()

	initializeRouter.route('/initialize').post()

	app.use('/api', initializeRouter)
}
