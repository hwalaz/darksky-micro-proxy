require('isomorphic-fetch')
require('now-env')

const { parse } = require('url')
const { send } = require('micro')

module.exports = async (req, res) => {
  const { query } = parse(req.url)

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'application/json')

  darkSky(query)
    .then(data => { send(res, 200, data) })
    .catch(error => { send(res, 500, error) })
}

const darkSky = (query) =>
  fetch(`https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${query}?si`)
    .then(resp => resp.json())
