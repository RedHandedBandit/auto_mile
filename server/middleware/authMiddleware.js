module.exports = {
    adminsOnly: (req, res, next) => {
        const {isadmin} = req.session.user

        if(!isadmin){
            res.status(403).send('you are not an admin')
        }
        next()
    }
}