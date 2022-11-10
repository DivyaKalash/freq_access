const User = require("../models/user");
const AuthUser = require("../models/authusers");

function getregisteredUsers(user){
    const userList = [];
    
            for(let use of user){
                userList.push({
                    _id: use._id,
                name: use.name
                });
                
            }
            return userList;
        }

exports.registeredUsers = (req, res) => {
    User.find({})
    .exec((error, use) => {
        if(error) return res.status(400).json({ error });
        if(use){
            const userList = getregisteredUsers(use);
            return res.status(200).json({ userList });
        }
    })
}

exports.grantAccess = (req, res) => {
    const {name, userId} = req.body;
    if(!name || !userId){
        return res.status(422).json({error: "Please make sure all fields are filled."})
    }

    AuthUser.findOne({authuser_id: userId})
    .then((saveduser) => {
        if(saveduser){
            return res.status(422).json({error:"User already get access."});
        }
        const authUser = new AuthUser({
            name: name,
            authuser_id: userId
        })
        authUser.save()
        .then(authuser =>{
            res.json({message: "Successfully added hurray!"})
        }).catch(err=>{
            console.log(err);
        })
    })


}

exports.checkAccess = (req, res) =>{
    const {id} = req.body;
    if(!id){
        return res.status(422).json({error: "Please make sure all fields are filled."})
    }
    AuthUser.findOne({authuser_id: id})
    .then((saveduser)=>{
        if(saveduser){
        return res.status(200).json({msg: "Access granted"});
    }
    return res.status(201).json({msg: "Access denied"});
}
)}