const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')




/* GET home page. */
router.get('/', function(req, res, next) {
  const imgDir = path.resolve('static/images/')
  res.render('index', { 
    title: 'Cadavre Exquis', 
    lsH: fs.readdirSync(path.join(path.resolve(__dirname,'..'),'public/images/H/')),
    lsB: fs.readdirSync(path.join(path.resolve(__dirname,'..'),'public/images/B/')),
})
})

module.exports = router
