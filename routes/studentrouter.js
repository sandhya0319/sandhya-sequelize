const studentcontroller=require('../controllers/studentcontroller');

const router=require('express').Router();

router.post('/addstudent',studentcontroller.addstudents);

router.get('/displaystudent',studentcontroller.displaystudents);

router.put('/:id/:userid',studentcontroller.updatestudents);

module.exports=router;