const router = require('express').Router()
const adminRouter = require('express').Router()
const initializeRouter = require('express').Router()
const fs = require('fs-extra')
const path = require('path')

const initializeController = require('./controllers/initializeController')

module.exports = function(app) {
	router.route('/').get()
	router.route('lock').get()
	router
		.route('keyrequest')
		.get()
		.post()
		.delete()

	adminRouter
		.route('/users')
		.get()
		.delete()

	adminRouter
		.route('keyrequest')
		.get()
		.put()
		.delete()

	initializeRouter.route('/').get(initializeController.getInitialize)
	initializeRouter.route('/initialize').post(initializeController.setup)

	if (fs.readdirSync(path.join(__dirname, '../data')).length === 0) {
		app.use('/api', initializeRouter)
	} else {
		app.use('/api', router)
		app.use('/admin', adminRouter)
	}
}
