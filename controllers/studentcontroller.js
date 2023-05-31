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
      where: { id: 5 },
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
  const id=req.params.id;
  const userid=req.params.userid;
  const courseid=req.params.id;
  // console.log(id,"idddd");
  // console.log(userid,"useridddddd");
  try {
    await student.update(req.body,{where:{id:id}});
    //if  update particular course

    //await course.update(req.body.course,{where:{userid:userid,id:courseid}});

    await course.update(req.body.course,{where:{userid:userid}});

  
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
