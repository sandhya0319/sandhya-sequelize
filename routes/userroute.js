const usercontroller=require('../controllers/usercontroller.js');

const router=require('express').Router();

router.post('/adduser',usercontroller.adduser);

router.get('/getuser',usercontroller.selectuser);

router.put('/:id',usercontroller.updateuser);




module.exports=router;