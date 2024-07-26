function getUserInfo(user){
    return{
        usuario: user.usuario,
        id: user.id
    };
}

module.exports = getUserInfo;