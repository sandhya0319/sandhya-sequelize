const { sequelize } = require("../models");
const db = require("../models");

const team = db.team;
const player = db.player;
const teamplayer = db.teamplayer;

const insertdata = async (req, res) => {
    //console.log("====",{...req.body});
  const t = await db.sequelize.transaction();
  try {
    const data = await team.create(
      { ...req.body },
      { include: { model: player } }
    );
    res.send(data);
    await t.commit();
  } catch (error) {
    res.send(error);
    await t.rollback();
  }
};

const displaydata=async(req,res)=>{
    const t = await db.sequelize.transaction();
    try {
        const data=await team.findAll({
            include:{
                model:player
            },
        });
        res.send(data);
        await t.commit();

    } catch (error) {
        res.send(error);
        await t.rollback();
    }

}

const deletedata=async(req,res)=>{
    const id=req.params.id;
    const t = await db.sequelize.transaction();
    try {
        await team.destroy({where:{id:id}});
        t.commit();
    } catch (error) {
        res.send(error);
        await t.rollback();
    }
}

const displaycondition=async(req,res)=>{
    const t=await db.sequelize.transaction();
    const id=req.params.id;

    try {
        const data=await team.findAll({include:{model:player}},{where:{id:id}});
        res.send(data);
    } catch (error) {
        res.send(error);
        await t.rollback();
    }
}
// const updatedata=async(req,res)=>{
//     try {
//         const data=await team.update({
//             include:{
//                 model:player,
//             }
//         });
//         res.send(data);
//     } catch (error) {
        
//     }

// }

module.exports = {
  insertdata,
  displaydata,
  deletedata,
  displaycondition,
};
