const express=require('express')
//const cors=require('cors')

const app=express();

// var coreOptions={
//     origin:'http://localhost:8080'
// }

//middlewares
//app.use(cors(coreOptions));

app.use(express.json());

app.use(express.urlencoded({extended:true}))

//routes

const router=require('./routes/productrouter.js')
app.use('/products/',router);


//test api
app.get('/',(req,res)=>{
    res.json({message:'hello i am sandhya'})
})

const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server listen at port ${PORT}`)
})
