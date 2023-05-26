module.exports=(sequelize,DataTypes)=>{
    const Product=sequelize.define("Product",{
    name:{
            type:DataTypes.STRING,
            allowNull:false,
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    published:{
        type:DataTypes.BOOLEAN,
    },
    
},{
    
  timestamps: false
})
return Product
}  
