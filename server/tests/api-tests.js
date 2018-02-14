'use strict'

const test = require('ava')
const request = require('supertest')

const server = require('../server')

test.serial.cb('/api/v1/products', t => {
  request(server)
    .get('/api/v1/products')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.falsy(err, 'should not return error')
      t.end()
    })
})
