const express = require('express') // Infraestructura web para node
const morgan = require('morgan') // Middleware, es un logger
const path = require('path') // Esto me permite poner las direcciones.
const router = require('./router')

const app = express() // Toda la infraestructura ahora pasará a llamarse app
const PORT = process.env.PORT || 3000
// Acá configuramos nuestro sistema MVC
app.set('views', path.join(__dirname, 'views')) // Indicamos que nuestra sección VISTA será el directorio Vista del directorio en el que estoy trabajando
app.set('view engine', 'hbs') // Acá indico que mi view engine sea hbs ¿o sea lo que se transformará a HTML?
app.use(morgan('dev'))
app.use(router)

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
