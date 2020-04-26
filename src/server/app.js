
const path = require('path')
const express = require('express')
const apiRequest = require('./utils/apirequest.js')
var cors = require('cors')
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_ID
});


const app = express()
app.use(cors());
app.options('*', cors())
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