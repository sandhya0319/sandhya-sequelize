const express=require('express')

const app=express();


app.use(express.json());

app.use(express.urlencoded({extended:true}))

//routes

const router=require('./routes/userrouter.js')
app.use('/user',router);

//test api
app.get('/',(req,res)=>{
    res.json({message:'hello i am sandhya'})
})

const PORT=process.env.PORT || 5555;

app.listen(PORT,()=>{
    console.log(`Server listen at port ${PORT}`)
})