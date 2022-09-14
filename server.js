const express = require('express')
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'ejs')

app.get('/', logger, (req, res) => {
    res.render("index", {name: 'Marija', surname: 'Ma'})
})

//app.use(logger)

const imageRouter = require('./routes/images')

app.use('/images', imageRouter)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)