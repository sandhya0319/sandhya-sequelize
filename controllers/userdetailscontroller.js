const db=require('../models');

const userdetails=db.userdetails;

const userdetailsdata=async(req,res)=>{
    let info={
        education:req.body.education,
        salary:req.body.salary,
        userid:req.body.userid,
    }
    const details=await userdetails.create(info);
    res.send(details);

}
module.exports={
    userdetailsdata
}