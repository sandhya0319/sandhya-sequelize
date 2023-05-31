const db=require('../models');

const team=db.team;
const player=db.player;
const teamplayer=db.teamplayer;

const insertdata=async(req,res)=>{
    const t=await db.sequelize.transaction();
    try {
        const data=await team.create({...req.body},
            {include:{
                model:player
            },model:teamplayer}
            
            )
            res.send(data);
            await transaction.commit();
    } catch (error) {
        res.send(error);
        await transaction.rollback();
    }
}

module.exports={
    insertdata,
}