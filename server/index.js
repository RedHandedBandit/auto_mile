const express = require('express');
require('dotenv').config();
const massive = require('massive');
const session = require('express-session')
const authCtrl = require('./controllers/auth')
const infoCtrl = require('./controllers/info')
const middleware = require('./middleware/authMiddleware')

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING, CLIENT_SECRET, REACT_APP_LOGIN, REACT_APP_REGISTER, REACT_APP_LOGOUT, REACT_APP_AUTH_CHECK, REACT_APP_EMPLOYEE_INFO, REACT_APP_EDIT_EMPLOYEE_INFO, REACT_APP_ADD_CUSTOMER, REACT_APP_ALL_CUSTOMERS, REACT_APP_DELETE_CUSTOMER } = process.env

const stripe = require("stripe")(CLIENT_SECRET);


const app = express()
app.use( express.static( `${__dirname}/../build` ) );
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
app.post(REACT_APP_REGISTER, authCtrl.register)
app.post(REACT_APP_LOGIN, authCtrl.login)
app.get(REACT_APP_LOGOUT, authCtrl.logout) 
app.get(REACT_APP_AUTH_CHECK, authCtrl.checkMe)
app.get(REACT_APP_EMPLOYEE_INFO, authCtrl.getEmployeeInfo)
app.put(REACT_APP_EDIT_EMPLOYEE_INFO, authCtrl.editEmployeeInfo)

//customer 
app.post(REACT_APP_ADD_CUSTOMER, infoCtrl.addCustomerInfo)
app.get(REACT_APP_ALL_CUSTOMERS, middleware.adminsOnly, infoCtrl.getAllCustomerInfo)
app.delete(REACT_APP_DELETE_CUSTOMER, infoCtrl.deleteCustomerInfo)

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