

exports.createPerson = function (req, res) {
 
    let newPerson = {
        image : req.body.image,
        faceId : req.body.faceId,
        number : req.body.number,
        building: req.body.building
    }
    console.log(newPerson);
    
    dbContext.Person.create(newPerson).then(person =>{
        res.json("La persona ha sido creada");
    }).catch(error =>{
        console.log(error);
        res.status(400).send(error);
    })
    
};

exports.editPerson = function (req, res) {
    let newPerson = {
        faceIds : req.body.faceIds,
        number : req.body.number,
        image: req.body.image,
        building: req.body.building
    }
    console.log(req.body);
    dbContext.Person.find({where: {faceId : newPerson.faceIds.map(x => x.faceId)}})
    .then(person =>{
        if(person){
            dbContext.Person.update({number : newPerson.number}, {where:{faceId : newPerson.faceIds.map(x => x.faceId)}}).then(() =>{
                res.json("La persona ha sido editada");
            })
        }else{
            dbContext.Person.create({faceId: newPerson.faceIds[0], number : newPerson.number,image : newPerson.image,  building : newPerson.building}).then(() =>{
                res.json("La persona ha sido editada");
            })
        }
    
    }).catch(error =>{
        console.log(error);
        res.status(400).send(error);
    })
};