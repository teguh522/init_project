const route = require('express').Router()


route.route('/').get((req, res, next) => {
    res.json("Hallo")
})


module.exports = route