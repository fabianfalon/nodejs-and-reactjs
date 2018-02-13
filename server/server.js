'use strict'

const http = require('http')
const express = require('express')
const chalk = require('chalk')
const debug = require('debug')
const api = require('./api')


const mongoose = require('./connections/mongoose')
const bodyParser = require('body-parser');

const port = process.env.PORT || 5001
const app = express()
const server = http.createServer(app)

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next()
})

// API END POINT
app.use('/api/v1', api)

// express error handler
app.use((err, req, res, next) => {
  debug(`Error: ${err.message}`)
  console.log(err)
  if (err.message.match(/not fount/)) {
    return res.status(404).send({'error': err.message})
  }
  res.status(500).send({error: err.message})
})

function handlerFatalError (err) {
  console.log(`${chalk.red('[fatal error]')} ${err.message}`)
  console.log(err.stack)
  process.exit(1)
}

if (!module.parent) {
  process.on('uncaughtException', handlerFatalError)
  process.on('unhandledRejection', handlerFatalError)

  mongoose.connect('mongodb://localhost/stockApp', function (err, res) {
    if (err) {
      console.log('ERROR: connecting to Database. ' + err)
    }
    server.listen(port, () => {
      console.log(`${chalk.green('[server-api ]')} server listening on port ${port}`)
    })
  })
}

module.exports = server
