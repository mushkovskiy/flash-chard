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

const {
  Question
} = require('../../../db/models')
// const {
// console.log(Object.keys(require('../../../db/models')))
// } = require('../../../db/models')

///theme/{question.id}s

themeRouter.get('/home', async (req, res) => {

  const user = await User.findOne({
    where: {
      id: req.session.userId
    }
  });

  const getAllThemes = await Themes.findAll({
    raw: true
  })

  const themeList = React.createElement(Home, {
    getAllThemes,
    title: 'Title',
    user
  })
  const html = ReactDOMServer.renderToStaticMarkup(themeList)
  res.write('<!doctype html>')
  res.end(html)
})

themeRouter.post('/theme/:id', async (req, res) => {
  const questionsList = await Question.findAll({
    raw: true,
    where: {
      theme_id: req.params.id
    }
  })
  // console.log(questionsList)
  res.json({
    questionsList
  })

})

themeRouter.post('/check/answer/:answer', async (req, res) => {

  console.log(req.params.answer)
  const answer = await Question.findOne({

    where: {
      answer: req.params.answer
    }
  })
  console.log(answer)
  if (answer === null) {
    
    res.send('null')
  }
  if(answer) {
    res.send('Ok')
  }
})

themeRouter.get('/logout', (req, res) => {
  // new filestore({ logFn() {} });
  req.session.destroy((err) => {
    if (err) {
      console.log(err.message);
    }
  });
  res.clearCookie('user_sid'); // чистим куки. название берем из app.js : const sessionConfig = {... name: 'user_sid',...}
  // при переходе на ручку /logout очищаем сессию и редеректимся на главную страницу
  res.redirect('/');
});


module.exports = themeRouter