const bcrypt = require('bcryptjs');

module.exports = {
    addCustomerInfo: async (req, res) => {
        // console.log('does this even fire off')
        // console.log(req.body)
        const { 
            firstname, lastname, company, home_phone, mobile_phone, email, shipping_addy, shipping_city, shipping_state, shipping_zipcode, shipping_country, billing_addy, billing_city, billing_state, billing_zipcode, billing_country 
        } = req.body
        const db = req.app.get('db')
        // console.log('this is req.body from add',req.body)

        const billingAddress = await db.addBillingAddress({billing_addy, billing_city, billing_state, billing_zipcode, billing_country})
        // console.log('billingAddress', billingAddress)
        const billing_id = billingAddress[0].address_id
        // console.log('billing id', billing_id)

        const shippingAddress = await db.addShippingAddress({shipping_addy, shipping_city, shipping_state, shipping_zipcode, shipping_country})
        // console.log('shippingAddress', shippingAddress)
        const shipping_id = shippingAddress[0].address_id
        // console.log('shipping_id', shipping_id)

        // const saltCard = bcrypt.genSaltSync(10)
        // const hashCard = bcrypt.hashSync(card, saltCard)
        // const saltExpire = bcrypt.genSaltSync(10)
        // const hashExpire = bcrypt.hashSync(expire, saltExpire)
        // const saltCode = bcrypt.genSaltSync(10)
        // const hashCode = bcrypt.hashSync(code, saltCode)

        // const privateInfo = await db.addPrivate({hashCard, hashExpire, hashCode})
        // const private_id = privateInfo[0].private_id
        // console.log('private id', private_id)

        const fullCustomerInfo = await db.addCustomer({ firstname, lastname, company, home_phone, mobile_phone, email, billing_id, shipping_id })
        // console.log('fullCustomerInfo', fullCustomerInfo)

        res.status(200).send(fullCustomerInfo)
    },

    getAllCustomerInfo: (req, res) => {
        const db = req.app.get('db')

        db.getCustomers().then( response => {
            res.status(200).send(response)
        })
    },

    deleteCustomerInfo: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.deleteCustomer({id}).then( response => {
            res.status(200).send(response)
        }). catch(err => console.log('delete button didnt work you idiot', err))
    }
}