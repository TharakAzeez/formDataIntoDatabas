let express=require('express');
let controller=require('../controller/loginController');
let router=express.Router();



router.post('/register',controller.login);
console.log("loginRouter 2works")



module.exports=router;

