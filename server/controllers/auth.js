const bcrypt = require('bcryptjs');

module.exports = {
    login: async (req, res)  => {

    },
    register: async (req, res) => {
        const {firstname, lastname, username, email, password} = req.body
        const db = req.app.get('db')

        let result = await db.get_user({username})
        const existingUser = result[0]
        if(existingUser) {
            res.status(401).send('this username already exits')
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt)

        const registeredUser = await db.registerUser({firstname, lastname, username, email, hash})
        const user = registeredUser[0]

        delete user.hash

        req.session.user = user
        res.status(200).send(req.session.user)
    },
    logout: (req, res) => {
        
    }
}