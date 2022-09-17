const express = require('express')
const router = express.Router()

router.use(logger)

router
.get('/', (req, res) => {
    res.send('Images list')
})
.get('/new', (req, res) => {
    res.render('new', {active: 'new'})
})
.get('/:id', (req, res) => {
    res.send(`Image name ${req.image.name}`)
})
.post('/new', (req, res) => {
    const name = req.body.iname
    if(name.length>1) {
        images.push({name: req.body.iname})
        res.redirect(`/images/${images.length -1}`)
    }
    else {
        res.render('new', {name: name, error: 'Turi buti daugiau nei 1 simbolis', 'active' : 'new'});
    }
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