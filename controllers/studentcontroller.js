const db = require("../models");

const student = db.student;
const course = db.course;
//console.log("====",course);

const addstudents = async (req, res) => {
  const transaction = await db.sequelize.transaction();
  try {
    let data = await student.create(
      {
        // name:req.body.name,
        // rollno:req.body.rollno,
        // address:req.body.address,
        // name: "abc",
        // rollno: 44,
        // address: "dfjkdh",
        ...req.body},
        {include:{
          model:course
        },
      }
    );

    //     courses: [
    //       {
    //         coursename:req.body.courses[0].coursename,
    //         year:req.body.courses[0].year
    //         // coursename: "bba",
    //         // year: 2020,
    //       },
    //       {
    //         coursename:req.body.courses[1].coursename,
    //         year:req.body.courses[1].year
    //         // coursename: "bnbn",
    //         // year: 2023,
    //       },
    //     ],
    //   },
    //   { include: { model: course } },
    //   { transaction: transaction }
    // );
    res.send(data);
    await transaction.commit();
  } catch (error) {
    console.log(error);
    await transaction.rollback();
  }
};


const displaystudents = async (req, res) => {
  const transaction = await db.sequelize.transaction();
  try {
    const data = await student.findAll({
      include: [
        {
          model: course,
        },
      ],
      where: { id: 1 },
    });
    // const data=await student.findAll({});
    res.send(data);
    await transaction.commit();
  } catch (error) {
    console.log(error);
    await transaction.rollback();
  }
};

const updatestudents=async(req,res)=>{
  const transaction = await db.sequelize.transaction();
  try {
    const id=req.params.id;
    const userid=req.params.userid;
    console.log(id,"idddd");
    console.log(userid,"useridddddd");
    
    await student.update(req.body,{where:{id:id}});
  
    await course.update(req.body.course,{where:{id:userid}});

     //res.send({data,updatedata});
    //  req.send("updated")
    await transaction.commit();

  } catch (error) {
    console.log(error);
    res.send(error);
    await transaction.rollback();
  }
}
module.exports = {
  addstudents,
  displaystudents,
  updatestudents,
};
