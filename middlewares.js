const colors = require('colors')

module.exports = {
    requestTime: ((req, res, next) => {
        req.reqTime = Date.now()
        next()
    }),
    logger: ((req, res, next) => {
        console.log(colors.bgMagenta.black(`Time: ${req.reqTime}`))
        next()
    })
};