const coursecontroller=require('../controllers/coursecontroller.js');

const router=require('express').Router()

router.post('/addcourse',coursecontroller.coursedata)

module.exports=router;