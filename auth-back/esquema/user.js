const  Mongoose  = require("mongoose");
const bcrypt = require('bcrypt');
const { generateAccessToken, generateRefreshToken } = require("../auth/generateTokens");
const Token = require("./token");
const getUserInfo = require("../lib/getUserInfo");

const Usuario = new Mongoose.Schema({
    id:{type: Object},
    usuario:{type: String, required: true, unique: true},
    correo: {type: String, required: true, unique: true},
    contraseña: {type: String, required: true},
});

Usuario.pre('save', function(next){
    if(this.isModified('contraseña') || this.isNew){
        const document = this;
        bcrypt.hash(document.contraseña,10, (err,hash)=>{
            if(err){
                next(err);
            }
            else{
                document.contraseña = hash;
                next();
            }
        });
    }
    else{
        next();
    }
});

Usuario.methods.usernameExist = async function(usuario){
    const result = await Mongoose.model("Usuario").findOne({usuario});
    return !!result;
};

Usuario.methods.comparePassword = async function (contraseña, hash){
    const same  = await bcrypt.compare(contraseña, hash);
    return same;
};
Usuario.methods.correoExist = async function(correo){
    const result = await Mongoose.model("Usuario").findOne({correo});
    return !!result;
};
Usuario.methods.createAccessToken = function (){
    return generateAccessToken(getUserInfo(this));
};

Usuario.methods.createRefreshToken = async function (){
    const refreshToken = generateRefreshToken(getUserInfo(this));
    try {
        await new Token({token: refreshToken}).save();
        return refreshToken;
    } catch (error) {
        console.log(error);
    }
};

module.exports = Mongoose.model("Usuario", Usuario);