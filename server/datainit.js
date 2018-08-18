var CryptoJS = require("crypto-js");

dbContext.User.count().then(c => {
    dbContext.User.create(
        {
            username : "admin",
            password : CryptoJS.AES.encrypt('123', 'secret').toString()
        }
    )
})
