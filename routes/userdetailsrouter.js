const userdetailscontroller=require('../controllers/userdetailscontroller.js');

const router=require('express').Router();

router.post('/adduserdetail',userdetailscontroller.userdetailsdata);

module.exports=router;