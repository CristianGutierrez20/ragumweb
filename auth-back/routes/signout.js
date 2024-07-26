const getTokenFromHeader = require("../auth/getToken");
const Token = require("../esquema/token");
const { jsonResponse } = require("../lib/jsonResponse");

const router = require("express").Router();

router.delete("/", async (req,res)=>{
    try {
        const refreshToken = getTokenFromHeader(req.headers);
        if(refreshToken){
            await Token.findOneAndDelete({token: refreshToken});
            res.status(200).json(jsonResponse(200,{message: "Token eliminado"}));
        }
    } catch (error) {
        res.status(500).json(jsonResponse(500,{message: "Server error"}));
    }
});

module.exports = router;
