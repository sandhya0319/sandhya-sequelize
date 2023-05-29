const { where } = require("sequelize");
const db = require("../models");

const users = db.user;
const userdetail = db.userdetail;
console.log("====", userdetail);

//insert in both tables
const addusers = async (req, res) => {
  const t = await db.sequelize.transaction();
  try {
    //console.log("kk", req.body);
    let data = await users.create(
      {
        // firstName: "anya",
        // lastName: "abc",
        // email: "abc@gamil.com",

        // userdetail: {
        //   education: "mca",
        //   salary: 3456,
        // },
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,

        userdetail: {
          education: req.body.userdetail.education,
          salary: req.body.userdetail.salary,
        },
      },
      { include: { model: userdetail } },
      { transaction: t }
    );
    res.send(data);
    await t.commit();
  } catch (error) {
    await t.rollback();
    console.log(error);
  }
};

//select from both tables
const selectusers = async (req, res) => {
  const t = await db.sequelize.transaction();
  try {
    const displayusers = await users.findAll({
      include: [
        {
          model: userdetail,
          // attributes:[
          //     'salary','education'
          // ]
        },
      ],
      where: { id: 38 },
    });
    res.send(displayusers);
    await t.commit();
  } catch (error) {
    await t.rollback();
    console.log(error);
  }
};

//update
//how we update in both tables
const updateusers = async (req, res) => {
  //const id=req.query.id;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const education = req.body.userdetail.education;
  const salary = req.body.userdetail.salary;

  const t = await db.sequelize.transaction();
  try {
    const updatedata = await users.update({
      where: { id: 38 },
      firstName: firstName,
      lastName:lastName,
      email,
      userdetail: {
        education,
        salary,
      },
      //   include: [{ model: userdetail }],
    });
    res.send(updatedata);
    await t.commit();
  } catch (error) {
    await t.rollback();
    console.log(error);
  }
};

//delete

const deleteusers = async (req, res) => {
  const id = req.params.id;
  const t = await db.sequelize.transaction();
  try {
    const data = await users.destroy({ where: { id: id } });
    res.send("record deleted");
    await t.commit();
  } catch (error) {
    await t.rollback();
    console.log(error);
  }
};

module.exports = {
  addusers,
  selectusers,
  updateusers,
  deleteusers,
};
