const ReactDOMServer = require('react-dom/server');
const React = require('react');
const authRouter = require('express').Router();
const bcrypt = require('bcrypt');

const Main = require('../../views/Main');
const Reg = require('../../views/Reg');
const Log = require('../../views/Log');


const {
  User
} = require('../../db/models');
const {
  restart
} = require('nodemon');

authRouter.get('/', (req, res) => {
  const element = React.createElement(Main);
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.write('<!DOCTYPE html>');
  res.end(html);
});


authRouter.get('/reg', (req, res) => {
  const element = React.createElement(Reg);
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.write('<!DOCTYPE html>');
  res.end(html);
});


authRouter.post('/reg', async (req, res) => {
  const {
    name,
    password
  } = req.body;
  console.log(name, password)
  const user = await User.findOne({
    where: {
      username: name
    }
  });
  if (user) {
    res.redirect('/userdubble');
    return;
  }
  const newUser = await User.create({
    username: name,
    password: await bcrypt.hash(password, 10),
  });
  res.redirect('/log');
});


authRouter.get('/log', (req, res) => {
  const element = React.createElement(Log);
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.write('<!DOCTYPE html>');
  res.end(html);
});


authRouter.post('/log/user', async (req, res) => {
  console.log(req.body);
  const {
    name,
    password
  } = req.body;
  const checkedUser = await User.findOne({
    where: {
      username: name
    },
    raw: true
  });
  const isSame = await bcrypt.compare(password, checkedUser.password);
  if (checkedUser.username === name && isSame) {

    req.session.userId = checkedUser.id; // раздаем куки
    // console.log(req.session);
    return res.redirect('/home');
  }
  res.redirect('/')

  //    res.redirect('/invalidpass'); // Нужно перенести в маршрут входа в другом файле
});

module.exports = authRouter;