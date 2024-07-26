const Usuario = require("../esquema/user");
const { jsonResponse } = require("../lib/jsonResponse");
const router = require("express").Router();
const getUserInfo = require("../lib/getUserInfo");

router.post("/",async(req, res)=>{
    const {usuario,contraseña} = req.body;
   
    if(!!!usuario || !!!contraseña){
        return res.status(400).json(jsonResponse(400,{
            error: "Campos vacios",
        }));
    }

    const user = await Usuario.findOne({usuario});
    if (user){
        const correctPass = await user.comparePassword(contraseña, user.contraseña);
        if(correctPass){
            const accessToken = user.createAccessToken();
            const refreshToken = await user.createRefreshToken();

            res
            .status(200)
            .json(
              jsonResponse(200,
                {user: getUserInfo(user),
                 accessToken,
                 refreshToken})
            );

        }
        else{
            res.status(400).json(
                jsonResponse(400,{
                    error: "Usuario o Contraseña Incorrecta"
                })
            );
        }
    }
    else{
        res.status(400).json(
            jsonResponse(400,{
                error: "Usuario no encontrado"
            })
        );
    }
});

module.exports = router;