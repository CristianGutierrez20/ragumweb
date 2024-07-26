const jwt  = require("jsonwebtoken");


function verifyAccessToken(token){
    return jwt.verify(token, process.env.access_Token_Secret);
}

function verifyRefreshToken(token){
    return jwt.verify(token, process.env.refresh_Token_Secret);
}

module.exports = {verifyAccessToken, verifyRefreshToken};