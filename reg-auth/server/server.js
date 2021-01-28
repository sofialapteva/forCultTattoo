const express = require('express')

const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.route('/registration').get((req, res) => {
  const time = new Date().getSeconds()
  let responce;
  if (time % 2 === 1) {
    responce = { ip: '77.50.86.80', authorizated: false, time: new Date() }
  } else {
    responce = { ip: '77.50.86.80', authorizated: true, time: new Date() }
  }
  res.json(responce)
}).post((req, res) => {
  const time = new Date().getSeconds()
  let responce;
  if (time % 2 === 1) {
    responce = {
      issuccess: true, errormessage: ''
    }
  } else {
    responce = {
      issuccess: false, errormessage: 'Произошла ошибка, попробуйте снова'
    }
  }
  res.json(responce)
})

app.route('/login').get((req, res) => {
  res.redirect('/register')
}).post((req, res) => {
  const time = new Date().getSeconds()
  let responce;
  if (time % 2 === 1) {
    responce = {
      issuccess: true, errormessage: ''
    }
  } else {
    responce = {
      issuccess: false, errormessage: 'Произошла ошибка при регистрации, попробуйте снова'
    }
  }
  res.json(responce)
})

app.listen(3001)
