'use strict'

const express = require('express')
const Product = require('./models/product');

const api = express.Router()

/* GET PRODUCT */
api.get('/products', (req, res) => {
  Product.find(function (err, products) {
    if (err) return next(err);
    res.status(200).json(products)
    res.end()
  });
})

/* CREATE PRODUCT */
api.post('/products', function (req, res) {
  Product.create(req.body, function (err, post) {
    if (err) return next(err);
    res.status(201).json(post)
    res.end()
  });
})

/* GET PRODUCT BY ID */
api.get('/products/:uuid', (req, res, next) => {
  const { uuid } = req.params
  Product.findById(uuid, function (err, post) {
    if (err) return next(err);
    res.status(200).json(post);
    res.end();
  });
})

/* UPDATE PRODUCT */
api.put('/products/:id', function (req, res, next) {
  Product.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE PRODUCT */
api.delete('/products/:id', function (req, res, next) {
  Product.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = api
