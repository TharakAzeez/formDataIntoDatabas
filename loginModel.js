let mongoose=require('mongoose');
let loginSchema=mongoose.Schema({
    UserEmail:String,
    Password:String


});


let loginModel= mongoose.model("login",loginSchema);
module.exports=loginModel;