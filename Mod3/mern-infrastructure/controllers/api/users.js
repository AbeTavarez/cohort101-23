const User = require('../../models/User');
const jwt = require('jsonwebtoken');

// create a new user in the db
async function create(req, res) {

    try {
        const user = await User.create(req.body);
        const token = createJWT(user);
        res.json(token);

    } catch (error) {
        res.status(400).json(error);
    }
}



// helper function to create a jwt token
function createJWT(user) {
    return jwt.sign({user}, process.env.SECRET, {expiresIn: '24h'})
}



module.exports = {
    create
}