const teamcontroller=require("../controllers/teamcontroller");

const router=require('express').Router();

router.post('/adddata',teamcontroller.insertdata);

module.exports=router;