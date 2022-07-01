const themeRouter = require('express').Router()
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const Home = require('../views/Home')
const Questions = require('../../../db/models/theme')

///theme/{question.id}

themeRouter.get('/main', (req, res) => {

  const getAllThemes = Questions.findAll({raw:true})

  const themeList = React.createElement(Card, {getAllThemes})
  const html = ReactDOMServer.renderToStaticMarkup(themeList)
  res.write('<!doctype html>')
  res.end(html)
})







module.exports = themeRouter