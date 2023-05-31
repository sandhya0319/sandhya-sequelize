const express=require('express')

const app=express();


app.use(express.json());

app.use(express.urlencoded({extended:true}))

//routes

const router=require('./routes/studentrouter.js')
app.use('/student',router);

//test api
app.get('/',(req,res)=>{
    res.json({message:'hello'})
})

const PORT=process.env.PORT || 5454;

app.listen(PORT,()=>{
    console.log(`Server listen at port ${PORT}`)
})