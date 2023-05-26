const db=require('../models')

const user=db.users;

const adduser=async(req,res)=>{
    let info={
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        city:req.body.city,
        state:req.body.state,
    }
     const userdata=await user.create(info)
     res.send(userdata);
}
module.exports={
    adduser,
}