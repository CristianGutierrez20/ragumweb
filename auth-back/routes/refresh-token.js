const { json } = require("express");
const Token = require("../esquema/token");
const getTokenFromHeader = require("../auth/getToken");
const { jsonResponse } = require("../lib/jsonResponse");
const { verifyRefreshToken } = require("../auth/verifyTokens");
const { generateAccessToken } = require("../auth/generateTokens");

const router = require("express").Router();
router.post("/", async (req, res)=>{
    const refreshToken = getTokenFromHeader(req.headers);
    if(refreshToken){
       try {
            const found = await Token.findOne({token: refreshToken});
            if(!found){
                return res.status(401).send(jsonResponse(401,{error: "NoAutorizado"}));
            }

            const payload  = verifyRefreshToken(found.token);
            if(payload){
                const accessToken = generateAccessToken(payload.user);
                return res.status(200).json(jsonResponse(200,{accessToken}));
            }
            else{
                return res.status(401).send(jsonResponse(401,{error: "NoAutorizado"}));
            }
       } catch (error) {
        return res.status(401).send(jsonResponse(401,{error: "NoAutorizado"}));
       }
    }
    else{
        res.status(401).send(jsonResponse(401,{error: "NOautorizado"}));
    }
    res.send("refresh-token");
});

module.exports = router;