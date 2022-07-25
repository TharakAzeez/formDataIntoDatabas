let clientModel=require('../model/loginModel');
//write function to insert database into mongoDb;
let storeClientInfo=(result)=>
{
    console.log("inserted into database seccessfully");
    return loginModel.insertMany(result);
    
    
};

module.exports={storeClientInfo};