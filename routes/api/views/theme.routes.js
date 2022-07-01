const themeRouter = require('express').Router()
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const Home = require('../../../views/Home')
const {
  User
} = require('../../../db/models');

const {
  Themes
} = require('../../../db/models')

const {Question} = require('../../../db/models')
// const {
// console.log(Object.keys(require('../../../db/models')))
// } = require('../../../db/models')

///theme/{question.id}s

themeRouter.get('/home', async (req, res) => {

  const user = await User.findOne({where: {id: req.session.userId}});

  const getAllThemes = await Themes.findAll({
    raw: true
  })

  const themeList = React.createElement(Home, {
    getAllThemes,
    title:'Title',
    user
  })
  const html = ReactDOMServer.renderToStaticMarkup(themeList)
  res.write('<!doctype html>')
  res.end(html)
})

themeRouter.get('/theme/:id', async (req,res) => {
  const questionsList = await Question.findAll({where: {id:req.params.id}})
  
})



module.exports = themeRouter