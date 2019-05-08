const bcrypt = require('bcryptjs');

module.exports = {
    addCustomerInfo: async (req, res) => {
        const { 
            firstname, lastname, company, home_phone, mobile_phone, email, shipping_addy, shipping_city, shipping_state, shipping_zipcode, shipping_country, billing_addy, billing_city, billing_state, billing_zipcode, billing_country, card, expire, code 
        } = req.body
        const db = req.app.get('db')

        db.addCustomer({firstname, lastname, company, home_phone, mobile_phone, email, shipping_addy, shipping_city, shipping_state, shipping_zipcode, shipping_country, billing_addy, billing_city, billing_state, billing_zipcode, billing_country, card, expire, code })
        .then( response => {
            res.status(200).send(response)
        })
    }
}