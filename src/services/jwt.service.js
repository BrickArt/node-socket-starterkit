const JWT = require("jsonwebtoken");

const SAULT = process.env.JWT_SAULT;

module.exports = {
    parseJwtToken
};

async function parseJwtToken(token) {
    return JWT.verify(token, SAULT, (err, decoded) => {
        if(err && !decoded) return null
        return decoded.i;
    });
}