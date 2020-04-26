
const path = require('path')
const express = require('express')
const apiRequest = require('./utils/apirequest.js')
var cors = require('cors')
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: "e5b72823",
  application_key: "51fc31345a0bb4f01edb4659f3e3748f"
});


const app = express()
app.use(cors());
app.options('*', cors())
//const distDirectoryPath = path.join(__dirname, '../dist')
//app.use(express.static('dist'))
app.use(express.static('dist'))

app.get('', (req, res) => {
  res.send('hello')
})

app.get('/api', (req, res) => {
  if (!req.query.text) {
    return res.send({
      error: 'You must provide a text'
      
    })
  } else {
    const text = req.query.text
    textapi.sentiment({
      'text': text
    }, function(error, data) {
      if (error) {
        return res.send({ error })
      } else {
        res.send(data)
      }
    })
  }
})

app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve('dist', "service-worker.js"));
});



app.get('/*', (req, res) => {
  res.end('404')
})
module.exports = app