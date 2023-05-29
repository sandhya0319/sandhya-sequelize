const usercontroller=require('../controllers/usercontroller.js');

const router=require('express').Router();

router.post('/adduser',usercontroller.addusers);
router.get('/displayuser',usercontroller.selectusers);
router.put('/displayuser',usercontroller.updateusers);
router.get('/displayuser/:id',usercontroller.deleteusers);


module.exports=router;