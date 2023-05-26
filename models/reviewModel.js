const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports=(sequelize,DataTypes)=>{

    const Review=sequelize.define("review",{
        rating:{
            type:DataTypes.STRING,
            allowNull:false
        },
        comment:{
            type:DataTypes.TEXT,
        }
    })

return Review   

}