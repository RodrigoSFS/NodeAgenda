const express = require('express')
const router = express.Router()
const handlebars = require('express-handlebars')




router.get('/', (req, res) => {

    res.render('home')

})

module.exports = router


