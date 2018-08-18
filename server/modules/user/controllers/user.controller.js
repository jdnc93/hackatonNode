
var CryptoJS = require("crypto-js");

exports.login = function (req, res) {
    let usu = req.body;
    dbContext.User.find({where : {username : usu.username}}).then(user =>{
        if(!user){
            res.json(false);
            return 
        }
        user = user.toJSON();
        let pass = CryptoJS.AES.decrypt(user.password, 'secret');
        res.json(pass.toString(CryptoJS.enc.Utf8) === usu.password);
    }).catch(error =>{
        console.log(error);
        res.status(400).send(error);
    })
    
};
