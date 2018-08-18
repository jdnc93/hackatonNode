
exports.getBuilding = function (req, res) {
    dbContext.Building.find({where : {name:"hackaton"}, include:[{model: dbContext.Room, as: 'rooms'}]}).then(building =>{
        dbContext.Person.findAll().then(persons =>{
            let result = {
                building : building,
                persons : persons
            }
            res.json(result);
        })
    }).catch(error =>{
        console.log(error);
        res.status(400).send(error);
    })
    
};