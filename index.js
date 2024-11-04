import express from "express";
const app = express();


app.get("/" , (req , response)=>{
    response.send("api is working");
})

app.listen(3000, ()=>{
    console.log("server is running on 3000");
})  