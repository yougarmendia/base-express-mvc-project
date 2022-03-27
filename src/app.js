const express = require('express')
const path = require('path')
const morgan = require('morgan')

const router = require('./router')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', router)

module.exports = app
