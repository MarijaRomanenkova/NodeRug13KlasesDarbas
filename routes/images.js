const express = require('express')
const router = express.Router()

router.use(logger)

router
.get('/', (req, res) => {
    res.send('Images list')
})
.get('/new', (req, res) => {
    res.send('Image new')
})
.get('/:id', (req, res) => {
    res.send(`Image name ${req.image.name}`)
})

const images = [{name: 'Vasara'}, {name: 'Ruduo'}]

router.param("id", (req, res, next, id) => {
    req.image = images[id]
    next()
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router