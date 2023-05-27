const db = require("../models");

const user = db.User;
const Userdetails = db.Userdetails;
const course = db.courses;
console.log("======", course);
const adduser = async (req, res) => {
  const transaction = await db.sequelize.transaction();
  try {
    const userdata = await user.create(
      {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        city: req.body.city,
        state: req.body.state,
    //     firstname: "fkghjhdkgj",
    //     lastname: "fkghjhdkgj",
    //     email: "fkghjhdkgj",
    //     city: "fkghjhdkgj",
    //     state: "dfgdfg",
    //     courses: {
    //       coursename: "dfkjhdk",
    //       year: 2013,
    //     },
    //   },
    //   { include: course  },
    //   { transaction: transaction }
      }
    );
    res.send(userdata);
    await transaction.commit();
  } catch (error) {
    console.log(error);
    await transaction.rollback();
  }
};

const selectuser = async (req, res) => {
  try {
    const data = await user.findAll({});
    res.send(data);
    //transaction.commit();
  } catch (error) {
    console.log(error);
    //transaction.rollback();
  }
};

const updateuser = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await user.update(req.body, { where: { id: id } });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  adduser,
  selectuser,
  updateuser,
};
