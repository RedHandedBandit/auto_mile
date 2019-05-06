const express = require('express');
require('dotenv').config();
const massive = require('massive');
const session = require('express-session')
const authCtrl = require('./controllers/auth')

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env

const app = express()
app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24
    }
}))

massive(CONNECTION_STRING).then( db => {
    app.set('db', db)
    console.log('database online')
    app.listen(SERVER_PORT, console.log(` if you are quiet you can hear port ${SERVER_PORT}`))
})

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/logout', authCtrl.logout)
