const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', logger, logger, (req, res) => {
    res.render("index", {surname: 'Marija'})
})

//app.use(logger)

const imageRouter = require('./routes/images')

app.use('/images', imageRouter)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)