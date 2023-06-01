const teamcontroller=require("../controllers/teamcontroller");

const router=require('express').Router();

router.post('/adddata',teamcontroller.insertdata);
router.get('/displaydata',teamcontroller.displaydata);
router.get('/:id',teamcontroller.deletedata);
router.get('/displaydata/:id',teamcontroller.displaycondition);

module.exports=router;