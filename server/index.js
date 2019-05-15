const express = require('express');
require('dotenv').config();
const massive = require('massive');
const session = require('express-session')
const authCtrl = require('./controllers/auth')
const infoCtrl = require('./controllers/info')
const middleware = require('./middleware/authMiddleware')

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING, CLIENT_SECRET } = process.env

const stripe = require("stripe")(CLIENT_SECRET);


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
    // console.log('database online')
    app.listen(SERVER_PORT, console.log(` if you are quiet you can hear port ${SERVER_PORT}`))
})

//auth
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/logout', authCtrl.logout) 
app.get('/auth/me', authCtrl.checkMe)
app.get('/auth/employeeInfo', authCtrl.getEmployeeInfo)
app.put('/auth/editEmployeeInfo/:id', authCtrl.editEmployeeInfo)

//customer 
app.post('/api/addCustomer', infoCtrl.addCustomerInfo)
app.get('/api/customers', middleware.adminsOnly, infoCtrl.getAllCustomerInfo)
app.delete('/api/delete/:id', infoCtrl.deleteCustomerInfo)

// stripe endpoint
app.post('/save-stripe-token', async (req, res) => {
    try {
        let { status } = await stripe.charges.create({
            amount: 2000,
            currency: "usd",
            description: 'example charge',
            source: req.body
        })
        res.json(status)
    } catch (err) {
        res.status(500).end();
    }
})