var CryptoJS = require("crypto-js");

dbContext.User.count().then(c => {
    if(c == 0){
        dbContext.User.create(
            {
                username : "admin",
                password : CryptoJS.AES.encrypt('123', 'secret').toString()
            }
        )
    }
})

dbContext.Building.count().then(c => {
    if(c == 0){
        dbContext.Building.create(
            {
               name: "hackaton",
               rooms: [{name: "Cafeteria", number: 1}, {name: "Laboratorio", number: 2}]
            },
            {
                include: [{
                    model : dbContext.Room,
                    as : 'rooms'
                }]
            }
        )
    }
})

