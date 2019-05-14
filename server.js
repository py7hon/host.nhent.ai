const express = require('express')
const app = express()
const path = require('path')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.set('port', process.env.PORT || 8080)
app.use(express.static(path.join(__dirname, 'css')))
app.get('/', (req, res) => {
  res.render('index')
})
app.listen(app.get('port'), () => {
  console.log('Listening on port: ', app.get('port'))
})
