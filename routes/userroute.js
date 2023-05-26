const usercontroller=require('../controllers/usercontroller.js');

const router=require('express').Router();

router.post('/adduser',usercontroller.adduser);


module.exports=router;