const express = require('express')
const request = require('supertest')
const app = require('../src/server/app')
const apiRequest = require('../src/server/utils/apirequest.js')
const babelPolyfill = require('babel-polyfill')



test('Should return correct endpoint response', async () => {
  await request(app).get('/api').send({
    text: 'Some text for testing purposes of API work and so on so forth'
  }).expect(200);
})

