const db=require('../models');

const courses=db.courses;   

const coursedata=async(req,res)=>{
    let info={
        coursename:req.body.coursename,
        year:req.body.year,
        userid:req.body.userid,
    }

    const data=await courses.create(info)
    res.send(data);
}
module.exports={
    coursedata
}