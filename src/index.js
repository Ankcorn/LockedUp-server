const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const moment = require('moment')

const app = express()
const port = process.env.PORT || 3000

app.use(helmet())
app.use(morgan('dev')) //TODO (Dynamic api log levels)
app.use(bodyParser.json())

require('./routes')(app)

app.listen(port, () => {
	console.log(`[${moment()}] The LockedUp server has started on port ${port}`)
})
