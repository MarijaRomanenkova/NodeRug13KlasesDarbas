const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const { requestTime, logger } = require('./middlewares.js')

app.use(requestTime)
app.use(logger)

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'ejs')
console.log(app.get('view engine'))

app.get('/', (req, res) => {
    res.render("index", {name: 'Marija', surname: 'Ma', active: 'home'})
})

const imageRouter = require('./routes/images')

app.use('/images', imageRouter)

app.listen(PORT)