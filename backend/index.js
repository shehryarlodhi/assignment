// const express = require("express"); 

// const cors = require("cors"); 

// const productModel = require("./getProduct"); 
// const placeorderModel = require("./placeorderModel"); 

// const app = express()

// const mongoose = require("mongoose"); 

// mongoose.connect("mongodb+srv://mirzasheraz:mirza123@cluster0.tryltpz.mongodb.net/Assignment01?retryWrites=true&w=majority");

// app.use(cors())
// app.use(express.json()); 

// app.listen(3001, () => {

//     console.log("server runs perfectly"); 
// })




// app.get("/getall",(req, res)=>
// {

//     productModel.find({},(err,result)=>{

//         if(err){
//             res.json(err); 
//         }
//         else{
//             res.json(result); 
//         }
//     })
// })



// app.post("/confirmedorder", async(req, res)=>{


//     try{
//         const customer = req.body;
//         const addNew = new placeorderModel(customer);
//         await addNew.save(); 
//         res.json(customer);  
//     }catch(err){
//         console.log(err);
//     }
// })
