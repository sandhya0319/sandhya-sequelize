const db=require('../models');

//create main model

const Product=db.products;
//const Review=db.reviews;

//create product
const addProduct=async(req,res)=>{

    let info={
        name:req.body.name,
        price:req.body.price,
        description:req.body.description,
        published:req.body.published?req.body.published:false
    }
    console.log("infoo",info);
    const product=await Product.create(info)
    res.send(product);
    //console.log(product,"ppppp");

}

//all
const getAllProducts=async(req,res)=>{
    const AllProducts=await Product.findAll({
        // attributes:[
        //     'name',
        //     'price',
        // ]
    });
    res.send(AllProducts);
}

//single
const getSingleProduct=async(req,res)=>{
    //const id=req.params.id;
    const SingleProduct=await Product.findOne({ where:{name:"pen"}});
    res.send(SingleProduct);

}

//update
const UpdateProduct=async(req,res)=>{
    const id=req.params.id;
    const updatep=await Product.update(req.body,{where:{id:id}});
    res.send(updatep);
}

//deletesingle
const DeleteProduct=async(req,res)=>{
    const id=req.params.id;
     await Product.destroy({where:{id:id}});
     res.send("record deleted");
    
}

module.exports={
    addProduct,
    getAllProducts,
    getSingleProduct,
    UpdateProduct,
    DeleteProduct
}