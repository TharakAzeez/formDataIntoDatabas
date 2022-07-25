let repository=require('../repository/loginRepository');

let login=async(req,res)=>
{
    console.log("controller works");
    let client=req.body;
    
    try{
        if(Object.keys(client)!=0)
        {

            console.log("client information",client);
            let result=await clientRepository.storeClientInfo(client);
            console.log("result",result)

        }
        else{res.send("please insert the data")}

    }
    catch(Ex){res.send(Ex);}


}
module.exports={login};

