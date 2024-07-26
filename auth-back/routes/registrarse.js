const express = require("express");
const { jsonResponse } = require("../lib/jsonResponse");
const Usuario = require("../esquema/user");
const router = require("express").Router();

router.post("/",async (req, res)=>{
    const {usuario,correo,contraseña} = req.body;
    if(!usuario || !correo || !contraseña){
        return res.status(400).json(jsonResponse(400,{
            error: "Campos vacios",
        }));
    }
    //Crear usuario
    try{
    const user = new Usuario();
    const existUser = await user.usernameExist(usuario);
    const existCorreo = await user.correoExist(correo);
        if(existUser|| existCorreo){
            return res.status(409).json(
            jsonResponse(409, {
                error: "El usuario o Correo ya existen"
            })
            );
        }
        else{
            const user =  new Usuario({usuario,correo,contraseña});
            user.save();
            res
            .json(jsonResponse(200,{message: "Usuario Creado correctamente"}));
        }
    }catch(error){
        res.status(500).json(
            jsonResponse(500,{
                error: "Error al crear usuario",
            })
        );
    }

});

module.exports = router;