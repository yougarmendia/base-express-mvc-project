const express = require('express') // Importamos nuestro Express
const PageController = require('./controllers/PageController')

const router = express.Router()

// Controllers
const pageController = new PageController()

// Routes
router.get('/', pageController.renderHome)

router.get('about', pageController.renderAbout)

router.get('*', pageController.renderNotFound) // Éste SIEMPRE tiene que ir al final, porque es el que define qué se entrega al usuario si pone alguna URL que no tenemos.

module.exports = router
