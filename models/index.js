const dbconfig=require('../config/dbconfig.js')

const {Sequelize, DataTypes}=require('sequelize')

const sequelize=new Sequelize(
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,{
        host: dbconfig.HOST,
        dialect:dbconfig.dialect,
        operatorsAliases:false,

        pool:{
            max:dbconfig.pool.max,
            min:dbconfig.pool.min,
            acquire:dbconfig.pool.acquire,
            idle:dbconfig.pool.idle,
            

        }

    }
)

sequelize.authenticate()
.then(()=>{
    console.log("connected seq...");
})
.catch(err=>{
    console.log("error"+err)
})

const db={}

db.Sequelize=Sequelize //package
db.sequelize=sequelize //object or instance

db.products=require('./productModel.js')(sequelize,DataTypes);
db.reviews=require('./reviewModel.js')(sequelize,DataTypes);

db.sequelize.sync({force:false})
.then(()=>{
    console.log("yes re-syync done");
})

module.exports=db;