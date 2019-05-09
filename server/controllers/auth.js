const bcrypt = require('bcryptjs');

module.exports = {
    login: async (req, res)  => {
        const { email, password } = req.body
        const db = req.app.get('db')

        const foundUser = await db.loginUser({email})
        const user = foundUser[0]

        if(!user) {
            res.status(418).send('user not found please register before logging in')
        }

        const isAuthenticated = bcrypt.compareSync(password, user.hash)
        if(!isAuthenticated) {
            res.status(418).send('wrong password buddy')
        }

        delete user.hash

        req.session.user = user
        res.status(200).send(req.session.user)
    },

    register: async (req, res) => {
        const {firstname, lastname, username, email, password, phone} = req.body
        const db = req.app.get('db')

        let result = await db.get_user({username})
        const existingUser = result[0]
        if(existingUser) {
            return res.status(401).send('this username already exits')
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt)

        const registeredUser = await db.registerUser({firstname, lastname, username, email, hash, phone})
        console.log(2222222, registeredUser)
        const user = registeredUser[0]

        delete user.hash

        req.session.user = user
        res.status(200).send(req.session.user)
    },

    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },
    
    checkMe: (req, res) => {
        if(req.session.user) {
            res.status(200).send(req.session.user)
        } else { res.sendStatus(403) }
    },

    getEmployeeInfo: (req, res) => {
        const db = req.app.get('db')
        const {login_id} = req.session.user
        // console.log('req.session', req.session)
        // console.log('req.body', req.body)
        // console.log(login_id)

        db.getSingleEmployee({login_id}).then( response => {
            res.status(200).send(response)
        })
    },

    editEmployeeInfo: async (req, res) => {
        const db = req.app.get('db')
        const { firstname, lastname, username, email, newPassword } = req.body
        const {id} = req.params
        console.log(req.body)
        console.log(req.params)
        // const {hash} = req.session.user

        const saltNewPassword = bcrypt.genSaltSync(10);
        const hashNewPassword = bcrypt.hashSync(newPassword, saltNewPassword)

        db.editEmployeeInfo({id, firstname, lastname, username, email, hashNewPassword}).then( info => {
            res.status(200).send(info)
        })
    }
}