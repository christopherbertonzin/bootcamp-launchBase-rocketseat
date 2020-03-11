const express = require('express')
const nunjucks = require('nunjucks')
const items = require('./data')
const server = express()
const port = 3000

// STARTING SERVER
server.listen(port, () => console.log(`Example server listening on port port!`))

server.use(express.static('public'))

// NUNJUCKS
server.set("view engine", "njk")

nunjucks.configure('views', {
    express: server
})

// ROUTES
server.get('/', (req, res) => res.render('layout'))
server.get('/about', (req, res) => res.render('about'))
server.get('/courses', (req, res) => res.render('courses', { items }))

server.use((req, res) => {
    res.status(404).render('not-found')
})