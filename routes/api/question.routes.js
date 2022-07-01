const questionRouter = require('express').Router()
const React = require('react')
const ReactDOMServer = require('react-dom/server')


questionRouter.get('/question/:id', (req, res) => {
   const {question} = req.params

})