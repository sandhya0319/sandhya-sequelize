const productController=require('../controllers/productController.js');

const router=require('express').Router();

router.post('/addProduct',productController.addProduct);
router.get('/getallproducts',productController.getAllProducts);


router.get('/',productController.getSingleProduct);
router.put('/:id',productController.UpdateProduct);
router.get('/:id',productController.DeleteProduct);



module.exports=router;