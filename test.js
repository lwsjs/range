const Tom = require('test-runner').Tom
const Range = require('./')
const Lws = require('lws')
const fetch = require('node-fetch')
const a = require('assert')

const tom = module.exports = new Tom('range')

tom.test('simple', async function () {
  const port = 8000 + this.index
  const lws = Lws.create({ port, stack: Range })
  const response = await fetch(`http://localhost:${port}/`)
  a.strictEqual(response.headers.get('accept-ranges'), 'bytes')
  lws.server.close()
})
